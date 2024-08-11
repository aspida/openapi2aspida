import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1kza667 } from './_user_id@string/orders';
import type { Methods as Methods_1672ig2 } from './_user_id@string/orders/_order_id@string';
import type { Methods as Methods_t1y347 } from './_user_id@string/orders/purchase/invoice';
import type { Methods as Methods_hpr32h } from './_user_id@string/orders/purchase/wallet';
import type { Methods as Methods_fb4oql } from './_user_id@string/orders/unsubscribe';
import type { Methods as Methods_1so4353 } from './_user_id@string/orders/update/renew';
import type { Methods as Methods_v5ivnw } from './_user_id@string/phone-numbers/_phone_number@string/orders';
import type { Methods as Methods_1xcq70y } from './_user_id@string/phone-numbers/_phone_number@string/orders/purchase/invoice';
import type { Methods as Methods_i3b7bi } from './_user_id@string/phone-numbers/_phone_number@string/orders/purchase/wallet';

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
                fetch<Methods_1672ig2['get']['resBody'], Methods_1672ig2['get']['resHeaders'], Methods_1672ig2['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * Get info of an order by order_id
               * @returns Ok
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1672ig2['get']['resBody'], Methods_1672ig2['get']['resHeaders'], Methods_1672ig2['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
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
              post: (option: { body: Methods_t1y347['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_t1y347['post']['resBody'], Methods_t1y347['post']['resHeaders'], Methods_t1y347['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
              /**
               * Creates an purchase order for an offer by its offer_id and using invoice as payment method
               * @param option.body - Body to create a purchase order
               * @returns Created
               */
              $post: (option: { body: Methods_t1y347['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_t1y347['post']['resBody'], Methods_t1y347['post']['resHeaders'], Methods_t1y347['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix0}${PATH2}`,
            },
            wallet: {
              /**
               * Creates an purchase order for an offer by its offer_id using wallet as payment method
               * @param option.body - Body to create a purchase order
               * @returns Created
               */
              post: (option: { body: Methods_hpr32h['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_hpr32h['post']['resBody'], Methods_hpr32h['post']['resHeaders'], Methods_hpr32h['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json(),
              /**
               * Creates an purchase order for an offer by its offer_id using wallet as payment method
               * @param option.body - Body to create a purchase order
               * @returns Created
               */
              $post: (option: { body: Methods_hpr32h['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_hpr32h['post']['resBody'], Methods_hpr32h['post']['resHeaders'], Methods_hpr32h['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix0}${PATH3}`,
            },
          },
          unsubscribe: {
            /**
             * Creates an unsubscribe order for a product_id
             * @param option.body - Body to create a purchase order
             * @returns Created
             */
            post: (option: { body: Methods_fb4oql['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_fb4oql['post']['resBody'], Methods_fb4oql['post']['resHeaders'], Methods_fb4oql['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json(),
            /**
             * Creates an unsubscribe order for a product_id
             * @param option.body - Body to create a purchase order
             * @returns Created
             */
            $post: (option: { body: Methods_fb4oql['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_fb4oql['post']['resBody'], Methods_fb4oql['post']['resHeaders'], Methods_fb4oql['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH4}`,
          },
          update: {
            renew: {
              /**
               * Creates an update order for a product_id
               * @param option.body - Body to create a update order
               * @returns Created
               */
              post: (option: { body: Methods_1so4353['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1so4353['post']['resBody'], Methods_1so4353['post']['resHeaders'], Methods_1so4353['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option).json(),
              /**
               * Creates an update order for a product_id
               * @param option.body - Body to create a update order
               * @returns Created
               */
              $post: (option: { body: Methods_1so4353['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1so4353['post']['resBody'], Methods_1so4353['post']['resHeaders'], Methods_1so4353['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix0}${PATH5}`,
            },
          },
          /**
           * List orders for a user
           * @returns Ok
           */
          get: (option?: { query?: Methods_1kza667['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1kza667['get']['resBody'], Methods_1kza667['get']['resHeaders'], Methods_1kza667['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * List orders for a user
           * @returns Ok
           */
          $get: (option?: { query?: Methods_1kza667['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1kza667['get']['resBody'], Methods_1kza667['get']['resHeaders'], Methods_1kza667['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1kza667['get']['query'] } | undefined) =>
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
                    post: (option: { body: Methods_1xcq70y['post']['reqBody'], config?: T | undefined }) =>
                      fetch<Methods_1xcq70y['post']['resBody'], Methods_1xcq70y['post']['resHeaders'], Methods_1xcq70y['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json(),
                    /**
                     * Creates an purchase order for an offer by its offer_id using invoice has payment method
                     * @param option.body - Body to create a purchase order
                     * @returns Created
                     */
                    $post: (option: { body: Methods_1xcq70y['post']['reqBody'], config?: T | undefined }) =>
                      fetch<Methods_1xcq70y['post']['resBody'], Methods_1xcq70y['post']['resHeaders'], Methods_1xcq70y['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix2}${PATH2}`,
                  },
                  wallet: {
                    /**
                     * Creates an purchase order for an offer by its offer_id using a wallet has payment method
                     * @param option.body - Body to create a purchase order
                     * @returns Created
                     */
                    post: (option: { body: Methods_i3b7bi['post']['reqBody'], config?: T | undefined }) =>
                      fetch<Methods_i3b7bi['post']['resBody'], Methods_i3b7bi['post']['resHeaders'], Methods_i3b7bi['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option).json(),
                    /**
                     * Creates an purchase order for an offer by its offer_id using a wallet has payment method
                     * @param option.body - Body to create a purchase order
                     * @returns Created
                     */
                    $post: (option: { body: Methods_i3b7bi['post']['reqBody'], config?: T | undefined }) =>
                      fetch<Methods_i3b7bi['post']['resBody'], Methods_i3b7bi['post']['resHeaders'], Methods_i3b7bi['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option).json().then(r => r.body),
                    $path: () => `${prefix}${prefix2}${PATH3}`,
                  },
                },
                /**
                 * List orders for a phone number
                 * @returns Ok
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_v5ivnw['get']['resBody'], Methods_v5ivnw['get']['resHeaders'], Methods_v5ivnw['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json(),
                /**
                 * List orders for a phone number
                 * @returns Ok
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_v5ivnw['get']['resBody'], Methods_v5ivnw['get']['resHeaders'], Methods_v5ivnw['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json().then(r => r.body),
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
