/* eslint-disable */
import * as Types from '../../../../../../@types'

export type Methods = {
  put: {
    status: 200
    resBody: Types.dealResponse
    reqFormat: URLSearchParams
    reqBody: Types.renewUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.dealResponse
  }
}
