/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.expenseApplicationResponse
  }

  put: {
    status: 200
    resBody: Types.expenseApplicationResponse
    reqFormat: URLSearchParams
    reqBody?: Types.expenseApplicationUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
