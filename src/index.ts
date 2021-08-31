import fs from 'fs'
import getConfig from './getConfig'
import buildTemplate from './buildTemplate'
import writeRouteFile from './writeRouteFile'
import outputFilePath from './outputFilePath'

/**
 * @param {string} outputdir 出力するディレクトリー
 * @param {Array<Object>} configs コンフィグ
 * */
export default (configs?: Parameters<typeof getConfig>[0], outputdir?: string) => {
  return getConfig(configs).map(async config => {
    console.log(`🚀 ~ file: index.ts ~ line 8 ~ returngetConfig ~ configs`, configs)
    const oustPutFilePath = outputFilePath({
      cliOutputPath: outputdir,
      InputFilepath: config.output
    })
    console.log('config.output', outputdir, config.output)
    console.log(
      `🚀 ~ file: index.ts ~ line 20 ~ returngetConfig ~ fs.existsSync(oustPutFilePath)`,
      fs.existsSync(oustPutFilePath)
    )
    if (!fs.existsSync(oustPutFilePath)) {
      // フォルダが存在しない
      fs.mkdirSync(oustPutFilePath)
    } else if (fs.readdirSync(config.output).length) {
      // フォルダが存在する
      console.log(
        `fatal: destination path '${oustPutFilePath}' already exists and is not an empty directory.`
      )
      return
    }

    const { baseURL, types, files } = await buildTemplate(config)

    writeRouteFile({
      config: {
        input: config.output,
        baseURL,
        outputMode: config.outputMode,
        outputEachDir: config.outputEachDir,
        trailingSlash: config.trailingSlash
      },
      types,
      files,
      outputDir: oustPutFilePath
    })
  })
}
