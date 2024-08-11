import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_t8zqi3 } from './_chatId@number/items/_itemId@number';
import type { Methods as Methods_hxx4he } from './_chatId@string/items';
import type { Methods as Methods_65mpqr } from './_chatId@string/items/audio';
import type { Methods as Methods_1m55918 } from './_chatId@string/items/image';
import type { Methods as Methods_tzgx8a } from './_chatId@string/items/video';
import type { Methods as Methods_1xepoiu } from './keys';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/chats';
  const PATH1 = '/items';
  const PATH2 = '/items/audio';
  const PATH3 = '/items/image';
  const PATH4 = '/items/video';
  const PATH5 = '/api/v3/chats/keys';
  const GET = 'GET';
  const POST = 'POST';

  return {
    _chatId_number: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        items: {
          _itemId: (val2: number) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`;

            return {
              /**
               * @returns OK
               */
              post: (option: { body: Methods_t8zqi3['post']['reqBody'], headers?: Methods_t8zqi3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_t8zqi3['post']['resBody'], BasicHeaders, Methods_t8zqi3['post']['status']>(prefix, prefix2, POST, option).json(),
              /**
               * @returns OK
               */
              $post: (option: { body: Methods_t8zqi3['post']['reqBody'], headers?: Methods_t8zqi3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods_t8zqi3['post']['resBody'], BasicHeaders, Methods_t8zqi3['post']['status']>(prefix, prefix2, POST, option).json().then(r => r.body),
              /**
               * @returns OK
               */
              get: (option?: { headers?: Methods_t8zqi3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_t8zqi3['get']['resBody'], BasicHeaders, Methods_t8zqi3['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * @returns OK
               */
              $get: (option?: { headers?: Methods_t8zqi3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_t8zqi3['get']['resBody'], BasicHeaders, Methods_t8zqi3['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`,
            };
          },
        },
      };
    },
    _chatId_string: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        items: {
          audio: {
            /**
             * Create shared audio item in chat
             * @returns OK
             */
            post: (option: { body: Methods_65mpqr['post']['reqBody'], headers?: Methods_65mpqr['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_65mpqr['post']['resBody'], BasicHeaders, Methods_65mpqr['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'FormData').json(),
            /**
             * Create shared audio item in chat
             * @returns OK
             */
            $post: (option: { body: Methods_65mpqr['post']['reqBody'], headers?: Methods_65mpqr['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_65mpqr['post']['resBody'], BasicHeaders, Methods_65mpqr['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH2}`,
          },
          image: {
            /**
             * Create shared image item in chat
             * @returns OK
             */
            post: (option: { body: Methods_1m55918['post']['reqBody'], headers?: Methods_1m55918['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1m55918['post']['resBody'], BasicHeaders, Methods_1m55918['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option, 'FormData').json(),
            /**
             * Create shared image item in chat
             * @returns OK
             */
            $post: (option: { body: Methods_1m55918['post']['reqBody'], headers?: Methods_1m55918['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1m55918['post']['resBody'], BasicHeaders, Methods_1m55918['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH3}`,
          },
          video: {
            /**
             * Create shared video item in chat
             * @returns OK
             */
            post: (option: { body: Methods_tzgx8a['post']['reqBody'], headers?: Methods_tzgx8a['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_tzgx8a['post']['resBody'], BasicHeaders, Methods_tzgx8a['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option, 'FormData').json(),
            /**
             * Create shared video item in chat
             * @returns OK
             */
            $post: (option: { body: Methods_tzgx8a['post']['reqBody'], headers?: Methods_tzgx8a['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_tzgx8a['post']['resBody'], BasicHeaders, Methods_tzgx8a['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH4}`,
          },
          /**
           * Returns a list of items of chat shared content
           * @returns OK
           */
          get: (option?: { query?: Methods_hxx4he['get']['query'] | undefined, headers?: Methods_hxx4he['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_hxx4he['get']['resBody'], BasicHeaders, Methods_hxx4he['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Returns a list of items of chat shared content
           * @returns OK
           */
          $get: (option?: { query?: Methods_hxx4he['get']['query'] | undefined, headers?: Methods_hxx4he['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_hxx4he['get']['resBody'], BasicHeaders, Methods_hxx4he['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * Create shared item in chat
           * @param option.body - item to create
           * @returns OK
           */
          post: (option: { body: Methods_hxx4he['post']['reqBody'], headers?: Methods_hxx4he['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_hxx4he['post']['resBody'], BasicHeaders, Methods_hxx4he['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * Create shared item in chat
           * @param option.body - item to create
           * @returns OK
           */
          $post: (option: { body: Methods_hxx4he['post']['reqBody'], headers?: Methods_hxx4he['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_hxx4he['post']['resBody'], BasicHeaders, Methods_hxx4he['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_hxx4he['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      };
    },
    keys: {
      /**
       * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
       * @returns OK
       */
      get: (option?: { headers?: Methods_1xepoiu['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xepoiu['get']['resBody'], BasicHeaders, Methods_1xepoiu['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
       * @returns OK
       */
      $get: (option?: { headers?: Methods_1xepoiu['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xepoiu['get']['resBody'], BasicHeaders, Methods_1xepoiu['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
