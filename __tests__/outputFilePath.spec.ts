import outputFilePath from '../src/outputFilePath'

describe('ファイルパスの検査', () => {
  test('ファイルパスが正しいこと', () => {
    expect(
      outputFilePath({
        InputFilepath: 'apiapi',
        cliOutputPath: 'apiapi/apiapi/apiapi'
      })
    ).toBe('apiapi/apiapi/apiapi')
  })
  test('cli の -oが null', () => {
    expect(
      outputFilePath({
        InputFilepath: 'apiapi',
        cliOutputPath: undefined
      })
    ).toBe('apiapi')
  })
  test('cli の -oが指定されていない', () => {
    expect(
      outputFilePath({
        InputFilepath: 'apiapi'
      })
    ).toBe('apiapi')
  })
})
