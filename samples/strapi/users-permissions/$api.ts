/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './init'
// prettier-ignore
import { Methods as Methods1 } from './roles'
// prettier-ignore
import { Methods as Methods2 } from './roles/_id@string'
// prettier-ignore
import { Methods as Methods3 } from './roles/_role@string'
// prettier-ignore
import { Methods as Methods4 } from './search/_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users-permissions/init'
  const PATH1 = '/users-permissions/roles'
  const PATH2 = '/users-permissions/search'
  const GET = 'GET'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    init: {
      /**
       * Check if the first admin user has already been registered
       * @returns response
       */
      get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Check if the first admin user has already been registered
       * @returns response
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    roles: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * Retrieve a role depending on its id
           * @returns response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Retrieve a role depending on its id
           * @returns response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _role: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * Update a role
           * @returns response
           */
          put: (option: { body: Methods3['put']['reqBody'], config?: T }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update a role
           * @returns response
           */
          $put: (option: { body: Methods3['put']['reqBody'], config?: T }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete a role
           * @returns response
           */
          delete: (option?: { config?: T }) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete a role
           * @returns response
           */
          $delete: (option?: { config?: T }) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * Retrieve all role documents
       */
      get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
        fetch(prefix, PATH1, GET, option).send(),
      /**
       * Retrieve all role documents
       */
      $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
        fetch(prefix, PATH1, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    search: {
      _id: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          /**
           * Search for users
           */
          get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
            fetch(prefix, prefix1, GET, option).send(),
          /**
           * Search for users
           */
          $get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
            fetch(prefix, prefix1, GET, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
