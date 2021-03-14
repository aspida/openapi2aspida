/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.itemResponse
  }

  put: {
    status: 200
    resBody: Types.itemResponse
    reqFormat: URLSearchParams
    reqBody?: Types.itemParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
