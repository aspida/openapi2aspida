/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './capabilities'
// prettier-ignore
import { Methods as Methods2 } from './me'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/users'
  const PATH1 = '/api/1/users/capabilities'
  const PATH2 = '/api/1/users/me'
  const GET = 'GET'
  const PUT = 'PUT'

  return {
    capabilities: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの権限情報を取得する</p>
       */
      get: (option: { query: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの権限情報を取得する</p>
       */
      $get: (option: { query: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    me: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの情報を取得する</p>
       */
      get: (option: { query: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの情報を取得する</p>
       */
      $get: (option: { query: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザー情報を更新する</p>
       * @param option.body - ユーザー情報の更新
       */
      put: (option?: { body?: Methods2['put']['reqBody'], config?: T }) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option, 'URLSearchParams').json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザー情報を更新する</p>
       * @param option.body - ユーザー情報の更新
       */
      $put: (option?: { body?: Methods2['put']['reqBody'], config?: T }) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>事業所に所属するユーザーの一覧を取得する</p>
     */
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>事業所に所属するユーザーの一覧を取得する</p>
     */
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
