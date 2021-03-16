/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の請求書詳細を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.InvoiceResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の請求書を更新する</p>
   * 
   * <h2 id="_1">注意点</h2>
   * <ul>
   * <li> <p>入金済みの請求書に対する金額関連の変更はできません。</p> </li>
   * <li> <p>請求書ステータスは確定(issue)のみ指定可能です。請求書ステータスを確定する時のみ指定してください。</p> </li>
   * <li> <p>請求書WFを利用している場合、承認済み請求書は承認権限を持たないユーザーでは更新できません。</p> </li>
   * <li> <p>更新後の請求書ステータス(invoice_status)が下書き以外の場合、請求内容の合計金額が0円以上になる必要があります。</p> </li>
   * <li> <p>partner_code, partner_idを両方同時に指定することはできません。</p> </li>
   * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
   * </ul>
   */
  put: {
    status: 200
    resBody: Types.InvoiceResponse
    reqFormat: URLSearchParams
    /** 請求書の更新 */
    reqBody?: Types.InvoiceUpdateParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の請求書を削除する</p>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
