/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の取引先一覧を取得する</p>
   * <ul>
   * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 3000) */
      limit: number
      /** 検索キーワード：取引先名・正式名称・カナ名称に対するあいまい検索で一致、またはショートカットキー1・2のいずれかに完全一致 */
      keyword: string
    }

    status: 200
    resBody: Types.PartnersResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の取引先を作成する</p>
   * <ul>
   * <li>codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</li>
   * <li>取引先コードの利用を有効にしている場合は、codeの指定は必須です。</li>
   * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
   */
  post: {
    status: 201
    resBody: Types.PartnerResponse
    reqFormat: URLSearchParams
    /** 取引先の作成 */
    reqBody: Types.PartnerCreateParams
  }
}
