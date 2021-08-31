import fs from 'fs'
import { build, AspidaConfig } from 'aspida/dist/commands'

export default ({
  config,
  types,
  files,
  outputDir
}: {
  config: AspidaConfig
  types: string | null
  files: {
    file: string[]
    methods: string
  }[]
  outputDir?: string
}) => {
  console.log(
    `🚀 ~ file: writeRouteFile.ts ~ line 18 ~ { config,
  types,
  files,
  outputDir }`,
    config,
    types,

    outputDir
  )
  if (types) {
    fs.mkdirSync(`${outputDir}/@types`)
    fs.writeFileSync(`${outputDir}/@types/index.ts`, types, 'utf8')
  }

  files.forEach(p => {
    const fileName = p.file.pop()
    p.file.forEach((_d, i, dirList) => {
      const dirPath = `${outputDir}/${dirList.slice(0, i + 1).join('/')}`
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
      }
    })

    fs.writeFileSync(`${outputDir}/${p.file.join('/')}/${fileName}.ts`, p.methods, 'utf8')
  })
  const buildConfig = config
  buildConfig.input = outputDir || config.input
  console.log(`🚀 ~ file: writeRouteFile.ts ~ line 46 ~ config`, config)
  build(buildConfig)
}
