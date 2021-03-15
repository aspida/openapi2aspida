import fs from 'fs'
import { build, AspidaConfig } from 'aspida/dist/commands'

export default ({
  config,
  types,
  files
}: {
  config: AspidaConfig
  types: string | null
  files: {
    file: string[]
    methods: string
  }[]
}) => {
  if (types) {
    fs.mkdirSync(`${config.input}/@types`)
    fs.writeFileSync(`${config.input}/@types/index.ts`, types, 'utf8')
  }

  files.forEach(p => {
    const fileName = p.file.pop()
    p.file.forEach((_d, i, dirList) => {
      const dirPath = `${config.input}/${dirList.slice(0, i + 1).join('/')}`
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
      }
    })

    fs.writeFileSync(`${config.input}/${p.file.join('/')}/${fileName}.ts`, p.methods, 'utf8')
  })

  build(config)
}
