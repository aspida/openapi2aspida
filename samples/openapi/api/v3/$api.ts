import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './2fa';
import type { Methods as Methods1 } from './channels';
import type { Methods as Methods2 } from './channels/_channelId@number/chats/_chatId@number/items/_itemId@number';
import type { Methods as Methods3 } from './channels/_channelId@number/news-feed';
import type { Methods as Methods4 } from './channels/_channelId@string';
import type { Methods as Methods5 } from './channels/_channelId@string/chats';
import type { Methods as Methods6 } from './channels/_channelId@string/chats/_chatId@string';
import type { Methods as Methods7 } from './channels/_channelId@string/chats/_chatId@string/items';
import type { Methods as Methods8 } from './channels/_channelId@string/chats/_chatId@string/items/audio';
import type { Methods as Methods9 } from './channels/_channelId@string/chats/_chatId@string/items/image';
import type { Methods as Methods10 } from './channels/_channelId@string/chats/_chatId@string/items/video';
import type { Methods as Methods11 } from './channels/_channelId@string/chats/_chatId@string/itemslist';
import type { Methods as Methods12 } from './channels/_channelId@string/chats/_chatId@string/users';
import type { Methods as Methods13 } from './channels/_channelId@string/chats/_chatId@string/users/remove';
import type { Methods as Methods14 } from './channels/_channelId@string/notifications';
import type { Methods as Methods15 } from './chats/_chatId@number/items/_itemId@number';
import type { Methods as Methods16 } from './chats/_chatId@string/items';
import type { Methods as Methods17 } from './chats/_chatId@string/items/audio';
import type { Methods as Methods18 } from './chats/_chatId@string/items/image';
import type { Methods as Methods19 } from './chats/_chatId@string/items/video';
import type { Methods as Methods20 } from './chats/keys';
import type { Methods as Methods21 } from './extension/audio';
import type { Methods as Methods22 } from './extension/image';
import type { Methods as Methods23 } from './extension/parse';
import type { Methods as Methods24 } from './extension/story/_storyId@string';
import type { Methods as Methods25 } from './extension/story/_storyId@string/audio';
import type { Methods as Methods26 } from './extension/story/_storyId@string/image';
import type { Methods as Methods27 } from './extension/story/_storyId@string/video';
import type { Methods as Methods28 } from './extension/video';
import type { Methods as Methods29 } from './fcm_token';
import type { Methods as Methods30 } from './info';
import type { Methods as Methods31 } from './login';
import type { Methods as Methods32 } from './logout';
import type { Methods as Methods33 } from './me';
import type { Methods as Methods34 } from './organisation';
import type { Methods as Methods35 } from './organisation/users';
import type { Methods as Methods36 } from './stories/_storyId@number/items';
import type { Methods as Methods37 } from './stories/_storyId@number/items/_itemId@number';
import type { Methods as Methods38 } from './stories/_storyId@number/items/_itemId@number/reaction';
import type { Methods as Methods39 } from './user';
import type { Methods as Methods40 } from './user/_userId@string';
import type { Methods as Methods41 } from './user/profile';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/2fa';
  const PATH1 = '/api/v3/channels';
  const PATH2 = '/chats';
  const PATH3 = '/items';
  const PATH4 = '/news-feed';
  const PATH5 = '/items/audio';
  const PATH6 = '/items/image';
  const PATH7 = '/items/video';
  const PATH8 = '/itemslist';
  const PATH9 = '/users';
  const PATH10 = '/users/remove';
  const PATH11 = '/notifications';
  const PATH12 = '/api/v3/chats';
  const PATH13 = '/api/v3/chats/keys';
  const PATH14 = '/api/v3/extension/audio';
  const PATH15 = '/api/v3/extension/image';
  const PATH16 = '/api/v3/extension/parse';
  const PATH17 = '/api/v3/extension/story';
  const PATH18 = '/audio';
  const PATH19 = '/image';
  const PATH20 = '/video';
  const PATH21 = '/api/v3/extension/video';
  const PATH22 = '/api/v3/fcm_token';
  const PATH23 = '/api/v3/info';
  const PATH24 = '/api/v3/login';
  const PATH25 = '/api/v3/logout';
  const PATH26 = '/api/v3/me';
  const PATH27 = '/api/v3/organisation';
  const PATH28 = '/api/v3/organisation/users';
  const PATH29 = '/api/v3/stories';
  const PATH30 = '/reaction';
  const PATH31 = '/api/v3/user';
  const PATH32 = '/api/v3/user/profile';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    $2fa: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    channels: {
      _channelId_number: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          chats: {
            _chatId: (val3: number) => {
              const prefix3 = `${prefix1}${PATH2}/${val3}`;

              return {
                items: {
                  _itemId: (val5: number) => {
                    const prefix5 = `${prefix3}${PATH3}/${val5}`;

                    return {
                      /**
                       * @returns OK
                       */
                      post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, prefix5, POST, option).json(),
                      /**
                       * @returns OK
                       */
                      $post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, prefix5, POST, option).json().then(r => r.body),
                      $path: () => `${prefix}${prefix5}`,
                    };
                  },
                },
              };
            },
          },
          news_feed: {
            /**
             * @returns OK
             */
            get: (option?: { query?: Methods3['get']['query'] | undefined, headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { query?: Methods3['get']['query'] | undefined, headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods3['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
      _channelId_string: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          chats: {
            _chatId: (val3: string) => {
              const prefix3 = `${prefix1}${PATH2}/${val3}`;

              return {
                items: {
                  audio: {
                    /**
                     * Create shared audio item in chat
                     * @returns OK
                     */
                    post: (option: { body: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix3}${PATH5}`, POST, option, 'FormData').json(),
                    /**
                     * Create shared audio item in chat
                     * @returns OK
                     */
                    $post: (option: { body: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix3}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
                    $path: () => `${prefix}${prefix3}${PATH5}`,
                  },
                  image: {
                    /**
                     * Create shared image item in chat
                     * @returns OK
                     */
                    post: (option: { body: Methods9['post']['reqBody'], headers?: Methods9['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix3}${PATH6}`, POST, option, 'FormData').json(),
                    /**
                     * Create shared image item in chat
                     * @returns OK
                     */
                    $post: (option: { body: Methods9['post']['reqBody'], headers?: Methods9['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix3}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
                    $path: () => `${prefix}${prefix3}${PATH6}`,
                  },
                  video: {
                    /**
                     * Create shared video item in chat
                     * @returns OK
                     */
                    post: (option: { body: Methods10['post']['reqBody'], headers?: Methods10['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix3}${PATH7}`, POST, option, 'FormData').json(),
                    /**
                     * Create shared video item in chat
                     * @returns OK
                     */
                    $post: (option: { body: Methods10['post']['reqBody'], headers?: Methods10['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix3}${PATH7}`, POST, option, 'FormData').json().then(r => r.body),
                    $path: () => `${prefix}${prefix3}${PATH7}`,
                  },
                  /**
                   * Returns a list of items of chat shared content
                   * @returns OK
                   */
                  get: (option?: { query?: Methods7['get']['query'] | undefined, headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix3}${PATH3}`, GET, option).json(),
                  /**
                   * Returns a list of items of chat shared content
                   * @returns OK
                   */
                  $get: (option?: { query?: Methods7['get']['query'] | undefined, headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix3}${PATH3}`, GET, option).json().then(r => r.body),
                  /**
                   * Create shared item in chat
                   * @param option.body - item to create
                   * @returns OK
                   */
                  post: (option: { body: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix3}${PATH3}`, POST, option).json(),
                  /**
                   * Create shared item in chat
                   * @param option.body - item to create
                   * @returns OK
                   */
                  $post: (option: { body: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix3}${PATH3}`, POST, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | undefined) =>
                    `${prefix}${prefix3}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                },
                itemslist: {
                  /**
                   * Returns chat items by list of ids
                   * @returns OK
                   */
                  get: (option: { query: Methods11['get']['query'], headers?: Methods11['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix3}${PATH8}`, GET, option).json(),
                  /**
                   * Returns chat items by list of ids
                   * @returns OK
                   */
                  $get: (option: { query: Methods11['get']['query'], headers?: Methods11['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix3}${PATH8}`, GET, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get' | undefined; query: Methods11['get']['query'] } | undefined) =>
                    `${prefix}${prefix3}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                },
                users: {
                  remove: {
                    /**
                     * Removes members from chat
                     */
                    post: (option: { body: Methods13['post']['reqBody'], headers?: Methods13['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<void, BasicHeaders, Methods13['post']['status']>(prefix, `${prefix3}${PATH10}`, POST, option).send(),
                    /**
                     * Removes members from chat
                     */
                    $post: (option: { body: Methods13['post']['reqBody'], headers?: Methods13['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<void, BasicHeaders, Methods13['post']['status']>(prefix, `${prefix3}${PATH10}`, POST, option).send().then(r => r.body),
                    $path: () => `${prefix}${prefix3}${PATH10}`,
                  },
                  /**
                   * Returns chat members with deleted
                   * @returns OK
                   */
                  get: (option?: { headers?: Methods12['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix3}${PATH9}`, GET, option).json(),
                  /**
                   * Returns chat members with deleted
                   * @returns OK
                   */
                  $get: (option?: { headers?: Methods12['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix3}${PATH9}`, GET, option).json().then(r => r.body),
                  /**
                   * Adds members to chat
                   */
                  post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods12['post']['status']>(prefix, `${prefix3}${PATH9}`, POST, option).send(),
                  /**
                   * Adds members to chat
                   */
                  $post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods12['post']['status']>(prefix, `${prefix3}${PATH9}`, POST, option).send().then(r => r.body),
                  /**
                   * Updates chat members
                   */
                  put: (option: { body: Methods12['put']['reqBody'], headers?: Methods12['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods12['put']['status']>(prefix, `${prefix3}${PATH9}`, PUT, option).send(),
                  /**
                   * Updates chat members
                   */
                  $put: (option: { body: Methods12['put']['reqBody'], headers?: Methods12['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods12['put']['status']>(prefix, `${prefix3}${PATH9}`, PUT, option).send().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH9}`,
                },
                /**
                 * Returns users chats in channel
                 * @returns OK
                 */
                get: (option?: { headers?: Methods6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * Returns users chats in channel
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                /**
                 * Updates chat
                 */
                put: (option: { body: Methods6['put']['reqBody'], headers?: Methods6['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods6['put']['status']>(prefix, prefix3, PUT, option).send(),
                /**
                 * Updates chat
                 */
                $put: (option: { body: Methods6['put']['reqBody'], headers?: Methods6['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods6['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
                /**
                 * Deletes chat
                 */
                delete: (option?: { headers?: Methods6['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                /**
                 * Deletes chat
                 */
                $delete: (option?: { headers?: Methods6['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
            /**
             * Returns users chats in channel
             * @returns OK
             */
            get: (option?: { headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * Returns users chats in channel
             * @returns OK
             */
            $get: (option?: { headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            /**
             * Creates chat
             * @returns OK
             */
            post: (option: { body: Methods5['post']['reqBody'], headers?: Methods5['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            /**
             * Creates chat
             * @returns OK
             */
            $post: (option: { body: Methods5['post']['reqBody'], headers?: Methods5['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
          notifications: {
            /**
             * @returns OK
             */
            get: (option?: { query?: Methods14['get']['query'] | undefined, headers?: Methods14['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix1}${PATH11}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { query?: Methods14['get']['query'] | undefined, headers?: Methods14['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix1}${PATH11}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods14['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Returns a list of channel mixes with pre-fetching their contents
           */
          get: (option?: { query?: Methods4['get']['query'] | undefined, headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).send(),
          /**
           * Returns a list of channel mixes with pre-fetching their contents
           */
          $get: (option?: { query?: Methods4['get']['query'] | undefined, headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * @returns OK
       */
      get: (option?: { query?: Methods1['get']['query'] | undefined, headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { query?: Methods1['get']['query'] | undefined, headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    chats: {
      _chatId_number: (val1: number) => {
        const prefix1 = `${PATH12}/${val1}`;

        return {
          items: {
            _itemId: (val3: number) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`;

              return {
                /**
                 * @returns OK
                 */
                post: (option: { body: Methods15['post']['reqBody'], headers?: Methods15['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods15['post']['resBody'], BasicHeaders, Methods15['post']['status']>(prefix, prefix3, POST, option).json(),
                /**
                 * @returns OK
                 */
                $post: (option: { body: Methods15['post']['reqBody'], headers?: Methods15['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods15['post']['resBody'], BasicHeaders, Methods15['post']['status']>(prefix, prefix3, POST, option).json().then(r => r.body),
                /**
                 * @returns OK
                 */
                get: (option?: { headers?: Methods15['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods15['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
          },
        };
      },
      _chatId_string: (val1: string) => {
        const prefix1 = `${PATH12}/${val1}`;

        return {
          items: {
            audio: {
              /**
               * Create shared audio item in chat
               * @returns OK
               */
              post: (option: { body: Methods17['post']['reqBody'], headers?: Methods17['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'FormData').json(),
              /**
               * Create shared audio item in chat
               * @returns OK
               */
              $post: (option: { body: Methods17['post']['reqBody'], headers?: Methods17['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH5}`,
            },
            image: {
              /**
               * Create shared image item in chat
               * @returns OK
               */
              post: (option: { body: Methods18['post']['reqBody'], headers?: Methods18['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option, 'FormData').json(),
              /**
               * Create shared image item in chat
               * @returns OK
               */
              $post: (option: { body: Methods18['post']['reqBody'], headers?: Methods18['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH6}`,
            },
            video: {
              /**
               * Create shared video item in chat
               * @returns OK
               */
              post: (option: { body: Methods19['post']['reqBody'], headers?: Methods19['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option, 'FormData').json(),
              /**
               * Create shared video item in chat
               * @returns OK
               */
              $post: (option: { body: Methods19['post']['reqBody'], headers?: Methods19['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH7}`,
            },
            /**
             * Returns a list of items of chat shared content
             * @returns OK
             */
            get: (option?: { query?: Methods16['get']['query'] | undefined, headers?: Methods16['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * Returns a list of items of chat shared content
             * @returns OK
             */
            $get: (option?: { query?: Methods16['get']['query'] | undefined, headers?: Methods16['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            /**
             * Create shared item in chat
             * @param option.body - item to create
             * @returns OK
             */
            post: (option: { body: Methods16['post']['reqBody'], headers?: Methods16['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods16['post']['resBody'], BasicHeaders, Methods16['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json(),
            /**
             * Create shared item in chat
             * @param option.body - item to create
             * @returns OK
             */
            $post: (option: { body: Methods16['post']['reqBody'], headers?: Methods16['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods16['post']['resBody'], BasicHeaders, Methods16['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods16['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
      keys: {
        /**
         * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
         * @returns OK
         */
        get: (option?: { headers?: Methods20['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, PATH13, GET, option).json(),
        /**
         * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
         * @returns OK
         */
        $get: (option?: { headers?: Methods20['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH13}`,
      },
    },
    extension: {
      audio: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods21['post']['reqBody'], headers?: Methods21['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods21['post']['resBody'], BasicHeaders, Methods21['post']['status']>(prefix, PATH14, POST, option, 'FormData').json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods21['post']['reqBody'], headers?: Methods21['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods21['post']['resBody'], BasicHeaders, Methods21['post']['status']>(prefix, PATH14, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH14}`,
      },
      image: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods22['post']['reqBody'], headers?: Methods22['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods22['post']['resBody'], BasicHeaders, Methods22['post']['status']>(prefix, PATH15, POST, option, 'FormData').json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods22['post']['reqBody'], headers?: Methods22['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods22['post']['resBody'], BasicHeaders, Methods22['post']['status']>(prefix, PATH15, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`,
      },
      parse: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods23['post']['reqBody'], headers?: Methods23['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods23['post']['resBody'], BasicHeaders, Methods23['post']['status']>(prefix, PATH16, POST, option).json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods23['post']['reqBody'], headers?: Methods23['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods23['post']['resBody'], BasicHeaders, Methods23['post']['status']>(prefix, PATH16, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH16}`,
      },
      story: {
        _storyId: (val2: string) => {
          const prefix2 = `${PATH17}/${val2}`;

          return {
            audio: {
              /**
               * @returns OK
               */
              post: (option: { body: Methods25['post']['reqBody'], headers?: Methods25['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods25['post']['resBody'], BasicHeaders, Methods25['post']['status']>(prefix, `${prefix2}${PATH18}`, POST, option, 'FormData').json(),
              /**
               * @returns OK
               */
              $post: (option: { body: Methods25['post']['reqBody'], headers?: Methods25['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods25['post']['resBody'], BasicHeaders, Methods25['post']['status']>(prefix, `${prefix2}${PATH18}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH18}`,
            },
            image: {
              /**
               * @returns OK
               */
              post: (option: { body: Methods26['post']['reqBody'], headers?: Methods26['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, `${prefix2}${PATH19}`, POST, option, 'FormData').json(),
              /**
               * @returns OK
               */
              $post: (option: { body: Methods26['post']['reqBody'], headers?: Methods26['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, `${prefix2}${PATH19}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH19}`,
            },
            video: {
              /**
               * @returns OK
               */
              post: (option: { body: Methods27['post']['reqBody'], headers?: Methods27['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods27['post']['resBody'], BasicHeaders, Methods27['post']['status']>(prefix, `${prefix2}${PATH20}`, POST, option, 'FormData').json(),
              /**
               * @returns OK
               */
              $post: (option: { body: Methods27['post']['reqBody'], headers?: Methods27['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods27['post']['resBody'], BasicHeaders, Methods27['post']['status']>(prefix, `${prefix2}${PATH20}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH20}`,
            },
            /**
             * @returns OK
             */
            post: (option: { body: Methods24['post']['reqBody'], headers?: Methods24['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, prefix2, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods24['post']['reqBody'], headers?: Methods24['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, prefix2, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
      video: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods28['post']['reqBody'], headers?: Methods28['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods28['post']['resBody'], BasicHeaders, Methods28['post']['status']>(prefix, PATH21, POST, option, 'FormData').json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods28['post']['reqBody'], headers?: Methods28['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods28['post']['resBody'], BasicHeaders, Methods28['post']['status']>(prefix, PATH21, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH21}`,
      },
    },
    fcm_token: {
      /**
       * Save newly updated firebase cloud messaging device token
       */
      post: (option: { body: Methods29['post']['reqBody'], headers?: Methods29['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods29['post']['status']>(prefix, PATH22, POST, option).send(),
      /**
       * Save newly updated firebase cloud messaging device token
       */
      $post: (option: { body: Methods29['post']['reqBody'], headers?: Methods29['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods29['post']['status']>(prefix, PATH22, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH22}`,
    },
    info: {
      /**
       * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
       * @returns OK
       */
      get: (option?: { headers?: Methods30['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH23, GET, option).json(),
      /**
       * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
       * @returns OK
       */
      $get: (option?: { headers?: Methods30['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH23}`,
    },
    login: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods31['post']['reqBody'], headers?: Methods31['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH24, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods31['post']['reqBody'], headers?: Methods31['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH24, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH24}`,
    },
    logout: {
      post: (option: { body: Methods32['post']['reqBody'], headers?: Methods32['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods32['post']['status']>(prefix, PATH25, POST, option).send(),
      $post: (option: { body: Methods32['post']['reqBody'], headers?: Methods32['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods32['post']['status']>(prefix, PATH25, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH25}`,
    },
    me: {
      /**
       * @returns OK
       */
      get: (option?: { headers?: Methods33['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH26, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { headers?: Methods33['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH26}`,
    },
    organisation: {
      users: {
        /**
         * @returns OK
         */
        get: (option: { query: Methods35['get']['query'], headers?: Methods35['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, PATH28, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option: { query: Methods35['get']['query'], headers?: Methods35['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, PATH28, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods35['get']['query'] } | undefined) =>
          `${prefix}${PATH28}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * @returns OK
       */
      get: (option?: { headers?: Methods34['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH27, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { headers?: Methods34['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH27}`,
    },
    stories: {
      _storyId: (val1: number) => {
        const prefix1 = `${PATH29}/${val1}`;

        return {
          items: {
            _itemId: (val3: number) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`;

              return {
                reaction: {
                  /**
                   * @returns OK
                   */
                  post: (option: { body: Methods38['post']['reqBody'], headers?: Methods38['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods38['post']['resBody'], BasicHeaders, Methods38['post']['status']>(prefix, `${prefix3}${PATH30}`, POST, option).json(),
                  /**
                   * @returns OK
                   */
                  $post: (option: { body: Methods38['post']['reqBody'], headers?: Methods38['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods38['post']['resBody'], BasicHeaders, Methods38['post']['status']>(prefix, `${prefix3}${PATH30}`, POST, option).json().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH30}`,
                },
                /**
                 * @returns OK
                 */
                get: (option?: { headers?: Methods37['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods37['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
            /**
             * Returns a story content with support pagination
             * @returns OK
             */
            get: (option?: { query?: Methods36['get']['query'] | undefined, headers?: Methods36['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * Returns a story content with support pagination
             * @returns OK
             */
            $get: (option?: { query?: Methods36['get']['query'] | undefined, headers?: Methods36['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods36['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
    },
    user: {
      _userId: (val1: string) => {
        const prefix1 = `${PATH31}/${val1}`;

        return {
          /**
           * @returns OK
           */
          get: (option?: { headers?: Methods40['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { headers?: Methods40['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      profile: {
        put: (option: { body: Methods41['put']['reqBody'], headers?: Methods41['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods41['put']['status']>(prefix, PATH32, PUT, option, 'FormData').send(),
        $put: (option: { body: Methods41['put']['reqBody'], headers?: Methods41['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods41['put']['status']>(prefix, PATH32, PUT, option, 'FormData').send().then(r => r.body),
        $path: () => `${prefix}${PATH32}`,
      },
      /**
       * @returns OK
       */
      get: (option?: { headers?: Methods39['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, PATH31, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { headers?: Methods39['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH31}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
