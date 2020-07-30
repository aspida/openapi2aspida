/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.tagResponse
  }

  put: {
    status: 200
    resBody: Types.tagResponse
    reqFormat: URLSearchParams
    reqBody?: Types.tagParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
