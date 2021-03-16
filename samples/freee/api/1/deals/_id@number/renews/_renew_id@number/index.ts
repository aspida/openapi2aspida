/* eslint-disable */
import type * as Types from '../../../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * <p>指定した事業所の取引（収入／支出）の+更新を更新する</p>
   * <h2 id="_2">定義</h2>
   * <ul> <li> <p>issue_date : 発生日</p> </li>
   * <li> <p>due_date : 支払期日</p> </li>
   * <li> <p>amount : 金額</p> </li>
   * <li> <p>due_amount : 支払残額</p> </li>
   * <li> <p>type</p>
   * <ul> <li>income : 収入</li>
   * <li>expense : 支出</li> </ul> </li>
   * <li> <p>details : 取引の明細行</p> </li>
   * <li> <p>accruals : 取引の債権債務行</p> </li>
   * <li> <p>renews : 取引の+更新行</p> </li>
   * <li> <p>payments : 取引の支払行</p> </li>
   * <li> <p>from_walletable_type</p>
   * <ul> <li>bank_account : 銀行口座</li>
   * <li>credit_card : クレジットカード</li>
   * <li>wallet : 現金</li>
   * <li>private_account_item : プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）</li>
   * </ul> </li> </ul>
   * <h2 id="_3">注意点</h2>
   * <ul> <li>本APIでは+更新の更新のみ可能です。取引や支払行に対する更新はできません。</li> <li>renew_idにはrenewsのid(+更新ID)を指定してください。renewsのdetailsのid(+更新の明細行ID)を指定できません。</li> <li>月締めされている仕訳に紐づく＋更新行の編集・削除はできません。</li> <li>承認済み仕訳に紐づく＋更新行の編集・削除は管理者権限のユーザーのみ可能です。</li>
   * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
   */
  put: {
    status: 200
    resBody: Types.DealResponse
    reqFormat: URLSearchParams
    /** +更新の更新情報 */
    reqBody: Types.RenewUpdateParams
  }

  /**
   * <h2 id="">概要</h2>
   * <p>指定した事業所の取引（収入／支出）の+更新を削除する</p>
   * <h2 id="_3">注意点</h2>
   * <ul> <li>本APIでは+更新の削除のみ可能です。取引や支払行に対する削除はできません。</li> <li>renew_idにはrenewsのid(+更新ID)を指定してください。renewsのdetailsのid(+更新の明細行ID)を指定できません。</li>
   * <li>月締めされている仕訳に紐づく＋更新行の編集・削除はできません。</li> <li>承認済み仕訳に紐づく＋更新行の編集・削除は管理者権限のユーザーのみ可能です。</li>
   * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.DealResponse
  }
}
