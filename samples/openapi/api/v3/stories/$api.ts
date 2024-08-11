import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1gwl3qx } from './_storyId@number/items';
import type { Methods as Methods_1sxbpty } from './_storyId@number/items/_itemId@number';
import type { Methods as Methods_1cqqw54 } from './_storyId@number/items/_itemId@number/reaction';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/stories';
  const PATH1 = '/items';
  const PATH2 = '/reaction';
  const GET = 'GET';
  const POST = 'POST';

  return {
    _storyId: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        items: {
          _itemId: (val2: number) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`;

            return {
              reaction: {
                /**
                 * @returns OK
                 */
                post: (option: { body: Methods_1cqqw54['post']['reqBody'], headers?: Methods_1cqqw54['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_1cqqw54['post']['resBody'], BasicHeaders, Methods_1cqqw54['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json(),
                /**
                 * @returns OK
                 */
                $post: (option: { body: Methods_1cqqw54['post']['reqBody'], headers?: Methods_1cqqw54['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_1cqqw54['post']['resBody'], BasicHeaders, Methods_1cqqw54['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH2}`,
              },
              /**
               * @returns OK
               */
              get: (option?: { headers?: Methods_1sxbpty['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1sxbpty['get']['resBody'], BasicHeaders, Methods_1sxbpty['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * @returns OK
               */
              $get: (option?: { headers?: Methods_1sxbpty['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1sxbpty['get']['resBody'], BasicHeaders, Methods_1sxbpty['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`,
            };
          },
          /**
           * Returns a story content with support pagination
           * @returns OK
           */
          get: (option?: { query?: Methods_1gwl3qx['get']['query'] | undefined, headers?: Methods_1gwl3qx['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1gwl3qx['get']['resBody'], BasicHeaders, Methods_1gwl3qx['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Returns a story content with support pagination
           * @returns OK
           */
          $get: (option?: { query?: Methods_1gwl3qx['get']['query'] | undefined, headers?: Methods_1gwl3qx['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1gwl3qx['get']['resBody'], BasicHeaders, Methods_1gwl3qx['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1gwl3qx['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
