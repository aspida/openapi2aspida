import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_6ye4bj } from './_any';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '');
  const PATH0 = '/connect';
  const GET = 'GET';

  return {
    _any: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * Connect a provider
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_6ye4bj['get']['resBody'], BasicHeaders, Methods_6ye4bj['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Connect a provider
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_6ye4bj['get']['resBody'], BasicHeaders, Methods_6ye4bj['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
