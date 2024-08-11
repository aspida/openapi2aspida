import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_4qtg1v } from './api/stream/v1/stories';
import type { Methods as Methods_97oo5o } from './api/stream/v1/stories/_storyId@number';
import type { Methods as Methods_1bi8tax } from './api/v1/me';
import type { Methods as Methods_pyg1mv } from './api/v1/mixes';
import type { Methods as Methods_9xp3ih } from './api/v1/mixes/_id@string';
import type { Methods as Methods_zc30ad } from './api/v1/mixes/_mixId@string/cards';
import type { Methods as Methods_6fakyv } from './api/v1/mixes/_mixId@string/url';
import type { Methods as Methods_uho1qq } from './api/v1/parse';
import type { Methods as Methods_113tazg } from './api/v1/parse/image';
import type { Methods as Methods_1esbjdw } from './api/v1/token';
import type { Methods as Methods_1vc4rhw } from './api/v3/2fa';
import type { Methods as Methods_phvlsx } from './api/v3/channels';
import type { Methods as Methods_qs3aoe } from './api/v3/channels/_channelId@number/chats/_chatId@number/items/_itemId@number';
import type { Methods as Methods_ooojsl } from './api/v3/channels/_channelId@number/news-feed';
import type { Methods as Methods_1wo7mbo } from './api/v3/channels/_channelId@string';
import type { Methods as Methods_nfuzck } from './api/v3/channels/_channelId@string/chats';
import type { Methods as Methods_7ukd9q } from './api/v3/channels/_channelId@string/chats/_chatId@string';
import type { Methods as Methods_1uzwkv9 } from './api/v3/channels/_channelId@string/chats/_chatId@string/items';
import type { Methods as Methods_7319oo } from './api/v3/channels/_channelId@string/chats/_chatId@string/items/audio';
import type { Methods as Methods_l83037 } from './api/v3/channels/_channelId@string/chats/_chatId@string/items/image';
import type { Methods as Methods_1w09qu5 } from './api/v3/channels/_channelId@string/chats/_chatId@string/items/video';
import type { Methods as Methods_13dya1t } from './api/v3/channels/_channelId@string/chats/_chatId@string/itemslist';
import type { Methods as Methods_kal5a1 } from './api/v3/channels/_channelId@string/chats/_chatId@string/users';
import type { Methods as Methods_l0sw5i } from './api/v3/channels/_channelId@string/chats/_chatId@string/users/remove';
import type { Methods as Methods_1qazjmz } from './api/v3/channels/_channelId@string/notifications';
import type { Methods as Methods_1boeh1q } from './api/v3/chats/_chatId@number/items/_itemId@number';
import type { Methods as Methods_euato5 } from './api/v3/chats/_chatId@string/items';
import type { Methods as Methods_1o8c27s } from './api/v3/chats/_chatId@string/items/audio';
import type { Methods as Methods_1wxr2f7 } from './api/v3/chats/_chatId@string/items/image';
import type { Methods as Methods_1sh8dvx } from './api/v3/chats/_chatId@string/items/video';
import type { Methods as Methods_s8jtqp } from './api/v3/chats/keys';
import type { Methods as Methods_hwj50f } from './api/v3/extension/audio';
import type { Methods as Methods_wx6ceg } from './api/v3/extension/image';
import type { Methods as Methods_yznb9i } from './api/v3/extension/parse';
import type { Methods as Methods_il9dq3 } from './api/v3/extension/story/_storyId@string';
import type { Methods as Methods_tcrwna } from './api/v3/extension/story/_storyId@string/audio';
import type { Methods as Methods_p7n5l } from './api/v3/extension/story/_storyId@string/image';
import type { Methods as Methods_3twyvb } from './api/v3/extension/story/_storyId@string/video';
import type { Methods as Methods_1jmrnda } from './api/v3/extension/video';
import type { Methods as Methods_h6uxmr } from './api/v3/fcm_token';
import type { Methods as Methods_19d3t15 } from './api/v3/info';
import type { Methods as Methods_1jif85y } from './api/v3/login';
import type { Methods as Methods_12bkd3r } from './api/v3/logout';
import type { Methods as Methods_11skt03 } from './api/v3/me';
import type { Methods as Methods_10146mr } from './api/v3/organisation';
import type { Methods as Methods_1cuh6cs } from './api/v3/organisation/users';
import type { Methods as Methods_8i5efm } from './api/v3/stories/_storyId@number/items';
import type { Methods as Methods_xohgor } from './api/v3/stories/_storyId@number/items/_itemId@number';
import type { Methods as Methods_xafpc7 } from './api/v3/stories/_storyId@number/items/_itemId@number/reaction';
import type { Methods as Methods_1xng6ni } from './api/v3/user';
import type { Methods as Methods_qxcbpr } from './api/v3/user/_userId@string';
import type { Methods as Methods_2xbt8c } from './api/v3/user/profile';

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
    api: {
      stream: {
        v1: {
          stories: {
            _storyId: (val4: number) => {
              const prefix4 = `${PATH0}/${val4}`;

              return {
                /**
                 * @returns OK
                 */
                get: (option: { query: Methods_97oo5o['get']['query'], config?: T | undefined }) =>
                  fetch<Methods_97oo5o['get']['resBody'], BasicHeaders, Methods_97oo5o['get']['status']>(prefix, prefix4, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option: { query: Methods_97oo5o['get']['query'], config?: T | undefined }) =>
                  fetch<Methods_97oo5o['get']['resBody'], BasicHeaders, Methods_97oo5o['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_97oo5o['get']['query'] } | undefined) =>
                  `${prefix}${prefix4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              };
            },
            /**
             * It returns all stories with first 75 cards
             * @returns OK
             */
            get: (option: { query: Methods_4qtg1v['get']['query'], config?: T | undefined }) =>
              fetch<Methods_4qtg1v['get']['resBody'], BasicHeaders, Methods_4qtg1v['get']['status']>(prefix, PATH0, GET, option).json(),
            /**
             * It returns all stories with first 75 cards
             * @returns OK
             */
            $get: (option: { query: Methods_4qtg1v['get']['query'], config?: T | undefined }) =>
              fetch<Methods_4qtg1v['get']['resBody'], BasicHeaders, Methods_4qtg1v['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_4qtg1v['get']['query'] } | undefined) =>
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
            fetch<Methods_1bi8tax['get']['resBody'], BasicHeaders, Methods_1bi8tax['get']['status']>(prefix, PATH1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1bi8tax['get']['resBody'], BasicHeaders, Methods_1bi8tax['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH1}`,
        },
        mixes: {
          _id: (val3: string) => {
            const prefix3 = `${PATH2}/${val3}`;

            return {
              put: (option: { body: Methods_9xp3ih['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_9xp3ih['put']['status']>(prefix, prefix3, PUT, option).send(),
              $put: (option: { body: Methods_9xp3ih['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_9xp3ih['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          _mixId: (val3: string) => {
            const prefix3 = `${PATH2}/${val3}`;

            return {
              cards: {
                post: (option: { body: Methods_zc30ad['post']['reqBody'], config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_zc30ad['post']['status']>(prefix, `${prefix3}${PATH3}`, POST, option).send(),
                $post: (option: { body: Methods_zc30ad['post']['reqBody'], config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_zc30ad['post']['status']>(prefix, `${prefix3}${PATH3}`, POST, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH3}`,
              },
              url: {
                post: (option: { body: Methods_6fakyv['post']['reqBody'], config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_6fakyv['post']['status']>(prefix, `${prefix3}${PATH4}`, POST, option).send(),
                $post: (option: { body: Methods_6fakyv['post']['reqBody'], config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_6fakyv['post']['status']>(prefix, `${prefix3}${PATH4}`, POST, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH4}`,
              },
            };
          },
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_pyg1mv['get']['resBody'], BasicHeaders, Methods_pyg1mv['get']['status']>(prefix, PATH2, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_pyg1mv['get']['resBody'], BasicHeaders, Methods_pyg1mv['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          post: (option: { body: Methods_pyg1mv['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_pyg1mv['post']['resBody'], BasicHeaders, Methods_pyg1mv['post']['status']>(prefix, PATH2, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_pyg1mv['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_pyg1mv['post']['resBody'], BasicHeaders, Methods_pyg1mv['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH2}`,
        },
        parse: {
          image: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods_113tazg['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_113tazg['post']['resBody'], BasicHeaders, Methods_113tazg['post']['status']>(prefix, PATH6, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods_113tazg['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_113tazg['post']['resBody'], BasicHeaders, Methods_113tazg['post']['status']>(prefix, PATH6, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${PATH6}`,
          },
          /**
           * @returns OK
           */
          post: (option: { body: Methods_uho1qq['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_uho1qq['post']['resBody'], BasicHeaders, Methods_uho1qq['post']['status']>(prefix, PATH5, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_uho1qq['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_uho1qq['post']['resBody'], BasicHeaders, Methods_uho1qq['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH5}`,
        },
        token: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods_1esbjdw['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1esbjdw['post']['resBody'], BasicHeaders, Methods_1esbjdw['post']['status']>(prefix, PATH7, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_1esbjdw['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1esbjdw['post']['resBody'], BasicHeaders, Methods_1esbjdw['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH7}`,
        },
      },
      v3: {
        $2fa: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods_1vc4rhw['post']['reqBody'], headers?: Methods_1vc4rhw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1vc4rhw['post']['resBody'], BasicHeaders, Methods_1vc4rhw['post']['status']>(prefix, PATH8, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_1vc4rhw['post']['reqBody'], headers?: Methods_1vc4rhw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1vc4rhw['post']['resBody'], BasicHeaders, Methods_1vc4rhw['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH8}`,
        },
        channels: {
          _channelId_number: (val3: number) => {
            const prefix3 = `${PATH9}/${val3}`;

            return {
              chats: {
                _chatId: (val5: number) => {
                  const prefix5 = `${prefix3}${PATH10}/${val5}`;

                  return {
                    items: {
                      _itemId: (val7: number) => {
                        const prefix7 = `${prefix5}${PATH11}/${val7}`;

                        return {
                          /**
                           * @returns OK
                           */
                          post: (option: { body: Methods_qs3aoe['post']['reqBody'], headers?: Methods_qs3aoe['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                            fetch<Methods_qs3aoe['post']['resBody'], BasicHeaders, Methods_qs3aoe['post']['status']>(prefix, prefix7, POST, option).json(),
                          /**
                           * @returns OK
                           */
                          $post: (option: { body: Methods_qs3aoe['post']['reqBody'], headers?: Methods_qs3aoe['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                            fetch<Methods_qs3aoe['post']['resBody'], BasicHeaders, Methods_qs3aoe['post']['status']>(prefix, prefix7, POST, option).json().then(r => r.body),
                          $path: () => `${prefix}${prefix7}`,
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
                get: (option?: { query?: Methods_ooojsl['get']['query'] | undefined, headers?: Methods_ooojsl['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_ooojsl['get']['resBody'], BasicHeaders, Methods_ooojsl['get']['status']>(prefix, `${prefix3}${PATH12}`, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option?: { query?: Methods_ooojsl['get']['query'] | undefined, headers?: Methods_ooojsl['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_ooojsl['get']['resBody'], BasicHeaders, Methods_ooojsl['get']['status']>(prefix, `${prefix3}${PATH12}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_ooojsl['get']['query'] } | undefined) =>
                  `${prefix}${prefix3}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              },
            };
          },
          _channelId_string: (val3: string) => {
            const prefix3 = `${PATH9}/${val3}`;

            return {
              chats: {
                _chatId: (val5: string) => {
                  const prefix5 = `${prefix3}${PATH10}/${val5}`;

                  return {
                    items: {
                      audio: {
                        /**
                         * Create shared audio item in chat
                         * @returns OK
                         */
                        post: (option: { body: Methods_7319oo['post']['reqBody'], headers?: Methods_7319oo['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                          fetch<Methods_7319oo['post']['resBody'], BasicHeaders, Methods_7319oo['post']['status']>(prefix, `${prefix5}${PATH13}`, POST, option, 'FormData').json(),
                        /**
                         * Create shared audio item in chat
                         * @returns OK
                         */
                        $post: (option: { body: Methods_7319oo['post']['reqBody'], headers?: Methods_7319oo['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                          fetch<Methods_7319oo['post']['resBody'], BasicHeaders, Methods_7319oo['post']['status']>(prefix, `${prefix5}${PATH13}`, POST, option, 'FormData').json().then(r => r.body),
                        $path: () => `${prefix}${prefix5}${PATH13}`,
                      },
                      image: {
                        /**
                         * Create shared image item in chat
                         * @returns OK
                         */
                        post: (option: { body: Methods_l83037['post']['reqBody'], headers?: Methods_l83037['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                          fetch<Methods_l83037['post']['resBody'], BasicHeaders, Methods_l83037['post']['status']>(prefix, `${prefix5}${PATH14}`, POST, option, 'FormData').json(),
                        /**
                         * Create shared image item in chat
                         * @returns OK
                         */
                        $post: (option: { body: Methods_l83037['post']['reqBody'], headers?: Methods_l83037['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                          fetch<Methods_l83037['post']['resBody'], BasicHeaders, Methods_l83037['post']['status']>(prefix, `${prefix5}${PATH14}`, POST, option, 'FormData').json().then(r => r.body),
                        $path: () => `${prefix}${prefix5}${PATH14}`,
                      },
                      video: {
                        /**
                         * Create shared video item in chat
                         * @returns OK
                         */
                        post: (option: { body: Methods_1w09qu5['post']['reqBody'], headers?: Methods_1w09qu5['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                          fetch<Methods_1w09qu5['post']['resBody'], BasicHeaders, Methods_1w09qu5['post']['status']>(prefix, `${prefix5}${PATH15}`, POST, option, 'FormData').json(),
                        /**
                         * Create shared video item in chat
                         * @returns OK
                         */
                        $post: (option: { body: Methods_1w09qu5['post']['reqBody'], headers?: Methods_1w09qu5['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                          fetch<Methods_1w09qu5['post']['resBody'], BasicHeaders, Methods_1w09qu5['post']['status']>(prefix, `${prefix5}${PATH15}`, POST, option, 'FormData').json().then(r => r.body),
                        $path: () => `${prefix}${prefix5}${PATH15}`,
                      },
                      /**
                       * Returns a list of items of chat shared content
                       * @returns OK
                       */
                      get: (option?: { query?: Methods_1uzwkv9['get']['query'] | undefined, headers?: Methods_1uzwkv9['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                        fetch<Methods_1uzwkv9['get']['resBody'], BasicHeaders, Methods_1uzwkv9['get']['status']>(prefix, `${prefix5}${PATH11}`, GET, option).json(),
                      /**
                       * Returns a list of items of chat shared content
                       * @returns OK
                       */
                      $get: (option?: { query?: Methods_1uzwkv9['get']['query'] | undefined, headers?: Methods_1uzwkv9['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                        fetch<Methods_1uzwkv9['get']['resBody'], BasicHeaders, Methods_1uzwkv9['get']['status']>(prefix, `${prefix5}${PATH11}`, GET, option).json().then(r => r.body),
                      /**
                       * Create shared item in chat
                       * @param option.body - item to create
                       * @returns OK
                       */
                      post: (option: { body: Methods_1uzwkv9['post']['reqBody'], headers?: Methods_1uzwkv9['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_1uzwkv9['post']['resBody'], BasicHeaders, Methods_1uzwkv9['post']['status']>(prefix, `${prefix5}${PATH11}`, POST, option).json(),
                      /**
                       * Create shared item in chat
                       * @param option.body - item to create
                       * @returns OK
                       */
                      $post: (option: { body: Methods_1uzwkv9['post']['reqBody'], headers?: Methods_1uzwkv9['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_1uzwkv9['post']['resBody'], BasicHeaders, Methods_1uzwkv9['post']['status']>(prefix, `${prefix5}${PATH11}`, POST, option).json().then(r => r.body),
                      $path: (option?: { method?: 'get' | undefined; query: Methods_1uzwkv9['get']['query'] } | undefined) =>
                        `${prefix}${prefix5}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                    },
                    itemslist: {
                      /**
                       * Returns chat items by list of ids
                       * @returns OK
                       */
                      get: (option: { query: Methods_13dya1t['get']['query'], headers?: Methods_13dya1t['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_13dya1t['get']['resBody'], BasicHeaders, Methods_13dya1t['get']['status']>(prefix, `${prefix5}${PATH16}`, GET, option).json(),
                      /**
                       * Returns chat items by list of ids
                       * @returns OK
                       */
                      $get: (option: { query: Methods_13dya1t['get']['query'], headers?: Methods_13dya1t['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_13dya1t['get']['resBody'], BasicHeaders, Methods_13dya1t['get']['status']>(prefix, `${prefix5}${PATH16}`, GET, option).json().then(r => r.body),
                      $path: (option?: { method?: 'get' | undefined; query: Methods_13dya1t['get']['query'] } | undefined) =>
                        `${prefix}${prefix5}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                    },
                    users: {
                      remove: {
                        /**
                         * Removes members from chat
                         */
                        post: (option: { body: Methods_l0sw5i['post']['reqBody'], headers?: Methods_l0sw5i['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                          fetch<void, BasicHeaders, Methods_l0sw5i['post']['status']>(prefix, `${prefix5}${PATH18}`, POST, option).send(),
                        /**
                         * Removes members from chat
                         */
                        $post: (option: { body: Methods_l0sw5i['post']['reqBody'], headers?: Methods_l0sw5i['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                          fetch<void, BasicHeaders, Methods_l0sw5i['post']['status']>(prefix, `${prefix5}${PATH18}`, POST, option).send().then(r => r.body),
                        $path: () => `${prefix}${prefix5}${PATH18}`,
                      },
                      /**
                       * Returns chat members with deleted
                       * @returns OK
                       */
                      get: (option?: { headers?: Methods_kal5a1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                        fetch<Methods_kal5a1['get']['resBody'], BasicHeaders, Methods_kal5a1['get']['status']>(prefix, `${prefix5}${PATH17}`, GET, option).json(),
                      /**
                       * Returns chat members with deleted
                       * @returns OK
                       */
                      $get: (option?: { headers?: Methods_kal5a1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                        fetch<Methods_kal5a1['get']['resBody'], BasicHeaders, Methods_kal5a1['get']['status']>(prefix, `${prefix5}${PATH17}`, GET, option).json().then(r => r.body),
                      /**
                       * Adds members to chat
                       */
                      post: (option: { body: Methods_kal5a1['post']['reqBody'], headers?: Methods_kal5a1['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<void, BasicHeaders, Methods_kal5a1['post']['status']>(prefix, `${prefix5}${PATH17}`, POST, option).send(),
                      /**
                       * Adds members to chat
                       */
                      $post: (option: { body: Methods_kal5a1['post']['reqBody'], headers?: Methods_kal5a1['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<void, BasicHeaders, Methods_kal5a1['post']['status']>(prefix, `${prefix5}${PATH17}`, POST, option).send().then(r => r.body),
                      /**
                       * Updates chat members
                       */
                      put: (option: { body: Methods_kal5a1['put']['reqBody'], headers?: Methods_kal5a1['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<void, BasicHeaders, Methods_kal5a1['put']['status']>(prefix, `${prefix5}${PATH17}`, PUT, option).send(),
                      /**
                       * Updates chat members
                       */
                      $put: (option: { body: Methods_kal5a1['put']['reqBody'], headers?: Methods_kal5a1['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<void, BasicHeaders, Methods_kal5a1['put']['status']>(prefix, `${prefix5}${PATH17}`, PUT, option).send().then(r => r.body),
                      $path: () => `${prefix}${prefix5}${PATH17}`,
                    },
                    /**
                     * Returns users chats in channel
                     * @returns OK
                     */
                    get: (option?: { headers?: Methods_7ukd9q['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_7ukd9q['get']['resBody'], BasicHeaders, Methods_7ukd9q['get']['status']>(prefix, prefix5, GET, option).json(),
                    /**
                     * Returns users chats in channel
                     * @returns OK
                     */
                    $get: (option?: { headers?: Methods_7ukd9q['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_7ukd9q['get']['resBody'], BasicHeaders, Methods_7ukd9q['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                    /**
                     * Updates chat
                     */
                    put: (option: { body: Methods_7ukd9q['put']['reqBody'], headers?: Methods_7ukd9q['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<void, BasicHeaders, Methods_7ukd9q['put']['status']>(prefix, prefix5, PUT, option).send(),
                    /**
                     * Updates chat
                     */
                    $put: (option: { body: Methods_7ukd9q['put']['reqBody'], headers?: Methods_7ukd9q['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<void, BasicHeaders, Methods_7ukd9q['put']['status']>(prefix, prefix5, PUT, option).send().then(r => r.body),
                    /**
                     * Deletes chat
                     */
                    delete: (option?: { headers?: Methods_7ukd9q['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<void, BasicHeaders, Methods_7ukd9q['delete']['status']>(prefix, prefix5, DELETE, option).send(),
                    /**
                     * Deletes chat
                     */
                    $delete: (option?: { headers?: Methods_7ukd9q['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<void, BasicHeaders, Methods_7ukd9q['delete']['status']>(prefix, prefix5, DELETE, option).send().then(r => r.body),
                    $path: () => `${prefix}${prefix5}`,
                  };
                },
                /**
                 * Returns users chats in channel
                 * @returns OK
                 */
                get: (option?: { headers?: Methods_nfuzck['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_nfuzck['get']['resBody'], BasicHeaders, Methods_nfuzck['get']['status']>(prefix, `${prefix3}${PATH10}`, GET, option).json(),
                /**
                 * Returns users chats in channel
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods_nfuzck['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_nfuzck['get']['resBody'], BasicHeaders, Methods_nfuzck['get']['status']>(prefix, `${prefix3}${PATH10}`, GET, option).json().then(r => r.body),
                /**
                 * Creates chat
                 * @returns OK
                 */
                post: (option: { body: Methods_nfuzck['post']['reqBody'], headers?: Methods_nfuzck['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_nfuzck['post']['resBody'], BasicHeaders, Methods_nfuzck['post']['status']>(prefix, `${prefix3}${PATH10}`, POST, option).json(),
                /**
                 * Creates chat
                 * @returns OK
                 */
                $post: (option: { body: Methods_nfuzck['post']['reqBody'], headers?: Methods_nfuzck['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_nfuzck['post']['resBody'], BasicHeaders, Methods_nfuzck['post']['status']>(prefix, `${prefix3}${PATH10}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH10}`,
              },
              notifications: {
                /**
                 * @returns OK
                 */
                get: (option?: { query?: Methods_1qazjmz['get']['query'] | undefined, headers?: Methods_1qazjmz['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1qazjmz['get']['resBody'], BasicHeaders, Methods_1qazjmz['get']['status']>(prefix, `${prefix3}${PATH19}`, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option?: { query?: Methods_1qazjmz['get']['query'] | undefined, headers?: Methods_1qazjmz['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1qazjmz['get']['resBody'], BasicHeaders, Methods_1qazjmz['get']['status']>(prefix, `${prefix3}${PATH19}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_1qazjmz['get']['query'] } | undefined) =>
                  `${prefix}${prefix3}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              },
              /**
               * Returns a list of channel mixes with pre-fetching their contents
               */
              get: (option?: { query?: Methods_1wo7mbo['get']['query'] | undefined, headers?: Methods_1wo7mbo['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_1wo7mbo['get']['status']>(prefix, prefix3, GET, option).send(),
              /**
               * Returns a list of channel mixes with pre-fetching their contents
               */
              $get: (option?: { query?: Methods_1wo7mbo['get']['query'] | undefined, headers?: Methods_1wo7mbo['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_1wo7mbo['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_1wo7mbo['get']['query'] } | undefined) =>
                `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            };
          },
          /**
           * @returns OK
           */
          get: (option?: { query?: Methods_phvlsx['get']['query'] | undefined, headers?: Methods_phvlsx['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_phvlsx['get']['resBody'], BasicHeaders, Methods_phvlsx['get']['status']>(prefix, PATH9, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { query?: Methods_phvlsx['get']['query'] | undefined, headers?: Methods_phvlsx['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_phvlsx['get']['resBody'], BasicHeaders, Methods_phvlsx['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_phvlsx['get']['query'] } | undefined) =>
            `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        chats: {
          _chatId_number: (val3: number) => {
            const prefix3 = `${PATH20}/${val3}`;

            return {
              items: {
                _itemId: (val5: number) => {
                  const prefix5 = `${prefix3}${PATH11}/${val5}`;

                  return {
                    /**
                     * @returns OK
                     */
                    post: (option: { body: Methods_1boeh1q['post']['reqBody'], headers?: Methods_1boeh1q['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_1boeh1q['post']['resBody'], BasicHeaders, Methods_1boeh1q['post']['status']>(prefix, prefix5, POST, option).json(),
                    /**
                     * @returns OK
                     */
                    $post: (option: { body: Methods_1boeh1q['post']['reqBody'], headers?: Methods_1boeh1q['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                      fetch<Methods_1boeh1q['post']['resBody'], BasicHeaders, Methods_1boeh1q['post']['status']>(prefix, prefix5, POST, option).json().then(r => r.body),
                    /**
                     * @returns OK
                     */
                    get: (option?: { headers?: Methods_1boeh1q['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_1boeh1q['get']['resBody'], BasicHeaders, Methods_1boeh1q['get']['status']>(prefix, prefix5, GET, option).json(),
                    /**
                     * @returns OK
                     */
                    $get: (option?: { headers?: Methods_1boeh1q['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_1boeh1q['get']['resBody'], BasicHeaders, Methods_1boeh1q['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix5}`,
                  };
                },
              },
            };
          },
          _chatId_string: (val3: string) => {
            const prefix3 = `${PATH20}/${val3}`;

            return {
              items: {
                audio: {
                  /**
                   * Create shared audio item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods_1o8c27s['post']['reqBody'], headers?: Methods_1o8c27s['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_1o8c27s['post']['resBody'], BasicHeaders, Methods_1o8c27s['post']['status']>(prefix, `${prefix3}${PATH13}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared audio item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods_1o8c27s['post']['reqBody'], headers?: Methods_1o8c27s['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_1o8c27s['post']['resBody'], BasicHeaders, Methods_1o8c27s['post']['status']>(prefix, `${prefix3}${PATH13}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH13}`,
                },
                image: {
                  /**
                   * Create shared image item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods_1wxr2f7['post']['reqBody'], headers?: Methods_1wxr2f7['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_1wxr2f7['post']['resBody'], BasicHeaders, Methods_1wxr2f7['post']['status']>(prefix, `${prefix3}${PATH14}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared image item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods_1wxr2f7['post']['reqBody'], headers?: Methods_1wxr2f7['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_1wxr2f7['post']['resBody'], BasicHeaders, Methods_1wxr2f7['post']['status']>(prefix, `${prefix3}${PATH14}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH14}`,
                },
                video: {
                  /**
                   * Create shared video item in chat
                   * @returns OK
                   */
                  post: (option: { body: Methods_1sh8dvx['post']['reqBody'], headers?: Methods_1sh8dvx['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_1sh8dvx['post']['resBody'], BasicHeaders, Methods_1sh8dvx['post']['status']>(prefix, `${prefix3}${PATH15}`, POST, option, 'FormData').json(),
                  /**
                   * Create shared video item in chat
                   * @returns OK
                   */
                  $post: (option: { body: Methods_1sh8dvx['post']['reqBody'], headers?: Methods_1sh8dvx['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_1sh8dvx['post']['resBody'], BasicHeaders, Methods_1sh8dvx['post']['status']>(prefix, `${prefix3}${PATH15}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH15}`,
                },
                /**
                 * Returns a list of items of chat shared content
                 * @returns OK
                 */
                get: (option?: { query?: Methods_euato5['get']['query'] | undefined, headers?: Methods_euato5['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_euato5['get']['resBody'], BasicHeaders, Methods_euato5['get']['status']>(prefix, `${prefix3}${PATH11}`, GET, option).json(),
                /**
                 * Returns a list of items of chat shared content
                 * @returns OK
                 */
                $get: (option?: { query?: Methods_euato5['get']['query'] | undefined, headers?: Methods_euato5['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_euato5['get']['resBody'], BasicHeaders, Methods_euato5['get']['status']>(prefix, `${prefix3}${PATH11}`, GET, option).json().then(r => r.body),
                /**
                 * Create shared item in chat
                 * @param option.body - item to create
                 * @returns OK
                 */
                post: (option: { body: Methods_euato5['post']['reqBody'], headers?: Methods_euato5['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_euato5['post']['resBody'], BasicHeaders, Methods_euato5['post']['status']>(prefix, `${prefix3}${PATH11}`, POST, option).json(),
                /**
                 * Create shared item in chat
                 * @param option.body - item to create
                 * @returns OK
                 */
                $post: (option: { body: Methods_euato5['post']['reqBody'], headers?: Methods_euato5['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_euato5['post']['resBody'], BasicHeaders, Methods_euato5['post']['status']>(prefix, `${prefix3}${PATH11}`, POST, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_euato5['get']['query'] } | undefined) =>
                  `${prefix}${prefix3}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              },
            };
          },
          keys: {
            /**
             * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
             * @returns OK
             */
            get: (option?: { headers?: Methods_s8jtqp['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_s8jtqp['get']['resBody'], BasicHeaders, Methods_s8jtqp['get']['status']>(prefix, PATH21, GET, option).json(),
            /**
             * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
             * @returns OK
             */
            $get: (option?: { headers?: Methods_s8jtqp['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_s8jtqp['get']['resBody'], BasicHeaders, Methods_s8jtqp['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH21}`,
          },
        },
        extension: {
          audio: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods_hwj50f['post']['reqBody'], headers?: Methods_hwj50f['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_hwj50f['post']['resBody'], BasicHeaders, Methods_hwj50f['post']['status']>(prefix, PATH22, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods_hwj50f['post']['reqBody'], headers?: Methods_hwj50f['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_hwj50f['post']['resBody'], BasicHeaders, Methods_hwj50f['post']['status']>(prefix, PATH22, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${PATH22}`,
          },
          image: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods_wx6ceg['post']['reqBody'], headers?: Methods_wx6ceg['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_wx6ceg['post']['resBody'], BasicHeaders, Methods_wx6ceg['post']['status']>(prefix, PATH23, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods_wx6ceg['post']['reqBody'], headers?: Methods_wx6ceg['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_wx6ceg['post']['resBody'], BasicHeaders, Methods_wx6ceg['post']['status']>(prefix, PATH23, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${PATH23}`,
          },
          parse: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods_yznb9i['post']['reqBody'], headers?: Methods_yznb9i['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_yznb9i['post']['resBody'], BasicHeaders, Methods_yznb9i['post']['status']>(prefix, PATH24, POST, option).json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods_yznb9i['post']['reqBody'], headers?: Methods_yznb9i['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_yznb9i['post']['resBody'], BasicHeaders, Methods_yznb9i['post']['status']>(prefix, PATH24, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH24}`,
          },
          story: {
            _storyId: (val4: string) => {
              const prefix4 = `${PATH25}/${val4}`;

              return {
                audio: {
                  /**
                   * @returns OK
                   */
                  post: (option: { body: Methods_tcrwna['post']['reqBody'], headers?: Methods_tcrwna['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_tcrwna['post']['resBody'], BasicHeaders, Methods_tcrwna['post']['status']>(prefix, `${prefix4}${PATH26}`, POST, option, 'FormData').json(),
                  /**
                   * @returns OK
                   */
                  $post: (option: { body: Methods_tcrwna['post']['reqBody'], headers?: Methods_tcrwna['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_tcrwna['post']['resBody'], BasicHeaders, Methods_tcrwna['post']['status']>(prefix, `${prefix4}${PATH26}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH26}`,
                },
                image: {
                  /**
                   * @returns OK
                   */
                  post: (option: { body: Methods_p7n5l['post']['reqBody'], headers?: Methods_p7n5l['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_p7n5l['post']['resBody'], BasicHeaders, Methods_p7n5l['post']['status']>(prefix, `${prefix4}${PATH27}`, POST, option, 'FormData').json(),
                  /**
                   * @returns OK
                   */
                  $post: (option: { body: Methods_p7n5l['post']['reqBody'], headers?: Methods_p7n5l['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_p7n5l['post']['resBody'], BasicHeaders, Methods_p7n5l['post']['status']>(prefix, `${prefix4}${PATH27}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH27}`,
                },
                video: {
                  /**
                   * @returns OK
                   */
                  post: (option: { body: Methods_3twyvb['post']['reqBody'], headers?: Methods_3twyvb['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_3twyvb['post']['resBody'], BasicHeaders, Methods_3twyvb['post']['status']>(prefix, `${prefix4}${PATH28}`, POST, option, 'FormData').json(),
                  /**
                   * @returns OK
                   */
                  $post: (option: { body: Methods_3twyvb['post']['reqBody'], headers?: Methods_3twyvb['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                    fetch<Methods_3twyvb['post']['resBody'], BasicHeaders, Methods_3twyvb['post']['status']>(prefix, `${prefix4}${PATH28}`, POST, option, 'FormData').json().then(r => r.body),
                  $path: () => `${prefix}${prefix4}${PATH28}`,
                },
                /**
                 * @returns OK
                 */
                post: (option: { body: Methods_il9dq3['post']['reqBody'], headers?: Methods_il9dq3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_il9dq3['post']['resBody'], BasicHeaders, Methods_il9dq3['post']['status']>(prefix, prefix4, POST, option, 'FormData').json(),
                /**
                 * @returns OK
                 */
                $post: (option: { body: Methods_il9dq3['post']['reqBody'], headers?: Methods_il9dq3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_il9dq3['post']['resBody'], BasicHeaders, Methods_il9dq3['post']['status']>(prefix, prefix4, POST, option, 'FormData').json().then(r => r.body),
                $path: () => `${prefix}${prefix4}`,
              };
            },
          },
          video: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods_1jmrnda['post']['reqBody'], headers?: Methods_1jmrnda['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1jmrnda['post']['resBody'], BasicHeaders, Methods_1jmrnda['post']['status']>(prefix, PATH29, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods_1jmrnda['post']['reqBody'], headers?: Methods_1jmrnda['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1jmrnda['post']['resBody'], BasicHeaders, Methods_1jmrnda['post']['status']>(prefix, PATH29, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${PATH29}`,
          },
        },
        fcm_token: {
          /**
           * Save newly updated firebase cloud messaging device token
           */
          post: (option: { body: Methods_h6uxmr['post']['reqBody'], headers?: Methods_h6uxmr['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_h6uxmr['post']['status']>(prefix, PATH30, POST, option).send(),
          /**
           * Save newly updated firebase cloud messaging device token
           */
          $post: (option: { body: Methods_h6uxmr['post']['reqBody'], headers?: Methods_h6uxmr['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_h6uxmr['post']['status']>(prefix, PATH30, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH30}`,
        },
        info: {
          /**
           * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
           * @returns OK
           */
          get: (option?: { headers?: Methods_19d3t15['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_19d3t15['get']['resBody'], BasicHeaders, Methods_19d3t15['get']['status']>(prefix, PATH31, GET, option).json(),
          /**
           * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
           * @returns OK
           */
          $get: (option?: { headers?: Methods_19d3t15['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_19d3t15['get']['resBody'], BasicHeaders, Methods_19d3t15['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH31}`,
        },
        login: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods_1jif85y['post']['reqBody'], headers?: Methods_1jif85y['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1jif85y['post']['resBody'], BasicHeaders, Methods_1jif85y['post']['status']>(prefix, PATH32, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_1jif85y['post']['reqBody'], headers?: Methods_1jif85y['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1jif85y['post']['resBody'], BasicHeaders, Methods_1jif85y['post']['status']>(prefix, PATH32, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH32}`,
        },
        logout: {
          post: (option: { body: Methods_12bkd3r['post']['reqBody'], headers?: Methods_12bkd3r['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_12bkd3r['post']['status']>(prefix, PATH33, POST, option).send(),
          $post: (option: { body: Methods_12bkd3r['post']['reqBody'], headers?: Methods_12bkd3r['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_12bkd3r['post']['status']>(prefix, PATH33, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH33}`,
        },
        me: {
          /**
           * @returns OK
           */
          get: (option?: { headers?: Methods_11skt03['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_11skt03['get']['resBody'], BasicHeaders, Methods_11skt03['get']['status']>(prefix, PATH34, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { headers?: Methods_11skt03['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_11skt03['get']['resBody'], BasicHeaders, Methods_11skt03['get']['status']>(prefix, PATH34, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH34}`,
        },
        organisation: {
          users: {
            /**
             * @returns OK
             */
            get: (option: { query: Methods_1cuh6cs['get']['query'], headers?: Methods_1cuh6cs['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1cuh6cs['get']['resBody'], BasicHeaders, Methods_1cuh6cs['get']['status']>(prefix, PATH36, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option: { query: Methods_1cuh6cs['get']['query'], headers?: Methods_1cuh6cs['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1cuh6cs['get']['resBody'], BasicHeaders, Methods_1cuh6cs['get']['status']>(prefix, PATH36, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1cuh6cs['get']['query'] } | undefined) =>
              `${prefix}${PATH36}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * @returns OK
           */
          get: (option?: { headers?: Methods_10146mr['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_10146mr['get']['resBody'], BasicHeaders, Methods_10146mr['get']['status']>(prefix, PATH35, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { headers?: Methods_10146mr['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_10146mr['get']['resBody'], BasicHeaders, Methods_10146mr['get']['status']>(prefix, PATH35, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH35}`,
        },
        stories: {
          _storyId: (val3: number) => {
            const prefix3 = `${PATH37}/${val3}`;

            return {
              items: {
                _itemId: (val5: number) => {
                  const prefix5 = `${prefix3}${PATH11}/${val5}`;

                  return {
                    reaction: {
                      /**
                       * @returns OK
                       */
                      post: (option: { body: Methods_xafpc7['post']['reqBody'], headers?: Methods_xafpc7['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_xafpc7['post']['resBody'], BasicHeaders, Methods_xafpc7['post']['status']>(prefix, `${prefix5}${PATH38}`, POST, option).json(),
                      /**
                       * @returns OK
                       */
                      $post: (option: { body: Methods_xafpc7['post']['reqBody'], headers?: Methods_xafpc7['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                        fetch<Methods_xafpc7['post']['resBody'], BasicHeaders, Methods_xafpc7['post']['status']>(prefix, `${prefix5}${PATH38}`, POST, option).json().then(r => r.body),
                      $path: () => `${prefix}${prefix5}${PATH38}`,
                    },
                    /**
                     * @returns OK
                     */
                    get: (option?: { headers?: Methods_xohgor['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_xohgor['get']['resBody'], BasicHeaders, Methods_xohgor['get']['status']>(prefix, prefix5, GET, option).json(),
                    /**
                     * @returns OK
                     */
                    $get: (option?: { headers?: Methods_xohgor['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_xohgor['get']['resBody'], BasicHeaders, Methods_xohgor['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix5}`,
                  };
                },
                /**
                 * Returns a story content with support pagination
                 * @returns OK
                 */
                get: (option?: { query?: Methods_8i5efm['get']['query'] | undefined, headers?: Methods_8i5efm['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_8i5efm['get']['resBody'], BasicHeaders, Methods_8i5efm['get']['status']>(prefix, `${prefix3}${PATH11}`, GET, option).json(),
                /**
                 * Returns a story content with support pagination
                 * @returns OK
                 */
                $get: (option?: { query?: Methods_8i5efm['get']['query'] | undefined, headers?: Methods_8i5efm['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_8i5efm['get']['resBody'], BasicHeaders, Methods_8i5efm['get']['status']>(prefix, `${prefix3}${PATH11}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_8i5efm['get']['query'] } | undefined) =>
                  `${prefix}${prefix3}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              },
            };
          },
        },
        user: {
          _userId: (val3: string) => {
            const prefix3 = `${PATH39}/${val3}`;

            return {
              /**
               * @returns OK
               */
              get: (option?: { headers?: Methods_qxcbpr['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_qxcbpr['get']['resBody'], BasicHeaders, Methods_qxcbpr['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns OK
               */
              $get: (option?: { headers?: Methods_qxcbpr['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_qxcbpr['get']['resBody'], BasicHeaders, Methods_qxcbpr['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          profile: {
            put: (option: { body: Methods_2xbt8c['put']['reqBody'], headers?: Methods_2xbt8c['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_2xbt8c['put']['status']>(prefix, PATH40, PUT, option, 'FormData').send(),
            $put: (option: { body: Methods_2xbt8c['put']['reqBody'], headers?: Methods_2xbt8c['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_2xbt8c['put']['status']>(prefix, PATH40, PUT, option, 'FormData').send().then(r => r.body),
            $path: () => `${prefix}${PATH40}`,
          },
          /**
           * @returns OK
           */
          get: (option?: { headers?: Methods_1xng6ni['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1xng6ni['get']['resBody'], BasicHeaders, Methods_1xng6ni['get']['status']>(prefix, PATH39, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { headers?: Methods_1xng6ni['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1xng6ni['get']['resBody'], BasicHeaders, Methods_1xng6ni['get']['status']>(prefix, PATH39, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH39}`,
        },
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
