import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_19v0g2l } from './files';
import type { Methods as Methods_19ebnkb } from './files/_id@string';
import type { Methods as Methods_kq3ut } from './files/count';
import type { Methods as Methods_13pslsq } from './search/_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '');
  const PATH0 = '/upload';
  const PATH1 = '/upload/files';
  const PATH2 = '/upload/files/count';
  const PATH3 = '/upload/search';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';

  return {
    files: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * Retrieve a single file depending on its id
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_19ebnkb['get']['resBody'], BasicHeaders, Methods_19ebnkb['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Retrieve a single file depending on its id
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_19ebnkb['get']['resBody'], BasicHeaders, Methods_19ebnkb['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Delete an uploaded file
           * @returns response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_19ebnkb['delete']['resBody'], BasicHeaders, Methods_19ebnkb['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete an uploaded file
           * @returns response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_19ebnkb['delete']['resBody'], BasicHeaders, Methods_19ebnkb['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      count: {
        /**
         * Retrieve the total number of uploaded files
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_kq3ut['get']['resBody'], BasicHeaders, Methods_kq3ut['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * Retrieve the total number of uploaded files
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_kq3ut['get']['resBody'], BasicHeaders, Methods_kq3ut['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`,
      },
      /**
       * Retrieve all file documents
       * @returns response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_19v0g2l['get']['resBody'], BasicHeaders, Methods_19v0g2l['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Retrieve all file documents
       * @returns response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_19v0g2l['get']['resBody'], BasicHeaders, Methods_19v0g2l['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    search: {
      _id: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`;

        return {
          /**
           * Search for an uploaded file
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_13pslsq['get']['resBody'], BasicHeaders, Methods_13pslsq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Search for an uploaded file
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_13pslsq['get']['resBody'], BasicHeaders, Methods_13pslsq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    /**
     * Upload a file
     * @returns response
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * Upload a file
     * @returns response
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
