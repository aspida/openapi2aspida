import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_5c5whu } from './users/_user_id@string/orders';
import type { Methods as Methods_196y4qp } from './users/_user_id@string/orders/_order_id@string';
import type { Methods as Methods_2c1i7k } from './users/_user_id@string/orders/purchase/invoice';
import type { Methods as Methods_1st9tak } from './users/_user_id@string/orders/purchase/wallet';
import type { Methods as Methods_r3czmo } from './users/_user_id@string/orders/unsubscribe';
import type { Methods as Methods_gf3chw } from './users/_user_id@string/orders/update/renew';
import type { Methods as Methods_1wbe9in } from './users/_user_id@string/phone-numbers/_phone_number@string/orders';
import type { Methods as Methods_le187 } from './users/_user_id@string/phone-numbers/_phone_number@string/orders/purchase/invoice';
import type { Methods as Methods_1mzn4e1 } from './users/_user_id@string/phone-numbers/_phone_number@string/orders/purchase/wallet';

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
    users: {
      _user_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          orders: {
            _order_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH1}/${val3}`;

              return {
                /**
                 * Get info of an order by order_id
                 * @returns Ok
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_196y4qp['get']['resBody'], Methods_196y4qp['get']['resHeaders'], Methods_196y4qp['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * Get info of an order by order_id
                 * @returns Ok
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_196y4qp['get']['resBody'], Methods_196y4qp['get']['resHeaders'], Methods_196y4qp['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
            purchase: {
              invoice: {
                /**
                 * Creates an purchase order for an offer by its offer_id and using invoice as payment method
                 * @param option.body - Body to create a purchase order
                 * @returns Created
                 */
                post: (option: { body: Methods_2c1i7k['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_2c1i7k['post']['resBody'], Methods_2c1i7k['post']['resHeaders'], Methods_2c1i7k['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
                /**
                 * Creates an purchase order for an offer by its offer_id and using invoice as payment method
                 * @param option.body - Body to create a purchase order
                 * @returns Created
                 */
                $post: (option: { body: Methods_2c1i7k['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_2c1i7k['post']['resBody'], Methods_2c1i7k['post']['resHeaders'], Methods_2c1i7k['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix1}${PATH2}`,
              },
              wallet: {
                /**
                 * Creates an purchase order for an offer by its offer_id using wallet as payment method
                 * @param option.body - Body to create a purchase order
                 * @returns Created
                 */
                post: (option: { body: Methods_1st9tak['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_1st9tak['post']['resBody'], Methods_1st9tak['post']['resHeaders'], Methods_1st9tak['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json(),
                /**
                 * Creates an purchase order for an offer by its offer_id using wallet as payment method
                 * @param option.body - Body to create a purchase order
                 * @returns Created
                 */
                $post: (option: { body: Methods_1st9tak['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_1st9tak['post']['resBody'], Methods_1st9tak['post']['resHeaders'], Methods_1st9tak['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix1}${PATH3}`,
              },
            },
            unsubscribe: {
              /**
               * Creates an unsubscribe order for a product_id
               * @param option.body - Body to create a purchase order
               * @returns Created
               */
              post: (option: { body: Methods_r3czmo['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_r3czmo['post']['resBody'], Methods_r3czmo['post']['resHeaders'], Methods_r3czmo['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option).json(),
              /**
               * Creates an unsubscribe order for a product_id
               * @param option.body - Body to create a purchase order
               * @returns Created
               */
              $post: (option: { body: Methods_r3czmo['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_r3czmo['post']['resBody'], Methods_r3czmo['post']['resHeaders'], Methods_r3czmo['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH4}`,
            },
            update: {
              renew: {
                /**
                 * Creates an update order for a product_id
                 * @param option.body - Body to create a update order
                 * @returns Created
                 */
                post: (option: { body: Methods_gf3chw['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_gf3chw['post']['resBody'], Methods_gf3chw['post']['resHeaders'], Methods_gf3chw['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option).json(),
                /**
                 * Creates an update order for a product_id
                 * @param option.body - Body to create a update order
                 * @returns Created
                 */
                $post: (option: { body: Methods_gf3chw['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_gf3chw['post']['resBody'], Methods_gf3chw['post']['resHeaders'], Methods_gf3chw['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix1}${PATH5}`,
              },
            },
            /**
             * List orders for a user
             * @returns Ok
             */
            get: (option?: { query?: Methods_5c5whu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_5c5whu['get']['resBody'], Methods_5c5whu['get']['resHeaders'], Methods_5c5whu['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * List orders for a user
             * @returns Ok
             */
            $get: (option?: { query?: Methods_5c5whu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_5c5whu['get']['resBody'], Methods_5c5whu['get']['resHeaders'], Methods_5c5whu['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_5c5whu['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          phone_numbers: {
            _phone_number: (val3: string) => {
              const prefix3 = `${prefix1}${PATH6}/${val3}`;

              return {
                orders: {
                  purchase: {
                    invoice: {
                      /**
                       * Creates an purchase order for an offer by its offer_id using invoice has payment method
                       * @param option.body - Body to create a purchase order
                       * @returns Created
                       */
                      post: (option: { body: Methods_le187['post']['reqBody'], config?: T | undefined }) =>
                        fetch<Methods_le187['post']['resBody'], Methods_le187['post']['resHeaders'], Methods_le187['post']['status']>(prefix, `${prefix3}${PATH2}`, POST, option).json(),
                      /**
                       * Creates an purchase order for an offer by its offer_id using invoice has payment method
                       * @param option.body - Body to create a purchase order
                       * @returns Created
                       */
                      $post: (option: { body: Methods_le187['post']['reqBody'], config?: T | undefined }) =>
                        fetch<Methods_le187['post']['resBody'], Methods_le187['post']['resHeaders'], Methods_le187['post']['status']>(prefix, `${prefix3}${PATH2}`, POST, option).json().then(r => r.body),
                      $path: () => `${prefix}${prefix3}${PATH2}`,
                    },
                    wallet: {
                      /**
                       * Creates an purchase order for an offer by its offer_id using a wallet has payment method
                       * @param option.body - Body to create a purchase order
                       * @returns Created
                       */
                      post: (option: { body: Methods_1mzn4e1['post']['reqBody'], config?: T | undefined }) =>
                        fetch<Methods_1mzn4e1['post']['resBody'], Methods_1mzn4e1['post']['resHeaders'], Methods_1mzn4e1['post']['status']>(prefix, `${prefix3}${PATH3}`, POST, option).json(),
                      /**
                       * Creates an purchase order for an offer by its offer_id using a wallet has payment method
                       * @param option.body - Body to create a purchase order
                       * @returns Created
                       */
                      $post: (option: { body: Methods_1mzn4e1['post']['reqBody'], config?: T | undefined }) =>
                        fetch<Methods_1mzn4e1['post']['resBody'], Methods_1mzn4e1['post']['resHeaders'], Methods_1mzn4e1['post']['status']>(prefix, `${prefix3}${PATH3}`, POST, option).json().then(r => r.body),
                      $path: () => `${prefix}${prefix3}${PATH3}`,
                    },
                  },
                  /**
                   * List orders for a phone number
                   * @returns Ok
                   */
                  get: (option?: { config?: T | undefined } | undefined) =>
                    fetch<Methods_1wbe9in['get']['resBody'], Methods_1wbe9in['get']['resHeaders'], Methods_1wbe9in['get']['status']>(prefix, `${prefix3}${PATH1}`, GET, option).json(),
                  /**
                   * List orders for a phone number
                   * @returns Ok
                   */
                  $get: (option?: { config?: T | undefined } | undefined) =>
                    fetch<Methods_1wbe9in['get']['resBody'], Methods_1wbe9in['get']['resHeaders'], Methods_1wbe9in['get']['status']>(prefix, `${prefix3}${PATH1}`, GET, option).json().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH1}`,
                },
              };
            },
          },
        };
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
