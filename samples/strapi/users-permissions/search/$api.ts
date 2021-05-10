/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users-permissions/search'
  const GET = 'GET'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * Search for users
         */
        get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
          fetch(prefix, prefix0, GET, option).send(),
        /**
         * Search for users
         */
        $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
          fetch(prefix, prefix0, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
