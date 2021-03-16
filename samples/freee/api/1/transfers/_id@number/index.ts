/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の取引（振替）を取得する</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>
   * <p>amount : 振替金額</p>
   * </li>
   * 
   * <li>
   * <p>from_walletable_type, to_walletable_type</p>
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
    resBody: Types.TransferResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の取引（振替）を更新する</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>
   * <p>amount : 振替金額</p>
   * </li>
   * 
   * <li>
   * <p>from_walletable_type, to_walletable_type</p>
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
  put: {
    status: 200
    resBody: Types.TransferResponse
    reqFormat: URLSearchParams
    /** 取引（振替）の更新 */
    reqBody: Types.TransferParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の取引（振替）を削除する</p>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
