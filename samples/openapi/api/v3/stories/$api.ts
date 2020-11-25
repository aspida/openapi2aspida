/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './_storyId@number/items'
import { Methods as Methods1 } from './_storyId@number/items/_itemId@number'
import { Methods as Methods2 } from './_storyId@number/items/_itemId@number/reaction'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v3/stories'
  const PATH1 = '/items'
  const PATH2 = '/reaction'
  const GET = 'GET'
  const POST = 'POST'

  return {
    _storyId: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        items: {
          _itemId: (val1: number) => {
            const prefix1 = `${prefix0}${PATH1}/${val1}`

            return {
              reaction: {
                post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
                $post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix1}${PATH2}`
              },
              get: (option?: { headers?: Methods1['get']['reqHeaders'], config?: T }) =>
                fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
              $get: (option?: { headers?: Methods1['get']['reqHeaders'], config?: T }) =>
                fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}`
            }
          },
          get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          $get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
