/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.receiptResponse
  }

  put: {
    status: 200
    resBody: Types.receiptResponse
    reqFormat: URLSearchParams
    reqBody: Types.receiptUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
