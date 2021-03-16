/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の品目を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.ItemResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の品目を更新する</p>
   */
  put: {
    status: 200
    resBody: Types.ItemResponse
    reqFormat: URLSearchParams
    /** 品目の更新 */
    reqBody?: Types.ItemParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の品目を削除する</p>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
