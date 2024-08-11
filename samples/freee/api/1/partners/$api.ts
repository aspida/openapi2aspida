import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1bpdvc3 } from './_id@number';
import type { Methods as Methods_wdyodp } from './code/_code@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/partners';
  const PATH1 = '/api/1/partners/code';
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
         * <p>指定した事業所の取引先を取得する</p>
         * <ul>
         * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
         */
        get: (option: { query: Methods_1bpdvc3['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bpdvc3['get']['resBody'], BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引先を取得する</p>
         * <ul>
         * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
         */
        $get: (option: { query: Methods_1bpdvc3['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bpdvc3['get']['resBody'], BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した取引先の情報を更新する</p>
         * <ul>
         * <li>codeを指定、更新することはできません。</li>
         * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
         * @param option.body - 取引先の更新
         */
        put: (option: { body: Methods_1bpdvc3['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1bpdvc3['put']['resBody'], BasicHeaders, Methods_1bpdvc3['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した取引先の情報を更新する</p>
         * <ul>
         * <li>codeを指定、更新することはできません。</li>
         * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
         * @param option.body - 取引先の更新
         */
        $put: (option: { body: Methods_1bpdvc3['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1bpdvc3['put']['resBody'], BasicHeaders, Methods_1bpdvc3['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引先を削除する</p>
         */
        delete: (option: { query: Methods_1bpdvc3['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引先を削除する</p>
         */
        $delete: (option: { query: Methods_1bpdvc3['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1bpdvc3['get']['query'] } | { method: 'delete'; query: Methods_1bpdvc3['delete']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    code: {
      _code: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>取引先コードをキーに、指定した取引先の情報を更新する</p>
           * <ul>
           * <li>このAPIを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</li>
           * <li>コードを日本語に設定している場合は、URLエンコードしてURLに含めるようにしてください。</li>
           * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
           * @param option.body - 取引先の更新
           */
          put: (option: { body: Methods_wdyodp['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_wdyodp['put']['resBody'], BasicHeaders, Methods_wdyodp['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>取引先コードをキーに、指定した取引先の情報を更新する</p>
           * <ul>
           * <li>このAPIを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</li>
           * <li>コードを日本語に設定している場合は、URLエンコードしてURLに含めるようにしてください。</li>
           * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
           * @param option.body - 取引先の更新
           */
          $put: (option: { body: Methods_wdyodp['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_wdyodp['put']['resBody'], BasicHeaders, Methods_wdyodp['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の取引先一覧を取得する</p>
     * <ul>
     * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の取引先一覧を取得する</p>
     * <ul>
     * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の取引先を作成する</p>
     * <ul>
     * <li>codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</li>
     * <li>取引先コードの利用を有効にしている場合は、codeの指定は必須です。</li>
     * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
     * @param option.body - 取引先の作成
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の取引先を作成する</p>
     * <ul>
     * <li>codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</li>
     * <li>取引先コードの利用を有効にしている場合は、codeの指定は必須です。</li>
     * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
     * @param option.body - 取引先の作成
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
