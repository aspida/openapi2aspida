/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './2fa'
import { Methods as Methods1 } from './channels'
import { Methods as Methods2 } from './channels/_channelId@number/chats/_chatId@number/items/_itemId@number'
import { Methods as Methods3 } from './channels/_channelId@number/news-feed'
import { Methods as Methods4 } from './channels/_channelId@string'
import { Methods as Methods5 } from './channels/_channelId@string/chats'
import { Methods as Methods6 } from './channels/_channelId@string/chats/_chatId@string'
import { Methods as Methods7 } from './channels/_channelId@string/chats/_chatId@string/items'
import { Methods as Methods8 } from './channels/_channelId@string/chats/_chatId@string/items/audio'
import { Methods as Methods9 } from './channels/_channelId@string/chats/_chatId@string/items/image'
import { Methods as Methods10 } from './channels/_channelId@string/chats/_chatId@string/items/video'
import { Methods as Methods11 } from './channels/_channelId@string/chats/_chatId@string/itemslist'
import { Methods as Methods12 } from './channels/_channelId@string/chats/_chatId@string/users'
import { Methods as Methods13 } from './channels/_channelId@string/chats/_chatId@string/users/remove'
import { Methods as Methods14 } from './channels/_channelId@string/notifications'
import { Methods as Methods15 } from './chats/_chatId@number/items/_itemId@number'
import { Methods as Methods16 } from './chats/_chatId@string/items'
import { Methods as Methods17 } from './chats/_chatId@string/items/audio'
import { Methods as Methods18 } from './chats/_chatId@string/items/image'
import { Methods as Methods19 } from './chats/_chatId@string/items/video'
import { Methods as Methods20 } from './chats/keys'
import { Methods as Methods21 } from './extension/audio'
import { Methods as Methods22 } from './extension/image'
import { Methods as Methods23 } from './extension/parse'
import { Methods as Methods24 } from './extension/story/_storyId@string'
import { Methods as Methods25 } from './extension/story/_storyId@string/audio'
import { Methods as Methods26 } from './extension/story/_storyId@string/image'
import { Methods as Methods27 } from './extension/story/_storyId@string/video'
import { Methods as Methods28 } from './extension/video'
import { Methods as Methods29 } from './fcm_token'
import { Methods as Methods30 } from './info'
import { Methods as Methods31 } from './login'
import { Methods as Methods32 } from './logout'
import { Methods as Methods33 } from './me'
import { Methods as Methods34 } from './organisation'
import { Methods as Methods35 } from './organisation/users'
import { Methods as Methods36 } from './stories/_storyId@number/items'
import { Methods as Methods37 } from './stories/_storyId@number/items/_itemId@number'
import { Methods as Methods38 } from './stories/_storyId@number/items/_itemId@number/reaction'
import { Methods as Methods39 } from './user'
import { Methods as Methods40 } from './user/_userId@string'
import { Methods as Methods41 } from './user/profile'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v3/2fa'
  const PATH1 = '/api/v3/channels'
  const PATH2 = '/chats'
  const PATH3 = '/items'
  const PATH4 = '/news-feed'
  const PATH5 = '/items/audio'
  const PATH6 = '/items/image'
  const PATH7 = '/items/video'
  const PATH8 = '/itemslist'
  const PATH9 = '/users'
  const PATH10 = '/users/remove'
  const PATH11 = '/notifications'
  const PATH12 = '/api/v3/chats'
  const PATH13 = '/api/v3/chats/keys'
  const PATH14 = '/api/v3/extension/audio'
  const PATH15 = '/api/v3/extension/image'
  const PATH16 = '/api/v3/extension/parse'
  const PATH17 = '/api/v3/extension/story'
  const PATH18 = '/audio'
  const PATH19 = '/image'
  const PATH20 = '/video'
  const PATH21 = '/api/v3/extension/video'
  const PATH22 = '/api/v3/fcm_token'
  const PATH23 = '/api/v3/info'
  const PATH24 = '/api/v3/login'
  const PATH25 = '/api/v3/logout'
  const PATH26 = '/api/v3/me'
  const PATH27 = '/api/v3/organisation'
  const PATH28 = '/api/v3/organisation/users'
  const PATH29 = '/api/v3/stories'
  const PATH30 = '/reaction'
  const PATH31 = '/api/v3/user'
  const PATH32 = '/api/v3/user/profile'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    $2fa: {
      post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    channels: {
      _channelId_0: (val0: number) => {
        const prefix0 = `${PATH1}/${val0}`

        return {
          chats: {
            _chatId: (val1: number) => {
              const prefix1 = `${prefix0}${PATH2}/${val1}`

              return {
                items: {
                  _itemId: (val2: number) => {
                    const prefix2 = `${prefix1}${PATH3}/${val2}`

                    return {
                      post: (option?: { body?: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
                        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, prefix2, POST, option).json(),
                      $post: (option?: { body?: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
                        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, prefix2, POST, option).json().then(r => r.body),
                      $path: () => `${prefix}${prefix2}`
                    }
                  }
                }
              }
            }
          },
          news_feed: {
            get: (option?: { query?: Methods3['get']['query'], headers?: Methods3['get']['reqHeaders'], config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json(),
            $get: (option?: { query?: Methods3['get']['query'], headers?: Methods3['get']['reqHeaders'], config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
              `${prefix}${prefix0}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      _channelId_1: (val3: string) => {
        const prefix3 = `${PATH1}/${val3}`

        return {
          chats: {
            _chatId: (val4: string) => {
              const prefix4 = `${prefix3}${PATH2}/${val4}`

              return {
                items: {
                  audio: {
                    post: (option?: { body?: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix4}${PATH5}`, POST, option, 'FormData').json(),
                    $post: (option?: { body?: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix4}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
                    $path: () => `${prefix}${prefix4}${PATH5}`
                  },
                  image: {
                    post: (option?: { body?: Methods9['post']['reqBody'], headers?: Methods9['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix4}${PATH6}`, POST, option, 'FormData').json(),
                    $post: (option?: { body?: Methods9['post']['reqBody'], headers?: Methods9['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix4}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
                    $path: () => `${prefix}${prefix4}${PATH6}`
                  },
                  video: {
                    post: (option?: { body?: Methods10['post']['reqBody'], headers?: Methods10['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix4}${PATH7}`, POST, option, 'FormData').json(),
                    $post: (option?: { body?: Methods10['post']['reqBody'], headers?: Methods10['post']['reqHeaders'], config?: T }) =>
                      fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix4}${PATH7}`, POST, option, 'FormData').json().then(r => r.body),
                    $path: () => `${prefix}${prefix4}${PATH7}`
                  },
                  get: (option?: { query?: Methods7['get']['query'], headers?: Methods7['get']['reqHeaders'], config?: T }) =>
                    fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix4}${PATH3}`, GET, option).json(),
                  $get: (option?: { query?: Methods7['get']['query'], headers?: Methods7['get']['reqHeaders'], config?: T }) =>
                    fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix4}${PATH3}`, GET, option).json().then(r => r.body),
                  post: (option: { body: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix4}${PATH3}`, POST, option).json(),
                  $post: (option: { body: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix4}${PATH3}`, POST, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get'; query: Methods7['get']['query'] }) =>
                    `${prefix}${prefix4}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                },
                itemslist: {
                  get: (option: { query: Methods11['get']['query'], headers?: Methods11['get']['reqHeaders'], config?: T }) =>
                    fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix4}${PATH8}`, GET, option).json(),
                  $get: (option: { query: Methods11['get']['query'], headers?: Methods11['get']['reqHeaders'], config?: T }) =>
                    fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix4}${PATH8}`, GET, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get'; query: Methods11['get']['query'] }) =>
                    `${prefix}${prefix4}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                },
                users: {
                  remove: {
                    post: (option: { body: Methods13['post']['reqBody'], headers?: Methods13['post']['reqHeaders'], config?: T }) =>
                      fetch<void, BasicHeaders, Methods13['post']['status']>(prefix, `${prefix4}${PATH10}`, POST, option).send(),
                    $post: (option: { body: Methods13['post']['reqBody'], headers?: Methods13['post']['reqHeaders'], config?: T }) =>
                      fetch<void, BasicHeaders, Methods13['post']['status']>(prefix, `${prefix4}${PATH10}`, POST, option).send().then(r => r.body),
                    $path: () => `${prefix}${prefix4}${PATH10}`
                  },
                  get: (option?: { headers?: Methods12['get']['reqHeaders'], config?: T }) =>
                    fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix4}${PATH9}`, GET, option).json(),
                  $get: (option?: { headers?: Methods12['get']['reqHeaders'], config?: T }) =>
                    fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix4}${PATH9}`, GET, option).json().then(r => r.body),
                  post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods12['post']['status']>(prefix, `${prefix4}${PATH9}`, POST, option).send(),
                  $post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods12['post']['status']>(prefix, `${prefix4}${PATH9}`, POST, option).send().then(r => r.body),
                  put: (option: { body: Methods12['put']['reqBody'], headers?: Methods12['put']['reqHeaders'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods12['put']['status']>(prefix, `${prefix4}${PATH9}`, PUT, option).send(),
                  $put: (option: { body: Methods12['put']['reqBody'], headers?: Methods12['put']['reqHeaders'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods12['put']['status']>(prefix, `${prefix4}${PATH9}`, PUT, option).send().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH9}`
                },
                get: (option?: { headers?: Methods6['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix4, GET, option).json(),
                $get: (option?: { headers?: Methods6['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
                put: (option: { body: Methods6['put']['reqBody'], headers?: Methods6['put']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods6['put']['status']>(prefix, prefix4, PUT, option).send(),
                $put: (option: { body: Methods6['put']['reqBody'], headers?: Methods6['put']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods6['put']['status']>(prefix, prefix4, PUT, option).send().then(r => r.body),
                delete: (option?: { headers?: Methods6['delete']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                $delete: (option?: { headers?: Methods6['delete']['reqHeaders'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            },
            get: (option?: { headers?: Methods5['get']['reqHeaders'], config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix3}${PATH2}`, GET, option).json(),
            $get: (option?: { headers?: Methods5['get']['reqHeaders'], config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix3}${PATH2}`, GET, option).json().then(r => r.body),
            post: (option: { body: Methods5['post']['reqBody'], headers?: Methods5['post']['reqHeaders'], config?: T }) =>
              fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix3}${PATH2}`, POST, option).json(),
            $post: (option: { body: Methods5['post']['reqBody'], headers?: Methods5['post']['reqHeaders'], config?: T }) =>
              fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix3}${PATH2}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix3}${PATH2}`
          },
          notifications: {
            get: (option?: { query?: Methods14['get']['query'], headers?: Methods14['get']['reqHeaders'], config?: T }) =>
              fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix3}${PATH11}`, GET, option).json(),
            $get: (option?: { query?: Methods14['get']['query'], headers?: Methods14['get']['reqHeaders'], config?: T }) =>
              fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix3}${PATH11}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods14['get']['query'] }) =>
              `${prefix}${prefix3}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          get: (option?: { query?: Methods4['get']['query'], headers?: Methods4['get']['reqHeaders'], config?: T }) =>
            fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, prefix3, GET, option).send(),
          $get: (option?: { query?: Methods4['get']['query'], headers?: Methods4['get']['reqHeaders'], config?: T }) =>
            fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
            `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option?: { query?: Methods1['get']['query'], headers?: Methods1['get']['reqHeaders'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { query?: Methods1['get']['query'], headers?: Methods1['get']['reqHeaders'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    chats: {
      _chatId_0: (val5: number) => {
        const prefix5 = `${PATH12}/${val5}`

        return {
          items: {
            _itemId: (val6: number) => {
              const prefix6 = `${prefix5}${PATH3}/${val6}`

              return {
                post: (option?: { body?: Methods15['post']['reqBody'], headers?: Methods15['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods15['post']['resBody'], BasicHeaders, Methods15['post']['status']>(prefix, prefix6, POST, option).json(),
                $post: (option?: { body?: Methods15['post']['reqBody'], headers?: Methods15['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods15['post']['resBody'], BasicHeaders, Methods15['post']['status']>(prefix, prefix6, POST, option).json().then(r => r.body),
                get: (option?: { headers?: Methods15['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix6, GET, option).json(),
                $get: (option?: { headers?: Methods15['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix6, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix6}`
              }
            }
          }
        }
      },
      _chatId_1: (val7: string) => {
        const prefix7 = `${PATH12}/${val7}`

        return {
          items: {
            audio: {
              post: (option?: { body?: Methods17['post']['reqBody'], headers?: Methods17['post']['reqHeaders'], config?: T }) =>
                fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, `${prefix7}${PATH5}`, POST, option, 'FormData').json(),
              $post: (option?: { body?: Methods17['post']['reqBody'], headers?: Methods17['post']['reqHeaders'], config?: T }) =>
                fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, `${prefix7}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix7}${PATH5}`
            },
            image: {
              post: (option?: { body?: Methods18['post']['reqBody'], headers?: Methods18['post']['reqHeaders'], config?: T }) =>
                fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, `${prefix7}${PATH6}`, POST, option, 'FormData').json(),
              $post: (option?: { body?: Methods18['post']['reqBody'], headers?: Methods18['post']['reqHeaders'], config?: T }) =>
                fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, `${prefix7}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix7}${PATH6}`
            },
            video: {
              post: (option?: { body?: Methods19['post']['reqBody'], headers?: Methods19['post']['reqHeaders'], config?: T }) =>
                fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, `${prefix7}${PATH7}`, POST, option, 'FormData').json(),
              $post: (option?: { body?: Methods19['post']['reqBody'], headers?: Methods19['post']['reqHeaders'], config?: T }) =>
                fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, `${prefix7}${PATH7}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix7}${PATH7}`
            },
            get: (option?: { query?: Methods16['get']['query'], headers?: Methods16['get']['reqHeaders'], config?: T }) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix7}${PATH3}`, GET, option).json(),
            $get: (option?: { query?: Methods16['get']['query'], headers?: Methods16['get']['reqHeaders'], config?: T }) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix7}${PATH3}`, GET, option).json().then(r => r.body),
            post: (option: { body: Methods16['post']['reqBody'], headers?: Methods16['post']['reqHeaders'], config?: T }) =>
              fetch<Methods16['post']['resBody'], BasicHeaders, Methods16['post']['status']>(prefix, `${prefix7}${PATH3}`, POST, option).json(),
            $post: (option: { body: Methods16['post']['reqBody'], headers?: Methods16['post']['reqHeaders'], config?: T }) =>
              fetch<Methods16['post']['resBody'], BasicHeaders, Methods16['post']['status']>(prefix, `${prefix7}${PATH3}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods16['get']['query'] }) =>
              `${prefix}${prefix7}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      keys: {
        get: (option?: { headers?: Methods20['get']['reqHeaders'], config?: T }) =>
          fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, PATH13, GET, option).json(),
        $get: (option?: { headers?: Methods20['get']['reqHeaders'], config?: T }) =>
          fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH13}`
      }
    },
    extension: {
      audio: {
        post: (option?: { body?: Methods21['post']['reqBody'], headers?: Methods21['post']['reqHeaders'], config?: T }) =>
          fetch<Methods21['post']['resBody'], BasicHeaders, Methods21['post']['status']>(prefix, PATH14, POST, option, 'FormData').json(),
        $post: (option?: { body?: Methods21['post']['reqBody'], headers?: Methods21['post']['reqHeaders'], config?: T }) =>
          fetch<Methods21['post']['resBody'], BasicHeaders, Methods21['post']['status']>(prefix, PATH14, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH14}`
      },
      image: {
        post: (option?: { body?: Methods22['post']['reqBody'], headers?: Methods22['post']['reqHeaders'], config?: T }) =>
          fetch<Methods22['post']['resBody'], BasicHeaders, Methods22['post']['status']>(prefix, PATH15, POST, option, 'FormData').json(),
        $post: (option?: { body?: Methods22['post']['reqBody'], headers?: Methods22['post']['reqHeaders'], config?: T }) =>
          fetch<Methods22['post']['resBody'], BasicHeaders, Methods22['post']['status']>(prefix, PATH15, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`
      },
      parse: {
        post: (option: { body: Methods23['post']['reqBody'], headers?: Methods23['post']['reqHeaders'], config?: T }) =>
          fetch<Methods23['post']['resBody'], BasicHeaders, Methods23['post']['status']>(prefix, PATH16, POST, option).json(),
        $post: (option: { body: Methods23['post']['reqBody'], headers?: Methods23['post']['reqHeaders'], config?: T }) =>
          fetch<Methods23['post']['resBody'], BasicHeaders, Methods23['post']['status']>(prefix, PATH16, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH16}`
      },
      story: {
        _storyId: (val8: string) => {
          const prefix8 = `${PATH17}/${val8}`

          return {
            audio: {
              post: (option?: { body?: Methods25['post']['reqBody'], headers?: Methods25['post']['reqHeaders'], config?: T }) =>
                fetch<Methods25['post']['resBody'], BasicHeaders, Methods25['post']['status']>(prefix, `${prefix8}${PATH18}`, POST, option, 'FormData').json(),
              $post: (option?: { body?: Methods25['post']['reqBody'], headers?: Methods25['post']['reqHeaders'], config?: T }) =>
                fetch<Methods25['post']['resBody'], BasicHeaders, Methods25['post']['status']>(prefix, `${prefix8}${PATH18}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix8}${PATH18}`
            },
            image: {
              post: (option?: { body?: Methods26['post']['reqBody'], headers?: Methods26['post']['reqHeaders'], config?: T }) =>
                fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, `${prefix8}${PATH19}`, POST, option, 'FormData').json(),
              $post: (option?: { body?: Methods26['post']['reqBody'], headers?: Methods26['post']['reqHeaders'], config?: T }) =>
                fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, `${prefix8}${PATH19}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix8}${PATH19}`
            },
            video: {
              post: (option?: { body?: Methods27['post']['reqBody'], headers?: Methods27['post']['reqHeaders'], config?: T }) =>
                fetch<Methods27['post']['resBody'], BasicHeaders, Methods27['post']['status']>(prefix, `${prefix8}${PATH20}`, POST, option, 'FormData').json(),
              $post: (option?: { body?: Methods27['post']['reqBody'], headers?: Methods27['post']['reqHeaders'], config?: T }) =>
                fetch<Methods27['post']['resBody'], BasicHeaders, Methods27['post']['status']>(prefix, `${prefix8}${PATH20}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix8}${PATH20}`
            },
            post: (option: { body: Methods24['post']['reqBody'], headers?: Methods24['post']['reqHeaders'], config?: T }) =>
              fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, prefix8, POST, option, 'FormData').json(),
            $post: (option: { body: Methods24['post']['reqBody'], headers?: Methods24['post']['reqHeaders'], config?: T }) =>
              fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, prefix8, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix8}`
          }
        }
      },
      video: {
        post: (option?: { body?: Methods28['post']['reqBody'], headers?: Methods28['post']['reqHeaders'], config?: T }) =>
          fetch<Methods28['post']['resBody'], BasicHeaders, Methods28['post']['status']>(prefix, PATH21, POST, option, 'FormData').json(),
        $post: (option?: { body?: Methods28['post']['reqBody'], headers?: Methods28['post']['reqHeaders'], config?: T }) =>
          fetch<Methods28['post']['resBody'], BasicHeaders, Methods28['post']['status']>(prefix, PATH21, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH21}`
      }
    },
    fcm_token: {
      post: (option: { body: Methods29['post']['reqBody'], headers?: Methods29['post']['reqHeaders'], config?: T }) =>
        fetch<void, BasicHeaders, Methods29['post']['status']>(prefix, PATH22, POST, option).send(),
      $post: (option: { body: Methods29['post']['reqBody'], headers?: Methods29['post']['reqHeaders'], config?: T }) =>
        fetch<void, BasicHeaders, Methods29['post']['status']>(prefix, PATH22, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH22}`
    },
    info: {
      get: (option?: { headers?: Methods30['get']['reqHeaders'], config?: T }) =>
        fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH23, GET, option).json(),
      $get: (option?: { headers?: Methods30['get']['reqHeaders'], config?: T }) =>
        fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH23}`
    },
    login: {
      post: (option: { body: Methods31['post']['reqBody'], headers?: Methods31['post']['reqHeaders'], config?: T }) =>
        fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH24, POST, option).json(),
      $post: (option: { body: Methods31['post']['reqBody'], headers?: Methods31['post']['reqHeaders'], config?: T }) =>
        fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH24, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH24}`
    },
    logout: {
      post: (option: { body: Methods32['post']['reqBody'], headers?: Methods32['post']['reqHeaders'], config?: T }) =>
        fetch<void, BasicHeaders, Methods32['post']['status']>(prefix, PATH25, POST, option).send(),
      $post: (option: { body: Methods32['post']['reqBody'], headers?: Methods32['post']['reqHeaders'], config?: T }) =>
        fetch<void, BasicHeaders, Methods32['post']['status']>(prefix, PATH25, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH25}`
    },
    me: {
      get: (option?: { headers?: Methods33['get']['reqHeaders'], config?: T }) =>
        fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH26, GET, option).json(),
      $get: (option?: { headers?: Methods33['get']['reqHeaders'], config?: T }) =>
        fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH26}`
    },
    organisation: {
      users: {
        get: (option: { query: Methods35['get']['query'], headers?: Methods35['get']['reqHeaders'], config?: T }) =>
          fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, PATH28, GET, option).json(),
        $get: (option: { query: Methods35['get']['query'], headers?: Methods35['get']['reqHeaders'], config?: T }) =>
          fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, PATH28, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods35['get']['query'] }) =>
          `${prefix}${PATH28}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      get: (option?: { headers?: Methods34['get']['reqHeaders'], config?: T }) =>
        fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH27, GET, option).json(),
      $get: (option?: { headers?: Methods34['get']['reqHeaders'], config?: T }) =>
        fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH27}`
    },
    stories: {
      _storyId: (val9: number) => {
        const prefix9 = `${PATH29}/${val9}`

        return {
          items: {
            _itemId: (val10: number) => {
              const prefix10 = `${prefix9}${PATH3}/${val10}`

              return {
                reaction: {
                  post: (option: { body: Methods38['post']['reqBody'], headers?: Methods38['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods38['post']['resBody'], BasicHeaders, Methods38['post']['status']>(prefix, `${prefix10}${PATH30}`, POST, option).json(),
                  $post: (option: { body: Methods38['post']['reqBody'], headers?: Methods38['post']['reqHeaders'], config?: T }) =>
                    fetch<Methods38['post']['resBody'], BasicHeaders, Methods38['post']['status']>(prefix, `${prefix10}${PATH30}`, POST, option).json().then(r => r.body),
                  $path: () => `${prefix}${prefix10}${PATH30}`
                },
                get: (option?: { headers?: Methods37['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, prefix10, GET, option).json(),
                $get: (option?: { headers?: Methods37['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, prefix10, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix10}`
              }
            },
            get: (option?: { query?: Methods36['get']['query'], headers?: Methods36['get']['reqHeaders'], config?: T }) =>
              fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, `${prefix9}${PATH3}`, GET, option).json(),
            $get: (option?: { query?: Methods36['get']['query'], headers?: Methods36['get']['reqHeaders'], config?: T }) =>
              fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, `${prefix9}${PATH3}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods36['get']['query'] }) =>
              `${prefix}${prefix9}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    },
    user: {
      _userId: (val11: string) => {
        const prefix11 = `${PATH31}/${val11}`

        return {
          get: (option?: { headers?: Methods40['get']['reqHeaders'], config?: T }) =>
            fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, prefix11, GET, option).json(),
          $get: (option?: { headers?: Methods40['get']['reqHeaders'], config?: T }) =>
            fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, prefix11, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix11}`
        }
      },
      profile: {
        put: (option?: { body?: Methods41['put']['reqBody'], headers?: Methods41['put']['reqHeaders'], config?: T }) =>
          fetch<void, BasicHeaders, Methods41['put']['status']>(prefix, PATH32, PUT, option, 'FormData').send(),
        $put: (option?: { body?: Methods41['put']['reqBody'], headers?: Methods41['put']['reqHeaders'], config?: T }) =>
          fetch<void, BasicHeaders, Methods41['put']['status']>(prefix, PATH32, PUT, option, 'FormData').send().then(r => r.body),
        $path: () => `${prefix}${PATH32}`
      },
      get: (option?: { headers?: Methods39['get']['reqHeaders'], config?: T }) =>
        fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, PATH31, GET, option).json(),
      $get: (option?: { headers?: Methods39['get']['reqHeaders'], config?: T }) =>
        fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH31}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
