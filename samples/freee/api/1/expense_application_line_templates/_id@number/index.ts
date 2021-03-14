/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.expenseApplicationLineTemplateResponse
  }

  put: {
    status: 200
    resBody: Types.expenseApplicationLineTemplateResponse
    reqFormat: URLSearchParams
    reqBody: Types.expenseApplicationLineTemplateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
