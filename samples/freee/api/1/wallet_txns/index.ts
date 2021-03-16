/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の明細一覧を取得する</p>
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
      /** 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) */
      walletable_type: 'bank_account' | 'credit_card' | 'wallet'
      /** 口座ID */
      walletable_id: number
      /** 取引日で絞込：開始日 (yyyy-mm-dd) */
      start_date: string
      /** 取引日で絞込：終了日 (yyyy-mm-dd) */
      end_date: string
      /** 入金／出金 (入金: income, 出金: expense) */
      entry_side: 'income' | 'expense'
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100) */
      limit: number
    }

    status: 200

    resBody: {
      wallet_txns: Types.WalletTxnResponse['wallet_txn'][]
    }
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の明細を作成する</p>
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
  post: {
    status: 201
    resBody: Types.WalletTxnResponse
    reqFormat: URLSearchParams
    /** 明細の作成 */
    reqBody?: Types.WalletTxnParams
  }
}
