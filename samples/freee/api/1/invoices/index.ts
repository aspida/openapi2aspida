/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の請求書一覧を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 取引先IDで絞込 */
      partner_id: number
      /** 取引先コードで絞込 */
      partner_code: string
      /** 請求日の開始日(yyyy-mm-dd) */
      issue_date_start: string
      /** 請求日の終了日(yyyy-mm-dd) */
      issue_date_end: string
      /** 期日の開始日(yyyy-mm-dd) */
      due_date_start: string
      /** 期日の終了日(yyyy-mm-dd) */
      due_date_end: string
      /** 請求書番号 */
      invoice_number: string
      /** 概要 */
      description: string
      /** 請求書ステータス  (draft: 下書き, applying: 申請中, remanded: 差し戻し, rejected: 却下, approved: 承認済み, issued: 発行済み, unsubmitted: 送付待ち) */
      invoice_status: 'draft' | 'applying' | 'remanded' | 'rejected' | 'approved' | 'issued' | 'unsubmitted'
      /** 入金ステータス  (unsettled: 入金待ち, settled: 入金済み) */
      payment_status: 'unsettled' | 'settled'
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 20, 最大: 100) */
      limit: number
    }

    status: 200

    resBody: {
      invoices: Types.InvoiceResponse['invoice'][]
    }
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の請求書を作成する</p>
   * 
   * <h2 id="_1">注意点</h2>
   * <ul>
   * <li> <p>partner_code, partner_idはどちらかの指定が必須です。ただし両方同時に指定することはできません。</p> </li>
   * <li> <p>請求書ステータス(invoice_status)を発行(issue)で利用した場合、請求内容の合計金額が0円以上になる必要があります。</p> </li>
   * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
   * </ul>
   */
  post: {
    status: 201
    resBody: Types.InvoiceResponse
    reqFormat: URLSearchParams
    /** 請求書の作成 */
    reqBody?: Types.InvoiceCreateParams
  }
}
