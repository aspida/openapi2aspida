/* eslint-disable */
import type * as Types from '../../../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ダウンロードリクエストのステータスを確認する</p>
   * 
   * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>
   * <p>status</p>
   * 
   * <ul>
   * <li>enqueued : 実行待ち</li>
   * 
   * <li>working : 実行中</li>
   * 
   * <li>uploaded : 準備完了</li>
   * </ul>
   * </li>
   * 
   * <li>
   * <p>id : 受け付けID</p>
   * </li>
   * </ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 補助科目やコメントとして出力する項目 */
      visible_tags: ('partner' | 'item' | 'tag' | 'section' | 'description' | 'wallet_txn_description' | 'all')[]
      /** 取得開始日 (yyyy-mm-dd) */
      start_date: string
      /** 取得終了日 (yyyy-mm-dd) */
      end_date: string
    }

    status: 200
    resBody: Types.JournalStatusResponse
  }
}
