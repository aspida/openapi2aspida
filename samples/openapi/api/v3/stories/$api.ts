/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_storyId@number/items'
// prettier-ignore
import { Methods as Methods1 } from './_storyId@number/items/_itemId@number'
// prettier-ignore
import { Methods as Methods2 } from './_storyId@number/items/_itemId@number/reaction'

// prettier-ignore
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
          _itemId: (val2: number) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

            return {
              reaction: {
                /**
                 * @returns OK
                 */
                post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json(),
                /**
                 * @returns OK
                 */
                $post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
                  fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix2}${PATH2}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH2}`
              },
              /**
               * @returns OK
               */
              get: (option?: { headers?: Methods1['get']['reqHeaders'], config?: T }) =>
                fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * @returns OK
               */
              $get: (option?: { headers?: Methods1['get']['reqHeaders'], config?: T }) =>
                fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          /**
           * Returns a story content with support pagination
           * @returns OK
           */
          get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Returns a story content with support pagination
           * @returns OK
           */
          $get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
