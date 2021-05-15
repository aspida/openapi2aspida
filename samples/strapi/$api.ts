/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './auth/_provider@string/callback'
// prettier-ignore
import { Methods as Methods1 } from './auth/email-confirmation'
// prettier-ignore
import { Methods as Methods2 } from './auth/forgot-password'
// prettier-ignore
import { Methods as Methods3 } from './auth/local'
// prettier-ignore
import { Methods as Methods4 } from './auth/local/register'
// prettier-ignore
import { Methods as Methods5 } from './auth/reset-password'
// prettier-ignore
import { Methods as Methods6 } from './auth/send-email-confirmation'
// prettier-ignore
import { Methods as Methods7 } from './connect/_any'
// prettier-ignore
import { Methods as Methods8 } from './email'
// prettier-ignore
import { Methods as Methods9 } from './upload'
// prettier-ignore
import { Methods as Methods10 } from './upload/files'
// prettier-ignore
import { Methods as Methods11 } from './upload/files/_id@string'
// prettier-ignore
import { Methods as Methods12 } from './upload/files/count'
// prettier-ignore
import { Methods as Methods13 } from './upload/search/_id@string'
// prettier-ignore
import { Methods as Methods14 } from './users'
// prettier-ignore
import { Methods as Methods15 } from './users/_id@string'
// prettier-ignore
import { Methods as Methods16 } from './users/me'
// prettier-ignore
import { Methods as Methods17 } from './users-permissions/init'
// prettier-ignore
import { Methods as Methods18 } from './users-permissions/roles'
// prettier-ignore
import { Methods as Methods19 } from './users-permissions/roles/_id@string'
// prettier-ignore
import { Methods as Methods20 } from './users-permissions/roles/_role@string'
// prettier-ignore
import { Methods as Methods21 } from './users-permissions/search/_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth'
  const PATH1 = '/callback'
  const PATH2 = '/auth/email-confirmation'
  const PATH3 = '/auth/forgot-password'
  const PATH4 = '/auth/local'
  const PATH5 = '/auth/local/register'
  const PATH6 = '/auth/reset-password'
  const PATH7 = '/auth/send-email-confirmation'
  const PATH8 = '/connect'
  const PATH9 = '/email'
  const PATH10 = '/upload'
  const PATH11 = '/upload/files'
  const PATH12 = '/upload/files/count'
  const PATH13 = '/upload/search'
  const PATH14 = '/users'
  const PATH15 = '/users/me'
  const PATH16 = '/users-permissions/init'
  const PATH17 = '/users-permissions/roles'
  const PATH18 = '/users-permissions/search'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    auth: {
      _provider: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          callback: {
            /**
             * Successfull redirection after approving a provider
             * @returns response
             */
            get: (option?: { config?: T }) =>
              fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * Successfull redirection after approving a provider
             * @returns response
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`
          }
        }
      },
      email_confirmation: {
        /**
         * Validate a user account
         * @returns response
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * Validate a user account
         * @returns response
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`
      },
      forgot_password: {
        /**
         * Send the reset password email link
         * @returns response
         */
        post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
          fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH3, POST, option).json(),
        /**
         * Send the reset password email link
         * @returns response
         */
        $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
          fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      },
      local: {
        register: {
          /**
           * Register a new user with the default role
           * @returns response
           */
          post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH5, POST, option).json(),
          /**
           * Register a new user with the default role
           * @returns response
           */
          $post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH5}`
        },
        /**
         * Login a user using the identifiers email and password
         * @returns response
         */
        post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
          fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * Login a user using the identifiers email and password
         * @returns response
         */
        $post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
          fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      },
      reset_password: {
        /**
         * Change a user's password
         * @returns response
         */
        post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH6, POST, option).json(),
        /**
         * Change a user's password
         * @returns response
         */
        $post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH6}`
      },
      send_email_confirmation: {
        /**
         * Send a confirmation email to user
         * @returns response
         */
        post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH7, POST, option).json(),
        /**
         * Send a confirmation email to user
         * @returns response
         */
        $post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH7}`
      }
    },
    connect: {
      _any: (val1: number | string) => {
        const prefix1 = `${PATH8}/${val1}`

        return {
          /**
           * Connect a provider
           * @returns response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Connect a provider
           * @returns response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    email: {
      /**
       * Send an email
       * @returns response
       */
      post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH9, POST, option).json(),
      /**
       * Send an email
       * @returns response
       */
      $post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH9}`
    },
    upload: {
      files: {
        _id: (val2: string) => {
          const prefix2 = `${PATH11}/${val2}`

          return {
            /**
             * Retrieve a single file depending on its id
             * @returns response
             */
            get: (option?: { config?: T }) =>
              fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Retrieve a single file depending on its id
             * @returns response
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * Delete an uploaded file
             * @returns response
             */
            delete: (option?: { config?: T }) =>
              fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete an uploaded file
             * @returns response
             */
            $delete: (option?: { config?: T }) =>
              fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        count: {
          /**
           * Retrieve the total number of uploaded files
           * @returns response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH12, GET, option).json(),
          /**
           * Retrieve the total number of uploaded files
           * @returns response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH12}`
        },
        /**
         * Retrieve all file documents
         * @returns response
         */
        get: (option?: { config?: T }) =>
          fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * Retrieve all file documents
         * @returns response
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH11}`
      },
      search: {
        _id: (val2: string) => {
          const prefix2 = `${PATH13}/${val2}`

          return {
            /**
             * Search for an uploaded file
             * @returns response
             */
            get: (option?: { config?: T }) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Search for an uploaded file
             * @returns response
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        }
      },
      /**
       * Upload a file
       * @returns response
       */
      post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH10, POST, option).json(),
      /**
       * Upload a file
       * @returns response
       */
      $post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH10, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH10}`
    },
    users: {
      _id: (val1: string) => {
        const prefix1 = `${PATH14}/${val1}`

        return {
          /**
           * Retrieve a single user depending on his id
           * @returns response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Retrieve a single user depending on his id
           * @returns response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update an existing user
           * @returns response
           */
          put: (option: { body: Methods15['put']['reqBody'], config?: T }) =>
            fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update an existing user
           * @returns response
           */
          $put: (option: { body: Methods15['put']['reqBody'], config?: T }) =>
            fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete an existing user
           * @returns response
           */
          delete: (option?: { config?: T }) =>
            fetch<Methods15['delete']['resBody'], BasicHeaders, Methods15['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete an existing user
           * @returns response
           */
          $delete: (option?: { config?: T }) =>
            fetch<Methods15['delete']['resBody'], BasicHeaders, Methods15['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      me: {
        /**
         * Retrieve the logged in user information
         * @returns response
         */
        get: (option?: { config?: T }) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH15, GET, option).json(),
        /**
         * Retrieve the logged in user information
         * @returns response
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`
      },
      /**
       * Retrieve all user documents
       */
      get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
        fetch(prefix, PATH14, GET, option).send(),
      /**
       * Retrieve all user documents
       */
      $get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
        fetch(prefix, PATH14, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods14['get']['query'] }) =>
        `${prefix}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    users_permissions: {
      init: {
        /**
         * Check if the first admin user has already been registered
         * @returns response
         */
        get: (option?: { config?: T }) =>
          fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH16, GET, option).json(),
        /**
         * Check if the first admin user has already been registered
         * @returns response
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH16}`
      },
      roles: {
        _id: (val2: string) => {
          const prefix2 = `${PATH17}/${val2}`

          return {
            /**
             * Retrieve a role depending on its id
             * @returns response
             */
            get: (option?: { config?: T }) =>
              fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Retrieve a role depending on its id
             * @returns response
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        _role: (val2: string) => {
          const prefix2 = `${PATH17}/${val2}`

          return {
            /**
             * Update a role
             * @returns response
             */
            put: (option: { body: Methods20['put']['reqBody'], config?: T }) =>
              fetch<Methods20['put']['resBody'], BasicHeaders, Methods20['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * Update a role
             * @returns response
             */
            $put: (option: { body: Methods20['put']['reqBody'], config?: T }) =>
              fetch<Methods20['put']['resBody'], BasicHeaders, Methods20['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            /**
             * Delete a role
             * @returns response
             */
            delete: (option?: { config?: T }) =>
              fetch<Methods20['delete']['resBody'], BasicHeaders, Methods20['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete a role
             * @returns response
             */
            $delete: (option?: { config?: T }) =>
              fetch<Methods20['delete']['resBody'], BasicHeaders, Methods20['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        /**
         * Retrieve all role documents
         */
        get: (option?: { query?: Methods18['get']['query'], config?: T }) =>
          fetch(prefix, PATH17, GET, option).send(),
        /**
         * Retrieve all role documents
         */
        $get: (option?: { query?: Methods18['get']['query'], config?: T }) =>
          fetch(prefix, PATH17, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods18['get']['query'] }) =>
          `${prefix}${PATH17}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      search: {
        _id: (val2: string) => {
          const prefix2 = `${PATH18}/${val2}`

          return {
            /**
             * Search for users
             */
            get: (option?: { query?: Methods21['get']['query'], config?: T }) =>
              fetch(prefix, prefix2, GET, option).send(),
            /**
             * Search for users
             */
            $get: (option?: { query?: Methods21['get']['query'], config?: T }) =>
              fetch(prefix, prefix2, GET, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods21['get']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
