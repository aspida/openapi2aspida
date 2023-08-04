import { getConfigs } from 'aspida/dist/cjs/getConfigs';
import minimist from 'minimist';
import build from '.';
import type { ConfigFile } from './getConfig';

export const run = (args: string[]) => {
  const argv: Record<string, string | undefined> = minimist(args, {
    string: ['version', 'input', 'config'],
    alias: { v: 'version', i: 'input', c: 'config', o: 'outputdir' },
  });

  if (argv.version !== undefined) {
    console.log(`v${require('../package.json').version}`);
    return;
  }

  if (!argv.config) {
    build(
      argv.input ? { openapi: { inputFile: argv.input, outputDir: argv.outputDir } } : undefined
    );
    return;
  }

  const configs: ConfigFile[] = getConfigs(argv.config);

  if (configs.length > 1) {
    build(configs);
    return;
  }

  const config = configs[0];
  const inputFile = argv.input ?? config.openapi?.inputFile;

  if (!inputFile) return;

  build({
    ...config,
    openapi: {
      ...config.openapi,
      inputFile,
      outputDir: argv.outputdir ?? config.openapi?.outputDir,
    },
  });
};
