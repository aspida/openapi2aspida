import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './_user_id@string/orders';
import type { Methods as Methods1 } from './_user_id@string/orders/_order_id@string';
import type { Methods as Methods2 } from './_user_id@string/orders/purchase/invoice';
import type { Methods as Methods3 } from './_user_id@string/orders/purchase/wallet';
import type { Methods as Methods4 } from './_user_id@string/orders/unsubscribe';
import type { Methods as Methods5 } from './_user_id@string/orders/update/renew';
import type { Methods as Methods6 } from './_user_id@string/phone-numbers/_phone_number@string/orders';
import type { Methods as Methods7 } from './_user_id@string/phone-numbers/_phone_number@string/orders/purchase/invoice';
import type { Methods as Methods8 } from './_user_id@string/phone-numbers/_phone_number@string/orders/purchase/wallet';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.baikalplatform.com/product-management/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/users';
  const PATH1 = '/orders';
  const PATH2 = '/orders/purchase/invoice';
  const PATH3 = '/orders/purchase/wallet';
  const PATH4 = '/orders/unsubscribe';
  const PATH5 = '/orders/update/renew';
  const PATH6 = '/phone-numbers';
  const GET = 'GET';
  const POST = 'POST';

  return {
    _user_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        orders: {
          _order_id: (val2: string) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`;

            return {
              /**
               * Get info of an order by order_id
               * @returns Ok
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * Get info of an order by order_id
               * @returns Ok
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`,
            };
          },
          purchase: {
            invoice: {
              /**
               * Creates an purchase order for an offer by its offer_id and using invoice as payment method
               * @param option.body - Body to create a purchase order
               * @returns Created
               */
              post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
              /**
               * Creates an purchase order for an offer by its offer_id and using invoice as payment method
               * @param option.body - Body to create a purchase order
               * @returns Created
               */
              $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix0}${PATH2}`,
            },
            wallet: {
              /**
               * Creates an purchase order for an offer by its offer_id using wallet as payment method
               * @param option.body - Body to create a purchase order
               * @returns Created
               */
              post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods3['post']['resBody'], Methods3['post']['resHeaders'], Methods3['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json(),
              /**
               * Creates an purchase order for an offer by its offer_id using wallet as payment method
               * @param option.body - Body to create a purchase order
               * @returns Created
               */
              $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods3['post']['resBody'], Methods3['post']['resHeaders'], Methods3['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix0}${PATH3}`,
            },
          },
          unsubscribe: {
            /**
             * Creates an unsubscribe order for a product_id
             * @param option.body - Body to create a purchase order
             * @returns Created
             */
            post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json(),
            /**
             * Creates an unsubscribe order for a product_id
             * @param option.body - Body to create a purchase order
             * @returns Created
             */
            $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH4}`,
          },
          update: {
            renew: {
              /**
               * Creates an update order for a product_id
               * @param option.body - Body to create a update order
               * @returns Created
               */
              post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods5['post']['resBody'], Methods5['post']['resHeaders'], Methods5['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option).json(),
              /**
               * Creates an update order for a product_id
               * @param option.body - Body to create a update order
               * @returns Created
               */
              $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods5['post']['resBody'], Methods5['post']['resHeaders'], Methods5['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix0}${PATH5}`,
            },
          },
          /**
           * List orders for a user
           * @returns Ok
           */
          get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * List orders for a user
           * @returns Ok
           */
          $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        phone_numbers: {
          _phone_number: (val2: string) => {
            const prefix2 = `${prefix0}${PATH6}/${val2}`;

            return {
              orders: {
                purchase: {
                  invoice: {
                    /**
                     * Creates an purchase order for an offer by its offer_id using invoice has payment method
                     * @param option.body - Body to create a purchase order
                     * @returns Created
                     */
                    post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
                      fetch<Methods7['post']['resBody'], Methods7['post']['resHeaders'], Methods7['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json(),
                    /**
                     * Creates an purchase order for an offer by its offer_id using invoice has payment method
                     * @param option.body - Body to create a purchase order
                     * @returns Created
                     */
                    $post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
                      fetch<Methods7['post']['resBody'], Methods7['post']['resHeaders'], Methods7['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix2}${PATH2}`,
                  },
                  wallet: {
                    /**
                     * Creates an purchase order for an offer by its offer_id using a wallet has payment method
                     * @param option.body - Body to create a purchase order
                     * @returns Created
                     */
                    post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
                      fetch<Methods8['post']['resBody'], Methods8['post']['resHeaders'], Methods8['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option).json(),
                    /**
                     * Creates an purchase order for an offer by its offer_id using a wallet has payment method
                     * @param option.body - Body to create a purchase order
                     * @returns Created
                     */
                    $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
                      fetch<Methods8['post']['resBody'], Methods8['post']['resHeaders'], Methods8['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix2}${PATH3}`,
                  },
                },
                /**
                 * List orders for a phone number
                 * @returns Ok
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods6['get']['resBody'], Methods6['get']['resHeaders'], Methods6['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json(),
                /**
                 * List orders for a phone number
                 * @returns Ok
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods6['get']['resBody'], Methods6['get']['resHeaders'], Methods6['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH1}`,
              },
            };
          },
        },
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
