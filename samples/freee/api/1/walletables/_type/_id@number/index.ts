/* eslint-disable */
import * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.walletableResponse
  }

  put: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.walletableResponse
    reqFormat: URLSearchParams
    reqBody?: Types.walletableUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
