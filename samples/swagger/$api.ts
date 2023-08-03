import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './hello';
import type { Methods as Methods1 } from './pet';
import type { Methods as Methods2 } from './pet/_petId@number';
import type { Methods as Methods3 } from './pet/_petId@number/uploadImage';
import type { Methods as Methods4 } from './pet/findByStatus';
import type { Methods as Methods5 } from './store/inventory';
import type { Methods as Methods6 } from './store/order';
import type { Methods as Methods7 } from './store/order/_orderId@number';
import type { Methods as Methods8 } from './user';
import type { Methods as Methods9 } from './user/_username@string';
import type { Methods as Methods10 } from './user/createWithArray';
import type { Methods as Methods11 } from './user/createWithList';
import type { Methods as Methods12 } from './user/login';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '');
  const PATH0 = '/hello';
  const PATH1 = '/pet';
  const PATH2 = '/uploadImage';
  const PATH3 = '/pet/findByStatus';
  const PATH4 = '/store/inventory';
  const PATH5 = '/store/order';
  const PATH6 = '/user';
  const PATH7 = '/user/createWithArray';
  const PATH8 = '/user/createWithList';
  const PATH9 = '/user/login';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    hello: {
      /**
       * @returns returns a greeting
       */
      get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).text(),
      /**
       * @returns returns a greeting
       */
      $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    pet: {
      _petId: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          uploadImage: {
            /**
             * @returns successful operation
             */
            post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option, 'FormData').json(),
            /**
             * @returns successful operation
             */
            $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
          /**
           * Returns a single pet
           * @returns successful operation
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Returns a single pet
           * @returns successful operation
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch(prefix, prefix1, POST, option, 'URLSearchParams').send(),
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch(prefix, prefix1, POST, option, 'URLSearchParams').send().then(r => r.body),
          delete: (option?: { headers?: Methods2['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { headers?: Methods2['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      findByStatus: {
        /**
         * Multiple status values can be provided with comma separated strings
         * @returns successful operation
         */
        get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json(),
        /**
         * Multiple status values can be provided with comma separated strings
         * @returns successful operation
         */
        $get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | undefined) =>
          `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * @param option.body - Pet object that needs to be added to the store
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch(prefix, PATH1, POST, option).send(),
      /**
       * @param option.body - Pet object that needs to be added to the store
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch(prefix, PATH1, POST, option).send().then(r => r.body),
      /**
       * @param option.body - Pet object that needs to be added to the store
       */
      put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
        fetch(prefix, PATH1, PUT, option).send(),
      /**
       * @param option.body - Pet object that needs to be added to the store
       */
      $put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
        fetch(prefix, PATH1, PUT, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    store: {
      inventory: {
        /**
         * Returns a map of status codes to quantities
         * @returns successful operation
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * Returns a map of status codes to quantities
         * @returns successful operation
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`,
      },
      order: {
        _orderId: (val2: number) => {
          const prefix2 = `${PATH5}/${val2}`;

          return {
            /**
             * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
             * @returns successful operation
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
             * @returns successful operation
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch(prefix, prefix2, DELETE, option).send(),
            /**
             * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @param option.body - order placed for purchasing the pet
         * @returns successful operation
         */
        post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option).json(),
        /**
         * @param option.body - order placed for purchasing the pet
         * @returns successful operation
         */
        $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`,
      },
    },
    user: {
      _username: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`;

        return {
          /**
           * @returns successful operation
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns successful operation
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * This can only be done by the logged in user.
           * @param option.body - Updated user object
           */
          put: (option: { body: Methods9['put']['reqBody'], config?: T | undefined }) =>
            fetch(prefix, prefix1, PUT, option).send(),
          /**
           * This can only be done by the logged in user.
           * @param option.body - Updated user object
           */
          $put: (option: { body: Methods9['put']['reqBody'], config?: T | undefined }) =>
            fetch(prefix, prefix1, PUT, option).send().then(r => r.body),
          /**
           * This can only be done by the logged in user.
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option).send(),
          /**
           * This can only be done by the logged in user.
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      createWithArray: {
        /**
         * @param option.body - List of user object
         */
        post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, PATH7, POST, option).send(),
        /**
         * @param option.body - List of user object
         */
        $post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, PATH7, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH7}`,
      },
      createWithList: {
        /**
         * @param option.body - List of user object
         */
        post: (option: { body: Methods11['post']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, PATH8, POST, option).send(),
        /**
         * @param option.body - List of user object
         */
        $post: (option: { body: Methods11['post']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, PATH8, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH8}`,
      },
      login: {
        /**
         * @returns successful operation
         */
        get: (option: { query: Methods12['get']['query'], config?: T | undefined }) =>
          fetch<Methods12['get']['resBody'], Methods12['get']['resHeaders'], Methods12['get']['status']>(prefix, PATH9, GET, option).text(),
        /**
         * @returns successful operation
         */
        $get: (option: { query: Methods12['get']['query'], config?: T | undefined }) =>
          fetch<Methods12['get']['resBody'], Methods12['get']['resHeaders'], Methods12['get']['status']>(prefix, PATH9, GET, option).text().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods12['get']['query'] } | undefined) =>
          `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * This can only be done by the logged in user.
       * @param option.body - Created user object
       */
      post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
        fetch(prefix, PATH6, POST, option).send(),
      /**
       * This can only be done by the logged in user.
       * @param option.body - Created user object
       */
      $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
        fetch(prefix, PATH6, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH6}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
