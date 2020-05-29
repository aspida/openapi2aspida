import fs from 'fs'
import getConfig from '../src/getConfig'
import buildFromScript from '../src'

describe('cli test', () => {
  beforeAll(() => fs.mkdirSync('_samples'))
  afterAll(fn => fs.rmdir('_samples', { recursive: true }, fn))

  test('main', () => {
    const configs = getConfig('aspida.config.js')

    return Promise.all(
      configs.map(async config => {
        const outputDir = `_${config.output}`
        await buildFromScript({
          ...config,
          input: config.input,
          output: outputDir
        })

        expect(fs.readFileSync(`${outputDir}/$api.ts`, 'utf8')).toBe(
          fs.readFileSync(`${config.output}/$api.ts`, 'utf8')
        )
      })
    )
  })
})
