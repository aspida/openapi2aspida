/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './capabilities'
import { Methods as Methods2 } from './me'

const GET = 'GET'
const PUT = 'PUT'
const PATH0 = '/api/1/users'
const PATH1 = '/api/1/users/capabilities'
const PATH2 = '/api/1/users/me'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')

  return {
    capabilities: {
      get: (option: { query: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      $get: (option: { query: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body)
    },
    me: {
      get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      put: (option?: { body?: Methods2['put']['reqBody'], config?: T }) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option, 'URLSearchParams').json(),
      $put: (option?: { body?: Methods2['put']['reqBody'], config?: T }) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option, 'URLSearchParams').json().then(r => r.body)
    },
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
