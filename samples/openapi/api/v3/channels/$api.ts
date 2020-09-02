/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_channelId@number/chats/_chatId@number/items/_itemId@number'
import { Methods as Methods2 } from './_channelId@number/news-feed'
import { Methods as Methods3 } from './_channelId@string'
import { Methods as Methods4 } from './_channelId@string/chats'
import { Methods as Methods5 } from './_channelId@string/chats/_chatId@string'
import { Methods as Methods6 } from './_channelId@string/chats/_chatId@string/items'
import { Methods as Methods7 } from './_channelId@string/chats/_chatId@string/items/audio'
import { Methods as Methods8 } from './_channelId@string/chats/_chatId@string/items/image'
import { Methods as Methods9 } from './_channelId@string/chats/_chatId@string/items/video'
import { Methods as Methods10 } from './_channelId@string/chats/_chatId@string/itemslist'
import { Methods as Methods11 } from './_channelId@string/chats/_chatId@string/users'
import { Methods as Methods12 } from './_channelId@string/chats/_chatId@string/users/remove'
import { Methods as Methods13 } from './_channelId@string/notifications'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v3/channels'
  const PATH1 = '/chats'
  const PATH2 = '/items'
  const PATH3 = '/news-feed'
  const PATH4 = '/items/audio'
  const PATH5 = '/items/image'
  const PATH6 = '/items/video'
  const PATH7 = '/itemslist'
  const PATH8 = '/users'
  const PATH9 = '/users/remove'
  const PATH10 = '/notifications'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _channelId_0: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        chats: {
          _chatId: (val1: number) => {
            const prefix1 = `${prefix0}${PATH1}/${val1}`

            return {
              items: {
                _itemId: (val2: number) => {
                  const prefix2 = `${prefix1}${PATH2}/${val2}`

                  return {
                    post: (option?: { body?: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, prefix2, POST, option).json(),
                    $post: (option?: { body?: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, prefix2, POST, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix2}`
                  }
                }
              }
            }
          }
        },
        news_feed: {
          get: (option?: { query?: Methods2['get']['query'], headers?: Methods2['get']['reqHeaders'], config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json(),
          $get: (option?: { query?: Methods2['get']['query'], headers?: Methods2['get']['reqHeaders'], config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
            `${prefix}${prefix0}${PATH3}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    _channelId_1: (val3: string) => {
      const prefix3 = `${PATH0}/${val3}`

      return {
        chats: {
          _chatId: (val4: string) => {
            const prefix4 = `${prefix3}${PATH1}/${val4}`

            return {
              items: {
                audio: {
                  post: (option?: { body?: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix4}${PATH4}`, POST, option, 'FormData').json(),
                  $post: (option?: { body?: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix4}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH4}`
                },
                image: {
                  post: (option?: { body?: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix4}${PATH5}`, POST, option, 'FormData').json(),
                  $post: (option?: { body?: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix4}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH5}`
                },
                video: {
                  post: (option?: { body?: Methods9['post']['reqBody'], headers?: Methods9['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix4}${PATH6}`, POST, option, 'FormData').json(),
                  $post: (option?: { body?: Methods9['post']['reqBody'], headers?: Methods9['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix4}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH6}`
                },
                get: (option?: { query?: Methods6['get']['query'], headers?: Methods6['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix4}${PATH2}`, GET, option).json(),
                $get: (option?: { query?: Methods6['get']['query'], headers?: Methods6['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix4}${PATH2}`, GET, option).json().then(r => r.body),
                post: (option: { body: Methods6['post']['reqBody'], headers?: Methods6['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix4}${PATH2}`, POST, option).json(),
                $post: (option: { body: Methods6['post']['reqBody'], headers?: Methods6['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix4}${PATH2}`, POST, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods6['get']['query'] }) =>
                  `${prefix}${prefix4}${PATH2}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              itemslist: {
                get: (option: { query: Methods10['get']['query'], headers?: Methods10['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix4}${PATH7}`, GET, option).json(),
                $get: (option: { query: Methods10['get']['query'], headers?: Methods10['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix4}${PATH7}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods10['get']['query'] }) =>
                  `${prefix}${prefix4}${PATH7}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              users: {
                remove: {
                  post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods12['post']['status']>(prefix, `${prefix4}${PATH9}`, POST, option).send(),
                  $post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods12['post']['status']>(prefix, `${prefix4}${PATH9}`, POST, option).send().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH9}`
                },
                get: (option?: { headers?: Methods11['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix4}${PATH8}`, GET, option).json(),
                $get: (option?: { headers?: Methods11['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix4}${PATH8}`, GET, option).json().then(r => r.body),
                post: (option: { body: Methods11['post']['reqBody'], headers?: Methods11['post']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods11['post']['status']>(prefix, `${prefix4}${PATH8}`, POST, option).send(),
                $post: (option: { body: Methods11['post']['reqBody'], headers?: Methods11['post']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods11['post']['status']>(prefix, `${prefix4}${PATH8}`, POST, option).send().then(r => r.body),
                put: (option: { body: Methods11['put']['reqBody'], headers?: Methods11['put']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods11['put']['status']>(prefix, `${prefix4}${PATH8}`, PUT, option).send(),
                $put: (option: { body: Methods11['put']['reqBody'], headers?: Methods11['put']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods11['put']['status']>(prefix, `${prefix4}${PATH8}`, PUT, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix4}${PATH8}`
              },
              get: (option?: { headers?: Methods5['get']['reqHeaders'], config?: T }) =>
                fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix4, GET, option).json(),
              $get: (option?: { headers?: Methods5['get']['reqHeaders'], config?: T }) =>
                fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
              put: (option: { body: Methods5['put']['reqBody'], headers?: Methods5['put']['reqHeaders'], config?: T }) =>
                fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, prefix4, PUT, option).send(),
              $put: (option: { body: Methods5['put']['reqBody'], headers?: Methods5['put']['reqHeaders'], config?: T }) =>
                fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, prefix4, PUT, option).send().then(r => r.body),
              delete: (option?: { headers?: Methods5['delete']['reqHeaders'], config?: T }) =>
                fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix4, DELETE, option).send(),
              $delete: (option?: { headers?: Methods5['delete']['reqHeaders'], config?: T }) =>
                fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix4}`
            }
          },
          get: (option?: { headers?: Methods4['get']['reqHeaders'], config?: T }) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix3}${PATH1}`, GET, option).json(),
          $get: (option?: { headers?: Methods4['get']['reqHeaders'], config?: T }) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix3}${PATH1}`, GET, option).json().then(r => r.body),
          post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix3}${PATH1}`, POST, option).json(),
          $post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix3}${PATH1}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix3}${PATH1}`
        },
        notifications: {
          get: (option?: { query?: Methods13['get']['query'], headers?: Methods13['get']['reqHeaders'], config?: T }) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix3}${PATH10}`, GET, option).json(),
          $get: (option?: { query?: Methods13['get']['query'], headers?: Methods13['get']['reqHeaders'], config?: T }) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix3}${PATH10}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods13['get']['query'] }) =>
            `${prefix}${prefix3}${PATH10}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        get: (option?: { query?: Methods3['get']['query'], headers?: Methods3['get']['reqHeaders'], config?: T }) =>
          fetch<void, BasicHeaders, Methods3['get']['status']>(prefix, prefix3, GET, option).send(),
        $get: (option?: { query?: Methods3['get']['query'], headers?: Methods3['get']['reqHeaders'], config?: T }) =>
          fetch<void, BasicHeaders, Methods3['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
          `${prefix}${prefix3}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
