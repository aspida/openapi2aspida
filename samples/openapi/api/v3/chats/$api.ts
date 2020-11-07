/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './_chatId@number/items/_itemId@number'
import { Methods as Methods1 } from './_chatId@string/items'
import { Methods as Methods2 } from './_chatId@string/items/audio'
import { Methods as Methods3 } from './_chatId@string/items/image'
import { Methods as Methods4 } from './_chatId@string/items/video'
import { Methods as Methods5 } from './keys'

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
    _chatId_0: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        items: {
          _itemId: (val1: number) => {
            const prefix1 = `${prefix0}${PATH1}/${val1}`

            return {
              post: (option?: { body?: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
                fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, prefix1, POST, option).json(),
              $post: (option?: { body?: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
                fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, prefix1, POST, option).json().then(r => r.body),
              get: (option?: { headers?: Methods0['get']['reqHeaders'], config?: T }) =>
                fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json(),
              $get: (option?: { headers?: Methods0['get']['reqHeaders'], config?: T }) =>
                fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}`
            }
          }
        }
      }
    },
    _chatId_1: (val2: string) => {
      const prefix2 = `${PATH0}/${val2}`

      return {
        items: {
          audio: {
            post: (option?: { body?: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option, 'FormData').json(),
            $post: (option?: { body?: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix2}${PATH2}`
          },
          image: {
            post: (option?: { body?: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'], config?: T }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option, 'FormData').json(),
            $post: (option?: { body?: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'], config?: T }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix2}${PATH3}`
          },
          video: {
            post: (option?: { body?: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'], config?: T }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option, 'FormData').json(),
            $post: (option?: { body?: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'], config?: T }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix2}${PATH4}`
          },
          get: (option?: { query?: Methods1['get']['query'], headers?: Methods1['get']['reqHeaders'], config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json(),
          $get: (option?: { query?: Methods1['get']['query'], headers?: Methods1['get']['reqHeaders'], config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json().then(r => r.body),
          post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'], config?: T }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix2}${PATH1}`, POST, option).json(),
          $post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'], config?: T }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix2}${PATH1}`, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
            `${prefix}${prefix2}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    keys: {
      get: (option?: { headers?: Methods5['get']['reqHeaders'], config?: T }) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json(),
      $get: (option?: { headers?: Methods5['get']['reqHeaders'], config?: T }) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
