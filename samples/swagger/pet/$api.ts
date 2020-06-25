/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './index'
import { Methods as Methods1 } from './_petId@number'
import { Methods as Methods2 } from './_petId@number/uploadImage'
import { Methods as Methods3 } from './findByStatus'

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'
const PATH0 = '/pet'
const PATH1 = '/uploadImage'
const PATH2 = '/pet/findByStatus'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')

  return {
    _petId: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        uploadImage: {
          post: (option?: { body?: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json(),
          $post: (option?: { body?: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json().then(r => r.body)
        },
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        post: (option?: { body?: Methods1['post']['reqBody'], config?: T }) =>
          fetch<void>(prefix, prefix0, POST, option, 'URLSearchParams').send(),
        $post: (option?: { body?: Methods1['post']['reqBody'], config?: T }) =>
          fetch<void>(prefix, prefix0, POST, option, 'URLSearchParams').send().then(r => r.body),
        delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
          fetch<void>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
          fetch<void>(prefix, prefix0, DELETE, option).send().then(r => r.body)
      }
    },
    findByStatus: {
      get: (option: { query: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
      $get: (option: { query: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body)
    },
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<void>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<void>(prefix, PATH0, POST, option).send().then(r => r.body),
    put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
      fetch<void>(prefix, PATH0, PUT, option).send(),
    $put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
      fetch<void>(prefix, PATH0, PUT, option).send().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
