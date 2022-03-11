/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')
  const PATH0 = '/hello'
  const GET = 'GET'

  return {
    /**
     * @returns returns a greeting
     */
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).text(),
    /**
     * @returns returns a greeting
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).text().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
