/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './index'
import { Methods as Methods1 } from './reports/_id@number/download'
import { Methods as Methods2 } from './reports/_id@number/status'

const GET = 'GET'
const PATH0 = '/api/1/journals'
const PATH1 = '/api/1/journals/reports'
const PATH2 = '/download'
const PATH3 = '/status'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')

  return {
    reports: {
      _id: (val0: number) => {
        const prefix0 = `${PATH1}/${val0}`

        return {
          download: {
            get: (option: { query: Methods1['get']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).send(),
            $get: (option: { query: Methods1['get']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).send().then(r => r.body)
          },
          status: {
            get: (option: { query: Methods2['get']['query'], config?: T }) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json(),
            $get: (option: { query: Methods2['get']['query'], config?: T }) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json().then(r => r.body)
          }
        }
      }
    },
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
