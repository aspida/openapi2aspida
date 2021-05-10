/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_petId@number'
// prettier-ignore
import { Methods as Methods2 } from './_petId@number/uploadImage'
// prettier-ignore
import { Methods as Methods3 } from './findByStatus'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')
  const PATH0 = '/pet'
  const PATH1 = '/uploadImage'
  const PATH2 = '/pet/findByStatus'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _petId: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        uploadImage: {
          /**
           * @returns successful operation
           */
          post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json(),
          /**
           * @returns successful operation
           */
          $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        /**
         * Returns a single pet
         * @returns successful operation
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Returns a single pet
         * @returns successful operation
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
          fetch(prefix, prefix0, POST, option, 'URLSearchParams').send(),
        $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
          fetch(prefix, prefix0, POST, option, 'URLSearchParams').send().then(r => r.body),
        delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
          fetch(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
          fetch(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    findByStatus: {
      /**
       * Multiple status values can be provided with comma separated strings
       * @returns successful operation
       */
      get: (option: { query: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Multiple status values can be provided with comma separated strings
       * @returns successful operation
       */
      $get: (option: { query: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * @param option.body - Pet object that needs to be added to the store
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch(prefix, PATH0, POST, option).send(),
    /**
     * @param option.body - Pet object that needs to be added to the store
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch(prefix, PATH0, POST, option).send().then(r => r.body),
    /**
     * @param option.body - Pet object that needs to be added to the store
     */
    put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
      fetch(prefix, PATH0, PUT, option).send(),
    /**
     * @param option.body - Pet object that needs to be added to the store
     */
    $put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
      fetch(prefix, PATH0, PUT, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
