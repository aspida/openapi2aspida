/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の口座情報を取得する</p>
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
    }

    status: 200
    resBody: Types.WalletableResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>口座を更新する</p>
   */
  put: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.WalletableResponse
    reqFormat: URLSearchParams
    /** 口座の作成 */
    reqBody?: Types.WalletableUpdateParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の口座を削除する</p>
   * 
   * <h2 id="">注意点</h2>
   * <ul>
   * <li>削除を実行するには、当該口座に関連する仕訳データを事前に削除する必要があります。</li>
   * <li>当該口座に仕訳が残っていないか確認するには、レポートの「仕訳帳」等を参照し、必要に応じて、「取引」や「口座振替」も削除します。</li>
   * 
   * </ul>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
