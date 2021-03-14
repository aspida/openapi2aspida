/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.quotationResponse
  }

  put: {
    status: 200
    resBody: Types.quotationResponse
    reqFormat: URLSearchParams
    reqBody?: Types.quotationUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
