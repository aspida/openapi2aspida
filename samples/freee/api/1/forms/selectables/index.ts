/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のフォーム用選択項目情報を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 取得する項目(項目: account_item) */
      includes: 'account_item'
    }

    status: 200
    resBody: Types.SelectablesIndexResponse
  }
}
