/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/users/me'
  const GET = 'GET'
  const PUT = 'PUT'

  return {
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザの情報を取得する</p>
     */
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザの情報を取得する</p>
     */
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザー情報を更新する</p>
     * @param option.body - ユーザー情報の更新
     */
    put: (option?: { body?: Methods0['put']['reqBody'], config?: T }) =>
      fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option, 'URLSearchParams').json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザー情報を更新する</p>
     * @param option.body - ユーザー情報の更新
     */
    $put: (option?: { body?: Methods0['put']['reqBody'], config?: T }) =>
      fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
