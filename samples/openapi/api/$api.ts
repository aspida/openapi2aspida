import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_fmtkis } from './stream/v1/stories';
import type { Methods as Methods_1k5hjkj } from './stream/v1/stories/_storyId@number';
import type { Methods as Methods_fqs2dy } from './v1/me';
import type { Methods as Methods_104hlq6 } from './v1/mixes';
import type { Methods as Methods_1wn175q } from './v1/mixes/_id@string';
import type { Methods as Methods_lqy9sk } from './v1/mixes/_mixId@string/cards';
import type { Methods as Methods_izwwa6 } from './v1/mixes/_mixId@string/url';
import type { Methods as Methods_1r05bpr } from './v1/parse';
import type { Methods as Methods_19hr5a5 } from './v1/parse/image';
import type { Methods as Methods_16una0l } from './v1/token';
import type { Methods as Methods_jv19rp } from './v3/2fa';
import type { Methods as Methods_tp7932 } from './v3/channels';
import type { Methods as Methods_rm4mk1 } from './v3/channels/_channelId@number/chats/_chatId@number/items/_itemId@number';
import type { Methods as Methods_rccnsa } from './v3/channels/_channelId@number/news-feed';
import type { Methods as Methods_1uv2men } from './v3/channels/_channelId@string';
import type { Methods as Methods_ymb9fj } from './v3/channels/_channelId@string/chats';
import type { Methods as Methods_19j21wz } from './v3/channels/_channelId@string/chats/_chatId@string';
import type { Methods as Methods_1qvo5ig } from './v3/channels/_channelId@string/chats/_chatId@string/items';
import type { Methods as Methods_1ex96vt } from './v3/channels/_channelId@string/chats/_chatId@string/items/audio';
import type { Methods as Methods_12f4yuy } from './v3/channels/_channelId@string/chats/_chatId@string/items/image';
import type { Methods as Methods_1a3dr70 } from './v3/channels/_channelId@string/chats/_chatId@string/items/video';
import type { Methods as Methods_tpsds } from './v3/channels/_channelId@string/chats/_chatId@string/itemslist';
import type { Methods as Methods_1dg9cek } from './v3/channels/_channelId@string/chats/_chatId@string/users';
import type { Methods as Methods_d8mvmx } from './v3/channels/_channelId@string/chats/_chatId@string/users/remove';
import type { Methods as Methods_409h2c } from './v3/channels/_channelId@string/notifications';
import type { Methods as Methods_i0dmtv } from './v3/chats/_chatId@number/items/_itemId@number';
import type { Methods as Methods_1r5qtp6 } from './v3/chats/_chatId@string/items';
import type { Methods as Methods_b00ynf } from './v3/chats/_chatId@string/items/audio';
import type { Methods as Methods_ruzilw } from './v3/chats/_chatId@string/items/image';
import type { Methods as Methods_135ed02 } from './v3/chats/_chatId@string/items/video';
import type { Methods as Methods_jppfu6 } from './v3/chats/keys';
import type { Methods as Methods_10l1tgy } from './v3/extension/audio';
import type { Methods as Methods_apwzud } from './v3/extension/image';
import type { Methods as Methods_r8snev } from './v3/extension/parse';
import type { Methods as Methods_17ff7fm } from './v3/extension/story/_storyId@string';
import type { Methods as Methods_1g8zorn } from './v3/extension/story/_storyId@string/audio';
import type { Methods as Methods_124ffvw } from './v3/extension/story/_storyId@string/image';
import type { Methods as Methods_1gkh6x6 } from './v3/extension/story/_storyId@string/video';
import type { Methods as Methods_kgp5q3 } from './v3/extension/video';
import type { Methods as Methods_lhsd86 } from './v3/fcm_token';
import type { Methods as Methods_1io5ejy } from './v3/info';
import type { Methods as Methods_hqmsuz } from './v3/login';
import type { Methods as Methods_1eeieyw } from './v3/logout';
import type { Methods as Methods_bzst0 } from './v3/me';
import type { Methods as Methods_aojh78 } from './v3/organisation';
import type { Methods as Methods_ba24fb } from './v3/organisation/users';
import type { Methods as Methods_xz7bfv } from './v3/stories/_storyId@number/items';
import type { Methods as Methods_17x0as8 } from './v3/stories/_storyId@number/items/_itemId@number';
import type { Methods as Methods_1rhlc3e } from './v3/stories/_storyId@number/items/_itemId@number/reaction';
import type { Methods as Methods_1vihjgh } from './v3/user';
import type { Methods as Methods_mh6ds6 } from './v3/user/_userId@string';
import type { Methods as Methods_1fhjqav } from './v3/user/profile';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/stream/v1/stories';
  const PATH1 = '/api/v1/me';
  const PATH2 = '/api/v1/mixes';
  const PATH3 = '/cards';
  const PATH4 = '/url';
  const PATH5 = '/api/v1/parse';
  const PATH6 = '/api/v1/parse/image';
  const PATH7 = '/api/v1/token';
  const PATH8 = '/api/v3/2fa';
  const PATH9 = '/api/v3/channels';
  const PATH10 = '/chats';
  const PATH11 = '/items';
  const PATH12 = '/news-feed';
  const PATH13 = '/items/audio';
  const PATH14 = '/items/image';
  const PATH15 = '/items/video';
  const PATH16 = '/itemslist';
  const PATH17 = '/users';
  const PATH18 = '/users/remove';
  const PATH19 = '/notifications';
  const PATH20 = '/api/v3/chats';
  const PATH21 = '/api/v3/chats/keys';
  const PATH22 = '/api/v3/extension/audio';
  const PATH23 = '/api/v3/extension/image';
  const PATH24 = '/api/v3/extension/parse';
  const PATH25 = '/api/v3/extension/story';
  const PATH26 = '/audio';
  const PATH27 = '/image';
  const PATH28 = '/video';
  const PATH29 = '/api/v3/extension/video';
  const PATH30 = '/api/v3/fcm_token';
  const PATH31 = '/api/v3/info';
  const PATH32 = '/api/v3/login';
  const PATH33 = '/api/v3/logout';
  const PATH34 = '/api/v3/me';
  const PATH35 = '/api/v3/organisation';
  const PATH36 = '/api/v3/organisation/users';
  const PATH37 = '/api/v3/stories';
  const PATH38 = '/reaction';
  const PATH39 = '/api/v3/user';
  const PATH40 = '/api/v3/user/profile';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    stream: {
      v1: {
        stories: {
          _storyId: (val3: number) => {
            const prefix3 = `${PATH0}/${val3}`;

            return {
              /**
               * @returns OK
               */
              get: (option: { query: Methods_1k5hjkj['get']['query'], config?: T | undefined }) =>
                fetch<Methods_1k5hjkj['get']['resBody'], BasicHeaders, Methods_1k5hjkj['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns OK
               */
              $get: (option: { query: Methods_1k5hjkj['get']['query'], config?: T | undefined }) =>
                fetch<Methods_1k5hjkj['get']['resBody'], BasicHeaders, Methods_1k5hjkj['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_1k5hjkj['get']['query'] } | undefined) =>
                `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            };
          },
          /**
           * It returns all stories with first 75 cards
           * @returns OK
           */
          get: (option: { query: Methods_fmtkis['get']['query'], config?: T | undefined }) =>
            fetch<Methods_fmtkis['get']['resBody'], BasicHeaders, Methods_fmtkis['get']['status']>(prefix, PATH0, GET, option).json(),
          /**
           * It returns all stories with first 75 cards
           * @returns OK
           */
          $get: (option: { query: Methods_fmtkis['get']['query'], config?: T | undefined }) =>
            fetch<Methods_fmtkis['get']['resBody'], BasicHeaders, Methods_fmtkis['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_fmtkis['get']['query'] } | undefined) =>
            `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
    },
    v1: {
      me: {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_fqs2dy['get']['resBody'], BasicHeaders, Methods_fqs2dy['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_fqs2dy['get']['resBody'], BasicHeaders, Methods_fqs2dy['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
      mixes: {
        _id: (val2: string) => {
          const prefix2 = `${PATH2}/${val2}`;

          return {
            put: (option: { body: Methods_1wn175q['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_1wn175q['put']['status']>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods_1wn175q['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_1wn175q['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        _mixId: (val2: string) => {
          const prefix2 = `${PATH2}/${val2}`;

          return {
            cards: {
              post: (option: { body: Methods_lqy9sk['post']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_lqy9sk['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option).send(),
              $post: (option: { body: Methods_lqy9sk['post']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_lqy9sk['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH3}`,
            },
            url: {
              post: (option: { body: Methods_izwwa6['post']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_izwwa6['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option).send(),
              $post: (option: { body: Methods_izwwa6['post']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_izwwa6['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH4}`,
            },
          };
        },
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_104hlq6['get']['resBody'], BasicHeaders, Methods_104hlq6['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_104hlq6['get']['resBody'], BasicHeaders, Methods_104hlq6['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        post: (option: { body: Methods_104hlq6['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_104hlq6['post']['resBody'], BasicHeaders, Methods_104hlq6['post']['status']>(prefix, PATH2, POST, option).json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_104hlq6['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_104hlq6['post']['resBody'], BasicHeaders, Methods_104hlq6['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`,
      },
      parse: {
        image: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods_19hr5a5['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_19hr5a5['post']['resBody'], BasicHeaders, Methods_19hr5a5['post']['status']>(prefix, PATH6, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_19hr5a5['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_19hr5a5['post']['resBody'], BasicHeaders, Methods_19hr5a5['post']['status']>(prefix, PATH6, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${PATH6}`,
        },
        /**
         * @returns OK
         */
        post: (option: { body: Methods_1r05bpr['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1r05bpr['post']['resBody'], BasicHeaders, Methods_1r05bpr['post']['status']>(prefix, PATH5, POST, option).json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_1r05bpr['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1r05bpr['post']['resBody'], BasicHeaders, Methods_1r05bpr['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`,
      },
      token: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods_16una0l['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_16una0l['post']['resBody'], BasicHeaders, Methods_16una0l['post']['status']>(prefix, PATH7, POST, option).json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_16una0l['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_16una0l['post']['resBody'], BasicHeaders, Methods_16una0l['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH7}`,
      },
    },
    v3: {
      $2fa: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods_jv19rp['post']['reqBody'], headers?: Methods_jv19rp['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_jv19rp['post']['resBody'], BasicHeaders, Methods_jv19rp['post']['status']>(prefix, PATH8, POST, option).json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_jv19rp['post']['reqBody'], headers?: Methods_jv19rp['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_jv19rp['post']['resBody'], BasicHeaders, Methods_jv19rp['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH8}`,
      },
      channels: {
        _channelId_number: (val2: number) => {
          const prefix2 = `${PATH9}/${val2}`;

          return {
            chats: {
              _chatId: (val4: number) => {
                const prefix4 = `${prefix2}${PATH10}/${val4}`;

                return {
                  items: {
                    _itemId: (val6: number) => {
                      const prefix6 = `${prefix4}${PATH11}/${val6}`;

                      return {
                        /**
                         * @returns OK
                         */
                        post: (option: { body: Methods_rm4mk1['post']['reqBody'], headers?: Methods_rm4mk1['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                          fetch<Methods_rm4mk1['post']['resBody'], BasicHeaders, Methods_rm4mk1['post']['status']>(prefix, prefix6, POST, option).json(),
                        /**
                         * @returns OK
                         */
                        $post: (option: { body: Methods_rm4mk1['post']['reqBody'], headers?: Methods_rm4mk1['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                          fetch<Methods_rm4mk1['post']['resBody'], BasicHeaders, Methods_rm4mk1['post']['status']>(prefix, prefix6, POST, option).json().then(r => r.body),
                        $path: () => `${prefix}${prefix6}`,
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
              get: (option?: { query?: Methods_rccnsa['get']['query'] | undefined, headers?: Methods_rccnsa['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_rccnsa['get']['resBody'], BasicHeaders, Methods_rccnsa['get']['status']>(prefix, `${prefix2}${PATH12}`, GET, option).json(),
              /**
               * @returns OK
               */
              $get: (option?: { query?: Methods_rccnsa['get']['query'] | undefined, headers?: Methods_rccnsa['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_rccnsa['get']['resBody'], BasicHeaders, Methods_rccnsa['get']['status']>(prefix, `${prefix2}${PATH12}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_rccnsa['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
          };
        },
        _channelId_string: (val2: string) => {
          const prefix2 = `${PATH9}/${val2}`;

          return {
            chats: {
              _chatId: (val4: string) => {
                const prefix4 = `${prefix2}${PATH10}/${val4}`;

                return {
                  items: {
                    audio: {
                      /**
                       * Create shared audio item in chat
                       * @returns OK
                       */
                      post: (option: { body: Methods_1ex96vt['post']['reqBody'], headers?: Methods_1ex96vt['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_1ex96vt['post']['resBody'], BasicHeaders, Methods_1ex96vt['post']['status']>(prefix, `${prefix4}${PATH13}`, POST, option, 'FormData').json(),
                      /**
                       * Create shared audio item in chat
                       * @returns OK
                       */
                      $post: (option: { body: Methods_1ex96vt['post']['reqBody'], headers?: Methods_1ex96vt['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_1ex96vt['post']['resBody'], BasicHeaders, Methods_1ex96vt['post']['status']>(prefix, `${prefix4}${PATH13}`, POST, option, 'FormData').json().then(r => r.body),
                      $path: () => `${prefix}${prefix4}${PATH13}`,
                    },
                    image: {
                      /**
                       * Create shared image item in chat
                       * @returns OK
                       */
                      post: (option: { body: Methods_12f4yuy['post']['reqBody'], headers?: Methods_12f4yuy['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_12f4yuy['post']['resBody'], BasicHeaders, Methods_12f4yuy['post']['status']>(prefix, `${prefix4}${PATH14}`, POST, option, 'FormData').json(),
                      /**
                       * Create shared image item in chat
                       * @returns OK
                       */
                      $post: (option: { body: Methods_12f4yuy['post']['reqBody'], headers?: Methods_12f4yuy['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_12f4yuy['post']['resBody'], BasicHeaders, Methods_12f4yuy['post']['status']>(prefix, `${prefix4}${PATH14}`, POST, option, 'FormData').json().then(r => r.body),
                      $path: () => `${prefix}${prefix4}${PATH14}`,
                    },
                    video: {
                      /**
                       * Create shared video item in chat
                       * @returns OK
                       */
                      post: (option: { body: Methods_1a3dr70['post']['reqBody'], headers?: Methods_1a3dr70['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_1a3dr70['post']['resBody'], BasicHeaders, Methods_1a3dr70['post']['status']>(prefix, `${prefix4}${PATH15}`, POST, option, 'FormData').json(),
                      /**
                       * Create shared video item in chat
                       * @returns OK
                       */
                      $post: (option: { body: Methods_1a3dr70['post']['reqBody'], headers?: Methods_1a3dr70['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_1a3dr70['post']['resBody'], BasicHeaders, Methods_1a3dr70['post']['status']>(prefix, `${prefix4}${PATH15}`, POST, option, 'FormData').json().then(r => r.body),
                      $path: () => `${prefix}${prefix4}${PATH15}`,
                    },
                    /**
                     * Returns a list of items of chat shared content
                     * @returns OK
                     */
                    get: (option?: { query?: Methods_1qvo5ig['get']['query'] | undefined, headers?: Methods_1qvo5ig['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_1qvo5ig['get']['resBody'], BasicHeaders, Methods_1qvo5ig['get']['status']>(prefix, `${prefix4}${PATH11}`, GET, option).json(),
                    /**
                     * Returns a list of items of chat shared content
                     * @returns OK
                     */
                    $get: (option?: { query?: Methods_1qvo5ig['get']['query'] | undefined, headers?: Methods_1qvo5ig['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_1qvo5ig['get']['resBody'], BasicHeaders, Methods_1qvo5ig['get']['status']>(prefix, `${prefix4}${PATH11}`, GET, option).json().then(r => r.body),
                    /**
                     * Create shared item in chat
                     * @param option.body - item to create
                     * @returns OK
                     */
                    post: (option: { body: Methods_1qvo5ig['post']['reqBody'], headers?: Methods_1qvo5ig['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_1qvo5ig['post']['resBody'], BasicHeaders, Methods_1qvo5ig['post']['status']>(prefix, `${prefix4}${PATH11}`, POST, option).json(),
                    /**
                     * Create shared item in chat
                     * @param option.body - item to create
                     * @returns OK
                     */
                    $post: (option: { body: Methods_1qvo5ig['post']['reqBody'], headers?: Methods_1qvo5ig['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_1qvo5ig['post']['resBody'], BasicHeaders, Methods_1qvo5ig['post']['status']>(prefix, `${prefix4}${PATH11}`, POST, option).json().then(r => r.body),
                    $path: (option?: { method?: 'get' | undefined; query: Methods_1qvo5ig['get']['query'] } | undefined) =>
                      `${prefix}${prefix4}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                  },
                  itemslist: {
                    /**
                     * Returns chat items by list of ids
                     * @returns OK
                     */
                    get: (option: { query: Methods_tpsds['get']['query'], headers?: Methods_tpsds['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_tpsds['get']['resBody'], BasicHeaders, Methods_tpsds['get']['status']>(prefix, `${prefix4}${PATH16}`, GET, option).json(),
                    /**
                     * Returns chat items by list of ids
                     * @returns OK
                     */
                    $get: (option: { query: Methods_tpsds['get']['query'], headers?: Methods_tpsds['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_tpsds['get']['resBody'], BasicHeaders, Methods_tpsds['get']['status']>(prefix, `${prefix4}${PATH16}`, GET, option).json().then(r => r.body),
                    $path: (option?: { method?: 'get' | undefined; query: Methods_tpsds['get']['query'] } | undefined) =>
                      `${prefix}${prefix4}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                  },
                  users: {
                    remove: {
                      /**
                       * Removes members from chat
                       */
                      post: (option: { body: Methods_d8mvmx['post']['reqBody'], headers?: Methods_d8mvmx['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<void, BasicHeaders, Methods_d8mvmx['post']['status']>(prefix, `${prefix4}${PATH18}`, POST, option).send(),
                      /**
                       * Removes members from chat
                       */
                      $post: (option: { body: Methods_d8mvmx['post']['reqBody'], headers?: Methods_d8mvmx['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<void, BasicHeaders, Methods_d8mvmx['post']['status']>(prefix, `${prefix4}${PATH18}`, POST, option).send().then(r => r.body),
                      $path: () => `${prefix}${prefix4}${PATH18}`,
                    },
                    /**
                     * Returns chat members with deleted
                     * @returns OK
                     */
                    get: (option?: { headers?: Methods_1dg9cek['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_1dg9cek['get']['resBody'], BasicHeaders, Methods_1dg9cek['get']['status']>(prefix, `${prefix4}${PATH17}`, GET, option).json(),
                    /**
                     * Returns chat members with deleted
                     * @returns OK
                     */
                    $get: (option?: { headers?: Methods_1dg9cek['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_1dg9cek['get']['resBody'], BasicHeaders, Methods_1dg9cek['get']['status']>(prefix, `${prefix4}${PATH17}`, GET, option).json().then(r => r.body),
                    /**
                     * Adds members to chat
                     */
                    post: (option: { body: Methods_1dg9cek['post']['reqBody'], headers?: Methods_1dg9cek['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<void, BasicHeaders, Methods_1dg9cek['post']['status']>(prefix, `${prefix4}${PATH17}`, POST, option).send(),
                    /**
                     * Adds members to chat
                     */
                    $post: (option: { body: Methods_1dg9cek['post']['reqBody'], headers?: Methods_1dg9cek['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<void, BasicHeaders, Methods_1dg9cek['post']['status']>(prefix, `${prefix4}${PATH17}`, POST, option).send().then(r => r.body),
                    /**
                     * Updates chat members
                     */
                    put: (option: { body: Methods_1dg9cek['put']['reqBody'], headers?: Methods_1dg9cek['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<void, BasicHeaders, Methods_1dg9cek['put']['status']>(prefix, `${prefix4}${PATH17}`, PUT, option).send(),
                    /**
                     * Updates chat members
                     */
                    $put: (option: { body: Methods_1dg9cek['put']['reqBody'], headers?: Methods_1dg9cek['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<void, BasicHeaders, Methods_1dg9cek['put']['status']>(prefix, `${prefix4}${PATH17}`, PUT, option).send().then(r => r.body),
                    $path: () => `${prefix}${prefix4}${PATH17}`,
                  },
                  /**
                   * Returns users chats in channel
                   * @returns OK
                   */
                  get: (option?: { headers?: Methods_19j21wz['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_19j21wz['get']['resBody'], BasicHeaders, Methods_19j21wz['get']['status']>(prefix, prefix4, GET, option).json(),
                  /**
                   * Returns users chats in channel
                   * @returns OK
                   */
                  $get: (option?: { headers?: Methods_19j21wz['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_19j21wz['get']['resBody'], BasicHeaders, Methods_19j21wz['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
                  /**
                   * Updates chat
                   */
                  put: (option: { body: Methods_19j21wz['put']['reqBody'], headers?: Methods_19j21wz['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods_19j21wz['put']['status']>(prefix, prefix4, PUT, option).send(),
                  /**
                   * Updates chat
                   */
                  $put: (option: { body: Methods_19j21wz['put']['reqBody'], headers?: Methods_19j21wz['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods_19j21wz['put']['status']>(prefix, prefix4, PUT, option).send().then(r => r.body),
                  /**
                   * Deletes chat
                   */
                  delete: (option?: { headers?: Methods_19j21wz['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods_19j21wz['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                  /**
                   * Deletes chat
                   */
                  $delete: (option?: { headers?: Methods_19j21wz['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods_19j21wz['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                  $path: () => `${prefix}${prefix4}`,
                };
              },
              /**
               * Returns users chats in channel
               * @returns OK
               */
              get: (option?: { headers?: Methods_ymb9fj['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_ymb9fj['get']['resBody'], BasicHeaders, Methods_ymb9fj['get']['status']>(prefix, `${prefix2}${PATH10}`, GET, option).json(),
              /**
               * Returns users chats in channel
               * @returns OK
               */
              $get: (option?: { headers?: Methods_ymb9fj['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_ymb9fj['get']['resBody'], BasicHeaders, Methods_ymb9fj['get']['status']>(prefix, `${prefix2}${PATH10}`, GET, option).json().then(r => r.body),
              /**
               * Creates chat
               * @returns OK
               */
              post: (option: { body: Methods_ymb9fj['post']['reqBody'], headers?: Methods_ymb9fj['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_ymb9fj['post']['resBody'], BasicHeaders, Methods_ymb9fj['post']['status']>(prefix, `${prefix2}${PATH10}`, POST, option).json(),
              /**
               * Creates chat
               * @returns OK
               */
              $post: (option: { body: Methods_ymb9fj['post']['reqBody'], headers?: Methods_ymb9fj['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_ymb9fj['post']['resBody'], BasicHeaders, Methods_ymb9fj['post']['status']>(prefix, `${prefix2}${PATH10}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH10}`,
            },
            notifications: {
              /**
               * @returns OK
               */
              get: (option?: { query?: Methods_409h2c['get']['query'] | undefined, headers?: Methods_409h2c['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_409h2c['get']['resBody'], BasicHeaders, Methods_409h2c['get']['status']>(prefix, `${prefix2}${PATH19}`, GET, option).json(),
              /**
               * @returns OK
               */
              $get: (option?: { query?: Methods_409h2c['get']['query'] | undefined, headers?: Methods_409h2c['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_409h2c['get']['resBody'], BasicHeaders, Methods_409h2c['get']['status']>(prefix, `${prefix2}${PATH19}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_409h2c['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            /**
             * Returns a list of channel mixes with pre-fetching their contents
             */
            get: (option?: { query?: Methods_1uv2men['get']['query'] | undefined, headers?: Methods_1uv2men['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1uv2men['get']['status']>(prefix, prefix2, GET, option).send(),
            /**
             * Returns a list of channel mixes with pre-fetching their contents
             */
            $get: (option?: { query?: Methods_1uv2men['get']['query'] | undefined, headers?: Methods_1uv2men['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1uv2men['get']['status']>(prefix, prefix2, GET, option).send().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1uv2men['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * @returns OK
         */
        get: (option?: { query?: Methods_tp7932['get']['query'] | undefined, headers?: Methods_tp7932['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_tp7932['get']['resBody'], BasicHeaders, Methods_tp7932['get']['status']>(prefix, PATH9, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { query?: Methods_tp7932['get']['query'] | undefined, headers?: Methods_tp7932['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_tp7932['get']['resBody'], BasicHeaders, Methods_tp7932['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_tp7932['get']['query'] } | undefined) =>
          `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      chats: {
        _chatId_number: (val2: number) => {
          const prefix2 = `${PATH20}/${val2}`;

          return {
            items: {
              _itemId: (val4: number) => {
                const prefix4 = `${prefix2}${PATH11}/${val4}`;

                return {
                  /**
                   * @returns OK
                   */
                  post: (option: { body: Methods_i0dmtv['post']['reqBody'], headers?: Methods_i0dmtv['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_i0dmtv['post']['resBody'], BasicHeaders, Methods_i0dmtv['post']['status']>(prefix, prefix4, POST, option).json(),
                  /**
                   * @returns OK
                   */
                  $post: (option: { body: Methods_i0dmtv['post']['reqBody'], headers?: Methods_i0dmtv['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_i0dmtv['post']['resBody'], BasicHeaders, Methods_i0dmtv['post']['status']>(prefix, prefix4, POST, option).json().then(r => r.body),
                  /**
                   * @returns OK
                   */
                  get: (option?: { headers?: Methods_i0dmtv['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_i0dmtv['get']['resBody'], BasicHeaders, Methods_i0dmtv['get']['status']>(prefix, prefix4, GET, option).json(),
                  /**
                   * @returns OK
                   */
                  $get: (option?: { headers?: Methods_i0dmtv['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_i0dmtv['get']['resBody'], BasicHeaders, Methods_i0dmtv['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}`,
                };
              },
            },
          };
        },
        _chatId_string: (val2: string) => {
          const prefix2 = `${PATH20}/${val2}`;

          return {
            items: {
              audio: {
                /**
                 * Create shared audio item in chat
                 * @returns OK
                 */
                post: (option: { body: Methods_b00ynf['post']['reqBody'], headers?: Methods_b00ynf['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_b00ynf['post']['resBody'], BasicHeaders, Methods_b00ynf['post']['status']>(prefix, `${prefix2}${PATH13}`, POST, option, 'FormData').json(),
                /**
                 * Create shared audio item in chat
                 * @returns OK
                 */
                $post: (option: { body: Methods_b00ynf['post']['reqBody'], headers?: Methods_b00ynf['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_b00ynf['post']['resBody'], BasicHeaders, Methods_b00ynf['post']['status']>(prefix, `${prefix2}${PATH13}`, POST, option, 'FormData').json().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH13}`,
              },
              image: {
                /**
                 * Create shared image item in chat
                 * @returns OK
                 */
                post: (option: { body: Methods_ruzilw['post']['reqBody'], headers?: Methods_ruzilw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_ruzilw['post']['resBody'], BasicHeaders, Methods_ruzilw['post']['status']>(prefix, `${prefix2}${PATH14}`, POST, option, 'FormData').json(),
                /**
                 * Create shared image item in chat
                 * @returns OK
                 */
                $post: (option: { body: Methods_ruzilw['post']['reqBody'], headers?: Methods_ruzilw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_ruzilw['post']['resBody'], BasicHeaders, Methods_ruzilw['post']['status']>(prefix, `${prefix2}${PATH14}`, POST, option, 'FormData').json().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH14}`,
              },
              video: {
                /**
                 * Create shared video item in chat
                 * @returns OK
                 */
                post: (option: { body: Methods_135ed02['post']['reqBody'], headers?: Methods_135ed02['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_135ed02['post']['resBody'], BasicHeaders, Methods_135ed02['post']['status']>(prefix, `${prefix2}${PATH15}`, POST, option, 'FormData').json(),
                /**
                 * Create shared video item in chat
                 * @returns OK
                 */
                $post: (option: { body: Methods_135ed02['post']['reqBody'], headers?: Methods_135ed02['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_135ed02['post']['resBody'], BasicHeaders, Methods_135ed02['post']['status']>(prefix, `${prefix2}${PATH15}`, POST, option, 'FormData').json().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH15}`,
              },
              /**
               * Returns a list of items of chat shared content
               * @returns OK
               */
              get: (option?: { query?: Methods_1r5qtp6['get']['query'] | undefined, headers?: Methods_1r5qtp6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1r5qtp6['get']['resBody'], BasicHeaders, Methods_1r5qtp6['get']['status']>(prefix, `${prefix2}${PATH11}`, GET, option).json(),
              /**
               * Returns a list of items of chat shared content
               * @returns OK
               */
              $get: (option?: { query?: Methods_1r5qtp6['get']['query'] | undefined, headers?: Methods_1r5qtp6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1r5qtp6['get']['resBody'], BasicHeaders, Methods_1r5qtp6['get']['status']>(prefix, `${prefix2}${PATH11}`, GET, option).json().then(r => r.body),
              /**
               * Create shared item in chat
               * @param option.body - item to create
               * @returns OK
               */
              post: (option: { body: Methods_1r5qtp6['post']['reqBody'], headers?: Methods_1r5qtp6['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_1r5qtp6['post']['resBody'], BasicHeaders, Methods_1r5qtp6['post']['status']>(prefix, `${prefix2}${PATH11}`, POST, option).json(),
              /**
               * Create shared item in chat
               * @param option.body - item to create
               * @returns OK
               */
              $post: (option: { body: Methods_1r5qtp6['post']['reqBody'], headers?: Methods_1r5qtp6['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_1r5qtp6['post']['resBody'], BasicHeaders, Methods_1r5qtp6['post']['status']>(prefix, `${prefix2}${PATH11}`, POST, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_1r5qtp6['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
          };
        },
        keys: {
          /**
           * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
           * @returns OK
           */
          get: (option?: { headers?: Methods_jppfu6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_jppfu6['get']['resBody'], BasicHeaders, Methods_jppfu6['get']['status']>(prefix, PATH21, GET, option).json(),
          /**
           * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
           * @returns OK
           */
          $get: (option?: { headers?: Methods_jppfu6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_jppfu6['get']['resBody'], BasicHeaders, Methods_jppfu6['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH21}`,
        },
      },
      extension: {
        audio: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods_10l1tgy['post']['reqBody'], headers?: Methods_10l1tgy['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_10l1tgy['post']['resBody'], BasicHeaders, Methods_10l1tgy['post']['status']>(prefix, PATH22, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_10l1tgy['post']['reqBody'], headers?: Methods_10l1tgy['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_10l1tgy['post']['resBody'], BasicHeaders, Methods_10l1tgy['post']['status']>(prefix, PATH22, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${PATH22}`,
        },
        image: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods_apwzud['post']['reqBody'], headers?: Methods_apwzud['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_apwzud['post']['resBody'], BasicHeaders, Methods_apwzud['post']['status']>(prefix, PATH23, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_apwzud['post']['reqBody'], headers?: Methods_apwzud['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_apwzud['post']['resBody'], BasicHeaders, Methods_apwzud['post']['status']>(prefix, PATH23, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${PATH23}`,
        },
        parse: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods_r8snev['post']['reqBody'], headers?: Methods_r8snev['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_r8snev['post']['resBody'], BasicHeaders, Methods_r8snev['post']['status']>(prefix, PATH24, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_r8snev['post']['reqBody'], headers?: Methods_r8snev['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_r8snev['post']['resBody'], BasicHeaders, Methods_r8snev['post']['status']>(prefix, PATH24, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH24}`,
        },
        story: {
          _storyId: (val3: string) => {
            const prefix3 = `${PATH25}/${val3}`;

            return {
              audio: {
                /**
                 * @returns OK
                 */
                post: (option: { body: Methods_1g8zorn['post']['reqBody'], headers?: Methods_1g8zorn['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_1g8zorn['post']['resBody'], BasicHeaders, Methods_1g8zorn['post']['status']>(prefix, `${prefix3}${PATH26}`, POST, option, 'FormData').json(),
                /**
                 * @returns OK
                 */
                $post: (option: { body: Methods_1g8zorn['post']['reqBody'], headers?: Methods_1g8zorn['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_1g8zorn['post']['resBody'], BasicHeaders, Methods_1g8zorn['post']['status']>(prefix, `${prefix3}${PATH26}`, POST, option, 'FormData').json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH26}`,
              },
              image: {
                /**
                 * @returns OK
                 */
                post: (option: { body: Methods_124ffvw['post']['reqBody'], headers?: Methods_124ffvw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_124ffvw['post']['resBody'], BasicHeaders, Methods_124ffvw['post']['status']>(prefix, `${prefix3}${PATH27}`, POST, option, 'FormData').json(),
                /**
                 * @returns OK
                 */
                $post: (option: { body: Methods_124ffvw['post']['reqBody'], headers?: Methods_124ffvw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_124ffvw['post']['resBody'], BasicHeaders, Methods_124ffvw['post']['status']>(prefix, `${prefix3}${PATH27}`, POST, option, 'FormData').json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH27}`,
              },
              video: {
                /**
                 * @returns OK
                 */
                post: (option: { body: Methods_1gkh6x6['post']['reqBody'], headers?: Methods_1gkh6x6['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_1gkh6x6['post']['resBody'], BasicHeaders, Methods_1gkh6x6['post']['status']>(prefix, `${prefix3}${PATH28}`, POST, option, 'FormData').json(),
                /**
                 * @returns OK
                 */
                $post: (option: { body: Methods_1gkh6x6['post']['reqBody'], headers?: Methods_1gkh6x6['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_1gkh6x6['post']['resBody'], BasicHeaders, Methods_1gkh6x6['post']['status']>(prefix, `${prefix3}${PATH28}`, POST, option, 'FormData').json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH28}`,
              },
              /**
               * @returns OK
               */
              post: (option: { body: Methods_17ff7fm['post']['reqBody'], headers?: Methods_17ff7fm['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_17ff7fm['post']['resBody'], BasicHeaders, Methods_17ff7fm['post']['status']>(prefix, prefix3, POST, option, 'FormData').json(),
              /**
               * @returns OK
               */
              $post: (option: { body: Methods_17ff7fm['post']['reqBody'], headers?: Methods_17ff7fm['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_17ff7fm['post']['resBody'], BasicHeaders, Methods_17ff7fm['post']['status']>(prefix, prefix3, POST, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
        },
        video: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods_kgp5q3['post']['reqBody'], headers?: Methods_kgp5q3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_kgp5q3['post']['resBody'], BasicHeaders, Methods_kgp5q3['post']['status']>(prefix, PATH29, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_kgp5q3['post']['reqBody'], headers?: Methods_kgp5q3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_kgp5q3['post']['resBody'], BasicHeaders, Methods_kgp5q3['post']['status']>(prefix, PATH29, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${PATH29}`,
        },
      },
      fcm_token: {
        /**
         * Save newly updated firebase cloud messaging device token
         */
        post: (option: { body: Methods_lhsd86['post']['reqBody'], headers?: Methods_lhsd86['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_lhsd86['post']['status']>(prefix, PATH30, POST, option).send(),
        /**
         * Save newly updated firebase cloud messaging device token
         */
        $post: (option: { body: Methods_lhsd86['post']['reqBody'], headers?: Methods_lhsd86['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_lhsd86['post']['status']>(prefix, PATH30, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH30}`,
      },
      info: {
        /**
         * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
         * @returns OK
         */
        get: (option?: { headers?: Methods_1io5ejy['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1io5ejy['get']['resBody'], BasicHeaders, Methods_1io5ejy['get']['status']>(prefix, PATH31, GET, option).json(),
        /**
         * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
         * @returns OK
         */
        $get: (option?: { headers?: Methods_1io5ejy['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1io5ejy['get']['resBody'], BasicHeaders, Methods_1io5ejy['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH31}`,
      },
      login: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods_hqmsuz['post']['reqBody'], headers?: Methods_hqmsuz['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_hqmsuz['post']['resBody'], BasicHeaders, Methods_hqmsuz['post']['status']>(prefix, PATH32, POST, option).json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_hqmsuz['post']['reqBody'], headers?: Methods_hqmsuz['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_hqmsuz['post']['resBody'], BasicHeaders, Methods_hqmsuz['post']['status']>(prefix, PATH32, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH32}`,
      },
      logout: {
        post: (option: { body: Methods_1eeieyw['post']['reqBody'], headers?: Methods_1eeieyw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1eeieyw['post']['status']>(prefix, PATH33, POST, option).send(),
        $post: (option: { body: Methods_1eeieyw['post']['reqBody'], headers?: Methods_1eeieyw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1eeieyw['post']['status']>(prefix, PATH33, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH33}`,
      },
      me: {
        /**
         * @returns OK
         */
        get: (option?: { headers?: Methods_bzst0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_bzst0['get']['resBody'], BasicHeaders, Methods_bzst0['get']['status']>(prefix, PATH34, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { headers?: Methods_bzst0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_bzst0['get']['resBody'], BasicHeaders, Methods_bzst0['get']['status']>(prefix, PATH34, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH34}`,
      },
      organisation: {
        users: {
          /**
           * @returns OK
           */
          get: (option: { query: Methods_ba24fb['get']['query'], headers?: Methods_ba24fb['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_ba24fb['get']['resBody'], BasicHeaders, Methods_ba24fb['get']['status']>(prefix, PATH36, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option: { query: Methods_ba24fb['get']['query'], headers?: Methods_ba24fb['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_ba24fb['get']['resBody'], BasicHeaders, Methods_ba24fb['get']['status']>(prefix, PATH36, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_ba24fb['get']['query'] } | undefined) =>
            `${prefix}${PATH36}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * @returns OK
         */
        get: (option?: { headers?: Methods_aojh78['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_aojh78['get']['resBody'], BasicHeaders, Methods_aojh78['get']['status']>(prefix, PATH35, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { headers?: Methods_aojh78['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_aojh78['get']['resBody'], BasicHeaders, Methods_aojh78['get']['status']>(prefix, PATH35, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH35}`,
      },
      stories: {
        _storyId: (val2: number) => {
          const prefix2 = `${PATH37}/${val2}`;

          return {
            items: {
              _itemId: (val4: number) => {
                const prefix4 = `${prefix2}${PATH11}/${val4}`;

                return {
                  reaction: {
                    /**
                     * @returns OK
                     */
                    post: (option: { body: Methods_1rhlc3e['post']['reqBody'], headers?: Methods_1rhlc3e['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_1rhlc3e['post']['resBody'], BasicHeaders, Methods_1rhlc3e['post']['status']>(prefix, `${prefix4}${PATH38}`, POST, option).json(),
                    /**
                     * @returns OK
                     */
                    $post: (option: { body: Methods_1rhlc3e['post']['reqBody'], headers?: Methods_1rhlc3e['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_1rhlc3e['post']['resBody'], BasicHeaders, Methods_1rhlc3e['post']['status']>(prefix, `${prefix4}${PATH38}`, POST, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix4}${PATH38}`,
                  },
                  /**
                   * @returns OK
                   */
                  get: (option?: { headers?: Methods_17x0as8['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_17x0as8['get']['resBody'], BasicHeaders, Methods_17x0as8['get']['status']>(prefix, prefix4, GET, option).json(),
                  /**
                   * @returns OK
                   */
                  $get: (option?: { headers?: Methods_17x0as8['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_17x0as8['get']['resBody'], BasicHeaders, Methods_17x0as8['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}`,
                };
              },
              /**
               * Returns a story content with support pagination
               * @returns OK
               */
              get: (option?: { query?: Methods_xz7bfv['get']['query'] | undefined, headers?: Methods_xz7bfv['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_xz7bfv['get']['resBody'], BasicHeaders, Methods_xz7bfv['get']['status']>(prefix, `${prefix2}${PATH11}`, GET, option).json(),
              /**
               * Returns a story content with support pagination
               * @returns OK
               */
              $get: (option?: { query?: Methods_xz7bfv['get']['query'] | undefined, headers?: Methods_xz7bfv['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_xz7bfv['get']['resBody'], BasicHeaders, Methods_xz7bfv['get']['status']>(prefix, `${prefix2}${PATH11}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_xz7bfv['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
          };
        },
      },
      user: {
        _userId: (val2: string) => {
          const prefix2 = `${PATH39}/${val2}`;

          return {
            /**
             * @returns OK
             */
            get: (option?: { headers?: Methods_mh6ds6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_mh6ds6['get']['resBody'], BasicHeaders, Methods_mh6ds6['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { headers?: Methods_mh6ds6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_mh6ds6['get']['resBody'], BasicHeaders, Methods_mh6ds6['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        profile: {
          put: (option: { body: Methods_1fhjqav['put']['reqBody'], headers?: Methods_1fhjqav['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1fhjqav['put']['status']>(prefix, PATH40, PUT, option, 'FormData').send(),
          $put: (option: { body: Methods_1fhjqav['put']['reqBody'], headers?: Methods_1fhjqav['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1fhjqav['put']['status']>(prefix, PATH40, PUT, option, 'FormData').send().then(r => r.body),
          $path: () => `${prefix}${PATH40}`,
        },
        /**
         * @returns OK
         */
        get: (option?: { headers?: Methods_1vihjgh['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1vihjgh['get']['resBody'], BasicHeaders, Methods_1vihjgh['get']['status']>(prefix, PATH39, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { headers?: Methods_1vihjgh['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1vihjgh['get']['resBody'], BasicHeaders, Methods_1vihjgh['get']['status']>(prefix, PATH39, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH39}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
