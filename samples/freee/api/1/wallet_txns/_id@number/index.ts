/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の明細を取得する</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>
   * <p>amount : 明細金額</p>
   * </li>
   * 
   * <li>
   * <p>due_amount : 取引登録待ち金額</p>
   * </li>
   * 
   * <li>
   * <p>balance : 残高</p>
   * </li>
   * 
   * <li>
   * <p>entry_side</p>
   * 
   * <ul>
   * <li>income : 入金</li>
   * 
   * <li>expense : 出金</li>
   * </ul>
   * </li>
   * 
   * <li>
   * <p>walletable_type</p>
   * 
   * <ul>
   * <li>bank_account : 銀行口座</li>
   * 
   * <li>credit_card : クレジットカード</li>
   * 
   * <li>wallet : その他の決済口座</li>
   * </ul>
   * </li>
   * </ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.WalletTxnResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の明細を削除する</p>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
