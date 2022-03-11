/* eslint-disable */
// prettier-ignore
import type { AspidaClient } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user/login'
  const GET = 'GET'

  return {
    /**
     * @returns successful operation
     */
    get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).text(),
    /**
     * @returns successful operation
     */
    $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).text().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
