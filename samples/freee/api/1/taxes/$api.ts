/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './codes'
import { Methods as Methods1 } from './codes/_code@number'
import { Methods as Methods2 } from './companies/_company_id@number'

const GET = 'GET'
const PATH0 = '/api/1/taxes/codes'
const PATH1 = '/api/1/taxes/companies'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')

  return {
    codes: {
      _code: (val0: number) => {
        const prefix0 = `${PATH0}/${val0}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body)
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body)
    },
    companies: {
      _company_id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body)
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
