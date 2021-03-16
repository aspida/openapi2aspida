/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の品目一覧を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200

    resBody: {
      items: Types.ItemResponse['item'][]
    }
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の品目を作成する</p>
   */
  post: {
    status: 201
    resBody: Types.ItemResponse
    reqFormat: URLSearchParams
    /** 品目の作成 */
    reqBody?: Types.ItemParams
  }
}
