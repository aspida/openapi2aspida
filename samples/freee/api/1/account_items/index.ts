/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の勘定科目一覧を取得する</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>default_tax_id : デフォルト設定がされている税区分ID</li>
   * 
   * <li>default_tax_code : リクエストした日時を基準とした税区分コード</li>
   * </ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 基準日:指定した場合、勘定科目に紐づく税区分(default_tax_code)が、基準日の税率に基づいて返ります。 */
      base_date: string
    }

    status: 200
    resBody: Types.AccountItemsResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の勘定科目を作成する</p>
   */
  post: {
    status: 201
    resBody: Types.AccountItemResponse
    reqFormat: URLSearchParams
    /** 勘定科目の作成 */
    reqBody: Types.AccountItemParams
  }
}
