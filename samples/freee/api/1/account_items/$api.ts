import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from '.';
import type { Methods as Methods1 } from './_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/account_items';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した勘定科目の詳細を取得する</p>
         */
        get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した勘定科目の詳細を取得する</p>
         */
        $get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>勘定科目を更新する</p>
         * @param option.body - 勘定科目の更新
         */
        put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>勘定科目を更新する</p>
         * @param option.body - 勘定科目の更新
         */
        $put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した勘定科目を削除する</p>
         * <h2 id="">注意点</h2>
         * <ul>
         * <li>削除できる勘定科目は、追加で作成したカスタム勘定項目のみです。</li>
         * <li>デフォルトで存在する勘定科目や口座の勘定科目は削除できません。</li></ul>
         */
        delete: (option: { query: Methods1['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した勘定科目を削除する</p>
         * <h2 id="">注意点</h2>
         * <ul>
         * <li>削除できる勘定科目は、追加で作成したカスタム勘定項目のみです。</li>
         * <li>デフォルトで存在する勘定科目や口座の勘定科目は削除できません。</li></ul>
         */
        $delete: (option: { query: Methods1['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | { method: 'delete'; query: Methods1['delete']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の勘定科目一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>default_tax_id : デフォルト設定がされている税区分ID</li>
     *
     * <li>default_tax_code : リクエストした日時を基準とした税区分コード</li>
     * </ul>
     */
    get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の勘定科目一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>default_tax_id : デフォルト設定がされている税区分ID</li>
     *
     * <li>default_tax_code : リクエストした日時を基準とした税区分コード</li>
     * </ul>
     */
    $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の勘定科目を作成する</p>
     * @param option.body - 勘定科目の作成
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の勘定科目を作成する</p>
     * @param option.body - 勘定科目の作成
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
