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
  const PATH0 = '/api/1/invoices'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の請求書詳細を取得する</p>
         */
        get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の請求書詳細を取得する</p>
         */
        $get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の請求書を更新する</p>
         *
         * <h2 id="_1">注意点</h2>
         * <ul>
         * <li> <p>入金済みの請求書に対する金額関連の変更はできません。</p> </li>
         * <li> <p>請求書ステータスは確定(issue)のみ指定可能です。請求書ステータスを確定する時のみ指定してください。</p> </li>
         * <li> <p>請求書WFを利用している場合、承認済み請求書は承認権限を持たないユーザーでは更新できません。</p> </li>
         * <li> <p>更新後の請求書ステータス(invoice_status)が下書き以外の場合、請求内容の合計金額が0円以上になる必要があります。</p> </li>
         * <li> <p>partner_code, partner_idを両方同時に指定することはできません。</p> </li>
         * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
         * </ul>
         * @param option.body - 請求書の更新
         */
        put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の請求書を更新する</p>
         *
         * <h2 id="_1">注意点</h2>
         * <ul>
         * <li> <p>入金済みの請求書に対する金額関連の変更はできません。</p> </li>
         * <li> <p>請求書ステータスは確定(issue)のみ指定可能です。請求書ステータスを確定する時のみ指定してください。</p> </li>
         * <li> <p>請求書WFを利用している場合、承認済み請求書は承認権限を持たないユーザーでは更新できません。</p> </li>
         * <li> <p>更新後の請求書ステータス(invoice_status)が下書き以外の場合、請求内容の合計金額が0円以上になる必要があります。</p> </li>
         * <li> <p>partner_code, partner_idを両方同時に指定することはできません。</p> </li>
         * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
         * </ul>
         * @param option.body - 請求書の更新
         */
        $put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の請求書を削除する</p>
         */
        delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の請求書を削除する</p>
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
     * <p>指定した事業所の請求書一覧を取得する</p>
     */
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の請求書一覧を取得する</p>
     */
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の請求書を作成する</p>
     *
     * <h2 id="_1">注意点</h2>
     * <ul>
     * <li> <p>partner_code, partner_idはどちらかの指定が必須です。ただし両方同時に指定することはできません。</p> </li>
     * <li> <p>請求書ステータス(invoice_status)を発行(issue)で利用した場合、請求内容の合計金額が0円以上になる必要があります。</p> </li>
     * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
     * </ul>
     * @param option.body - 請求書の作成
     */
    post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の請求書を作成する</p>
     *
     * <h2 id="_1">注意点</h2>
     * <ul>
     * <li> <p>partner_code, partner_idはどちらかの指定が必須です。ただし両方同時に指定することはできません。</p> </li>
     * <li> <p>請求書ステータス(invoice_status)を発行(issue)で利用した場合、請求内容の合計金額が0円以上になる必要があります。</p> </li>
     * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
     * </ul>
     * @param option.body - 請求書の作成
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
