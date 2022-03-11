/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from '.'
// prettier-ignore
import type { Methods as Methods1 } from './_storyId@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/stream/v1/stories'
  const GET = 'GET'

  return {
    _storyId: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * @returns OK
         */
        get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    /**
     * It returns all stories with first 75 cards
     * @returns OK
     */
    get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * It returns all stories with first 75 cards
     * @returns OK
     */
    $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
