import fs from 'fs'
import getConfig from './getConfig'
import buildTemplate from './buildTemplate'
import writeRouteFile from './writeRouteFile'

export default (configs?: Parameters<typeof getConfig>[0]) =>
  getConfig(configs).map(async config => {
    if (!fs.existsSync(config.output)) {
      fs.mkdirSync(config.output)
    } else if (fs.readdirSync(config.output).length) {
      console.log(
        `fatal: destination path '${config.output}' already exists and is not an empty directory.`
      )
      return
    }

    const { baseURL, types, files } = await buildTemplate(config)

    writeRouteFile({
      config: {
        input: config.output,
        baseURL,
        outputEachDir: config.outputEachDir,
        trailingSlash: config.trailingSlash
      },
      types,
      files
    })
  })
