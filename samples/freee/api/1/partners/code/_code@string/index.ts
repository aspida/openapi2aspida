/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>取引先コードをキーに、指定した取引先の情報を更新する</p>
   * <ul>
   * <li>このAPIを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</li>
   * <li>コードを日本語に設定している場合は、URLエンコードしてURLに含めるようにしてください。</li>
   * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
   */
  put: {
    status: 200
    resBody: Types.PartnerResponse
    reqFormat: URLSearchParams
    /** 取引先の更新 */
    reqBody: Types.PartnerUpdateParams
  }
}
