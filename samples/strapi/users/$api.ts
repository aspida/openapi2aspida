/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from '.'
// prettier-ignore
import type { Methods as Methods1 } from './_id@string'
// prettier-ignore
import type { Methods as Methods2 } from './me'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users'
  const PATH1 = '/users/me'
  const GET = 'GET'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * Retrieve a single user depending on his id
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Retrieve a single user depending on his id
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * Update an existing user
         * @returns response
         */
        put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * Update an existing user
         * @returns response
         */
        $put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        /**
         * Delete an existing user
         * @returns response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * Delete an existing user
         * @returns response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    me: {
      /**
       * Retrieve the logged in user information
       * @returns response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Retrieve the logged in user information
       * @returns response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    /**
     * Retrieve all user documents
     */
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch(prefix, PATH0, GET, option).send(),
    /**
     * Retrieve all user documents
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch(prefix, PATH0, GET, option).send().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
