import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from '.';
import type { Methods as Methods1 } from './_username@string';
import type { Methods as Methods2 } from './createWithArray';
import type { Methods as Methods3 } from './createWithList';
import type { Methods as Methods4 } from './login';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '');
  const PATH0 = '/user';
  const PATH1 = '/user/createWithArray';
  const PATH2 = '/user/createWithList';
  const PATH3 = '/user/login';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _username: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns successful operation
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns successful operation
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * This can only be done by the logged in user.
         * @param option.body - Updated user object
         */
        put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, prefix0, PUT, option).send(),
        /**
         * This can only be done by the logged in user.
         * @param option.body - Updated user object
         */
        $put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, prefix0, PUT, option).send().then(r => r.body),
        /**
         * This can only be done by the logged in user.
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, DELETE, option).send(),
        /**
         * This can only be done by the logged in user.
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    createWithArray: {
      /**
       * @param option.body - List of user object
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch(prefix, PATH1, POST, option).send(),
      /**
       * @param option.body - List of user object
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    createWithList: {
      /**
       * @param option.body - List of user object
       */
      post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch(prefix, PATH2, POST, option).send(),
      /**
       * @param option.body - List of user object
       */
      $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    login: {
      /**
       * @returns successful operation
       */
      get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
        fetch<Methods4['get']['resBody'], Methods4['get']['resHeaders'], Methods4['get']['status']>(prefix, PATH3, GET, option).text(),
      /**
       * @returns successful operation
       */
      $get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
        fetch<Methods4['get']['resBody'], Methods4['get']['resHeaders'], Methods4['get']['status']>(prefix, PATH3, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * This can only be done by the logged in user.
     * @param option.body - Created user object
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch(prefix, PATH0, POST, option).send(),
    /**
     * This can only be done by the logged in user.
     * @param option.body - Created user object
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
