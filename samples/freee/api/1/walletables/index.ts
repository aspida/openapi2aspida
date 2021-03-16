/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の口座一覧を取得する</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>type
   * <ul>
   * <li>bank_account : 銀行口座</li>
   * 
   * <li>credit_card : クレジットカード</li>
   * 
   * <li>wallet : その他の決済口座</li>
   * </ul>
   * </li>
   * 
   * <li>walletable_balance : 登録残高</li>
   * 
   * <li>last_balance : 同期残高</li>
   * </ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 残高情報を含める */
      with_balance: boolean
      /** 口座種別（bank_account : 銀行口座, credit_card : クレジットカード, wallet : その他の決済口座） */
      type: 'bank_account' | 'credit_card' | 'wallet'
    }

    status: 200

    resBody: {
      walletables: Types.WalletableResponse['walletable'][]

      meta?: {
        /** 集計結果が最新かどうか */
        up_to_date: boolean
      }
    }
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所に口座を作成する</p>
   * 
   * <h2 id="">注意点</h2>
   * <ul><li>同期に対応した口座はこのAPIでは作成できません</li></ul>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>
   * <p>type</p>
   * 
   * <ul>
   * <li>bank_account : 銀行口座</li>
   * 
   * <li>credit_card : クレジットカード</li>
   * 
   * <li>wallet : その他の決済口座</li>
   * </ul>
   * </li>
   * 
   * <li>
   * <p>name : 口座名</p>
   * </li>
   * 
   * <li>
   * <p>bank_id : サービスID</p>
   * </li>
   * 
   * <li>
   * <p>group_name : 決算書表示名（小カテゴリー）　例：売掛金, 受取手形, 未収入金（法人のみ）, 買掛金, 支払手形, 未払金, 預り金, 前受金</p>
   * </li>
   * </ul>
   */
  post: {
    status: 201
    resBody: Types.WalletableCreateResponse
    reqFormat: URLSearchParams
    /** 口座の作成 */
    reqBody?: Types.WalletableCreateParams
  }
}
