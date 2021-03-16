/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * <p>指定した事業所の取引（収入／支出）の支払行を作成する</p>
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
   * <li> <p>details : 取引の明細行</p> </li>
   * <li> <p>renews : 取引の+更新行</p> </li>
   * <li> <p>payments : 取引の支払行</p> </li>
   * <li>
   * <p>from_walletable_type</p>
   * <ul>
   * <li>bank_account : 銀行口座</li>
   * <li>credit_card : クレジットカード</li>
   * <li>wallet : 現金</li>
   * <li>private_account_item : プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）</li>
   * </ul>
   * </li>
   * </ul>
   */
  post: {
    status: 201
    resBody: Types.DealResponse
    reqFormat: URLSearchParams
    /** 取引（収入／支出）の支払行作成 */
    reqBody: Types.PaymentParams
  }
}
