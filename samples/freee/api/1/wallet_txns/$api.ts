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
  const PATH0 = '/api/1/wallet_txns'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の明細を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 明細金額</p>
         * </li>
         *
         * <li>
         * <p>due_amount : 取引登録待ち金額</p>
         * </li>
         *
         * <li>
         * <p>balance : 残高</p>
         * </li>
         *
         * <li>
         * <p>entry_side</p>
         *
         * <ul>
         * <li>income : 入金</li>
         *
         * <li>expense : 出金</li>
         * </ul>
         * </li>
         *
         * <li>
         * <p>walletable_type</p>
         *
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
        get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の明細を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 明細金額</p>
         * </li>
         *
         * <li>
         * <p>due_amount : 取引登録待ち金額</p>
         * </li>
         *
         * <li>
         * <p>balance : 残高</p>
         * </li>
         *
         * <li>
         * <p>entry_side</p>
         *
         * <ul>
         * <li>income : 入金</li>
         *
         * <li>expense : 出金</li>
         * </ul>
         * </li>
         *
         * <li>
         * <p>walletable_type</p>
         *
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
        $get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の明細を削除する</p>
         */
        delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の明細を削除する</p>
         */
        $delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] } | { method: 'delete'; query: Methods1['delete']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の明細一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>amount : 明細金額</p>
     * </li>
     *
     * <li>
     * <p>due_amount : 取引登録待ち金額</p>
     * </li>
     *
     * <li>
     * <p>balance : 残高</p>
     * </li>
     *
     * <li>
     * <p>entry_side</p>
     *
     * <ul>
     * <li>income : 入金</li>
     *
     * <li>expense : 出金</li>
     * </ul>
     * </li>
     *
     * <li>
     * <p>walletable_type</p>
     *
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
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の明細一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>amount : 明細金額</p>
     * </li>
     *
     * <li>
     * <p>due_amount : 取引登録待ち金額</p>
     * </li>
     *
     * <li>
     * <p>balance : 残高</p>
     * </li>
     *
     * <li>
     * <p>entry_side</p>
     *
     * <ul>
     * <li>income : 入金</li>
     *
     * <li>expense : 出金</li>
     * </ul>
     * </li>
     *
     * <li>
     * <p>walletable_type</p>
     *
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
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の明細を作成する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>amount : 明細金額</p>
     * </li>
     *
     * <li>
     * <p>due_amount : 取引登録待ち金額</p>
     * </li>
     *
     * <li>
     * <p>balance : 残高</p>
     * </li>
     *
     * <li>
     * <p>entry_side</p>
     *
     * <ul>
     * <li>income : 入金</li>
     *
     * <li>expense : 出金</li>
     * </ul>
     * </li>
     *
     * <li>
     * <p>walletable_type</p>
     *
     * <ul>
     * <li>bank_account : 銀行口座</li>
     *
     * <li>credit_card : クレジットカード</li>
     *
     * <li>wallet : その他の決済口座</li>
     * </ul>
     * </li>
     * </ul>
     * @param option.body - 明細の作成
     */
    post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の明細を作成する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>amount : 明細金額</p>
     * </li>
     *
     * <li>
     * <p>due_amount : 取引登録待ち金額</p>
     * </li>
     *
     * <li>
     * <p>balance : 残高</p>
     * </li>
     *
     * <li>
     * <p>entry_side</p>
     *
     * <ul>
     * <li>income : 入金</li>
     *
     * <li>expense : 出金</li>
     * </ul>
     * </li>
     *
     * <li>
     * <p>walletable_type</p>
     *
     * <ul>
     * <li>bank_account : 銀行口座</li>
     *
     * <li>credit_card : クレジットカード</li>
     *
     * <li>wallet : その他の決済口座</li>
     * </ul>
     * </li>
     * </ul>
     * @param option.body - 明細の作成
     */
    $post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
