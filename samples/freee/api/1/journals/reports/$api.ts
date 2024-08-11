import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_fw6tnw } from './_id@number/download';
import type { Methods as Methods_ejes6m } from './_id@number/status';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/journals/reports';
  const PATH1 = '/download';
  const PATH2 = '/status';
  const GET = 'GET';

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

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
          get: (option: { query: Methods_fw6tnw['get']['query'], config?: T | undefined }) =>
            fetch<Methods_fw6tnw['get']['resBody'], BasicHeaders, Methods_fw6tnw['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).blob(),
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
          $get: (option: { query: Methods_fw6tnw['get']['query'], config?: T | undefined }) =>
            fetch<Methods_fw6tnw['get']['resBody'], BasicHeaders, Methods_fw6tnw['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).blob().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_fw6tnw['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
          get: (option: { query: Methods_ejes6m['get']['query'], config?: T | undefined }) =>
            fetch<Methods_ejes6m['get']['resBody'], BasicHeaders, Methods_ejes6m['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
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
          $get: (option: { query: Methods_ejes6m['get']['query'], config?: T | undefined }) =>
            fetch<Methods_ejes6m['get']['resBody'], BasicHeaders, Methods_ejes6m['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_ejes6m['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
