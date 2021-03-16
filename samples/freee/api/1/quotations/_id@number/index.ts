/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の見積書詳細を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.QuotationResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の見積書を更新する</p>
   * 
   * <h2 id="_1">注意点</h2>
   * <ul>
   * <li> <p>partner_code, partner_idを両方同時に指定することはできません。</p> </li>
   * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
   * </ul>
   */
  put: {
    status: 200
    resBody: Types.QuotationResponse
    reqFormat: URLSearchParams
    /** 見積書の更新 */
    reqBody?: Types.QuotationUpdateParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の見積書を削除する</p>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
