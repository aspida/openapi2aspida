/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.expenseApplicationLineTemplateResponse
  }

  put: {
    status: 200
    resBody: Types.expenseApplicationLineTemplateResponse
    reqFormat: URLSearchParams
    /** 経費科目の更新 */
    reqBody: Types.expenseApplicationLineTemplateParams
  }

  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
