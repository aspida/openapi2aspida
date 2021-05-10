/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_channelId@number/chats/_chatId@number/items/_itemId@number'
// prettier-ignore
import { Methods as Methods2 } from './_channelId@number/news-feed'
// prettier-ignore
import { Methods as Methods3 } from './_channelId@string'
// prettier-ignore
import { Methods as Methods4 } from './_channelId@string/chats'
// prettier-ignore
import { Methods as Methods5 } from './_channelId@string/chats/_chatId@string'
// prettier-ignore
import { Methods as Methods6 } from './_channelId@string/chats/_chatId@string/items'
// prettier-ignore
import { Methods as Methods7 } from './_channelId@string/chats/_chatId@string/items/audio'
// prettier-ignore
import { Methods as Methods8 } from './_channelId@string/chats/_chatId@string/items/image'
// prettier-ignore
import { Methods as Methods9 } from './_channelId@string/chats/_chatId@string/items/video'
// prettier-ignore
import { Methods as Methods10 } from './_channelId@string/chats/_chatId@string/itemslist'
// prettier-ignore
import { Methods as Methods11 } from './_channelId@string/chats/_chatId@string/users'
// prettier-ignore
import { Methods as Methods12 } from './_channelId@string/chats/_chatId@string/users/remove'
// prettier-ignore
import { Methods as Methods13 } from './_channelId@string/notifications'

