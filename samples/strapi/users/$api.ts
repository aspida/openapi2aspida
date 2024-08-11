import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_2yw7dz } from './_id@string';
import type { Methods as Methods_1uc1f5c } from './me';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '');
  const PATH0 = '/users';
  const PATH1 = '/users/me';
  const GET = 'GET';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * Retrieve a single user depending on his id
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Retrieve a single user depending on his id
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * Update an existing user
         * @returns response
         */
        put: (option: { body: Methods_2yw7dz['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_2yw7dz['put']['resBody'], BasicHeaders, Methods_2yw7dz['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * Update an existing user
         * @returns response
         */
        $put: (option: { body: Methods_2yw7dz['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_2yw7dz['put']['resBody'], BasicHeaders, Methods_2yw7dz['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        /**
         * Delete an existing user
         * @returns response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['delete']['resBody'], BasicHeaders, Methods_2yw7dz['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * Delete an existing user
         * @returns response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['delete']['resBody'], BasicHeaders, Methods_2yw7dz['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    me: {
      /**
       * Retrieve the logged in user information
       * @returns response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['get']['resBody'], BasicHeaders, Methods_1uc1f5c['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Retrieve the logged in user information
       * @returns response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['get']['resBody'], BasicHeaders, Methods_1uc1f5c['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * Retrieve all user documents
     * @returns response
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Retrieve all user documents
     * @returns response
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
