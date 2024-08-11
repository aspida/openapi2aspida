import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_lvryys } from './_type@string/_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/walletables';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _type: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        _id: (val1: number) => {
          const prefix1 = `${prefix0}/${val1}`;

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の口座情報を取得する</p>
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
             *
             * <li>walletable_balance : 登録残高</li>
             *
             * <li>last_balance : 同期残高</li>
             * </ul>
             */
            get: (option: { query: Methods_lvryys['get']['query'], config?: T | undefined }) =>
              fetch<Methods_lvryys['get']['resBody'], BasicHeaders, Methods_lvryys['get']['status']>(prefix, prefix1, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の口座情報を取得する</p>
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
             *
             * <li>walletable_balance : 登録残高</li>
             *
             * <li>last_balance : 同期残高</li>
             * </ul>
             */
            $get: (option: { query: Methods_lvryys['get']['query'], config?: T | undefined }) =>
              fetch<Methods_lvryys['get']['resBody'], BasicHeaders, Methods_lvryys['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>口座を更新する</p>
             * @param option.body - 口座の作成
             */
            put: (option: { body?: Methods_lvryys['put']['reqBody'] | undefined, query: Methods_lvryys['put']['query'], config?: T | undefined }) =>
              fetch<Methods_lvryys['put']['resBody'], BasicHeaders, Methods_lvryys['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>口座を更新する</p>
             * @param option.body - 口座の作成
             */
            $put: (option: { body?: Methods_lvryys['put']['reqBody'] | undefined, query: Methods_lvryys['put']['query'], config?: T | undefined }) =>
              fetch<Methods_lvryys['put']['resBody'], BasicHeaders, Methods_lvryys['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の口座を削除する</p>
             *
             * <h2 id="">注意点</h2>
             * <ul>
             * <li>削除を実行するには、当該口座に関連する仕訳データを事前に削除する必要があります。</li>
             * <li>当該口座に仕訳が残っていないか確認するには、レポートの「仕訳帳」等を参照し、必要に応じて、「取引」や「口座振替」も削除します。</li>
             *
             * </ul>
             */
            delete: (option: { query: Methods_lvryys['delete']['query'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_lvryys['delete']['status']>(prefix, prefix1, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の口座を削除する</p>
             *
             * <h2 id="">注意点</h2>
             * <ul>
             * <li>削除を実行するには、当該口座に関連する仕訳データを事前に削除する必要があります。</li>
             * <li>当該口座に仕訳が残っていないか確認するには、レポートの「仕訳帳」等を参照し、必要に応じて、「取引」や「口座振替」も削除します。</li>
             *
             * </ul>
             */
            $delete: (option: { query: Methods_lvryys['delete']['query'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_lvryys['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_lvryys['get']['query'] } | { method: 'put'; query: Methods_lvryys['put']['query'] } | { method: 'delete'; query: Methods_lvryys['delete']['query'] } | undefined) =>
              `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
      };
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の口座一覧を取得する</p>
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
     *
     * <li>walletable_balance : 登録残高</li>
     *
     * <li>last_balance : 同期残高</li>
     * </ul>
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の口座一覧を取得する</p>
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
     *
     * <li>walletable_balance : 登録残高</li>
     *
     * <li>last_balance : 同期残高</li>
     * </ul>
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所に口座を作成する</p>
     *
     * <h2 id="">注意点</h2>
     * <ul><li>同期に対応した口座はこのAPIでは作成できません</li></ul>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>type</p>
     *
     * <ul>
     * <li>bank_account : 銀行口座</li>
     *
     * <li>credit_card : クレジットカード</li>
     *
     * <li>wallet : その他の決済口座</li>
     * </ul>
     * </li>
     *
     * <li>
     * <p>name : 口座名</p>
     * </li>
     *
     * <li>
     * <p>bank_id : サービスID</p>
     * </li>
     *
     * <li>
     * <p>group_name : 決算書表示名（小カテゴリー）　例：売掛金, 受取手形, 未収入金（法人のみ）, 買掛金, 支払手形, 未払金, 預り金, 前受金</p>
     * </li>
     * </ul>
     * @param option.body - 口座の作成
     */
    post: (option?: { body?: Methods_by08hd['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所に口座を作成する</p>
     *
     * <h2 id="">注意点</h2>
     * <ul><li>同期に対応した口座はこのAPIでは作成できません</li></ul>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>type</p>
     *
     * <ul>
     * <li>bank_account : 銀行口座</li>
     *
     * <li>credit_card : クレジットカード</li>
     *
     * <li>wallet : その他の決済口座</li>
     * </ul>
     * </li>
     *
     * <li>
     * <p>name : 口座名</p>
     * </li>
     *
     * <li>
     * <p>bank_id : サービスID</p>
     * </li>
     *
     * <li>
     * <p>group_name : 決算書表示名（小カテゴリー）　例：売掛金, 受取手形, 未収入金（法人のみ）, 買掛金, 支払手形, 未払金, 預り金, 前受金</p>
     * </li>
     * </ul>
     * @param option.body - 口座の作成
     */
    $post: (option?: { body?: Methods_by08hd['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
