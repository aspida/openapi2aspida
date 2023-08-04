import fs from 'fs';
import buildTemplate from './buildTemplate';
import type { PartialConfig } from './getConfig';
import getConfig from './getConfig';
import writeRouteFile from './writeRouteFile';

export default (configs?: PartialConfig) => {
  return getConfig(configs).map(async config => {
    const outputDir = config.output;

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    } else if (fs.readdirSync(config.output).length) {
      console.log(`fatal: destination path '${outputDir}' is not an empty directory.`);
      return;
    }

    const { baseURL, types, files } = await buildTemplate(config);

    writeRouteFile({
      config: {
        input: config.output,
        baseURL,
        outputMode: config.outputMode,
        outputEachDir: config.outputEachDir,
        trailingSlash: config.trailingSlash,
      },
      types,
      files,
      outputDir,
    });
  });
};
