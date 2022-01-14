/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_id@number'
// prettier-ignore
import { Methods as Methods1 } from './_id@number/abc'
// prettier-ignore
import { Methods as Methods2 } from './_id@number/xyz'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user'
  const PATH1 = '/abc'
  const PATH2 = '/xyz'
  const GET = 'GET'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        abc: {
          get: (option: { query: Methods1['get']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).send(),
          $get: (option: { query: Methods1['get']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        xyz: {
          get: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).send(),
          $get: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).send().then(r => r.body),
          put: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send(),
          $put: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        },
        get: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).send(),
        $get: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).send().then(r => r.body),
        patch: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).send(),
        $patch: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).send().then(r => r.body),
        delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
