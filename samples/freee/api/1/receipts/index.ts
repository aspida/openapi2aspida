/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のファイルボックス 証憑ファイル一覧を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** アップロード日 (yyyy-mm-dd) */
      start_date: string
      /** アップロード日 (yyyy-mm-dd) */
      end_date: string
      /** アップロードしたユーザー名、メールアドレス */
      user_name: string
      /** アップロードファイルNo */
      number: number
      /** posted:コメントあり, raised:未解決, resolved:解決済 */
      comment_type: 'posted' | 'raised' | 'resolved'
      /** trueの時、重要コメント付きが対象 */
      comment_important: boolean
      /** all:すべて、without_deal:未登録、with_expense_application_line:経費申請中, with_deal:登録済み、ignored:無視 */
      category: 'all' | 'without_deal' | 'with_expense_application_line' | 'with_deal' | 'ignored'
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 3000) */
      limit: number
    }

    status: 200

    resBody: {
      receipts: Types.ReceiptResponse['receipt'][]
    }
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ファイルボックスに証憑ファイルをアップロードする</p>
   */
  post: {
    status: 201
    resBody: Types.ReceiptResponse
    reqFormat: FormData
    reqBody: Types.ReceiptCreateParams
  }
}
