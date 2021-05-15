/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './reports/_id@number/download'
// prettier-ignore
import { Methods as Methods2 } from './reports/_id@number/status'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/journals'
  const PATH1 = '/api/1/journals/reports'
  const PATH2 = '/download'
  const PATH3 = '/status'
  const GET = 'GET'

  return {
    reports: {
      _id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          download: {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ダウンロードを実行する</p>
             *
             * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>id : 受け付けID</li>
             * </ul>
             */
            get: (option: { query: Methods1['get']['query'], config?: T }) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).blob(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ダウンロードを実行する</p>
             *
             * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>id : 受け付けID</li>
             * </ul>
             */
            $get: (option: { query: Methods1['get']['query'], config?: T }) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).blob().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
              `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          status: {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ダウンロードリクエストのステータスを確認する</p>
             *
             * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>
             * <p>status</p>
             *
             * <ul>
             * <li>enqueued : 実行待ち</li>
             *
             * <li>working : 実行中</li>
             *
             * <li>uploaded : 準備完了</li>
             * </ul>
             * </li>
             *
             * <li>
             * <p>id : 受け付けID</p>
             * </li>
             * </ul>
             */
            get: (option: { query: Methods2['get']['query'], config?: T }) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ダウンロードリクエストのステータスを確認する</p>
             *
             * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>
             * <p>status</p>
             *
             * <ul>
             * <li>enqueued : 実行待ち</li>
             *
             * <li>working : 実行中</li>
             *
             * <li>uploaded : 準備完了</li>
             * </ul>
             * </li>
             *
             * <li>
             * <p>id : 受け付けID</p>
             * </li>
             * </ul>
             */
            $get: (option: { query: Methods2['get']['query'], config?: T }) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザが所属する事業所の仕訳帳のダウンロードをリクエストします 生成されるファイルに関しては、<a href="https://support.freee.co.jp/hc/ja/articles/204599604#2">ヘルプページ</a>をご参照ください</p>
     *
     * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>download_type
     * <ul>
     * <li>generic(freee Webからダウンロードできるものと同じ)</li>
     *
     * <li>csv (yayoi形式)</li>
     *
     * <li>pdf</li>
     * </ul>
     * </li>
     *
     * <li>visible_tags : 指定しない場合は従来の仕様の仕訳帳が出力されます
     * <ul>
     * <li>partner : 取引先タグ</li>
     *
     * <li>item : 品目タグ</li>
     *
     * <li>tag : メモタグ</li>
     *
     * <li>section : 部門タグ</li>
     *
     * <li>description : 備考欄</li>
     *
     * <li>wallet_txn_description : 明細の備考欄</li>
     *
     * <li>all : 指定された場合は上記の設定をすべて有効として扱います</li>
     * </ul>
     * </li>
     *
     * <li>id : 受け付けID</li>
     * </ul>
     */
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザが所属する事業所の仕訳帳のダウンロードをリクエストします 生成されるファイルに関しては、<a href="https://support.freee.co.jp/hc/ja/articles/204599604#2">ヘルプページ</a>をご参照ください</p>
     *
     * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>download_type
     * <ul>
     * <li>generic(freee Webからダウンロードできるものと同じ)</li>
     *
     * <li>csv (yayoi形式)</li>
     *
     * <li>pdf</li>
     * </ul>
     * </li>
     *
     * <li>visible_tags : 指定しない場合は従来の仕様の仕訳帳が出力されます
     * <ul>
     * <li>partner : 取引先タグ</li>
     *
     * <li>item : 品目タグ</li>
     *
     * <li>tag : メモタグ</li>
     *
     * <li>section : 部門タグ</li>
     *
     * <li>description : 備考欄</li>
     *
     * <li>wallet_txn_description : 明細の備考欄</li>
     *
     * <li>all : 指定された場合は上記の設定をすべて有効として扱います</li>
     * </ul>
     * </li>
     *
     * <li>id : 受け付けID</li>
     * </ul>
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
