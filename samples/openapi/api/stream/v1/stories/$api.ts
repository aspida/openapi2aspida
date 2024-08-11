import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_5g86ea } from './_storyId@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/stream/v1/stories';
  const GET = 'GET';

  return {
    _storyId: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns OK
         */
        get: (option: { query: Methods_5g86ea['get']['query'], config?: T | undefined }) =>
          fetch<Methods_5g86ea['get']['resBody'], BasicHeaders, Methods_5g86ea['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option: { query: Methods_5g86ea['get']['query'], config?: T | undefined }) =>
          fetch<Methods_5g86ea['get']['resBody'], BasicHeaders, Methods_5g86ea['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_5g86ea['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * It returns all stories with first 75 cards
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * It returns all stories with first 75 cards
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
