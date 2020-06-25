/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './_user_id@string/orders'
import { Methods as Methods1 } from './_user_id@string/orders/_order_id@string'
import { Methods as Methods2 } from './_user_id@string/orders/purchase/invoice'
import { Methods as Methods3 } from './_user_id@string/orders/purchase/wallet'
import { Methods as Methods4 } from './_user_id@string/orders/unsubscribe'
import { Methods as Methods5 } from './_user_id@string/orders/update/renew'
import { Methods as Methods6 } from './_user_id@string/phone-numbers/_phone_number@string/orders'
import { Methods as Methods7 } from './_user_id@string/phone-numbers/_phone_number@string/orders/purchase/invoice'
import { Methods as Methods8 } from './_user_id@string/phone-numbers/_phone_number@string/orders/purchase/wallet'

const GET = 'GET'
const POST = 'POST'
const PATH0 = '/users'
const PATH1 = '/orders'
const PATH2 = '/orders/purchase/invoice'
const PATH3 = '/orders/purchase/wallet'
const PATH4 = '/orders/unsubscribe'
const PATH5 = '/orders/update/renew'
const PATH6 = '/phone-numbers'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.baikalplatform.com/product-management/v1' : baseURL).replace(/\/$/, '')

  return {
    _user_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        orders: {
          _order_id: (val1: string) => {
            const prefix1 = `${prefix0}${PATH1}/${val1}`

            return {
              get: (option?: { config?: T }) =>
                fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
              $get: (option?: { config?: T }) =>
                fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body)
            }
          },
          purchase: {
            invoice: {
              post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
                fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
              $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
                fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body)
            },
            wallet: {
              post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
                fetch<Methods3['post']['resBody'], Methods3['post']['resHeaders'], Methods3['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json(),
              $post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
                fetch<Methods3['post']['resBody'], Methods3['post']['resHeaders'], Methods3['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json().then(r => r.body)
            }
          },
          unsubscribe: {
            post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
              fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json(),
            $post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
              fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json().then(r => r.body)
          },
          update: {
            renew: {
              post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
                fetch<Methods5['post']['resBody'], Methods5['post']['resHeaders'], Methods5['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option).json(),
              $post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
                fetch<Methods5['post']['resBody'], Methods5['post']['resHeaders'], Methods5['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option).json().then(r => r.body)
            }
          },
          get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body)
        },
        phone_numbers: {
          _phone_number: (val2: string) => {
            const prefix2 = `${prefix0}${PATH6}/${val2}`

            return {
              orders: {
                purchase: {
                  invoice: {
                    post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
                      fetch<Methods7['post']['resBody'], Methods7['post']['resHeaders'], Methods7['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json(),
                    $post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
                      fetch<Methods7['post']['resBody'], Methods7['post']['resHeaders'], Methods7['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json().then(r => r.body)
                  },
                  wallet: {
                    post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
                      fetch<Methods8['post']['resBody'], Methods8['post']['resHeaders'], Methods8['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option).json(),
                    $post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
                      fetch<Methods8['post']['resBody'], Methods8['post']['resHeaders'], Methods8['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option).json().then(r => r.body)
                  }
                },
                get: (option?: { config?: T }) =>
                  fetch<Methods6['get']['resBody'], Methods6['get']['resHeaders'], Methods6['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json(),
                $get: (option?: { config?: T }) =>
                  fetch<Methods6['get']['resBody'], Methods6['get']['resHeaders'], Methods6['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json().then(r => r.body)
              }
            }
          }
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
