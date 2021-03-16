/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>税区分コード一覧を取得する</p>
   */
  get: {
    status: 200

    resBody: {
      taxes: Types.TaxResponse['tax'][]
    }
  }
}
