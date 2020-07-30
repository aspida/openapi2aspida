import minimist from 'minimist'
import build from '.'

export const run = (args: string[]) => {
  const argv = minimist(args, {
    string: ['version', 'input', 'config'],
    alias: { v: 'version', i: 'input', c: 'config' }
  })

  argv.version !== undefined
    ? console.log(`v${require('../package.json').version}`)
    : argv.input
    ? build({ openapi: { inputFile: argv.input } })
    : build(argv.config)
}
