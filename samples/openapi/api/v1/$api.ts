/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './me'
// prettier-ignore
import { Methods as Methods1 } from './mixes'
// prettier-ignore
import { Methods as Methods2 } from './mixes/_id@string'
// prettier-ignore
import { Methods as Methods3 } from './mixes/_mixId@string/cards'
// prettier-ignore
import { Methods as Methods4 } from './mixes/_mixId@string/url'
// prettier-ignore
import { Methods as Methods5 } from './parse'
// prettier-ignore
import { Methods as Methods6 } from './parse/image'
// prettier-ignore
import { Methods as Methods7 } from './token'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/me'
  const PATH1 = '/api/v1/mixes'
  const PATH2 = '/cards'
  const PATH3 = '/url'
  const PATH4 = '/api/v1/parse'
  const PATH5 = '/api/v1/parse/image'
  const PATH6 = '/api/v1/token'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'

  return {
    me: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    mixes: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _mixId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          cards: {
            post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
              fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send(),
            $post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
              fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`
          },
          url: {
            post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
              fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).send(),
            $post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
              fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          }
        }
      },
      /**
       * @returns OK
       */
      get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * @returns OK
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    parse: {
      image: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option, 'FormData').json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`
      },
      /**
       * @returns OK
       */
      post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
        fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
        fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    },
    token: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH6, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
