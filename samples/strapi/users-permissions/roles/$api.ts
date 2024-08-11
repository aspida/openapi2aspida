import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_2yw7dz } from './_id@string';
import type { Methods as Methods_8khxqk } from './_role@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '');
  const PATH0 = '/users-permissions/roles';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * Retrieve a role depending on its id
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Retrieve a role depending on its id
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    _role: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * Update a role
         * @returns response
         */
        put: (option: { body: Methods_8khxqk['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_8khxqk['put']['resBody'], BasicHeaders, Methods_8khxqk['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * Update a role
         * @returns response
         */
        $put: (option: { body: Methods_8khxqk['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_8khxqk['put']['resBody'], BasicHeaders, Methods_8khxqk['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        /**
         * Delete a role
         * @returns response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_8khxqk['delete']['resBody'], BasicHeaders, Methods_8khxqk['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * Delete a role
         * @returns response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_8khxqk['delete']['resBody'], BasicHeaders, Methods_8khxqk['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * Retrieve all role documents
     * @returns response
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Retrieve all role documents
     * @returns response
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * Create a new role
     * @returns response
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * Create a new role
     * @returns response
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
