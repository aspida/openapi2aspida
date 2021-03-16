/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.ExpenseApplicationLineTemplateResponse
  }

  put: {
    status: 200
    resBody: Types.ExpenseApplicationLineTemplateResponse
    reqFormat: URLSearchParams
    /** 経費科目の更新 */
    reqBody: Types.ExpenseApplicationLineTemplateParams
  }

  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
