/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_id@number'
import { Methods as Methods2 } from './_id@number/payments'
import { Methods as Methods3 } from './_id@number/payments/_payment_id@number'
import { Methods as Methods4 } from './_id@number/renews'
import { Methods as Methods5 } from './_id@number/renews/_renew_id@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/deals'
  const PATH1 = '/payments'
  const PATH2 = '/renews'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        payments: {
          _payment_id: (val2: number) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

            return {
              put: (option: { body: Methods3['put']['reqBody'], config?: T }) =>
                fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
              $put: (option: { body: Methods3['put']['reqBody'], config?: T }) =>
                fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
              delete: (option: { query: Methods3['delete']['query'], config?: T }) =>
                fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix2, DELETE, option).send(),
              $delete: (option: { query: Methods3['delete']['query'], config?: T }) =>
                fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: (option?: { method: 'delete'; query: Methods3['delete']['query'] }) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'URLSearchParams').json(),
          $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'URLSearchParams').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        renews: {
          _renew_id: (val2: number) => {
            const prefix2 = `${prefix0}${PATH2}/${val2}`

            return {
              put: (option: { body: Methods5['put']['reqBody'], config?: T }) =>
                fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
              $put: (option: { body: Methods5['put']['reqBody'], config?: T }) =>
                fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
              delete: (option: { query: Methods5['delete']['query'], config?: T }) =>
                fetch<Methods5['delete']['resBody'], BasicHeaders, Methods5['delete']['status']>(prefix, prefix2, DELETE, option).json(),
              $delete: (option: { query: Methods5['delete']['query'], config?: T }) =>
                fetch<Methods5['delete']['resBody'], BasicHeaders, Methods5['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
              $path: (option?: { method: 'delete'; query: Methods5['delete']['query'] }) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'URLSearchParams').json(),
          $post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'URLSearchParams').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        },
        get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        $get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        $put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] } | { method: 'delete'; query: Methods1['delete']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    $post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
