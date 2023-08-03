import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '');
  const PATH0 = '/users-permissions/search';
  const GET = 'GET';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * Search for users
         */
        get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, GET, option).send(),
        /**
         * Search for users
         */
        $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
