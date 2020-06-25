/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './index'
import { Methods as Methods1 } from './_id@string'
import { Methods as Methods2 } from './_role@string'

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'
const PATH0 = '/users-permissions/roles'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body)
      }
    },
    _role: (val1: string) => {
      const prefix1 = `${PATH0}/${val1}`

      return {
        put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
          fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).json(),
        $put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
          fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
        delete: (option?: { config?: T }) =>
          fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).json(),
        $delete: (option?: { config?: T }) =>
          fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body)
      }
    },
    get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
