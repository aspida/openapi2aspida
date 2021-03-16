/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のメモタグを取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.TagResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のメモタグを更新する</p>
   */
  put: {
    status: 200
    resBody: Types.TagResponse
    reqFormat: URLSearchParams
    /** メモタグの更新 */
    reqBody?: Types.TagParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のメモタグを削除する</p>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
