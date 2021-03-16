/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の取引（振替）一覧を取得する</p>
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
      /** 振替日で絞込：開始日 (yyyy-mm-dd) */
      start_date: string
      /** 振替日で絞込：終了日 (yyyy-mm-dd) */
      end_date: string
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100) */
      limit: number
    }

    status: 200

    resBody: {
      transfers: Types.TransferResponse['transfer'][]
    }
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の取引（振替）を作成する</p>
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
  post: {
    status: 201
    resBody: Types.TransferResponse
    reqFormat: URLSearchParams
    /** 取引（振替）の作成 */
    reqBody?: Types.TransferParams
  }
}
