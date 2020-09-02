/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './_code@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/partners/code'
  const PUT = 'PUT'

  return {
    _code: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
          fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        $put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
          fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
