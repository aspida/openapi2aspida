/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の取引先を取得する</p>
   * <ul>
   * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.PartnerResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した取引先の情報を更新する</p>
   * <ul>
   * <li>codeを指定、更新することはできません。</li>
   * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
   */
  put: {
    status: 200
    resBody: Types.PartnerResponse
    reqFormat: URLSearchParams
    /** 取引先の更新 */
    reqBody: Types.PartnerUpdateParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の取引先を削除する</p>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
