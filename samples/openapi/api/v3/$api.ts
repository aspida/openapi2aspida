import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1nqm61t } from './2fa';
import type { Methods as Methods_ki40hm } from './channels';
import type { Methods as Methods_1t9a5tx } from './channels/_channelId@number/chats/_chatId@number/items/_itemId@number';
import type { Methods as Methods_vc19d2 } from './channels/_channelId@number/news-feed';
import type { Methods as Methods_1xufd3v } from './channels/_channelId@string';
import type { Methods as Methods_gu9suz } from './channels/_channelId@string/chats';
import type { Methods as Methods_14z0zbj } from './channels/_channelId@string/chats/_chatId@string';
import type { Methods as Methods_7k2hx0 } from './channels/_channelId@string/chats/_chatId@string/items';
import type { Methods as Methods_n9naqt } from './channels/_channelId@string/chats/_chatId@string/items/audio';
import type { Methods as Methods_rugr12 } from './channels/_channelId@string/chats/_chatId@string/items/image';
import type { Methods as Methods_1bn5lk0 } from './channels/_channelId@string/chats/_chatId@string/items/video';
import type { Methods as Methods_36rpzw } from './channels/_channelId@string/chats/_chatId@string/itemslist';
import type { Methods as Methods_1lo26i8 } from './channels/_channelId@string/chats/_chatId@string/users';
import type { Methods as Methods_1nx43s5 } from './channels/_channelId@string/chats/_chatId@string/users/remove';
import type { Methods as Methods_1nldd0w } from './channels/_channelId@string/notifications';
import type { Methods as Methods_1jnmcfj } from './chats/_chatId@number/items/_itemId@number';
import type { Methods as Methods_1elc5li } from './chats/_chatId@string/items';
import type { Methods as Methods_12phd13 } from './chats/_chatId@string/items/audio';
import type { Methods as Methods_knjsjk } from './chats/_chatId@string/items/image';
import type { Methods as Methods_6s1ocm } from './chats/_chatId@string/items/video';
import type { Methods as Methods_1qj5us2 } from './chats/keys';
import type { Methods as Methods_1ils31y } from './extension/audio';
import type { Methods as Methods_67s6vd } from './extension/image';
import type { Methods as Methods_g1sevv } from './extension/parse';
import type { Methods as Methods_pvsevi } from './extension/story/_storyId@string';
import type { Methods as Methods_xaqg0v } from './extension/story/_storyId@string/audio';
import type { Methods as Methods_1cbdnew } from './extension/story/_storyId@string/image';
import type { Methods as Methods_1z0yydq } from './extension/story/_storyId@string/video';
import type { Methods as Methods_1t30nzr } from './extension/video';
import type { Methods as Methods_eufa6a } from './fcm_token';
import type { Methods as Methods_drhgci } from './info';
import type { Methods as Methods_idk8rz } from './login';
import type { Methods as Methods_1rpsris } from './logout';
import type { Methods as Methods_1uc1f5c } from './me';
import type { Methods as Methods_rvtq0g } from './organisation';
import type { Methods as Methods_1v474yz } from './organisation/users';
import type { Methods as Methods_1e2uu1r } from './stories/_storyId@number/items';
import type { Methods as Methods_orlkck } from './stories/_storyId@number/items/_itemId@number';
import type { Methods as Methods_36w77a } from './stories/_storyId@number/items/_itemId@number/reaction';
import type { Methods as Methods_tli9od } from './user';
import type { Methods as Methods_7zp2y } from './user/_userId@string';
import type { Methods as Methods_1bcyem3 } from './user/profile';

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
      post: (option: { body: Methods_1nqm61t['post']['reqBody'], headers?: Methods_1nqm61t['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1nqm61t['post']['resBody'], BasicHeaders, Methods_1nqm61t['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_1nqm61t['post']['reqBody'], headers?: Methods_1nqm61t['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1nqm61t['post']['resBody'], BasicHeaders, Methods_1nqm61t['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
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
                      post: (option: { body: Methods_1t9a5tx['post']['reqBody'], headers?: Methods_1t9a5tx['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_1t9a5tx['post']['resBody'], BasicHeaders, Methods_1t9a5tx['post']['status']>(prefix, prefix5, POST, option).json(),
                      /**
                       * @returns OK
                       */
                      $post: (option: { body: Methods_1t9a5tx['post']['reqBody'], headers?: Methods_1t9a5tx['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_1t9a5tx['post']['resBody'], BasicHeaders, Methods_1t9a5tx['post']['status']>(prefix, prefix5, POST, option).json().then(r => r.body),
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
            get: (option?: { query?: Methods_vc19d2['get']['query'] | undefined, headers?: Methods_vc19d2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_vc19d2['get']['resBody'], BasicHeaders, Methods_vc19d2['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { query?: Methods_vc19d2['get']['query'] | undefined, headers?: Methods_vc19d2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_vc19d2['get']['resBody'], BasicHeaders, Methods_vc19d2['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_vc19d2['get']['query'] } | undefined) =>
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
                    post: (option: { body: Methods_n9naqt['post']['reqBody'], headers?: Methods_n9naqt['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_n9naqt['post']['resBody'], BasicHeaders, Methods_n9naqt['post']['status']>(prefix, `${prefix3}${PATH5}`, POST, option, 'FormData').json(),
                    /**
                     * Create shared audio item in chat
                     * @returns OK
                     */
                    $post: (option: { body: Methods_n9naqt['post']['reqBody'], headers?: Methods_n9naqt['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_n9naqt['post']['resBody'], BasicHeaders, Methods_n9naqt['post']['status']>(prefix, `${prefix3}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
                    $path: () => `${prefix}${prefix3}${PATH5}`,
                  },
                  image: {
                    /**
                     * Create shared image item in chat
                     * @returns OK
                     */
                    post: (option: { body: Methods_rugr12['post']['reqBody'], headers?: Methods_rugr12['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_rugr12['post']['resBody'], BasicHeaders, Methods_rugr12['post']['status']>(prefix, `${prefix3}${PATH6}`, POST, option, 'FormData').json(),
                    /**
                     * Create shared image item in chat
                     * @returns OK
                     */
                    $post: (option: { body: Methods_rugr12['post']['reqBody'], headers?: Methods_rugr12['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_rugr12['post']['resBody'], BasicHeaders, Methods_rugr12['post']['status']>(prefix, `${prefix3}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
                    $path: () => `${prefix}${prefix3}${PATH6}`,
                  },
                  video: {
                    /**
                     * Create shared video item in chat
                     * @returns OK
                     */
                    post: (option: { body: Methods_1bn5lk0['post']['reqBody'], headers?: Methods_1bn5lk0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_1bn5lk0['post']['resBody'], BasicHeaders, Methods_1bn5lk0['post']['status']>(prefix, `${prefix3}${PATH7}`, POST, option, 'FormData').json(),
                    /**
                     * Create shared video item in chat
                     * @returns OK
                     */
                    $post: (option: { body: Methods_1bn5lk0['post']['reqBody'], headers?: Methods_1bn5lk0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_1bn5lk0['post']['resBody'], BasicHeaders, Methods_1bn5lk0['post']['status']>(prefix, `${prefix3}${PATH7}`, POST, option, 'FormData').json().then(r => r.body),
                    $path: () => `${prefix}${prefix3}${PATH7}`,
                  },
                  /**
                   * Returns a list of items of chat shared content
                   * @returns OK
                   */
                  get: (option?: { query?: Methods_7k2hx0['get']['query'] | undefined, headers?: Methods_7k2hx0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_7k2hx0['get']['resBody'], BasicHeaders, Methods_7k2hx0['get']['status']>(prefix, `${prefix3}${PATH3}`, GET, option).json(),
                  /**
                   * Returns a list of items of chat shared content
                   * @returns OK
                   */
                  $get: (option?: { query?: Methods_7k2hx0['get']['query'] | undefined, headers?: Methods_7k2hx0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_7k2hx0['get']['resBody'], BasicHeaders, Methods_7k2hx0['get']['status']>(prefix, `${prefix3}${PATH3}`, GET, option).json().then(r => r.body),
                  /**
                   * Create shared item in chat
                   * @param option.body - item to create
                   * @returns OK
                   */
                  post: (option: { body: Methods_7k2hx0['post']['reqBody'], headers?: Methods_7k2hx0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_7k2hx0['post']['resBody'], BasicHeaders, Methods_7k2hx0['post']['status']>(prefix, `${prefix3}${PATH3}`, POST, option).json(),
                  /**
                   * Create shared item in chat
                   * @param option.body - item to create
                   * @returns OK
                   */
                  $post: (option: { body: Methods_7k2hx0['post']['reqBody'], headers?: Methods_7k2hx0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_7k2hx0['post']['resBody'], BasicHeaders, Methods_7k2hx0['post']['status']>(prefix, `${prefix3}${PATH3}`, POST, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get' | undefined; query: Methods_7k2hx0['get']['query'] } | undefined) =>
                    `${prefix}${prefix3}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                },
                itemslist: {
                  /**
                   * Returns chat items by list of ids
                   * @returns OK
                   */
                  get: (option: { query: Methods_36rpzw['get']['query'], headers?: Methods_36rpzw['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_36rpzw['get']['resBody'], BasicHeaders, Methods_36rpzw['get']['status']>(prefix, `${prefix3}${PATH8}`, GET, option).json(),
                  /**
                   * Returns chat items by list of ids
                   * @returns OK
                   */
                  $get: (option: { query: Methods_36rpzw['get']['query'], headers?: Methods_36rpzw['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_36rpzw['get']['resBody'], BasicHeaders, Methods_36rpzw['get']['status']>(prefix, `${prefix3}${PATH8}`, GET, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get' | undefined; query: Methods_36rpzw['get']['query'] } | undefined) =>
                    `${prefix}${prefix3}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                },
                users: {
                  remove: {
                    /**
                     * Removes members from chat
                     */
                    post: (option: { body: Methods_1nx43s5['post']['reqBody'], headers?: Methods_1nx43s5['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<void, BasicHeaders, Methods_1nx43s5['post']['status']>(prefix, `${prefix3}${PATH10}`, POST, option).send(),
                    /**
                     * Removes members from chat
                     */
                    $post: (option: { body: Methods_1nx43s5['post']['reqBody'], headers?: Methods_1nx43s5['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<void, BasicHeaders, Methods_1nx43s5['post']['status']>(prefix, `${prefix3}${PATH10}`, POST, option).send().then(r => r.body),
                    $path: () => `${prefix}${prefix3}${PATH10}`,
                  },
                  /**
                   * Returns chat members with deleted
                   * @returns OK
                   */
                  get: (option?: { headers?: Methods_1lo26i8['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_1lo26i8['get']['resBody'], BasicHeaders, Methods_1lo26i8['get']['status']>(prefix, `${prefix3}${PATH9}`, GET, option).json(),
                  /**
                   * Returns chat members with deleted
                   * @returns OK
                   */
                  $get: (option?: { headers?: Methods_1lo26i8['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_1lo26i8['get']['resBody'], BasicHeaders, Methods_1lo26i8['get']['status']>(prefix, `${prefix3}${PATH9}`, GET, option).json().then(r => r.body),
                  /**
                   * Adds members to chat
                   */
                  post: (option: { body: Methods_1lo26i8['post']['reqBody'], headers?: Methods_1lo26i8['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods_1lo26i8['post']['status']>(prefix, `${prefix3}${PATH9}`, POST, option).send(),
                  /**
                   * Adds members to chat
                   */
                  $post: (option: { body: Methods_1lo26i8['post']['reqBody'], headers?: Methods_1lo26i8['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods_1lo26i8['post']['status']>(prefix, `${prefix3}${PATH9}`, POST, option).send().then(r => r.body),
                  /**
                   * Updates chat members
                   */
                  put: (option: { body: Methods_1lo26i8['put']['reqBody'], headers?: Methods_1lo26i8['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods_1lo26i8['put']['status']>(prefix, `${prefix3}${PATH9}`, PUT, option).send(),
                  /**
                   * Updates chat members
                   */
                  $put: (option: { body: Methods_1lo26i8['put']['reqBody'], headers?: Methods_1lo26i8['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods_1lo26i8['put']['status']>(prefix, `${prefix3}${PATH9}`, PUT, option).send().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH9}`,
                },
                /**
                 * Returns users chats in channel
                 * @returns OK
                 */
                get: (option?: { headers?: Methods_14z0zbj['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_14z0zbj['get']['resBody'], BasicHeaders, Methods_14z0zbj['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * Returns users chats in channel
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods_14z0zbj['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_14z0zbj['get']['resBody'], BasicHeaders, Methods_14z0zbj['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                /**
                 * Updates chat
                 */
                put: (option: { body: Methods_14z0zbj['put']['reqBody'], headers?: Methods_14z0zbj['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_14z0zbj['put']['status']>(prefix, prefix3, PUT, option).send(),
                /**
                 * Updates chat
                 */
                $put: (option: { body: Methods_14z0zbj['put']['reqBody'], headers?: Methods_14z0zbj['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_14z0zbj['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
                /**
                 * Deletes chat
                 */
                delete: (option?: { headers?: Methods_14z0zbj['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods_14z0zbj['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                /**
                 * Deletes chat
                 */
                $delete: (option?: { headers?: Methods_14z0zbj['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods_14z0zbj['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
            /**
             * Returns users chats in channel
             * @returns OK
             */
            get: (option?: { headers?: Methods_gu9suz['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_gu9suz['get']['resBody'], BasicHeaders, Methods_gu9suz['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * Returns users chats in channel
             * @returns OK
             */
            $get: (option?: { headers?: Methods_gu9suz['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_gu9suz['get']['resBody'], BasicHeaders, Methods_gu9suz['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            /**
             * Creates chat
             * @returns OK
             */
            post: (option: { body: Methods_gu9suz['post']['reqBody'], headers?: Methods_gu9suz['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_gu9suz['post']['resBody'], BasicHeaders, Methods_gu9suz['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            /**
             * Creates chat
             * @returns OK
             */
            $post: (option: { body: Methods_gu9suz['post']['reqBody'], headers?: Methods_gu9suz['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_gu9suz['post']['resBody'], BasicHeaders, Methods_gu9suz['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
          notifications: {
            /**
             * @returns OK
             */
            get: (option?: { query?: Methods_1nldd0w['get']['query'] | undefined, headers?: Methods_1nldd0w['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1nldd0w['get']['resBody'], BasicHeaders, Methods_1nldd0w['get']['status']>(prefix, `${prefix1}${PATH11}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { query?: Methods_1nldd0w['get']['query'] | undefined, headers?: Methods_1nldd0w['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1nldd0w['get']['resBody'], BasicHeaders, Methods_1nldd0w['get']['status']>(prefix, `${prefix1}${PATH11}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1nldd0w['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Returns a list of channel mixes with pre-fetching their contents
           */
          get: (option?: { query?: Methods_1xufd3v['get']['query'] | undefined, headers?: Methods_1xufd3v['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1xufd3v['get']['status']>(prefix, prefix1, GET, option).send(),
          /**
           * Returns a list of channel mixes with pre-fetching their contents
           */
          $get: (option?: { query?: Methods_1xufd3v['get']['query'] | undefined, headers?: Methods_1xufd3v['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1xufd3v['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1xufd3v['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * @returns OK
       */
      get: (option?: { query?: Methods_ki40hm['get']['query'] | undefined, headers?: Methods_ki40hm['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_ki40hm['get']['resBody'], BasicHeaders, Methods_ki40hm['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { query?: Methods_ki40hm['get']['query'] | undefined, headers?: Methods_ki40hm['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_ki40hm['get']['resBody'], BasicHeaders, Methods_ki40hm['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_ki40hm['get']['query'] } | undefined) =>
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
                post: (option: { body: Methods_1jnmcfj['post']['reqBody'], headers?: Methods_1jnmcfj['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_1jnmcfj['post']['resBody'], BasicHeaders, Methods_1jnmcfj['post']['status']>(prefix, prefix3, POST, option).json(),
                /**
                 * @returns OK
                 */
                $post: (option: { body: Methods_1jnmcfj['post']['reqBody'], headers?: Methods_1jnmcfj['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_1jnmcfj['post']['resBody'], BasicHeaders, Methods_1jnmcfj['post']['status']>(prefix, prefix3, POST, option).json().then(r => r.body),
                /**
                 * @returns OK
                 */
                get: (option?: { headers?: Methods_1jnmcfj['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1jnmcfj['get']['resBody'], BasicHeaders, Methods_1jnmcfj['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods_1jnmcfj['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1jnmcfj['get']['resBody'], BasicHeaders, Methods_1jnmcfj['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
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
              post: (option: { body: Methods_12phd13['post']['reqBody'], headers?: Methods_12phd13['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_12phd13['post']['resBody'], BasicHeaders, Methods_12phd13['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'FormData').json(),
              /**
               * Create shared audio item in chat
               * @returns OK
               */
              $post: (option: { body: Methods_12phd13['post']['reqBody'], headers?: Methods_12phd13['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_12phd13['post']['resBody'], BasicHeaders, Methods_12phd13['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH5}`,
            },
            image: {
              /**
               * Create shared image item in chat
               * @returns OK
               */
              post: (option: { body: Methods_knjsjk['post']['reqBody'], headers?: Methods_knjsjk['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_knjsjk['post']['resBody'], BasicHeaders, Methods_knjsjk['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option, 'FormData').json(),
              /**
               * Create shared image item in chat
               * @returns OK
               */
              $post: (option: { body: Methods_knjsjk['post']['reqBody'], headers?: Methods_knjsjk['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_knjsjk['post']['resBody'], BasicHeaders, Methods_knjsjk['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH6}`,
            },
            video: {
              /**
               * Create shared video item in chat
               * @returns OK
               */
              post: (option: { body: Methods_6s1ocm['post']['reqBody'], headers?: Methods_6s1ocm['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_6s1ocm['post']['resBody'], BasicHeaders, Methods_6s1ocm['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option, 'FormData').json(),
              /**
               * Create shared video item in chat
               * @returns OK
               */
              $post: (option: { body: Methods_6s1ocm['post']['reqBody'], headers?: Methods_6s1ocm['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_6s1ocm['post']['resBody'], BasicHeaders, Methods_6s1ocm['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH7}`,
            },
            /**
             * Returns a list of items of chat shared content
             * @returns OK
             */
            get: (option?: { query?: Methods_1elc5li['get']['query'] | undefined, headers?: Methods_1elc5li['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1elc5li['get']['resBody'], BasicHeaders, Methods_1elc5li['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * Returns a list of items of chat shared content
             * @returns OK
             */
            $get: (option?: { query?: Methods_1elc5li['get']['query'] | undefined, headers?: Methods_1elc5li['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1elc5li['get']['resBody'], BasicHeaders, Methods_1elc5li['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            /**
             * Create shared item in chat
             * @param option.body - item to create
             * @returns OK
             */
            post: (option: { body: Methods_1elc5li['post']['reqBody'], headers?: Methods_1elc5li['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1elc5li['post']['resBody'], BasicHeaders, Methods_1elc5li['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json(),
            /**
             * Create shared item in chat
             * @param option.body - item to create
             * @returns OK
             */
            $post: (option: { body: Methods_1elc5li['post']['reqBody'], headers?: Methods_1elc5li['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1elc5li['post']['resBody'], BasicHeaders, Methods_1elc5li['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1elc5li['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
      keys: {
        /**
         * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
         * @returns OK
         */
        get: (option?: { headers?: Methods_1qj5us2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1qj5us2['get']['resBody'], BasicHeaders, Methods_1qj5us2['get']['status']>(prefix, PATH13, GET, option).json(),
        /**
         * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
         * @returns OK
         */
        $get: (option?: { headers?: Methods_1qj5us2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1qj5us2['get']['resBody'], BasicHeaders, Methods_1qj5us2['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH13}`,
      },
    },
    extension: {
      audio: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods_1ils31y['post']['reqBody'], headers?: Methods_1ils31y['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ils31y['post']['resBody'], BasicHeaders, Methods_1ils31y['post']['status']>(prefix, PATH14, POST, option, 'FormData').json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_1ils31y['post']['reqBody'], headers?: Methods_1ils31y['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ils31y['post']['resBody'], BasicHeaders, Methods_1ils31y['post']['status']>(prefix, PATH14, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH14}`,
      },
      image: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods_67s6vd['post']['reqBody'], headers?: Methods_67s6vd['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_67s6vd['post']['resBody'], BasicHeaders, Methods_67s6vd['post']['status']>(prefix, PATH15, POST, option, 'FormData').json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_67s6vd['post']['reqBody'], headers?: Methods_67s6vd['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_67s6vd['post']['resBody'], BasicHeaders, Methods_67s6vd['post']['status']>(prefix, PATH15, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`,
      },
      parse: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods_g1sevv['post']['reqBody'], headers?: Methods_g1sevv['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_g1sevv['post']['resBody'], BasicHeaders, Methods_g1sevv['post']['status']>(prefix, PATH16, POST, option).json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_g1sevv['post']['reqBody'], headers?: Methods_g1sevv['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_g1sevv['post']['resBody'], BasicHeaders, Methods_g1sevv['post']['status']>(prefix, PATH16, POST, option).json().then(r => r.body),
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
              post: (option: { body: Methods_xaqg0v['post']['reqBody'], headers?: Methods_xaqg0v['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_xaqg0v['post']['resBody'], BasicHeaders, Methods_xaqg0v['post']['status']>(prefix, `${prefix2}${PATH18}`, POST, option, 'FormData').json(),
              /**
               * @returns OK
               */
              $post: (option: { body: Methods_xaqg0v['post']['reqBody'], headers?: Methods_xaqg0v['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_xaqg0v['post']['resBody'], BasicHeaders, Methods_xaqg0v['post']['status']>(prefix, `${prefix2}${PATH18}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH18}`,
            },
            image: {
              /**
               * @returns OK
               */
              post: (option: { body: Methods_1cbdnew['post']['reqBody'], headers?: Methods_1cbdnew['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_1cbdnew['post']['resBody'], BasicHeaders, Methods_1cbdnew['post']['status']>(prefix, `${prefix2}${PATH19}`, POST, option, 'FormData').json(),
              /**
               * @returns OK
               */
              $post: (option: { body: Methods_1cbdnew['post']['reqBody'], headers?: Methods_1cbdnew['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_1cbdnew['post']['resBody'], BasicHeaders, Methods_1cbdnew['post']['status']>(prefix, `${prefix2}${PATH19}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH19}`,
            },
            video: {
              /**
               * @returns OK
               */
              post: (option: { body: Methods_1z0yydq['post']['reqBody'], headers?: Methods_1z0yydq['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_1z0yydq['post']['resBody'], BasicHeaders, Methods_1z0yydq['post']['status']>(prefix, `${prefix2}${PATH20}`, POST, option, 'FormData').json(),
              /**
               * @returns OK
               */
              $post: (option: { body: Methods_1z0yydq['post']['reqBody'], headers?: Methods_1z0yydq['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_1z0yydq['post']['resBody'], BasicHeaders, Methods_1z0yydq['post']['status']>(prefix, `${prefix2}${PATH20}`, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH20}`,
            },
            /**
             * @returns OK
             */
            post: (option: { body: Methods_pvsevi['post']['reqBody'], headers?: Methods_pvsevi['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_pvsevi['post']['resBody'], BasicHeaders, Methods_pvsevi['post']['status']>(prefix, prefix2, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods_pvsevi['post']['reqBody'], headers?: Methods_pvsevi['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_pvsevi['post']['resBody'], BasicHeaders, Methods_pvsevi['post']['status']>(prefix, prefix2, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
      video: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods_1t30nzr['post']['reqBody'], headers?: Methods_1t30nzr['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1t30nzr['post']['resBody'], BasicHeaders, Methods_1t30nzr['post']['status']>(prefix, PATH21, POST, option, 'FormData').json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_1t30nzr['post']['reqBody'], headers?: Methods_1t30nzr['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1t30nzr['post']['resBody'], BasicHeaders, Methods_1t30nzr['post']['status']>(prefix, PATH21, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH21}`,
      },
    },
    fcm_token: {
      /**
       * Save newly updated firebase cloud messaging device token
       */
      post: (option: { body: Methods_eufa6a['post']['reqBody'], headers?: Methods_eufa6a['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_eufa6a['post']['status']>(prefix, PATH22, POST, option).send(),
      /**
       * Save newly updated firebase cloud messaging device token
       */
      $post: (option: { body: Methods_eufa6a['post']['reqBody'], headers?: Methods_eufa6a['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_eufa6a['post']['status']>(prefix, PATH22, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH22}`,
    },
    info: {
      /**
       * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
       * @returns OK
       */
      get: (option?: { headers?: Methods_drhgci['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_drhgci['get']['resBody'], BasicHeaders, Methods_drhgci['get']['status']>(prefix, PATH23, GET, option).json(),
      /**
       * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
       * @returns OK
       */
      $get: (option?: { headers?: Methods_drhgci['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_drhgci['get']['resBody'], BasicHeaders, Methods_drhgci['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH23}`,
    },
    login: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods_idk8rz['post']['reqBody'], headers?: Methods_idk8rz['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_idk8rz['post']['resBody'], BasicHeaders, Methods_idk8rz['post']['status']>(prefix, PATH24, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_idk8rz['post']['reqBody'], headers?: Methods_idk8rz['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_idk8rz['post']['resBody'], BasicHeaders, Methods_idk8rz['post']['status']>(prefix, PATH24, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH24}`,
    },
    logout: {
      post: (option: { body: Methods_1rpsris['post']['reqBody'], headers?: Methods_1rpsris['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH25, POST, option).send(),
      $post: (option: { body: Methods_1rpsris['post']['reqBody'], headers?: Methods_1rpsris['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH25, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH25}`,
    },
    me: {
      /**
       * @returns OK
       */
      get: (option?: { headers?: Methods_1uc1f5c['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['get']['resBody'], BasicHeaders, Methods_1uc1f5c['get']['status']>(prefix, PATH26, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { headers?: Methods_1uc1f5c['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['get']['resBody'], BasicHeaders, Methods_1uc1f5c['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH26}`,
    },
    organisation: {
      users: {
        /**
         * @returns OK
         */
        get: (option: { query: Methods_1v474yz['get']['query'], headers?: Methods_1v474yz['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1v474yz['get']['resBody'], BasicHeaders, Methods_1v474yz['get']['status']>(prefix, PATH28, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option: { query: Methods_1v474yz['get']['query'], headers?: Methods_1v474yz['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1v474yz['get']['resBody'], BasicHeaders, Methods_1v474yz['get']['status']>(prefix, PATH28, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1v474yz['get']['query'] } | undefined) =>
          `${prefix}${PATH28}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * @returns OK
       */
      get: (option?: { headers?: Methods_rvtq0g['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_rvtq0g['get']['resBody'], BasicHeaders, Methods_rvtq0g['get']['status']>(prefix, PATH27, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { headers?: Methods_rvtq0g['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_rvtq0g['get']['resBody'], BasicHeaders, Methods_rvtq0g['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
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
                  post: (option: { body: Methods_36w77a['post']['reqBody'], headers?: Methods_36w77a['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_36w77a['post']['resBody'], BasicHeaders, Methods_36w77a['post']['status']>(prefix, `${prefix3}${PATH30}`, POST, option).json(),
                  /**
                   * @returns OK
                   */
                  $post: (option: { body: Methods_36w77a['post']['reqBody'], headers?: Methods_36w77a['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_36w77a['post']['resBody'], BasicHeaders, Methods_36w77a['post']['status']>(prefix, `${prefix3}${PATH30}`, POST, option).json().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH30}`,
                },
                /**
                 * @returns OK
                 */
                get: (option?: { headers?: Methods_orlkck['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_orlkck['get']['resBody'], BasicHeaders, Methods_orlkck['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods_orlkck['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_orlkck['get']['resBody'], BasicHeaders, Methods_orlkck['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
            /**
             * Returns a story content with support pagination
             * @returns OK
             */
            get: (option?: { query?: Methods_1e2uu1r['get']['query'] | undefined, headers?: Methods_1e2uu1r['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1e2uu1r['get']['resBody'], BasicHeaders, Methods_1e2uu1r['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * Returns a story content with support pagination
             * @returns OK
             */
            $get: (option?: { query?: Methods_1e2uu1r['get']['query'] | undefined, headers?: Methods_1e2uu1r['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1e2uu1r['get']['resBody'], BasicHeaders, Methods_1e2uu1r['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1e2uu1r['get']['query'] } | undefined) =>
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
          get: (option?: { headers?: Methods_7zp2y['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_7zp2y['get']['resBody'], BasicHeaders, Methods_7zp2y['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { headers?: Methods_7zp2y['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_7zp2y['get']['resBody'], BasicHeaders, Methods_7zp2y['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      profile: {
        put: (option: { body: Methods_1bcyem3['put']['reqBody'], headers?: Methods_1bcyem3['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bcyem3['put']['status']>(prefix, PATH32, PUT, option, 'FormData').send(),
        $put: (option: { body: Methods_1bcyem3['put']['reqBody'], headers?: Methods_1bcyem3['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bcyem3['put']['status']>(prefix, PATH32, PUT, option, 'FormData').send().then(r => r.body),
        $path: () => `${prefix}${PATH32}`,
      },
      /**
       * @returns OK
       */
      get: (option?: { headers?: Methods_tli9od['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['get']['resBody'], BasicHeaders, Methods_tli9od['get']['status']>(prefix, PATH31, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { headers?: Methods_tli9od['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['get']['resBody'], BasicHeaders, Methods_tli9od['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH31}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
