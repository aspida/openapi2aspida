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
import type { Methods as Methods2 } from './_role@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users-permissions/roles'
  const GET = 'GET'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * Retrieve a role depending on its id
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Retrieve a role depending on its id
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    _role: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * Update a role
         * @returns response
         */
        put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * Update a role
         * @returns response
         */
        $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        /**
         * Delete a role
         * @returns response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * Delete a role
         * @returns response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * Retrieve all role documents
     */
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch(prefix, PATH0, GET, option).send(),
    /**
     * Retrieve all role documents
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
