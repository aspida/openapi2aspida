/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_chatId@number/items/_itemId@number'
// prettier-ignore
import { Methods as Methods1 } from './_chatId@string/items'
// prettier-ignore
import { Methods as Methods2 } from './_chatId@string/items/audio'
// prettier-ignore
import { Methods as Methods3 } from './_chatId@string/items/image'
// prettier-ignore
import { Methods as Methods4 } from './_chatId@string/items/video'
// prettier-ignore
import { Methods as Methods5 } from './keys'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v3/chats'
  const PATH1 = '/items'
  const PATH2 = '/items/audio'
  const PATH3 = '/items/image'
  const PATH4 = '/items/video'
  const PATH5 = '/api/v3/chats/keys'
  const GET = 'GET'
  const POST = 'POST'

  return {
    _chatId_number: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        items: {
          _itemId: (val2: number) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

            return {
              /**
               * @returns OK
               */
              post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
                fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, prefix2, POST, option).json(),
              /**
               * @returns OK
               */
              $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
                fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, prefix2, POST, option).json().then(r => r.body),
              /**
               * @returns OK
               */
              get: (option?: { headers?: Methods0['get']['reqHeaders'], config?: T }) =>
                fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * @returns OK
               */
              $get: (option?: { headers?: Methods0['get']['reqHeaders'], config?: T }) =>
                fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          }
        }
      }
    },
    _chatId_string: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        items: {
          audio: {
            /**
             * Create shared audio item in chat
             * @returns OK
             */
            post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'FormData').json(),
            /**
             * Create shared audio item in chat
             * @returns OK
             */
            $post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH2}`
          },
          image: {
            /**
             * Create shared image item in chat
             * @returns OK
             */
            post: (option: { body: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'], config?: T }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option, 'FormData').json(),
            /**
             * Create shared image item in chat
             * @returns OK
             */
            $post: (option: { body: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'], config?: T }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH3}`
          },
          video: {
            /**
             * Create shared video item in chat
             * @returns OK
             */
            post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'], config?: T }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option, 'FormData').json(),
            /**
             * Create shared video item in chat
             * @returns OK
             */
            $post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'], config?: T }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH4}`
          },
          /**
           * Returns a list of items of chat shared content
           * @returns OK
           */
          get: (option?: { query?: Methods1['get']['query'], headers?: Methods1['get']['reqHeaders'], config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Returns a list of items of chat shared content
           * @returns OK
           */
          $get: (option?: { query?: Methods1['get']['query'], headers?: Methods1['get']['reqHeaders'], config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * Create shared item in chat
           * @param option.body - item to create
           * @returns OK
           */
          post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'], config?: T }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * Create shared item in chat
           * @param option.body - item to create
           * @returns OK
           */
          $post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'], config?: T }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    keys: {
      /**
       * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
       * @returns OK
       */
      get: (option?: { headers?: Methods5['get']['reqHeaders'], config?: T }) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
       * @returns OK
       */
      $get: (option?: { headers?: Methods5['get']['reqHeaders'], config?: T }) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
