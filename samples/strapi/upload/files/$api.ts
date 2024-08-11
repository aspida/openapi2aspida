import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_2yw7dz } from './_id@string';
import type { Methods as Methods_1ead5n5 } from './count';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '');
  const PATH0 = '/upload/files';
  const PATH1 = '/upload/files/count';
  const GET = 'GET';
  const DELETE = 'DELETE';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * Retrieve a single file depending on its id
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Retrieve a single file depending on its id
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * Delete an uploaded file
         * @returns response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['delete']['resBody'], BasicHeaders, Methods_2yw7dz['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * Delete an uploaded file
         * @returns response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['delete']['resBody'], BasicHeaders, Methods_2yw7dz['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    count: {
      /**
       * Retrieve the total number of uploaded files
       * @returns response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1ead5n5['get']['resBody'], BasicHeaders, Methods_1ead5n5['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Retrieve the total number of uploaded files
       * @returns response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1ead5n5['get']['resBody'], BasicHeaders, Methods_1ead5n5['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * Retrieve all file documents
     * @returns response
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Retrieve all file documents
     * @returns response
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
