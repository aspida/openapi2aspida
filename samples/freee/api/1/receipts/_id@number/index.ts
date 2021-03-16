/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のファイルボックス 証憑ファイルを取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.ReceiptResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ファイルボックスの証憑ファイル情報を更新する</p>
   * <h2 id="_2">注意点</h2>
   * <ul>
   *   <li>本APIでは、証憑ファイルの再アップロードはできません。</li>
   * </ul>
   */
  put: {
    status: 200
    resBody: Types.ReceiptResponse
    reqFormat: URLSearchParams
    /** 経費申請の更新 */
    reqBody: Types.ReceiptUpdateParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ファイルボックスの証憑ファイルを削除する</p>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
