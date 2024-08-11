import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1xhiioa } from './users';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/organisation';
  const PATH1 = '/api/v3/organisation/users';
  const GET = 'GET';

  return {
    users: {
      /**
       * @returns OK
       */
      get: (option: { query: Methods_1xhiioa['get']['query'], headers?: Methods_1xhiioa['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option: { query: Methods_1xhiioa['get']['query'], headers?: Methods_1xhiioa['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xhiioa['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * @returns OK
     */
    get: (option?: { headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
