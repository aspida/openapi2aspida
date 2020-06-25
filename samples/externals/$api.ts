/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './users/_user_id@string/orders/index'
import { Methods as Methods1 } from './users/_user_id@string/orders/_order_id@string/index'
import { Methods as Methods2 } from './users/_user_id@string/orders/purchase/invoice/index'
import { Methods as Methods3 } from './users/_user_id@string/orders/purchase/wallet/index'
import { Methods as Methods4 } from './users/_user_id@string/orders/unsubscribe/index'
import { Methods as Methods5 } from './users/_user_id@string/orders/update/renew/index'
import { Methods as Methods6 } from './users/_user_id@string/phone-numbers/_phone_number@string/orders/index'
import { Methods as Methods7 } from './users/_user_id@string/phone-numbers/_phone_number@string/orders/purchase/invoice/index'
import { Methods as Methods8 } from './users/_user_id@string/phone-numbers/_phone_number@string/orders/purchase/wallet/index'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? 'https://api.baikalplatform.com/product-management/v1' : client.baseURL).replace(/\/$/, '')

  return {
    users: {
      _user_id: (val0: string) => ({
        orders: {
          _order_id: (val1: string) => ({
            get: (option?: { config?: T }) =>
              client.fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, `/users/${val0}/orders/${val1}`, 'GET', option).json(),
            $get: async (option?: { config?: T }) =>
              (await client.fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, `/users/${val0}/orders/${val1}`, 'GET', option).json()).body
          }),
          purchase: {
            invoice: {
              post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
                client.fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, `/users/${val0}/orders/purchase/invoice`, 'POST', option).json(),
              $post: async (option: { body: Methods2['post']['reqBody'], config?: T }) =>
                (await client.fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, `/users/${val0}/orders/purchase/invoice`, 'POST', option).json()).body
            },
            wallet: {
              post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
                client.fetch<Methods3['post']['resBody'], Methods3['post']['resHeaders'], Methods3['post']['status']>(prefix, `/users/${val0}/orders/purchase/wallet`, 'POST', option).json(),
              $post: async (option: { body: Methods3['post']['reqBody'], config?: T }) =>
                (await client.fetch<Methods3['post']['resBody'], Methods3['post']['resHeaders'], Methods3['post']['status']>(prefix, `/users/${val0}/orders/purchase/wallet`, 'POST', option).json()).body
            }
          },
          unsubscribe: {
            post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
              client.fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, `/users/${val0}/orders/unsubscribe`, 'POST', option).json(),
            $post: async (option: { body: Methods4['post']['reqBody'], config?: T }) =>
              (await client.fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, `/users/${val0}/orders/unsubscribe`, 'POST', option).json()).body
          },
          update: {
            renew: {
              post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
                client.fetch<Methods5['post']['resBody'], Methods5['post']['resHeaders'], Methods5['post']['status']>(prefix, `/users/${val0}/orders/update/renew`, 'POST', option).json(),
              $post: async (option: { body: Methods5['post']['reqBody'], config?: T }) =>
                (await client.fetch<Methods5['post']['resBody'], Methods5['post']['resHeaders'], Methods5['post']['status']>(prefix, `/users/${val0}/orders/update/renew`, 'POST', option).json()).body
            }
          },
          get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
            client.fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `/users/${val0}/orders`, 'GET', option).json(),
          $get: async (option?: { query?: Methods0['get']['query'], config?: T }) =>
            (await client.fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `/users/${val0}/orders`, 'GET', option).json()).body
        },
        phone_numbers: {
          _phone_number: (val2: string) => ({
            orders: {
              purchase: {
                invoice: {
                  post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
                    client.fetch<Methods7['post']['resBody'], Methods7['post']['resHeaders'], Methods7['post']['status']>(prefix, `/users/${val0}/phone-numbers/${val2}/orders/purchase/invoice`, 'POST', option).json(),
                  $post: async (option: { body: Methods7['post']['reqBody'], config?: T }) =>
                    (await client.fetch<Methods7['post']['resBody'], Methods7['post']['resHeaders'], Methods7['post']['status']>(prefix, `/users/${val0}/phone-numbers/${val2}/orders/purchase/invoice`, 'POST', option).json()).body
                },
                wallet: {
                  post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
                    client.fetch<Methods8['post']['resBody'], Methods8['post']['resHeaders'], Methods8['post']['status']>(prefix, `/users/${val0}/phone-numbers/${val2}/orders/purchase/wallet`, 'POST', option).json(),
                  $post: async (option: { body: Methods8['post']['reqBody'], config?: T }) =>
                    (await client.fetch<Methods8['post']['resBody'], Methods8['post']['resHeaders'], Methods8['post']['status']>(prefix, `/users/${val0}/phone-numbers/${val2}/orders/purchase/wallet`, 'POST', option).json()).body
                }
              },
              get: (option?: { config?: T }) =>
                client.fetch<Methods6['get']['resBody'], Methods6['get']['resHeaders'], Methods6['get']['status']>(prefix, `/users/${val0}/phone-numbers/${val2}/orders`, 'GET', option).json(),
              $get: async (option?: { config?: T }) =>
                (await client.fetch<Methods6['get']['resBody'], Methods6['get']['resHeaders'], Methods6['get']['status']>(prefix, `/users/${val0}/phone-numbers/${val2}/orders`, 'GET', option).json()).body
            }
          })
        }
      })
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
