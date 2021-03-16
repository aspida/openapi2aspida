/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のメモタグ一覧を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200

    resBody: {
      tags: Types.TagResponse['tag'][]
    }
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のメモタグを作成する</p>
   */
  post: {
    status: 201
    resBody: Types.TagResponse
    reqFormat: URLSearchParams
    /** メモタグの作成 */
    reqBody: Types.TagParams
  }
}
