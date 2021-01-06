/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './reports/_id@number/download'
import { Methods as Methods2 } from './reports/_id@number/status'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/journals'
  const PATH1 = '/api/1/journals/reports'
  const PATH2 = '/download'
  const PATH3 = '/status'
  const GET = 'GET'

  return {
    reports: {
      _id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          download: {
            get: (option: { query: Methods1['get']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).send(),
            $get: (option: { query: Methods1['get']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
              `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          status: {
            get: (option: { query: Methods2['get']['query'], config?: T }) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            $get: (option: { query: Methods2['get']['query'], config?: T }) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    },
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
