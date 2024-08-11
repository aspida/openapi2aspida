import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_134eltw } from './reports/_id@number/download';
import type { Methods as Methods_1l8ihmu } from './reports/_id@number/status';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/journals';
  const PATH1 = '/api/1/journals/reports';
  const PATH2 = '/download';
  const PATH3 = '/status';
  const GET = 'GET';

  return {
    reports: {
      _id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`;

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
            get: (option: { query: Methods_134eltw['get']['query'], config?: T | undefined }) =>
              fetch<Methods_134eltw['get']['resBody'], BasicHeaders, Methods_134eltw['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).blob(),
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
            $get: (option: { query: Methods_134eltw['get']['query'], config?: T | undefined }) =>
              fetch<Methods_134eltw['get']['resBody'], BasicHeaders, Methods_134eltw['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).blob().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_134eltw['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
            get: (option: { query: Methods_1l8ihmu['get']['query'], config?: T | undefined }) =>
              fetch<Methods_1l8ihmu['get']['resBody'], BasicHeaders, Methods_1l8ihmu['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
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
            $get: (option: { query: Methods_1l8ihmu['get']['query'], config?: T | undefined }) =>
              fetch<Methods_1l8ihmu['get']['resBody'], BasicHeaders, Methods_1l8ihmu['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1l8ihmu['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
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
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
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
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
