/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      accruals: 'without' | 'with'
    }

    status: 200
    resBody: Types.dealResponse
  }

  put: {
    status: 200
    resBody: Types.dealResponse
    reqFormat: URLSearchParams
    reqBody?: Types.dealUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
