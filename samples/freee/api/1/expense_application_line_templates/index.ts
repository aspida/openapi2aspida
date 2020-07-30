/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      offset?: number
      limit?: number
    }

    status: 200

    resBody: {
      expense_application_line_templates: Types.expenseApplicationLineTemplateResponse['expense_application_line_template'][]
    }
  }

  post: {
    status: 201
    resBody: Types.expenseApplicationLineTemplateResponse
    reqFormat: URLSearchParams
    reqBody: Types.expenseApplicationLineTemplateParams
  }
}
