/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.accountItemResponse
  }

  put: {
    status: 200
    resBody: Types.accountItemResponse
    reqFormat: URLSearchParams
    reqBody: Types.accountItemParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
