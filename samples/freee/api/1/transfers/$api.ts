import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from '.';
import type { Methods as Methods1 } from './_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/transfers';
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
         * <p>指定した事業所の取引（振替）を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 振替金額</p>
         * </li>
         *
         * <li>
         * <p>from_walletable_type, to_walletable_type</p>
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
        get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引（振替）を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 振替金額</p>
         * </li>
         *
         * <li>
         * <p>from_walletable_type, to_walletable_type</p>
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
        $get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引（振替）を更新する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 振替金額</p>
         * </li>
         *
         * <li>
         * <p>from_walletable_type, to_walletable_type</p>
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
         * @param option.body - 取引（振替）の更新
         */
        put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引（振替）を更新する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 振替金額</p>
         * </li>
         *
         * <li>
         * <p>from_walletable_type, to_walletable_type</p>
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
         * @param option.body - 取引（振替）の更新
         */
        $put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引（振替）を削除する</p>
         */
        delete: (option: { query: Methods1['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引（振替）を削除する</p>
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
     * <p>指定した事業所の取引（振替）一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>amount : 振替金額</p>
     * </li>
     *
     * <li>
     * <p>from_walletable_type, to_walletable_type</p>
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
    get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の取引（振替）一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>amount : 振替金額</p>
     * </li>
     *
     * <li>
     * <p>from_walletable_type, to_walletable_type</p>
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
    $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の取引（振替）を作成する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>amount : 振替金額</p>
     * </li>
     *
     * <li>
     * <p>from_walletable_type, to_walletable_type</p>
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
     * @param option.body - 取引（振替）の作成
     */
    post: (option?: { body?: Methods0['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の取引（振替）を作成する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>amount : 振替金額</p>
     * </li>
     *
     * <li>
     * <p>from_walletable_type, to_walletable_type</p>
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
     * @param option.body - 取引（振替）の作成
     */
    $post: (option?: { body?: Methods0['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
