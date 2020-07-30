import path from 'path'
import { OpenAPI } from 'openapi-types'
import { AspidaConfig, getConfigs } from 'aspida/dist/commands'

export type Config = {
  input: string | OpenAPI.Document
  output: string
  trailingSlash: boolean
  outputEachDir: boolean
  isYaml: boolean
}

export type ConfigFile = AspidaConfig & {
  openapi?: {
    inputFile: string
    yaml?: boolean
  }
}

const createConfig = (config: ConfigFile) => {
  const openapi = config.openapi!

  return {
    input: openapi.inputFile,
    output: config.input,
    trailingSlash: config.trailingSlash,
    outputEachDir: config.outputEachDir,
    isYaml: openapi.yaml ?? path.extname(openapi.inputFile).slice(1) === 'yaml'
  }
}

type PartialConfig = Partial<ConfigFile> | Partial<ConfigFile>[]

export default (config?: PartialConfig | string): Config[] =>
  getConfigs(config)
    .filter((c: ConfigFile) => c.openapi)
    .map(c => createConfig(c))
