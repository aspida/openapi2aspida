import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_j6geu1 } from './v1/stories';
import type { Methods as Methods_mtxbbu } from './v1/stories/_storyId@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/stream/v1/stories';
  const GET = 'GET';

  return {
    v1: {
      stories: {
        _storyId: (val2: number) => {
          const prefix2 = `${PATH0}/${val2}`;

          return {
            /**
             * @returns OK
             */
            get: (option: { query: Methods_mtxbbu['get']['query'], config?: T | undefined }) =>
              fetch<Methods_mtxbbu['get']['resBody'], BasicHeaders, Methods_mtxbbu['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option: { query: Methods_mtxbbu['get']['query'], config?: T | undefined }) =>
              fetch<Methods_mtxbbu['get']['resBody'], BasicHeaders, Methods_mtxbbu['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_mtxbbu['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * It returns all stories with first 75 cards
         * @returns OK
         */
        get: (option: { query: Methods_j6geu1['get']['query'], config?: T | undefined }) =>
          fetch<Methods_j6geu1['get']['resBody'], BasicHeaders, Methods_j6geu1['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * It returns all stories with first 75 cards
         * @returns OK
         */
        $get: (option: { query: Methods_j6geu1['get']['query'], config?: T | undefined }) =>
          fetch<Methods_j6geu1['get']['resBody'], BasicHeaders, Methods_j6geu1['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_j6geu1['get']['query'] } | undefined) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
