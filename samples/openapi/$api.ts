/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './api/stream/v1/stories'
// prettier-ignore
import { Methods as Methods1 } from './api/stream/v1/stories/_storyId@number'
// prettier-ignore
import { Methods as Methods2 } from './api/v1/me'
// prettier-ignore
import { Methods as Methods3 } from './api/v1/mixes'
// prettier-ignore
import { Methods as Methods4 } from './api/v1/mixes/_id@string'
// prettier-ignore
import { Methods as Methods5 } from './api/v1/mixes/_mixId@string/cards'
// prettier-ignore
import { Methods as Methods6 } from './api/v1/mixes/_mixId@string/url'
// prettier-ignore
import { Methods as Methods7 } from './api/v1/parse'
// prettier-ignore
import { Methods as Methods8 } from './api/v1/parse/image'
// prettier-ignore
import { Methods as Methods9 } from './api/v1/token'
// prettier-ignore
import { Methods as Methods10 } from './api/v3/2fa'
// prettier-ignore
import { Methods as Methods11 } from './api/v3/channels'
// prettier-ignore
import { Methods as Methods12 } from './api/v3/channels/_channelId@number/chats/_chatId@number/items/_itemId@number'
// prettier-ignore
import { Methods as Methods13 } from './api/v3/channels/_channelId@number/news-feed'
// prettier-ignore
import { Methods as Methods14 } from './api/v3/channels/_channelId@string'
// prettier-ignore
import { Methods as Methods15 } from './api/v3/channels/_channelId@string/chats'
// prettier-ignore
import { Methods as Methods16 } from './api/v3/channels/_channelId@string/chats/_chatId@string'
// prettier-ignore
import { Methods as Methods17 } from './api/v3/channels/_channelId@string/chats/_chatId@string/items'
// prettier-ignore
import { Methods as Methods18 } from './api/v3/channels/_channelId@string/chats/_chatId@string/items/audio'
// prettier-ignore
import { Methods as Methods19 } from './api/v3/channels/_channelId@string/chats/_chatId@string/items/image'
// prettier-ignore
import { Methods as Methods20 } from './api/v3/channels/_channelId@string/chats/_chatId@string/items/video'
// prettier-ignore
import { Methods as Methods21 } from './api/v3/channels/_channelId@string/chats/_chatId@string/itemslist'
// prettier-ignore
import { Methods as Methods22 } from './api/v3/channels/_channelId@string/chats/_chatId@string/users'
// prettier-ignore
import { Methods as Methods23 } from './api/v3/channels/_channelId@string/chats/_chatId@string/users/remove'
// prettier-ignore
import { Methods as Methods24 } from './api/v3/channels/_channelId@string/notifications'
// prettier-ignore
import { Methods as Methods25 } from './api/v3/chats/_chatId@number/items/_itemId@number'
// prettier-ignore
import { Methods as Methods26 } from './api/v3/chats/_chatId@string/items'
// prettier-ignore
import { Methods as Methods27 } from './api/v3/chats/_chatId@string/items/audio'
// prettier-ignore
import { Methods as Methods28 } from './api/v3/chats/_chatId@string/items/image'
// prettier-ignore
import { Methods as Methods29 } from './api/v3/chats/_chatId@string/items/video'
// prettier-ignore
import { Methods as Methods30 } from './api/v3/chats/keys'
// prettier-ignore
import { Methods as Methods31 } from './api/v3/extension/audio'
// prettier-ignore
import { Methods as Methods32 } from './api/v3/extension/image'
// prettier-ignore
import { Methods as Methods33 } from './api/v3/extension/parse'
// prettier-ignore
import { Methods as Methods34 } from './api/v3/extension/story/_storyId@string'
// prettier-ignore
import { Methods as Methods35 } from './api/v3/extension/story/_storyId@string/audio'
// prettier-ignore
import { Methods as Methods36 } from './api/v3/extension/story/_storyId@string/image'
// prettier-ignore
import { Methods as Methods37 } from './api/v3/extension/story/_storyId@string/video'
// prettier-ignore
import { Methods as Methods38 } from './api/v3/extension/video'
// prettier-ignore
import { Methods as Methods39 } from './api/v3/fcm_token'
// prettier-ignore
import { Methods as Methods40 } from './api/v3/info'
// prettier-ignore
import { Methods as Methods41 } from './api/v3/login'
// prettier-ignore
import { Methods as Methods42 } from './api/v3/logout'
// prettier-ignore
import { Methods as Methods43 } from './api/v3/me'
// prettier-ignore
import { Methods as Methods44 } from './api/v3/organisation'
// prettier-ignore
import { Methods as Methods45 } from './api/v3/organisation/users'
// prettier-ignore
import { Methods as Methods46 } from './api/v3/stories/_storyId@number/items'
// prettier-ignore
import { Methods as Methods47 } from './api/v3/stories/_storyId@number/items/_itemId@number'
// prettier-ignore
import { Methods as Methods48 } from './api/v3/stories/_storyId@number/items/_itemId@number/reaction'
// prettier-ignore
import { Methods as Methods49 } from './api/v3/user'
// prettier-ignore
import { Methods as Methods50 } from './api/v3/user/_userId@string'
// prettier-ignore
import { Methods as Methods51 } from './api/v3/user/profile'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/stream/v1/stories'
  const PATH1 = '/api/v1/me'
  const PATH2 = '/api/v1/mixes'
  const PATH3 = '/cards'
  const PATH4 = '/url'
  const PATH5 = '/api/v1/parse'
  const PATH6 = '/api/v1/parse/image'
  const PATH7 = '/api/v1/token'
  const PATH8 = '/api/v3/2fa'
  const PATH9 = '/api/v3/channels'
  const PATH10 = '/chats'
  const PATH11 = '/items'
  const PATH12 = '/news-feed'
  const PATH13 = '/items/audio'
  const PATH14 = '/items/image'
  const PATH15 = '/items/video'
  const PATH16 = '/itemslist'
  const PATH17 = '/users'
  const PATH18 = '/users/remove'
  const PATH19 = '/notifications'
  const PATH20 = '/api/v3/chats'
  const PATH21 = '/api/v3/chats/keys'
  const PATH22 = '/api/v3/extension/audio'
  const PATH23 = '/api/v3/extension/image'
  const PATH24 = '/api/v3/extension/parse'
  const PATH25 = '/api/v3/extension/story'
  const PATH26 = '/audio'
  const PATH27 = '/image'
  const PATH28 = '/video'
  const PATH29 = '/api/v3/extension/video'
  const PATH30 = '/api/v3/fcm_token'
  const PATH31 = '/api/v3/info'
  const PATH32 = '/api/v3/login'
  const PATH33 = '/api/v3/logout'
  const PATH34 = '/api/v3/me'
  const PATH35 = '/api/v3/organisation'
  const PATH36 = '/api/v3/organisation/users'
  const PATH37 = '/api/v3/stories'
  const PATH38 = '/reaction'
  const PATH39 = '/api/v3/user'
  const PATH40 = '/api/v3/user/profile'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    api: {
      stream: {
        v1: {
          stories: {
            _storyId: (val4: number) => {
              const prefix4 = `${PATH0}/${val4}`

              return {
                /**
                 * @returns OK
                 */
                get: (option: { query: Methods1['get']['query'], config?: T }) =>
                  fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix4, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option: { query: Methods1['get']['query'], config?: T }) =>
                  fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
                  `${prefix}${prefix4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            },
            /**
             * It returns all stories with first 75 cards
             * @returns OK
             */
            get: (option: { query: Methods0['get']['query'], config?: T }) =>
              fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
            /**
             * It returns all stories with first 75 cards
             * @returns OK
             */
            $get: (option: { query: Methods0['get']['query'], config?: T }) =>
              fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
              `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      v1: {
        me: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH1}`
        },
        mixes: {
          _id: (val3: string) => {
            const prefix3 = `${PATH2}/${val3}`

            return {
              put: (option: { body: Methods4['put']['reqBody'], config?: T }) =>
                fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, prefix3, PUT, option).send(),
              $put: (option: { body: Methods4['put']['reqBody'], config?: T }) =>
                fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          _mixId: (val3: string) => {
            const prefix3 = `${PATH2}/${val3}`

            return {
              cards: {
                post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix3}${PATH3}`, POST, option).send(),
                $post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix3}${PATH3}`, POST, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH3}`
              },
              url: {
                post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, `${prefix3}${PATH4}`, POST, option).send(),
                $post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, `${prefix3}${PATH4}`, POST, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH4}`
              }
            }
          },
          /**
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH2}`
        },
        parse: {
          image: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
              fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH6, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
              fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH6, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${PATH6}`
          },
          /**
           * @returns OK
           */
          post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
            fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH5, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
            fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH5}`
        },
        token: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
            fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH7, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
            fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH7}`
        }
      },
      v3: {
        $2fa: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods10['post']['reqBody'], headers?: Methods10['post']['reqHeaders'], config?: T }) =>
            fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, PATH8, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods10['post']['reqBody'], headers?: Methods10['post']['reqHeaders'], config?: T }) =>
            fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH8}`
        },
        channels: {
          _channelId_number: (val3: number) => {
            const prefix3 = `${PATH9}/${val3}`

            return {
              chats: {
                _chatId: (val5: number) => {
                  const prefix5 = `${prefix3}${PATH10}/${val5}`

                  return {
                    items: {
                      _itemId: (val7: number) => {
                        const prefix7 = `${prefix5}${PATH11}/${val7}`

                        return {
                          /**
                           * @returns OK
                           */
                          post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'], config?: T }) =>
                            fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, prefix7, POST, option).json(),
                          /**
                           * @returns OK
                           */
                          $post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'], config?: T }) =>
                            fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, prefix7, POST, option).json().then(r => r.body),
                          $path: () => `${prefix}${prefix7}`
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
                get: (option: { query: Methods13['get']['query'], headers?: Methods13['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix3}${PATH12}`, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option: { query: Methods13['get']['query'], headers?: Methods13['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix3}${PATH12}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods13['get']['query'] }) =>
                  `${prefix}${prefix3}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            }
          },
          _channelId_string: (val3: string) => {
            const prefix3 = `${PATH9}/${val3}`

            return {
              chats: {
                _chatId: (val5: string) => {
                  const prefix5 = `${prefix3}${PATH10}/${val5}`

                  return {
                    items: {
                      audio: {
                        /**
                         * Create shared audio item in chat
                         * @returns OK
                         */
                        post: (option: { body: Methods18['post']['reqBody'], headers?: Methods18['post']['reqHeaders'], config?: T }) =>
                          fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, `${prefix5}${PATH13}`, POST, option, 'FormData').json(),
                        /**
                         * Create shared audio item in chat
                         * @returns OK
                         */
                        $post: (option: { body: Methods18['post']['reqBody'], headers?: Methods18['post']['reqHeaders'], config?: T }) =>
                          fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, `${prefix5}${PATH13}`, POST, option, 'FormData').json().then(r => r.body),
                        $path: () => `${prefix}${prefix5}${PATH13}`
                      },
                      image: {
                        /**
                         * Create shared image item in chat
                         * @returns OK
                         */
                        post: (option: { body: Methods19['post']['reqBody'], headers?: Methods19['post']['reqHeaders'], config?: T }) =>
                          fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, `${prefix5}${PATH14}`, POST, option, 'FormData').json(),
                        /**
                         * Create shared image item in chat
                         * @returns OK
                         */
                        $post: (option: { body: Methods19['post']['reqBody'], headers?: Methods19['post']['reqHeaders'], config?: T }) =>
                          fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, `${prefix5}${PATH14}`, POST, option, 'FormData').json().then(r => r.body),
                        $path: () => `${prefix}${prefix5}${PATH14}`
                      },
                      video: {
                        /**
                         * Create shared video item in chat
                         * @returns OK
                         */
                        post: (option: { body: Methods20['post']['reqBody'], headers?: Methods20['post']['reqHeaders'], config?: T }) =>
                          fetch<Methods20['post']['resBody'], BasicHeaders, Methods20['post']['status']>(prefix, `${prefix5}${PATH15}`, POST, option, 'FormData').json(),
                        /**
                         * Create shared video item in chat
                         * @returns OK
                         */
                        $post: (option: { body: Methods20['post']['reqBody'], headers?: Methods20['post']['reqHeaders'], config?: T }) =>
                          fetch<Methods20['post']['resBody'], BasicHeaders, Methods20['post']['status']>(prefix, `${prefix5}${PATH15}`, POST, option, 'FormData').json().then(r => r.body),
                        $path: () => `${prefix}${prefix5}${PATH15}`
                      },
                      /**
                       * Returns a list of items of chat shared content
                       * @returns OK
                       */
                      get: (option: { query: Methods17['get']['query'], headers?: Methods17['get']['reqHeaders'], config?: T }) =>
                        fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, `${prefix5}${PATH11}`, GET, option).json(),
                      /**
                       * Returns a list of items of chat shared content
                       * @returns OK
                       */
                      $get: (option: { query: Methods17['get']['query'], headers?: Methods17['get']['reqHeaders'], config?: T }) =>
                        fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, `${prefix5}${PATH11}`, GET, option).json().then(r => r.body),
                      /**
                       * Create shared item in chat
                       * @param option.body - item to create
                       * @returns OK
                       */
                      post: (option: { body: Methods17['post']['reqBody'], headers?: Methods17['post']['reqHeaders'], config?: T }) =>
                        fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, `${prefix5}${PATH11}`, POST, option).json(),
                      /**
                       * Create shared item in chat
                       * @param option.body - item to create
                       * @returns OK
                       */
                      $post: (option: { body: Methods17['post']['reqBody'], headers?: Methods17['post']['reqHeaders'], config?: T }) =>
                        fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, `${prefix5}${PATH11}`, POST, option).json().then(r => r.body),
                      $path: (option?: { method?: 'get'; query: Methods17['get']['query'] }) =>
                        `${prefix}${prefix5}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                    },
                    itemslist: {
                      /**
                       * Returns chat items by list of ids
                       * @returns OK
                       */
                      get: (option: { query: Methods21['get']['query'], headers?: Methods21['get']['reqHeaders'], config?: T }) =>
                        fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, `${prefix5}${PATH16}`, GET, option).json(),
                      /**
                       * Returns chat items by list of ids
                       * @returns OK
                       */
                      $get: (option: { query: Methods21['get']['query'], headers?: Methods21['get']['reqHeaders'], config?: T }) =>
                        fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, `${prefix5}${PATH16}`, GET, option).json().then(r => r.body),
                      $path: (option?: { method?: 'get'; query: Methods21['get']['query'] }) =>
                        `${prefix}${prefix5}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                    },
                    users: {
                      remove: {
                        /**
                         * Removes members from chat
                         */
                        post: (option: { body: Methods23['post']['reqBody'], headers?: Methods23['post']['reqHeaders'], config?: T }) =>
                          fetch<void, BasicHeaders, Methods23['post']['status']>(prefix, `${prefix5}${PATH18}`, POST, option).send(),
                        /**
                         * Removes members from chat
                         */
                        $post: (option: { body: Methods23['post']['reqBody'], headers?: Methods23['post']['reqHeaders'], config?: T }) =>
                          fetch<void, BasicHeaders, Methods23['post']['status']>(prefix, `${prefix5}${PATH18}`, POST, option).send().then(r => r.body),
                        $path: () => `${prefix}${prefix5}${PATH18}`
                      },
                      /**
                       * Returns chat members with deleted
                       * @returns OK
                       */
                      get: (option?: { headers?: Methods22['get']['reqHeaders'], config?: T }) =>
                        fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, `${prefix5}${PATH17}`, GET, option).json(),
                      /**
                       * Returns chat members with deleted
                       * @returns OK
                       */
                      $get: (option?: { headers?: Methods22['get']['reqHeaders'], config?: T }) =>
                        fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, `${prefix5}${PATH17}`, GET, option).json().then(r => r.body),
                      /**
                       * Adds members to chat
                       */
                      post: (option: { body: Methods22['post']['reqBody'], headers?: Methods22['post']['reqHeaders'], config?: T }) =>
                        fetch<void, BasicHeaders, Methods22['post']['status']>(prefix, `${prefix5}${PATH17}`, POST, option).send(),
                      /**
                       * Adds members to chat
                       */
                      $post: (option: { body: Methods22['post']['reqBody'], headers?: Methods22['post']['reqHeaders'], config?: T }) =>
                        fetch<void, BasicHeaders, Methods22['post']['status']>(prefix, `${prefix5}${PATH17}`, POST, option).send().then(r => r.body),
                      /**
                       * Updates chat members
                       */
                      put: (option: { body: Methods22['put']['reqBody'], headers?: Methods22['put']['reqHeaders'], config?: T }) =>
                        fetch<void, BasicHeaders, Methods22['put']['status']>(prefix, `${prefix5}${PATH17}`, PUT, option).send(),
                      /**
                       * Updates chat members
                       */
                      $put: (option: { body: Methods22['put']['reqBody'], headers?: Methods22['put']['reqHeaders'], config?: T }) =>
                        fetch<void, BasicHeaders, Methods22['put']['status']>(prefix, `${prefix5}${PATH17}`, PUT, option).send().then(r => r.body),
                      $path: () => `${prefix}${prefix5}${PATH17}`
                    },
                    /**
                     * Returns users chats in channel
                     * @returns OK
                     */
                    get: (option?: { headers?: Methods16['get']['reqHeaders'], config?: T }) =>
                      fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, prefix5, GET, option).json(),
                    /**
                     * Returns users chats in channel
                     * @returns OK
                     */
                    $get: (option?: { headers?: Methods16['get']['reqHeaders'], config?: T }) =>
                      fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                    /**
                     * Updates chat
                     */
                    put: (option: { body: Methods16['put']['reqBody'], headers?: Methods16['put']['reqHeaders'], config?: T }) =>
                      fetch<void, BasicHeaders, Methods16['put']['status']>(prefix, prefix5, PUT, option).send(),
                    /**
                     * Updates chat
                     */
                    $put: (option: { body: Methods16['put']['reqBody'], headers?: Methods16['put']['reqHeaders'], config?: T }) =>
                      fetch<void, BasicHeaders, Methods16['put']['status']>(prefix, prefix5, PUT, option).send().then(r => r.body),
                    /**
                     * Deletes chat
                     */
                    delete: (option?: { headers?: Methods16['delete']['reqHeaders'], config?: T }) =>
                      fetch<void, BasicHeaders, Methods16['delete']['status']>(prefix, prefix5, DELETE, option).send(),
                    /**
                     * Deletes chat
                     */
                    $delete: (option?: { headers?: Methods16['delete']['reqHeaders'], config?: T }) =>
                      fetch<void, BasicHeaders, Methods16['delete']['status']>(prefix, prefix5, DELETE, option).send().then(r => r.body),
                    $path: () => `${prefix}${prefix5}`
                  }
                },
                /**
                 * Returns users chats in channel
                 * @returns OK
                 */
                get: (option?: { headers?: Methods15['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, `${prefix3}${PATH10}`, GET, option).json(),
                /**
                 * Returns users chats in channel
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods15['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, `${prefix3}${PATH10}`, GET, option).json().then(r => r.body),
                /**
                 * Creates chat
                 * @returns OK
                 */
                post: (option: { body: Methods15['post']['reqBody'], headers?: Methods15['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods15['post']['resBody'], BasicHeaders, Methods15['post']['status']>(prefix, `${prefix3}${PATH10}`, POST, option).json(),
                /**
                 * Creates chat
                 * @returns OK
                 */
                $post: (option: { body: Methods15['post']['reqBody'], headers?: Methods15['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods15['post']['resBody'], BasicHeaders, Methods15['post']['status']>(prefix, `${prefix3}${PATH10}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH10}`
              },
              notifications: {
                /**
                 * @returns OK
                 */
                get: (option: { query: Methods24['get']['query'], headers?: Methods24['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, `${prefix3}${PATH19}`, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option: { query: Methods24['get']['query'], headers?: Methods24['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, `${prefix3}${PATH19}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods24['get']['query'] }) =>
                  `${prefix}${prefix3}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              /**
               * Returns a list of channel mixes with pre-fetching their contents
               */
              get: (option: { query: Methods14['get']['query'], headers?: Methods14['get']['reqHeaders'], config?: T }) =>
                fetch<void, BasicHeaders, Methods14['get']['status']>(prefix, prefix3, GET, option).send(),
              /**
               * Returns a list of channel mixes with pre-fetching their contents
               */
              $get: (option: { query: Methods14['get']['query'], headers?: Methods14['get']['reqHeaders'], config?: T }) =>
                fetch<void, BasicHeaders, Methods14['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods14['get']['query'] }) =>
                `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          /**
           * @returns OK
           */
          get: (option: { query: Methods11['get']['query'], headers?: Methods11['get']['reqHeaders'], config?: T }) =>
            fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH9, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option: { query: Methods11['get']['query'], headers?: Methods11['get']['reqHeaders'], config?: T }) =>
            fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods11['get']['query'] }) =>
            `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        chats: {
          _chatId_number: (val3: number) => {
            const prefix3 = `${PATH20}/${val3}`

            return {
              items: {
                _itemId: (val5: number) => {
                  const prefix5 = `${prefix3}${PATH11}/${val5}`

                  return {
                    /**
                     * @returns OK
                     */
                    post: (option: { body: Methods25['post']['reqBody'], headers?: Methods25['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods25['post']['resBody'], BasicHeaders, Methods25['post']['status']>(prefix, prefix5, POST, option).json(),
                    /**
                     * @returns OK
                     */
                    $post: (option: { body: Methods25['post']['reqBody'], headers?: Methods25['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods25['post']['resBody'], BasicHeaders, Methods25['post']['status']>(prefix, prefix5, POST, option).json().then(r => r.body),
                    /**
                     * @returns OK
                     */
                    get: (option?: { headers?: Methods25['get']['reqHeaders'], config?: T }) =>
                      fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, prefix5, GET, option).json(),
                    /**
                     * @returns OK
                     */
                    $get: (option?: { headers?: Methods25['get']['reqHeaders'], config?: T }) =>
                      fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix5}`
                  }
                }
              }
            }
          },
          _chatId_string: (val3: string) => {
            const prefix3 = `${PATH20}/${val3}`

            return {
              items: {
                audio: {
                  /**
                   * Create shared audio item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods27['post']['reqBody'], headers?: Methods27['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods27['post']['resBody'], BasicHeaders, Methods27['post']['status']>(prefix, `${prefix3}${PATH13}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared audio item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods27['post']['reqBody'], headers?: Methods27['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods27['post']['resBody'], BasicHeaders, Methods27['post']['status']>(prefix, `${prefix3}${PATH13}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH13}`
                },
                image: {
                  /**
                   * Create shared image item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods28['post']['reqBody'], headers?: Methods28['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods28['post']['resBody'], BasicHeaders, Methods28['post']['status']>(prefix, `${prefix3}${PATH14}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared image item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods28['post']['reqBody'], headers?: Methods28['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods28['post']['resBody'], BasicHeaders, Methods28['post']['status']>(prefix, `${prefix3}${PATH14}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH14}`
                },
                video: {
                  /**
                   * Create shared video item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods29['post']['reqBody'], headers?: Methods29['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods29['post']['resBody'], BasicHeaders, Methods29['post']['status']>(prefix, `${prefix3}${PATH15}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared video item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods29['post']['reqBody'], headers?: Methods29['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods29['post']['resBody'], BasicHeaders, Methods29['post']['status']>(prefix, `${prefix3}${PATH15}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH15}`
                },
                /**
                 * Returns a list of items of chat shared content
                 * @returns OK
                 */
                get: (option?: { query?: Methods26['get']['query'], headers?: Methods26['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, `${prefix3}${PATH11}`, GET, option).json(),
                /**
                 * Returns a list of items of chat shared content
                 * @returns OK
                 */
                $get: (option?: { query?: Methods26['get']['query'], headers?: Methods26['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, `${prefix3}${PATH11}`, GET, option).json().then(r => r.body),
                /**
                 * Create shared item in chat
                 * @param option.body - item to create
                 * @returns OK
                 */
                post: (option: { body: Methods26['post']['reqBody'], headers?: Methods26['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, `${prefix3}${PATH11}`, POST, option).json(),
                /**
                 * Create shared item in chat
                 * @param option.body - item to create
                 * @returns OK
                 */
                $post: (option: { body: Methods26['post']['reqBody'], headers?: Methods26['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, `${prefix3}${PATH11}`, POST, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods26['get']['query'] }) =>
                  `${prefix}${prefix3}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            }
          },
          keys: {
            /**
             * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
             * @returns OK
             */
            get: (option?: { headers?: Methods30['get']['reqHeaders'], config?: T }) =>
              fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH21, GET, option).json(),
            /**
             * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
             * @returns OK
             */
            $get: (option?: { headers?: Methods30['get']['reqHeaders'], config?: T }) =>
              fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH21}`
          }
        },
        extension: {
          audio: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods31['post']['reqBody'], headers?: Methods31['post']['reqHeaders'], config?: T }) =>
              fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH22, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods31['post']['reqBody'], headers?: Methods31['post']['reqHeaders'], config?: T }) =>
              fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH22, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${PATH22}`
          },
          image: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods32['post']['reqBody'], headers?: Methods32['post']['reqHeaders'], config?: T }) =>
              fetch<Methods32['post']['resBody'], BasicHeaders, Methods32['post']['status']>(prefix, PATH23, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods32['post']['reqBody'], headers?: Methods32['post']['reqHeaders'], config?: T }) =>
              fetch<Methods32['post']['resBody'], BasicHeaders, Methods32['post']['status']>(prefix, PATH23, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${PATH23}`
          },
          parse: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods33['post']['reqBody'], headers?: Methods33['post']['reqHeaders'], config?: T }) =>
              fetch<Methods33['post']['resBody'], BasicHeaders, Methods33['post']['status']>(prefix, PATH24, POST, option).json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods33['post']['reqBody'], headers?: Methods33['post']['reqHeaders'], config?: T }) =>
              fetch<Methods33['post']['resBody'], BasicHeaders, Methods33['post']['status']>(prefix, PATH24, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH24}`
          },
          story: {
            _storyId: (val4: string) => {
              const prefix4 = `${PATH25}/${val4}`

              return {
                audio: {
                  /**
                   * @returns OK
                   */
                  post: (option: { body: Methods35['post']['reqBody'], headers?: Methods35['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods35['post']['resBody'], BasicHeaders, Methods35['post']['status']>(prefix, `${prefix4}${PATH26}`, POST, option, 'FormData').json(),
                  /**
                   * @returns OK
                   */
                  $post: (option: { body: Methods35['post']['reqBody'], headers?: Methods35['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods35['post']['resBody'], BasicHeaders, Methods35['post']['status']>(prefix, `${prefix4}${PATH26}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH26}`
                },
                image: {
                  /**
                   * @returns OK
                   */
                  post: (option: { body: Methods36['post']['reqBody'], headers?: Methods36['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods36['post']['resBody'], BasicHeaders, Methods36['post']['status']>(prefix, `${prefix4}${PATH27}`, POST, option, 'FormData').json(),
                  /**
                   * @returns OK
                   */
                  $post: (option: { body: Methods36['post']['reqBody'], headers?: Methods36['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods36['post']['resBody'], BasicHeaders, Methods36['post']['status']>(prefix, `${prefix4}${PATH27}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH27}`
                },
                video: {
                  /**
                   * @returns OK
                   */
                  post: (option: { body: Methods37['post']['reqBody'], headers?: Methods37['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods37['post']['resBody'], BasicHeaders, Methods37['post']['status']>(prefix, `${prefix4}${PATH28}`, POST, option, 'FormData').json(),
                  /**
                   * @returns OK
                   */
                  $post: (option: { body: Methods37['post']['reqBody'], headers?: Methods37['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods37['post']['resBody'], BasicHeaders, Methods37['post']['status']>(prefix, `${prefix4}${PATH28}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH28}`
                },
                /**
                 * @returns OK
                 */
                post: (option: { body: Methods34['post']['reqBody'], headers?: Methods34['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods34['post']['resBody'], BasicHeaders, Methods34['post']['status']>(prefix, prefix4, POST, option, 'FormData').json(),
                /**
                 * @returns OK
                 */
                $post: (option: { body: Methods34['post']['reqBody'], headers?: Methods34['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods34['post']['resBody'], BasicHeaders, Methods34['post']['status']>(prefix, prefix4, POST, option, 'FormData').json().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            }
          },
          video: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods38['post']['reqBody'], headers?: Methods38['post']['reqHeaders'], config?: T }) =>
              fetch<Methods38['post']['resBody'], BasicHeaders, Methods38['post']['status']>(prefix, PATH29, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods38['post']['reqBody'], headers?: Methods38['post']['reqHeaders'], config?: T }) =>
              fetch<Methods38['post']['resBody'], BasicHeaders, Methods38['post']['status']>(prefix, PATH29, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${PATH29}`
          }
        },
        fcm_token: {
          /**
           * Save newly updated firebase cloud messaging device token
           */
          post: (option: { body: Methods39['post']['reqBody'], headers?: Methods39['post']['reqHeaders'], config?: T }) =>
            fetch<void, BasicHeaders, Methods39['post']['status']>(prefix, PATH30, POST, option).send(),
          /**
           * Save newly updated firebase cloud messaging device token
           */
          $post: (option: { body: Methods39['post']['reqBody'], headers?: Methods39['post']['reqHeaders'], config?: T }) =>
            fetch<void, BasicHeaders, Methods39['post']['status']>(prefix, PATH30, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH30}`
        },
        info: {
          /**
           * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
           * @returns OK
           */
          get: (option?: { headers?: Methods40['get']['reqHeaders'], config?: T }) =>
            fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, PATH31, GET, option).json(),
          /**
           * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
           * @returns OK
           */
          $get: (option?: { headers?: Methods40['get']['reqHeaders'], config?: T }) =>
            fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH31}`
        },
        login: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods41['post']['reqBody'], headers?: Methods41['post']['reqHeaders'], config?: T }) =>
            fetch<Methods41['post']['resBody'], BasicHeaders, Methods41['post']['status']>(prefix, PATH32, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods41['post']['reqBody'], headers?: Methods41['post']['reqHeaders'], config?: T }) =>
            fetch<Methods41['post']['resBody'], BasicHeaders, Methods41['post']['status']>(prefix, PATH32, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH32}`
        },
        logout: {
          post: (option: { body: Methods42['post']['reqBody'], headers?: Methods42['post']['reqHeaders'], config?: T }) =>
            fetch<void, BasicHeaders, Methods42['post']['status']>(prefix, PATH33, POST, option).send(),
          $post: (option: { body: Methods42['post']['reqBody'], headers?: Methods42['post']['reqHeaders'], config?: T }) =>
            fetch<void, BasicHeaders, Methods42['post']['status']>(prefix, PATH33, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH33}`
        },
        me: {
          /**
           * @returns OK
           */
          get: (option?: { headers?: Methods43['get']['reqHeaders'], config?: T }) =>
            fetch<Methods43['get']['resBody'], BasicHeaders, Methods43['get']['status']>(prefix, PATH34, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { headers?: Methods43['get']['reqHeaders'], config?: T }) =>
            fetch<Methods43['get']['resBody'], BasicHeaders, Methods43['get']['status']>(prefix, PATH34, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH34}`
        },
        organisation: {
          users: {
            /**
             * @returns OK
             */
            get: (option: { query: Methods45['get']['query'], headers?: Methods45['get']['reqHeaders'], config?: T }) =>
              fetch<Methods45['get']['resBody'], BasicHeaders, Methods45['get']['status']>(prefix, PATH36, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option: { query: Methods45['get']['query'], headers?: Methods45['get']['reqHeaders'], config?: T }) =>
              fetch<Methods45['get']['resBody'], BasicHeaders, Methods45['get']['status']>(prefix, PATH36, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods45['get']['query'] }) =>
              `${prefix}${PATH36}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          /**
           * @returns OK
           */
          get: (option?: { headers?: Methods44['get']['reqHeaders'], config?: T }) =>
            fetch<Methods44['get']['resBody'], BasicHeaders, Methods44['get']['status']>(prefix, PATH35, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { headers?: Methods44['get']['reqHeaders'], config?: T }) =>
            fetch<Methods44['get']['resBody'], BasicHeaders, Methods44['get']['status']>(prefix, PATH35, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH35}`
        },
        stories: {
          _storyId: (val3: number) => {
            const prefix3 = `${PATH37}/${val3}`

            return {
              items: {
                _itemId: (val5: number) => {
                  const prefix5 = `${prefix3}${PATH11}/${val5}`

                  return {
                    reaction: {
                      /**
                       * @returns OK
                       */
                      post: (option: { body: Methods48['post']['reqBody'], headers?: Methods48['post']['reqHeaders'], config?: T }) =>
                        fetch<Methods48['post']['resBody'], BasicHeaders, Methods48['post']['status']>(prefix, `${prefix5}${PATH38}`, POST, option).json(),
                      /**
                       * @returns OK
                       */
                      $post: (option: { body: Methods48['post']['reqBody'], headers?: Methods48['post']['reqHeaders'], config?: T }) =>
                        fetch<Methods48['post']['resBody'], BasicHeaders, Methods48['post']['status']>(prefix, `${prefix5}${PATH38}`, POST, option).json().then(r => r.body),
                      $path: () => `${prefix}${prefix5}${PATH38}`
                    },
                    /**
                     * @returns OK
                     */
                    get: (option?: { headers?: Methods47['get']['reqHeaders'], config?: T }) =>
                      fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, prefix5, GET, option).json(),
                    /**
                     * @returns OK
                     */
                    $get: (option?: { headers?: Methods47['get']['reqHeaders'], config?: T }) =>
                      fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix5}`
                  }
                },
                /**
                 * Returns a story content with support pagination
                 * @returns OK
                 */
                get: (option: { query: Methods46['get']['query'], headers?: Methods46['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, `${prefix3}${PATH11}`, GET, option).json(),
                /**
                 * Returns a story content with support pagination
                 * @returns OK
                 */
                $get: (option: { query: Methods46['get']['query'], headers?: Methods46['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, `${prefix3}${PATH11}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods46['get']['query'] }) =>
                  `${prefix}${prefix3}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            }
          }
        },
        user: {
          _userId: (val3: string) => {
            const prefix3 = `${PATH39}/${val3}`

            return {
              /**
               * @returns OK
               */
              get: (option?: { headers?: Methods50['get']['reqHeaders'], config?: T }) =>
                fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns OK
               */
              $get: (option?: { headers?: Methods50['get']['reqHeaders'], config?: T }) =>
                fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          profile: {
            put: (option: { body: Methods51['put']['reqBody'], headers?: Methods51['put']['reqHeaders'], config?: T }) =>
              fetch<void, BasicHeaders, Methods51['put']['status']>(prefix, PATH40, PUT, option, 'FormData').send(),
            $put: (option: { body: Methods51['put']['reqBody'], headers?: Methods51['put']['reqHeaders'], config?: T }) =>
              fetch<void, BasicHeaders, Methods51['put']['status']>(prefix, PATH40, PUT, option, 'FormData').send().then(r => r.body),
            $path: () => `${prefix}${PATH40}`
          },
          /**
           * @returns OK
           */
          get: (option?: { headers?: Methods49['get']['reqHeaders'], config?: T }) =>
            fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, PATH39, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { headers?: Methods49['get']['reqHeaders'], config?: T }) =>
            fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, PATH39, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH39}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
