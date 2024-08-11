import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1bpdvc3 } from './_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/manual_journals';
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
         * <p>指定した事業所の振替伝票を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul> <li> <p>issue_date : 発生日</p> </li>
         * <li> <p>adjustment : 決算整理仕訳フラグ（true: 決算整理仕訳, false: 日常仕訳）</p> </li>
         * <li> <p>txn_number : 仕訳番号</p> </li>
         * <li> <p>details : 振替伝票の貸借行</p> </li>
         * <li> <p>entry_side : 貸借区分</p>
         * <ul> <li>credit : 貸方</li>
         * <li>debit : 借方</li> </ul> </li>
         * <li> <p>amount : 金額</p> </li> </ul>
         *
         * <h2 id="_3">注意点</h2>
         *
         * <ul>
         * <li>振替伝票は売掛・買掛レポートには反映されません。債権・債務データの登録は取引(Deals)をお使いください。</li>
         * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
         * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
         * </ul>
         */
        get: (option: { query: Methods_1bpdvc3['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bpdvc3['get']['resBody'], BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の振替伝票を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul> <li> <p>issue_date : 発生日</p> </li>
         * <li> <p>adjustment : 決算整理仕訳フラグ（true: 決算整理仕訳, false: 日常仕訳）</p> </li>
         * <li> <p>txn_number : 仕訳番号</p> </li>
         * <li> <p>details : 振替伝票の貸借行</p> </li>
         * <li> <p>entry_side : 貸借区分</p>
         * <ul> <li>credit : 貸方</li>
         * <li>debit : 借方</li> </ul> </li>
         * <li> <p>amount : 金額</p> </li> </ul>
         *
         * <h2 id="_3">注意点</h2>
         *
         * <ul>
         * <li>振替伝票は売掛・買掛レポートには反映されません。債権・債務データの登録は取引(Deals)をお使いください。</li>
         * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
         * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
         * </ul>
         */
        $get: (option: { query: Methods_1bpdvc3['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bpdvc3['get']['resBody'], BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の振替伝票を更新する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>issue_date : 発生日</p>
         * </li>
         *
         * <li>
         * <p>adjustment : 決算整理仕訳フラグ（true: 決算整理仕訳, false: 日常仕訳）</p>
         * </li>
         *
         * <li>
         * <p>txn_number : 仕訳番号</p>
         * </li>
         *
         * <li>
         * <p>details : 振替伝票の貸借行</p>
         * </li>
         *
         * <li>
         * <p>entry_side : 貸借区分</p>
         *
         * <ul>
         * <li>credit : 貸方</li>
         *
         * <li>debit : 借方</li>
         * </ul>
         * </li>
         *
         * <li>
         * <p>amount : 金額</p>
         * </li>
         * </ul>
         *
         * <h2 id="_3">注意点</h2>
         *
         * <ul>
         * <li>振替伝票は売掛・買掛レポートには反映されません。債権・債務データの登録は取引(Deals)をお使いください。</li>
         *
         * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
         * <li>貸借合わせて100行まで仕訳行を登録できます。</li>
         *
         * <li>detailsに含まれない既存の貸借行は削除されます。更新後も残したい行は、必ず貸借行IDを指定してdetailsに含めてください。</li>
         *
         * <li>detailsに含まれる貸借行IDの指定がある行は、更新行として扱われ更新されます。</li>
         *
         * <li>detailsに含まれる貸借行IDの指定がない行は、新規行として扱われ追加されます。</li>
         * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
         * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</li></ul>
         * @param option.body - 振替伝票の更新
         */
        put: (option?: { body?: Methods_1bpdvc3['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bpdvc3['put']['resBody'], BasicHeaders, Methods_1bpdvc3['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の振替伝票を更新する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>issue_date : 発生日</p>
         * </li>
         *
         * <li>
         * <p>adjustment : 決算整理仕訳フラグ（true: 決算整理仕訳, false: 日常仕訳）</p>
         * </li>
         *
         * <li>
         * <p>txn_number : 仕訳番号</p>
         * </li>
         *
         * <li>
         * <p>details : 振替伝票の貸借行</p>
         * </li>
         *
         * <li>
         * <p>entry_side : 貸借区分</p>
         *
         * <ul>
         * <li>credit : 貸方</li>
         *
         * <li>debit : 借方</li>
         * </ul>
         * </li>
         *
         * <li>
         * <p>amount : 金額</p>
         * </li>
         * </ul>
         *
         * <h2 id="_3">注意点</h2>
         *
         * <ul>
         * <li>振替伝票は売掛・買掛レポートには反映されません。債権・債務データの登録は取引(Deals)をお使いください。</li>
         *
         * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
         * <li>貸借合わせて100行まで仕訳行を登録できます。</li>
         *
         * <li>detailsに含まれない既存の貸借行は削除されます。更新後も残したい行は、必ず貸借行IDを指定してdetailsに含めてください。</li>
         *
         * <li>detailsに含まれる貸借行IDの指定がある行は、更新行として扱われ更新されます。</li>
         *
         * <li>detailsに含まれる貸借行IDの指定がない行は、新規行として扱われ追加されます。</li>
         * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
         * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</li></ul>
         * @param option.body - 振替伝票の更新
         */
        $put: (option?: { body?: Methods_1bpdvc3['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bpdvc3['put']['resBody'], BasicHeaders, Methods_1bpdvc3['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の振替伝票を削除する</p>
         */
        delete: (option: { query: Methods_1bpdvc3['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の振替伝票を削除する</p>
         */
        $delete: (option: { query: Methods_1bpdvc3['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1bpdvc3['get']['query'] } | { method: 'delete'; query: Methods_1bpdvc3['delete']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の振替伝票一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>issue_date : 発生日</p>
     * </li>
     *
     * <li>
     * <p>adjustment : 決算整理仕訳フラグ（true: 決算整理仕訳, false: 日常仕訳）</p>
     * </li>
     *
     * <li>
     * <p>txn_number : 仕訳番号</p>
     * </li>
     *
     * <li>
     * <p>details : 振替伝票の貸借行</p>
     * </li>
     *
     * <li>
     * <p>entry_side : 貸借区分</p>
     *
     * <ul>
     * <li>credit : 貸方</li>
     *
     * <li>debit : 借方</li>
     * </ul>
     * </li>
     *
     * <li>
     * <p>amount : 金額</p>
     * </li>
     * </ul>
     *
     * <h2 id="_3">注意点</h2>
     *
     * <ul>
     * <li>振替伝票は売掛・買掛レポートには反映されません。債権・債務データの登録は取引(Deals)をお使いください。</li>
     * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
     * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
     * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</li></ul>
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の振替伝票一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>issue_date : 発生日</p>
     * </li>
     *
     * <li>
     * <p>adjustment : 決算整理仕訳フラグ（true: 決算整理仕訳, false: 日常仕訳）</p>
     * </li>
     *
     * <li>
     * <p>txn_number : 仕訳番号</p>
     * </li>
     *
     * <li>
     * <p>details : 振替伝票の貸借行</p>
     * </li>
     *
     * <li>
     * <p>entry_side : 貸借区分</p>
     *
     * <ul>
     * <li>credit : 貸方</li>
     *
     * <li>debit : 借方</li>
     * </ul>
     * </li>
     *
     * <li>
     * <p>amount : 金額</p>
     * </li>
     * </ul>
     *
     * <h2 id="_3">注意点</h2>
     *
     * <ul>
     * <li>振替伝票は売掛・買掛レポートには反映されません。債権・債務データの登録は取引(Deals)をお使いください。</li>
     * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
     * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
     * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</li></ul>
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の振替伝票を作成する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>issue_date : 発生日</p>
     * </li>
     *
     * <li>
     * <p>adjustment : 決算整理仕訳フラグ（true: 決算整理仕訳, false: 日常仕訳）</p>
     * </li>
     *
     * <li>
     * <p>txn_number : 仕訳番号</p>
     * </li>
     *
     * <li>
     * <p>details : 振替伝票の貸借行</p>
     * </li>
     *
     * <li>
     * <p>entry_side : 貸借区分</p>
     *
     * <ul>
     * <li>credit : 貸方</li>
     *
     * <li>debit : 借方</li>
     * </ul>
     * </li>
     *
     * <li>
     * <p>amount : 金額</p>
     * </li>
     * </ul>
     *
     * <h2 id="_3">注意点</h2>
     *
     * <ul>
     * <li>振替伝票は売掛・買掛レポートには反映されません。債権・債務データの登録は取引(Deals)をお使いください。</li>
     * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
     * <li>貸借合わせて100行まで仕訳行を登録できます。</li>
     * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
     * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</li></ul>
     * @param option.body - 振替伝票の作成
     */
    post: (option?: { body?: Methods_by08hd['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の振替伝票を作成する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>
     * <p>issue_date : 発生日</p>
     * </li>
     *
     * <li>
     * <p>adjustment : 決算整理仕訳フラグ（true: 決算整理仕訳, false: 日常仕訳）</p>
     * </li>
     *
     * <li>
     * <p>txn_number : 仕訳番号</p>
     * </li>
     *
     * <li>
     * <p>details : 振替伝票の貸借行</p>
     * </li>
     *
     * <li>
     * <p>entry_side : 貸借区分</p>
     *
     * <ul>
     * <li>credit : 貸方</li>
     *
     * <li>debit : 借方</li>
     * </ul>
     * </li>
     *
     * <li>
     * <p>amount : 金額</p>
     * </li>
     * </ul>
     *
     * <h2 id="_3">注意点</h2>
     *
     * <ul>
     * <li>振替伝票は売掛・買掛レポートには反映されません。債権・債務データの登録は取引(Deals)をお使いください。</li>
     * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
     * <li>貸借合わせて100行まで仕訳行を登録できます。</li>
     * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
     * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</li></ul>
     * @param option.body - 振替伝票の作成
     */
    $post: (option?: { body?: Methods_by08hd['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
