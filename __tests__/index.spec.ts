import fs from 'fs'
import { ConfigFile } from '../src/getConfig'
import build from '../src'

describe('cli test', () => {
  beforeAll(() => fs.mkdirSync('_samples'))
  afterAll(() => fs.promises.rmdir('_samples', { recursive: true }))

  test('main', () => {
    const configs: ConfigFile[] = require('../aspida.config.js')

    return Promise.all(
      configs.map(async config => {
        await build({
          ...config,
          input: `_${config.input}`
        })[0]

        expect(fs.readFileSync(`_${config.input}/$api.ts`, 'utf8')).toBe(
          fs.readFileSync(`${config.input}/$api.ts`, 'utf8').replace(/\r/g, '')
        )
      })
    )
  })
})
