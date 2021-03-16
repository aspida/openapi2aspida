/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * <p>指定した事業所の取引（収入／支出）を取得する</p>
   * <h2 id="_2">定義</h2>
   * <ul>
   * <li>
   * <p>issue_date : 発生日</p>
   * </li>
   * <li>
   * <p>due_date : 支払期日</p>
   * </li>
   * <li>
   * <p>amount : 金額</p>
   * </li>
   * <li>
   * <p>due_amount : 支払残額</p>
   * </li>
   * <li>
   * <p>type</p>
   * <ul>
   * <li>income : 収入</li>
   * <li>expense : 支出</li>
   * </ul>
   * </li>
   * <li>
   * <p>details : 取引の明細行</p>
   * </li>
   * <li>
   * <p>accruals : 取引の債権債務行</p>
   * </li>
   * <li>
   * <p>renews : 取引の+更新行</p>
   * </li>
   * <li>
   * <p>payments : 取引の支払行</p>
   * </li>
   * <li>
   * <p>from_walletable_type</p>
   * <ul>
   * <li>bank_account : 銀行口座</li>
   * <li>credit_card : クレジットカード</li>
   * <li>wallet : 現金</li>
   * <li>private_account_item : プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）</li>
   * </ul>
   * </li>
   * <li>
   * <p>registered_from</p>
   * <ul>
   * <li>all : すべての取引</li>
   * <li>me : 自身が登録した取引</li>
   * </ul>
   * </li>
   * </ul>
   * <h2 id="_3">注意点</h2>
   * <ul>
   * <li>tax_idは廃止予定です。tax_codeをご利用ください。</li>
   * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * </ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 取引の債権債務行の表示（without: 表示しない(デフォルト), with: 表示する） */
      accruals: 'without' | 'with'
    }

    status: 200
    resBody: Types.DealResponse
  }

  /**
   * <h2 id="">概要</h2>
   * <p>指定した事業所の取引（収入／支出）を更新する</p>
   * <h2 id="_2">定義</h2>
   * <ul>
   * <li>
   * <p>issue_date : 発生日</p>
   * </li>
   * <li>
   * <p>due_date : 支払期日</p>
   * </li>
   * <li>
   * <p>amount : 金額</p>
   * </li>
   * <li>
   * <p>due_amount : 支払残額</p>
   * </li>
   * <li>
   * <p>type</p>
   * <ul>
   * <li>income : 収入</li>
   * <li>expense : 支出</li>
   * </ul>
   * </li>
   * <li>
   * <p>details : 取引の明細行</p>
   * </li>
   * <li>
   * <p>renews : 取引の+更新行</p>
   * </li>
   * <li>
   * <p>payments : 取引の支払行</p>
   * </li>
   * <li>
   * <p>from_walletable_type</p>
   * <ul>
   * <li>bank_account : 銀行口座</li>
   * <li>credit_card : クレジットカード</li>
   * <li>wallet : 現金</li>
   * <li>private_account_item : プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）</li>
   * </ul>
   * </li>
   * <li>
   * <p>receipt_ids : 証憑ファイルID</p>
   * </li>
   * </ul>
   * <h2 id="_3">注意点</h2>
   * <ul>
   * <li>本APIでは支払行(payments)の操作ができません。支払行の作成・更新・削除APIをご利用ください。</li>
   * <li>本APIでは+更新行(renews)の操作ができません。+更新行の作成・更新・削除APIをご利用ください。</li>
   * <li>本APIでは収入／支出の切替えができません。既存の取引を削除後、再度作成してください。</li>
   * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li>
   * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</ul>
   */
  put: {
    status: 200
    resBody: Types.DealResponse
    reqFormat: URLSearchParams
    /** 取引（収入／支出）の更新 */
    reqBody?: Types.DealUpdateParams
  }

  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
