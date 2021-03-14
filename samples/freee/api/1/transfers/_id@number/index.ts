/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.transferResponse
  }

  put: {
    status: 200
    resBody: Types.transferResponse
    reqFormat: URLSearchParams
    reqBody: Types.transferParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
