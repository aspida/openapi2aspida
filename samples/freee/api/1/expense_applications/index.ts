/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      offset: number
      limit: number
    }

    status: 200

    resBody: {
      expense_applications: Types.expenseApplicationResponse['expense_application'][]
    }
  }

  post: {
    status: 201
    resBody: Types.expenseApplicationResponse
    reqFormat: URLSearchParams
    reqBody?: Types.expenseApplicationCreateParams
  }
}
