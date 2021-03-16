/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の見積書一覧を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 取引先IDで絞込 */
      partner_id: number
      /** 取引先コードで絞込 */
      partner_code: string
      /** 見積日の開始日(yyyy-mm-dd) */
      start_issue_date: string
      /** 見積日の終了日(yyyy-mm-dd) */
      end_issue_date: string
      /** 見積書番号 */
      quotation_number: string
      /** 概要 */
      description: string
      /** 見積書ステータス  (unsubmitted: 送付待ち, submitted: 送付済み, all: 全て) */
      quotation_status: 'all' | 'unsubmitted' | 'submitted'
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 20, 最大: 100) */
      limit: number
    }

    status: 200

    resBody: {
      quotations: Types.QuotationResponse['quotation'][]
    }
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の見積書を作成する</p>
   * 
   * <h2 id="_1">注意点</h2>
   * <ul>
   * <li> <p>partner_code, partner_idはどちらかの指定が必須です。ただし両方同時に指定することはできません。</p> </li>
   * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
   * </ul>
   */
  post: {
    status: 201
    resBody: Types.QuotationResponse
    reqFormat: URLSearchParams
    /** 見積書の作成 */
    reqBody?: Types.QuotationCreateParams
  }
}
