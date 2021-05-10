/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_id@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/companies'
  const GET = 'GET'
  const PUT = 'PUT'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザが所属する事業所の詳細を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>role
         * <ul>
         * <li>admin : 管理者</li>
         *
         * <li>simple_accounting : 一般</li>
         *
         * <li>self_only : 取引登録のみ</li>
         *
         * <li>read_only : 閲覧のみ</li>
         * </ul>
         * </li>
         * </ul>
         *
         * <h2 id="_3">
         */
        get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザが所属する事業所の詳細を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>role
         * <ul>
         * <li>admin : 管理者</li>
         *
         * <li>simple_accounting : 一般</li>
         *
         * <li>self_only : 取引登録のみ</li>
         *
         * <li>read_only : 閲覧のみ</li>
         * </ul>
         * </li>
         * </ul>
         *
         * <h2 id="_3">
         */
        $get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザが所属する事業所の情報を更新する</p>
         *
         * <p>※同時に複数のリクエストを受け付けない</p>
         */
        put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザが所属する事業所の情報を更新する</p>
         *
         * <p>※同時に複数のリクエストを受け付けない</p>
         */
        $put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザが所属する事業所の一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>role
     * <ul>
     * <li>admin : 管理者</li>
     *
     * <li>simple_accounting : 一般</li>
     *
     * <li>self_only : 取引登録のみ</li>
     *
     * <li>read_only : 閲覧のみ</li>
     * </ul>
     * </li>
     * </ul>
     */
    get: (option?: { config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザが所属する事業所の一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>role
     * <ul>
     * <li>admin : 管理者</li>
     *
     * <li>simple_accounting : 一般</li>
     *
     * <li>self_only : 取引登録のみ</li>
     *
     * <li>read_only : 閲覧のみ</li>
     * </ul>
     * </li>
     * </ul>
     */
    $get: (option?: { config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
