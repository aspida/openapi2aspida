/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_provider@string/callback'
// prettier-ignore
import { Methods as Methods1 } from './email-confirmation'
// prettier-ignore
import { Methods as Methods2 } from './forgot-password'
// prettier-ignore
import { Methods as Methods3 } from './local'
// prettier-ignore
import { Methods as Methods4 } from './local/register'
// prettier-ignore
import { Methods as Methods5 } from './reset-password'
// prettier-ignore
import { Methods as Methods6 } from './send-email-confirmation'

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
  const GET = 'GET'
  const POST = 'POST'

  return {
    _provider: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        callback: {
          /**
           * Successfull redirection after approving a provider
           * @returns response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Successfull redirection after approving a provider
           * @returns response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
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
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
