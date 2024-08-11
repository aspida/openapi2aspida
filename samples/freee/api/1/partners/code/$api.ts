import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_10euwdf } from './_code@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/partners/code';
  const PUT = 'PUT';

  return {
    _code: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

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
        put: (option: { body: Methods_10euwdf['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_10euwdf['put']['resBody'], BasicHeaders, Methods_10euwdf['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
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
        $put: (option: { body: Methods_10euwdf['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_10euwdf['put']['resBody'], BasicHeaders, Methods_10euwdf['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
