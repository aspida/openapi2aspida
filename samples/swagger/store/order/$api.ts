import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_8hee5 } from './_orderId@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '');
  const PATH0 = '/store/order';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';

  return {
    _orderId: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
         * @returns successful operation
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_8hee5['get']['resBody'], BasicHeaders, Methods_8hee5['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
         * @returns successful operation
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_8hee5['get']['resBody'], BasicHeaders, Methods_8hee5['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, DELETE, option).send(),
        /**
         * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * @param option.body - order placed for purchasing the pet
     * @returns successful operation
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @param option.body - order placed for purchasing the pet
     * @returns successful operation
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
