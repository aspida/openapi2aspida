/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './pet'
// prettier-ignore
import { Methods as Methods1 } from './pet/_petId@number'
// prettier-ignore
import { Methods as Methods2 } from './pet/_petId@number/uploadImage'
// prettier-ignore
import { Methods as Methods3 } from './pet/findByStatus'
// prettier-ignore
import { Methods as Methods4 } from './store/inventory'
// prettier-ignore
import { Methods as Methods5 } from './store/order'
// prettier-ignore
import { Methods as Methods6 } from './store/order/_orderId@number'
// prettier-ignore
import { Methods as Methods7 } from './user'
// prettier-ignore
import { Methods as Methods8 } from './user/_username@string'
// prettier-ignore
import { Methods as Methods9 } from './user/createWithArray'
// prettier-ignore
import { Methods as Methods10 } from './user/createWithList'
// prettier-ignore
import { Methods as Methods11 } from './user/login'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')
  const PATH0 = '/pet'
  const PATH1 = '/uploadImage'
  const PATH2 = '/pet/findByStatus'
  const PATH3 = '/store/inventory'
  const PATH4 = '/store/order'
  const PATH5 = '/user'
  const PATH6 = '/user/createWithArray'
  const PATH7 = '/user/createWithList'
  const PATH8 = '/user/login'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    pet: {
      _petId: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          uploadImage: {
            /**
             * @returns successful operation
             */
            post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option, 'FormData').json(),
            /**
             * @returns successful operation
             */
            $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`
          },
          /**
           * Returns a single pet
           * @returns successful operation
           */
          get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Returns a single pet
           * @returns successful operation
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
            fetch(prefix, prefix1, POST, option, 'URLSearchParams').send(),
          $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
            fetch(prefix, prefix1, POST, option, 'URLSearchParams').send().then(r => r.body),
          delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
            fetch(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
            fetch(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
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
    },
    store: {
      inventory: {
        /**
         * Returns a map of status codes to quantities
         * @returns successful operation
         */
        get: (option?: { config?: T }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json(),
        /**
         * Returns a map of status codes to quantities
         * @returns successful operation
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      },
      order: {
        _orderId: (val2: number) => {
          const prefix2 = `${PATH4}/${val2}`

          return {
            /**
             * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
             * @returns successful operation
             */
            get: (option?: { config?: T }) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
             * @returns successful operation
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
             */
            delete: (option?: { config?: T }) =>
              fetch(prefix, prefix2, DELETE, option).send(),
            /**
             * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
             */
            $delete: (option?: { config?: T }) =>
              fetch(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        /**
         * @param option.body - order placed for purchasing the pet
         * @returns successful operation
         */
        post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * @param option.body - order placed for purchasing the pet
         * @returns successful operation
         */
        $post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      }
    },
    user: {
      _username: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          /**
           * @returns successful operation
           */
          get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns successful operation
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * This can only be done by the logged in user.
           * @param option.body - Updated user object
           */
          put: (option: { body: Methods8['put']['reqBody'], config?: T }) =>
            fetch(prefix, prefix1, PUT, option).send(),
          /**
           * This can only be done by the logged in user.
           * @param option.body - Updated user object
           */
          $put: (option: { body: Methods8['put']['reqBody'], config?: T }) =>
            fetch(prefix, prefix1, PUT, option).send().then(r => r.body),
          /**
           * This can only be done by the logged in user.
           */
          delete: (option?: { config?: T }) =>
            fetch(prefix, prefix1, DELETE, option).send(),
          /**
           * This can only be done by the logged in user.
           */
          $delete: (option?: { config?: T }) =>
            fetch(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      createWithArray: {
        /**
         * @param option.body - List of user object
         */
        post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
          fetch(prefix, PATH6, POST, option).send(),
        /**
         * @param option.body - List of user object
         */
        $post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
          fetch(prefix, PATH6, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH6}`
      },
      createWithList: {
        /**
         * @param option.body - List of user object
         */
        post: (option: { body: Methods10['post']['reqBody'], config?: T }) =>
          fetch(prefix, PATH7, POST, option).send(),
        /**
         * @param option.body - List of user object
         */
        $post: (option: { body: Methods10['post']['reqBody'], config?: T }) =>
          fetch(prefix, PATH7, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH7}`
      },
      login: {
        /**
         * @returns successful operation
         */
        get: (option: { query: Methods11['get']['query'], config?: T }) =>
          fetch<Methods11['get']['resBody'], Methods11['get']['resHeaders'], Methods11['get']['status']>(prefix, PATH8, GET, option).text(),
        /**
         * @returns successful operation
         */
        $get: (option: { query: Methods11['get']['query'], config?: T }) =>
          fetch<Methods11['get']['resBody'], Methods11['get']['resHeaders'], Methods11['get']['status']>(prefix, PATH8, GET, option).text().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods11['get']['query'] }) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * This can only be done by the logged in user.
       * @param option.body - Created user object
       */
      post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
        fetch(prefix, PATH5, POST, option).send(),
      /**
       * This can only be done by the logged in user.
       * @param option.body - Created user object
       */
      $post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
        fetch(prefix, PATH5, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
