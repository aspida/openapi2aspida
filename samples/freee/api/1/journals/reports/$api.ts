/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_id@number/download'
// prettier-ignore
import { Methods as Methods1 } from './_id@number/status'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/journals/reports'
  const PATH1 = '/download'
  const PATH2 = '/status'
  const GET = 'GET'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

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
          get: (option: { query: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).blob(),
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
          $get: (option: { query: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).blob().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
          get: (option: { query: Methods1['get']['query'], config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
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
          $get: (option: { query: Methods1['get']['query'], config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
            `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