// prettier-ignore
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
    _channelId_number: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        chats: {
          _chatId: (val2: number) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

            return {
              items: {
                _itemId: (val4: number) => {
                  const prefix4 = `${prefix2}${PATH2}/${val4}`

                  return {
                    /**
                     * @returns OK
                     */
                    post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, prefix4, POST, option).json(),
                    /**
                     * @returns OK
                     */
                    $post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, prefix4, POST, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix4}`
                  }
                }
              }
            }
          }
        },
        news_feed: {
          /**
           * @returns OK
           */
          get: (option: { query: Methods2['get']['query'], headers?: Methods2['get']['reqHeaders'], config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option: { query: Methods2['get']['query'], headers?: Methods2['get']['reqHeaders'], config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
            `${prefix}${prefix0}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    _channelId_string: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        chats: {
          _chatId: (val2: string) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

            return {
              items: {
                audio: {
                  /**
                   * Create shared audio item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared audio item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix2}${PATH4}`
                },
                image: {
                  /**
                   * Create shared image item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared image item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix2}${PATH5}`
                },
                video: {
                  /**
                   * Create shared video item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods9['post']['reqBody'], headers?: Methods9['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix2}${PATH6}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared video item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods9['post']['reqBody'], headers?: Methods9['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix2}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix2}${PATH6}`
                },
                /**
                 * Returns a list of items of chat shared content
                 * @returns OK
                 */
                get: (option: { query: Methods6['get']['query'], headers?: Methods6['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix2}${PATH2}`, GET, option).json(),
                /**
                 * Returns a list of items of chat shared content
                 * @returns OK
                 */
                $get: (option: { query: Methods6['get']['query'], headers?: Methods6['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix2}${PATH2}`, GET, option).json().then(r => r.body),
                /**
                 * Create shared item in chat
                 * @param option.body - item to create
                 * @returns OK
                 */
                post: (option: { body: Methods6['post']['reqBody'], headers?: Methods6['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json(),
                /**
                 * Create shared item in chat
                 * @param option.body - item to create
                 * @returns OK
                 */
                $post: (option: { body: Methods6['post']['reqBody'], headers?: Methods6['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods6['get']['query'] }) =>
                  `${prefix}${prefix2}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              itemslist: {
                /**
                 * Returns chat items by list of ids
                 * @returns OK
                 */
                get: (option: { query: Methods10['get']['query'], headers?: Methods10['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix2}${PATH7}`, GET, option).json(),
                /**
                 * Returns chat items by list of ids
                 * @returns OK
                 */
                $get: (option: { query: Methods10['get']['query'], headers?: Methods10['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix2}${PATH7}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods10['get']['query'] }) =>
                  `${prefix}${prefix2}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              users: {
                remove: {
                  /**
                   * Removes members from chat
                   */
                  post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods12['post']['status']>(prefix, `${prefix2}${PATH9}`, POST, option).send(),
                  /**
                   * Removes members from chat
                   */
                  $post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods12['post']['status']>(prefix, `${prefix2}${PATH9}`, POST, option).send().then(r => r.body),
                  $path: () => `${prefix}${prefix2}${PATH9}`
                },
                /**
                 * Returns chat members with deleted
                 * @returns OK
                 */
                get: (option?: { headers?: Methods11['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix2}${PATH8}`, GET, option).json(),
                /**
                 * Returns chat members with deleted
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods11['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix2}${PATH8}`, GET, option).json().then(r => r.body),
                /**
                 * Adds members to chat
                 */
                post: (option: { body: Methods11['post']['reqBody'], headers?: Methods11['post']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods11['post']['status']>(prefix, `${prefix2}${PATH8}`, POST, option).send(),
                /**
                 * Adds members to chat
                 */
                $post: (option: { body: Methods11['post']['reqBody'], headers?: Methods11['post']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods11['post']['status']>(prefix, `${prefix2}${PATH8}`, POST, option).send().then(r => r.body),
                /**
                 * Updates chat members
                 */
                put: (option: { body: Methods11['put']['reqBody'], headers?: Methods11['put']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods11['put']['status']>(prefix, `${prefix2}${PATH8}`, PUT, option).send(),
                /**
                 * Updates chat members
                 */
                $put: (option: { body: Methods11['put']['reqBody'], headers?: Methods11['put']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods11['put']['status']>(prefix, `${prefix2}${PATH8}`, PUT, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH8}`
              },
              /**
               * Returns users chats in channel
               * @returns OK
               */
              get: (option?: { headers?: Methods5['get']['reqHeaders'], config?: T }) =>
                fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * Returns users chats in channel
               * @returns OK
               */
              $get: (option?: { headers?: Methods5['get']['reqHeaders'], config?: T }) =>
                fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              /**
               * Updates chat
               */
              put: (option: { body: Methods5['put']['reqBody'], headers?: Methods5['put']['reqHeaders'], config?: T }) =>
                fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, prefix2, PUT, option).send(),
              /**
               * Updates chat
               */
              $put: (option: { body: Methods5['put']['reqBody'], headers?: Methods5['put']['reqHeaders'], config?: T }) =>
                fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
              /**
               * Deletes chat
               */
              delete: (option?: { headers?: Methods5['delete']['reqHeaders'], config?: T }) =>
                fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix2, DELETE, option).send(),
              /**
               * Deletes chat
               */
              $delete: (option?: { headers?: Methods5['delete']['reqHeaders'], config?: T }) =>
                fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          /**
           * Returns users chats in channel
           * @returns OK
           */
          get: (option?: { headers?: Methods4['get']['reqHeaders'], config?: T }) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Returns users chats in channel
           * @returns OK
           */
          $get: (option?: { headers?: Methods4['get']['reqHeaders'], config?: T }) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * Creates chat
           * @returns OK
           */
          post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * Creates chat
           * @returns OK
           */
          $post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        notifications: {
          /**
           * @returns OK
           */
          get: (option: { query: Methods13['get']['query'], headers?: Methods13['get']['reqHeaders'], config?: T }) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix0}${PATH10}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option: { query: Methods13['get']['query'], headers?: Methods13['get']['reqHeaders'], config?: T }) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix0}${PATH10}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods13['get']['query'] }) =>
            `${prefix}${prefix0}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * Returns a list of channel mixes with pre-fetching their contents
         */
        get: (option: { query: Methods3['get']['query'], headers?: Methods3['get']['reqHeaders'], config?: T }) =>
          fetch<void, BasicHeaders, Methods3['get']['status']>(prefix, prefix0, GET, option).send(),
        /**
         * Returns a list of channel mixes with pre-fetching their contents
         */
        $get: (option: { query: Methods3['get']['query'], headers?: Methods3['get']['reqHeaders'], config?: T }) =>
          fetch<void, BasicHeaders, Methods3['get']['status']>(prefix, prefix0, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    /**
     * @returns OK
     */
    get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
