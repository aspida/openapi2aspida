/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from '.'
// prettier-ignore
import type { Methods as Methods1 } from './_id@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/banks'
  const GET = 'GET'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>連携しているサービスを取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>type
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>連携しているサービスを取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>type
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>連携しているサービス一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>type
     * <ul>
     * <li>bank_account : 銀行口座</li>
     *
     * <li>credit_card : クレジットカード</li>
     *
     * <li>wallet : その他の決済口座</li>
     * </ul>
     * </li>
     * </ul>
     */
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>連携しているサービス一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>type
     * <ul>
     * <li>bank_account : 銀行口座</li>
     *
     * <li>credit_card : クレジットカード</li>
     *
     * <li>wallet : その他の決済口座</li>
     * </ul>
     * </li>
     * </ul>
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
