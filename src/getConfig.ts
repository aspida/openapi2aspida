import { OpenAPI } from 'openapi-types'
import { AspidaConfig, getConfigs } from 'aspida/dist/commands'

export type RequiredConfig = {
  schema: boolean
  parameter: boolean
  query: boolean
  status: boolean
  resBody: boolean
  resHeader: boolean
  reqBody: boolean
  reqFormat: boolean
  method: boolean
}

export type Config = Pick<AspidaConfig, 'outputEachDir' | 'outputMode' | 'trailingSlash'> & {
  input: string | OpenAPI.Document
  output: string
  isYaml: boolean
  requiredConfig: RequiredConfig
  replaceLeadingAtMark: string
}

export type ConfigFile = AspidaConfig & {
  openapi?: {
    inputFile: string
    yaml?: boolean
    requiredConfig?: Partial<RequiredConfig>
    replaceLeadingAtMark?: string
  }
}

const defaultRequired = {
  schema: true,
  parameter: true,
  query: true,
  status: true,
  resBody: true,
  resHeader: true,
  reqBody: true,
  reqFormat: true,
  method: true
}

const createConfig = (config: ConfigFile): Config => {
  const openapi = config.openapi!
  return {
    input: openapi.inputFile,
    output: config.input,
    trailingSlash: config.trailingSlash,
    outputEachDir: config.outputEachDir,
    outputMode: config.outputMode,
    isYaml: openapi.yaml ?? !openapi.inputFile.endsWith('.json'),
    requiredConfig: { ...defaultRequired, ...openapi.requiredConfig },
    replaceLeadingAtMark: openapi.replaceLeadingAtMark ?? '@'
  }
}

type PartialConfig = Partial<ConfigFile> | Partial<ConfigFile>[]

export default (config?: PartialConfig | string): Config[] =>
  getConfigs(config)
    .filter((c: ConfigFile) => c.openapi)
    .map(c => createConfig(c))
