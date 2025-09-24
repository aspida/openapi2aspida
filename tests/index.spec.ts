import fs from 'fs';
import path from 'path';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import build from '../src';
import type { ConfigFile } from '../src/getConfig';

function readDirRecursive(dirPath: string): string[] {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .map((file) =>
      file.isDirectory()
        ? readDirRecursive(path.join(dirPath, file.name))
        : [path.join(dirPath, file.name)],
    )
    .reduce((acc, x) => acc.concat(x), []);
}

describe('cli test', () => {
  beforeAll(() => fs.mkdirSync('_samples'));
  afterAll(() => fs.promises.rmdir('_samples', { recursive: true }));

  test('main', () => {
    const configs: ConfigFile[] = require('../aspida.config.js');

    return Promise.all(
      configs.map(async (config) => {
        await build({ ...config, input: `_${config.input}` })[0];

        for (const filePath of readDirRecursive(config.input)) {
          expect(fs.readFileSync(`_${filePath}`, 'utf8')).toBe(
            fs
              .readFileSync(filePath, 'utf8')
              .replace(/\r/g, '')
              .replace(/\n\/\/ @ts-expect-error/g, ''),
          );
        }
      }),
    );
  });

  describe('includeDeprecated configuration', () => {
    beforeAll(async () => {
      const configExclude = {
        input: '_test-deprecated-exclude',
        outputEachDir: true,
        openapi: { inputFile: 'samples/deprecated-test.yml', includeDeprecated: false },
      };

      const configInclude = {
        input: '_test-deprecated-include',
        outputEachDir: true,
        openapi: { inputFile: 'samples/deprecated-test.yml', includeDeprecated: true },
      };

      await Promise.all([build(configExclude)[0], build(configInclude)[0]]);
    });

    afterAll(() => {
      fs.rmSync('_test-deprecated-exclude', { recursive: true });
      fs.rmSync('_test-deprecated-include', { recursive: true });
    });

    test('main', async () => {
      const excludeIndexContent = fs.readFileSync('_test-deprecated-exclude/test/index.ts', 'utf8');
      expect(excludeIndexContent).not.toContain('get:');
      expect(excludeIndexContent).toContain('post:');

      const includeIndexContent = fs.readFileSync('_test-deprecated-include/test/index.ts', 'utf8');
      expect(includeIndexContent).toContain('get:');
      expect(includeIndexContent).toContain('post:');

      const excludeTypesContent = fs.readFileSync(
        '_test-deprecated-exclude/@types/index.ts',
        'utf8',
      );
      expect(excludeTypesContent).not.toContain('deprecated_field');
      expect(excludeTypesContent).toContain('active_field');

      const includeTypesContent = fs.readFileSync(
        '_test-deprecated-include/@types/index.ts',
        'utf8',
      );
      expect(includeTypesContent).toContain('deprecated_field');
      expect(includeTypesContent).toContain('active_field');
    });
  });
});
