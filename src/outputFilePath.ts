type config = {
  cliOutputPath?: string
  InputFilepath: string
}

export default function (config: config) {
  if (config.cliOutputPath) {
    return config.cliOutputPath
  } else {
    return config.InputFilepath
  }
}
