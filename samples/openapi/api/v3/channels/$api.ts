import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_13secqm } from './_channelId@number/chats/_chatId@number/items/_itemId@number';
import type { Methods as Methods_141hun9 } from './_channelId@number/news-feed';
import type { Methods as Methods_ereuc4 } from './_channelId@string';
import type { Methods as Methods_s4lypw } from './_channelId@string/chats';
import type { Methods as Methods_10k7xmm } from './_channelId@string/chats/_chatId@string';
import type { Methods as Methods_o5jo1h } from './_channelId@string/chats/_chatId@string/items';
import type { Methods as Methods_1wbb0c8 } from './_channelId@string/chats/_chatId@string/items/audio';
import type { Methods as Methods_5auts3 } from './_channelId@string/chats/_chatId@string/items/image';
import type { Methods as Methods_63nhcd } from './_channelId@string/chats/_chatId@string/items/video';
import type { Methods as Methods_hirofl } from './_channelId@string/chats/_chatId@string/itemslist';
import type { Methods as Methods_1l9lpah } from './_channelId@string/chats/_chatId@string/users';
import type { Methods as Methods_1ia4aie } from './_channelId@string/chats/_chatId@string/users/remove';
import type { Methods as Methods_bnwy3f } from './_channelId@string/notifications';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/channels';
  const PATH1 = '/chats';
  const PATH2 = '/items';
  const PATH3 = '/news-feed';
  const PATH4 = '/items/audio';
  const PATH5 = '/items/image';
  const PATH6 = '/items/video';
  const PATH7 = '/itemslist';
  const PATH8 = '/users';
  const PATH9 = '/users/remove';
  const PATH10 = '/notifications';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _channelId_number: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        chats: {
          _chatId: (val2: number) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`;

            return {
              items: {
                _itemId: (val4: number) => {
                  const prefix4 = `${prefix2}${PATH2}/${val4}`;

                  return {
                    /**
                     * @returns OK
                     */
                    post: (option: { body: Methods_13secqm['post']['reqBody'], headers?: Methods_13secqm['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_13secqm['post']['resBody'], BasicHeaders, Methods_13secqm['post']['status']>(prefix, prefix4, POST, option).json(),
                    /**
                     * @returns OK
                     */
                    $post: (option: { body: Methods_13secqm['post']['reqBody'], headers?: Methods_13secqm['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_13secqm['post']['resBody'], BasicHeaders, Methods_13secqm['post']['status']>(prefix, prefix4, POST, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix4}`,
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
          get: (option?: { query?: Methods_141hun9['get']['query'] | undefined, headers?: Methods_141hun9['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_141hun9['get']['resBody'], BasicHeaders, Methods_141hun9['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { query?: Methods_141hun9['get']['query'] | undefined, headers?: Methods_141hun9['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_141hun9['get']['resBody'], BasicHeaders, Methods_141hun9['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_141hun9['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      };
    },
    _channelId_string: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        chats: {
          _chatId: (val2: string) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`;

            return {
              items: {
                audio: {
                  /**
                   * Create shared audio item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods_1wbb0c8['post']['reqBody'], headers?: Methods_1wbb0c8['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_1wbb0c8['post']['resBody'], BasicHeaders, Methods_1wbb0c8['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared audio item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods_1wbb0c8['post']['reqBody'], headers?: Methods_1wbb0c8['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_1wbb0c8['post']['resBody'], BasicHeaders, Methods_1wbb0c8['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix2}${PATH4}`,
                },
                image: {
                  /**
                   * Create shared image item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods_5auts3['post']['reqBody'], headers?: Methods_5auts3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_5auts3['post']['resBody'], BasicHeaders, Methods_5auts3['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared image item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods_5auts3['post']['reqBody'], headers?: Methods_5auts3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_5auts3['post']['resBody'], BasicHeaders, Methods_5auts3['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix2}${PATH5}`,
                },
                video: {
                  /**
                   * Create shared video item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods_63nhcd['post']['reqBody'], headers?: Methods_63nhcd['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_63nhcd['post']['resBody'], BasicHeaders, Methods_63nhcd['post']['status']>(prefix, `${prefix2}${PATH6}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared video item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods_63nhcd['post']['reqBody'], headers?: Methods_63nhcd['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_63nhcd['post']['resBody'], BasicHeaders, Methods_63nhcd['post']['status']>(prefix, `${prefix2}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix2}${PATH6}`,
                },
                /**
                 * Returns a list of items of chat shared content
                 * @returns OK
                 */
                get: (option?: { query?: Methods_o5jo1h['get']['query'] | undefined, headers?: Methods_o5jo1h['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_o5jo1h['get']['resBody'], BasicHeaders, Methods_o5jo1h['get']['status']>(prefix, `${prefix2}${PATH2}`, GET, option).json(),
                /**
                 * Returns a list of items of chat shared content
                 * @returns OK
                 */
                $get: (option?: { query?: Methods_o5jo1h['get']['query'] | undefined, headers?: Methods_o5jo1h['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_o5jo1h['get']['resBody'], BasicHeaders, Methods_o5jo1h['get']['status']>(prefix, `${prefix2}${PATH2}`, GET, option).json().then(r => r.body),
                /**
                 * Create shared item in chat
                 * @param option.body - item to create
                 * @returns OK
                 */
                post: (option: { body: Methods_o5jo1h['post']['reqBody'], headers?: Methods_o5jo1h['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_o5jo1h['post']['resBody'], BasicHeaders, Methods_o5jo1h['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json(),
                /**
                 * Create shared item in chat
                 * @param option.body - item to create
                 * @returns OK
                 */
                $post: (option: { body: Methods_o5jo1h['post']['reqBody'], headers?: Methods_o5jo1h['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_o5jo1h['post']['resBody'], BasicHeaders, Methods_o5jo1h['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_o5jo1h['get']['query'] } | undefined) =>
                  `${prefix}${prefix2}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              },
              itemslist: {
                /**
                 * Returns chat items by list of ids
                 * @returns OK
                 */
                get: (option: { query: Methods_hirofl['get']['query'], headers?: Methods_hirofl['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_hirofl['get']['resBody'], BasicHeaders, Methods_hirofl['get']['status']>(prefix, `${prefix2}${PATH7}`, GET, option).json(),
                /**
                 * Returns chat items by list of ids
                 * @returns OK
                 */
                $get: (option: { query: Methods_hirofl['get']['query'], headers?: Methods_hirofl['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_hirofl['get']['resBody'], BasicHeaders, Methods_hirofl['get']['status']>(prefix, `${prefix2}${PATH7}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_hirofl['get']['query'] } | undefined) =>
                  `${prefix}${prefix2}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              },
              users: {
                remove: {
                  /**
                   * Removes members from chat
                   */
                  post: (option: { body: Methods_1ia4aie['post']['reqBody'], headers?: Methods_1ia4aie['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods_1ia4aie['post']['status']>(prefix, `${prefix2}${PATH9}`, POST, option).send(),
                  /**
                   * Removes members from chat
                   */
                  $post: (option: { body: Methods_1ia4aie['post']['reqBody'], headers?: Methods_1ia4aie['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods_1ia4aie['post']['status']>(prefix, `${prefix2}${PATH9}`, POST, option).send().then(r => r.body),
                  $path: () => `${prefix}${prefix2}${PATH9}`,
                },
                /**
                 * Returns chat members with deleted
                 * @returns OK
                 */
                get: (option?: { headers?: Methods_1l9lpah['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1l9lpah['get']['resBody'], BasicHeaders, Methods_1l9lpah['get']['status']>(prefix, `${prefix2}${PATH8}`, GET, option).json(),
                /**
                 * Returns chat members with deleted
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods_1l9lpah['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1l9lpah['get']['resBody'], BasicHeaders, Methods_1l9lpah['get']['status']>(prefix, `${prefix2}${PATH8}`, GET, option).json().then(r => r.body),
                /**
                 * Adds members to chat
                 */
                post: (option: { body: Methods_1l9lpah['post']['reqBody'], headers?: Methods_1l9lpah['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_1l9lpah['post']['status']>(prefix, `${prefix2}${PATH8}`, POST, option).send(),
                /**
                 * Adds members to chat
                 */
                $post: (option: { body: Methods_1l9lpah['post']['reqBody'], headers?: Methods_1l9lpah['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_1l9lpah['post']['status']>(prefix, `${prefix2}${PATH8}`, POST, option).send().then(r => r.body),
                /**
                 * Updates chat members
                 */
                put: (option: { body: Methods_1l9lpah['put']['reqBody'], headers?: Methods_1l9lpah['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_1l9lpah['put']['status']>(prefix, `${prefix2}${PATH8}`, PUT, option).send(),
                /**
                 * Updates chat members
                 */
                $put: (option: { body: Methods_1l9lpah['put']['reqBody'], headers?: Methods_1l9lpah['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_1l9lpah['put']['status']>(prefix, `${prefix2}${PATH8}`, PUT, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH8}`,
              },
              /**
               * Returns users chats in channel
               * @returns OK
               */
              get: (option?: { headers?: Methods_10k7xmm['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_10k7xmm['get']['resBody'], BasicHeaders, Methods_10k7xmm['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * Returns users chats in channel
               * @returns OK
               */
              $get: (option?: { headers?: Methods_10k7xmm['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_10k7xmm['get']['resBody'], BasicHeaders, Methods_10k7xmm['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              /**
               * Updates chat
               */
              put: (option: { body: Methods_10k7xmm['put']['reqBody'], headers?: Methods_10k7xmm['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_10k7xmm['put']['status']>(prefix, prefix2, PUT, option).send(),
              /**
               * Updates chat
               */
              $put: (option: { body: Methods_10k7xmm['put']['reqBody'], headers?: Methods_10k7xmm['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_10k7xmm['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
              /**
               * Deletes chat
               */
              delete: (option?: { headers?: Methods_10k7xmm['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_10k7xmm['delete']['status']>(prefix, prefix2, DELETE, option).send(),
              /**
               * Deletes chat
               */
              $delete: (option?: { headers?: Methods_10k7xmm['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_10k7xmm['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}`,
            };
          },
          /**
           * Returns users chats in channel
           * @returns OK
           */
          get: (option?: { headers?: Methods_s4lypw['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_s4lypw['get']['resBody'], BasicHeaders, Methods_s4lypw['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Returns users chats in channel
           * @returns OK
           */
          $get: (option?: { headers?: Methods_s4lypw['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_s4lypw['get']['resBody'], BasicHeaders, Methods_s4lypw['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * Creates chat
           * @returns OK
           */
          post: (option: { body: Methods_s4lypw['post']['reqBody'], headers?: Methods_s4lypw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_s4lypw['post']['resBody'], BasicHeaders, Methods_s4lypw['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * Creates chat
           * @returns OK
           */
          $post: (option: { body: Methods_s4lypw['post']['reqBody'], headers?: Methods_s4lypw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_s4lypw['post']['resBody'], BasicHeaders, Methods_s4lypw['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        notifications: {
          /**
           * @returns OK
           */
          get: (option?: { query?: Methods_bnwy3f['get']['query'] | undefined, headers?: Methods_bnwy3f['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_bnwy3f['get']['resBody'], BasicHeaders, Methods_bnwy3f['get']['status']>(prefix, `${prefix0}${PATH10}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { query?: Methods_bnwy3f['get']['query'] | undefined, headers?: Methods_bnwy3f['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_bnwy3f['get']['resBody'], BasicHeaders, Methods_bnwy3f['get']['status']>(prefix, `${prefix0}${PATH10}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_bnwy3f['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Returns a list of channel mixes with pre-fetching their contents
         */
        get: (option?: { query?: Methods_ereuc4['get']['query'] | undefined, headers?: Methods_ereuc4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_ereuc4['get']['status']>(prefix, prefix0, GET, option).send(),
        /**
         * Returns a list of channel mixes with pre-fetching their contents
         */
        $get: (option?: { query?: Methods_ereuc4['get']['query'] | undefined, headers?: Methods_ereuc4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_ereuc4['get']['status']>(prefix, prefix0, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ereuc4['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * @returns OK
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
