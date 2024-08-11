import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_6aozbk } from './init';
import type { Methods as Methods_xzhpkb } from './roles';
import type { Methods as Methods_1o3aarp } from './roles/_id@string';
import type { Methods as Methods_e5duka } from './roles/_role@string';
import type { Methods as Methods_13pslsq } from './search/_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '');
  const PATH0 = '/users-permissions/init';
  const PATH1 = '/users-permissions/roles';
  const PATH2 = '/users-permissions/search';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    init: {
      /**
       * Check if the first admin user has already been registered
       * @returns response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_6aozbk['get']['resBody'], BasicHeaders, Methods_6aozbk['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Check if the first admin user has already been registered
       * @returns response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_6aozbk['get']['resBody'], BasicHeaders, Methods_6aozbk['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    roles: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * Retrieve a role depending on its id
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1o3aarp['get']['resBody'], BasicHeaders, Methods_1o3aarp['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Retrieve a role depending on its id
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1o3aarp['get']['resBody'], BasicHeaders, Methods_1o3aarp['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      _role: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * Update a role
           * @returns response
           */
          put: (option: { body: Methods_e5duka['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_e5duka['put']['resBody'], BasicHeaders, Methods_e5duka['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update a role
           * @returns response
           */
          $put: (option: { body: Methods_e5duka['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_e5duka['put']['resBody'], BasicHeaders, Methods_e5duka['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete a role
           * @returns response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_e5duka['delete']['resBody'], BasicHeaders, Methods_e5duka['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete a role
           * @returns response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_e5duka['delete']['resBody'], BasicHeaders, Methods_e5duka['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Retrieve all role documents
       * @returns response
       */
      get: (option?: { query?: Methods_xzhpkb['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_xzhpkb['get']['resBody'], BasicHeaders, Methods_xzhpkb['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Retrieve all role documents
       * @returns response
       */
      $get: (option?: { query?: Methods_xzhpkb['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_xzhpkb['get']['resBody'], BasicHeaders, Methods_xzhpkb['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * Create a new role
       * @returns response
       */
      post: (option: { body: Methods_xzhpkb['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_xzhpkb['post']['resBody'], BasicHeaders, Methods_xzhpkb['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Create a new role
       * @returns response
       */
      $post: (option: { body: Methods_xzhpkb['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_xzhpkb['post']['resBody'], BasicHeaders, Methods_xzhpkb['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_xzhpkb['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    search: {
      _id: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`;

        return {
          /**
           * Search for users
           * @returns response
           */
          get: (option?: { query?: Methods_13pslsq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_13pslsq['get']['resBody'], BasicHeaders, Methods_13pslsq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Search for users
           * @returns response
           */
          $get: (option?: { query?: Methods_13pslsq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_13pslsq['get']['resBody'], BasicHeaders, Methods_13pslsq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_13pslsq['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
