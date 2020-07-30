/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_id@string'
import { Methods as Methods2 } from './_mixId@string/cards'
import { Methods as Methods3 } from './_mixId@string/url'

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const PATH0 = '/api/v1/mixes'
const PATH1 = '/cards'
const PATH2 = '/url'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).send(),
        $put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).send().then(r => r.body)
      }
    },
    _mixId: (val1: string) => {
      const prefix1 = `${PATH0}/${val1}`

      return {
        cards: {
          post: (option?: { body?: Methods2['post']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option).send(),
          $post: (option?: { body?: Methods2['post']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option).send().then(r => r.body)
        },
        url: {
          post: (option?: { body?: Methods3['post']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send(),
          $post: (option?: { body?: Methods3['post']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send().then(r => r.body)
        }
      }
    },
    get: (option?: { config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option?: { config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    $post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
