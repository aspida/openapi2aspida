/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_username@string'
import { Methods as Methods2 } from './createWithArray'
import { Methods as Methods3 } from './createWithList'
import { Methods as Methods4 } from './login'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user'
  const PATH1 = '/user/createWithArray'
  const PATH2 = '/user/createWithList'
  const PATH3 = '/user/login'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _username: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
          fetch<void>(prefix, prefix0, PUT, option).send(),
        $put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
          fetch<void>(prefix, prefix0, PUT, option).send().then(r => r.body),
        delete: (option?: { config?: T }) =>
          fetch<void>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T }) =>
          fetch<void>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    createWithArray: {
      post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
        fetch<void>(prefix, PATH1, POST, option).send(),
      $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
        fetch<void>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    createWithList: {
      post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
        fetch<void>(prefix, PATH2, POST, option).send(),
      $post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
        fetch<void>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    login: {
      get: (option: { query: Methods4['get']['query'], config?: T }) =>
        fetch<Methods4['get']['resBody'], Methods4['get']['resHeaders'], Methods4['get']['status']>(prefix, PATH3, GET, option).text(),
      $get: (option: { query: Methods4['get']['query'], config?: T }) =>
        fetch<Methods4['get']['resBody'], Methods4['get']['resHeaders'], Methods4['get']['status']>(prefix, PATH3, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
        `${prefix}${PATH3}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<void>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<void>(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
