/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      includes: 'account_item'
    }

    status: 200
    resBody: Types.selectablesIndexResponse
  }
}
