/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './_provider@string/callback'
import { Methods as Methods1 } from './email-confirmation'
import { Methods as Methods2 } from './forgot-password'
import { Methods as Methods3 } from './local'
import { Methods as Methods4 } from './local/register'
import { Methods as Methods5 } from './reset-password'
import { Methods as Methods6 } from './send-email-confirmation'

const GET = 'GET'
const POST = 'POST'
const PATH0 = '/auth'
const PATH1 = '/callback'
const PATH2 = '/auth/email-confirmation'
const PATH3 = '/auth/forgot-password'
const PATH4 = '/auth/local'
const PATH5 = '/auth/local/register'
const PATH6 = '/auth/reset-password'
const PATH7 = '/auth/send-email-confirmation'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')

  return {
    _provider: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        callback: {
          get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body)
        }
      }
    },
    email_confirmation: {
      get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body)
    },
    forgot_password: {
      post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH3, POST, option).json(),
      $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body)
    },
    local: {
      register: {
        post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
          fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH5, POST, option).json(),
        $post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
          fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body)
      },
      post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH4, POST, option).json(),
      $post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body)
    },
    reset_password: {
      post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
        fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH6, POST, option).json(),
      $post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
        fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body)
    },
    send_email_confirmation: {
      post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH7, POST, option).json(),
      $post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body)
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
