import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_kw9y6m } from './inventory';
import type { Methods as Methods_1lpj73m } from './order';
import type { Methods as Methods_go1usm } from './order/_orderId@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '');
  const PATH0 = '/store/inventory';
  const PATH1 = '/store/order';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';

  return {
    inventory: {
      /**
       * Returns a map of status codes to quantities
       * @returns successful operation
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_kw9y6m['get']['resBody'], BasicHeaders, Methods_kw9y6m['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Returns a map of status codes to quantities
       * @returns successful operation
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_kw9y6m['get']['resBody'], BasicHeaders, Methods_kw9y6m['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    order: {
      _orderId: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
           * @returns successful operation
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_go1usm['get']['resBody'], BasicHeaders, Methods_go1usm['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
           * @returns successful operation
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_go1usm['get']['resBody'], BasicHeaders, Methods_go1usm['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option).send(),
          /**
           * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @param option.body - order placed for purchasing the pet
       * @returns successful operation
       */
      post: (option: { body: Methods_1lpj73m['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1lpj73m['post']['resBody'], BasicHeaders, Methods_1lpj73m['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @param option.body - order placed for purchasing the pet
       * @returns successful operation
       */
      $post: (option: { body: Methods_1lpj73m['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1lpj73m['post']['resBody'], BasicHeaders, Methods_1lpj73m['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
