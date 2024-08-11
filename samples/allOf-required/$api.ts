import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_qfagh5 } from './path';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://example.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/path';
  const GET = 'GET';

  return {
    path: {
      /**
       * @returns 取得成功
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_qfagh5['get']['resBody'], BasicHeaders, Methods_qfagh5['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns 取得成功
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_qfagh5['get']['resBody'], BasicHeaders, Methods_qfagh5['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
