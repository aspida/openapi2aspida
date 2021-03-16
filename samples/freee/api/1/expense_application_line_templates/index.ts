/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の経費科目一覧を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100) */
      limit: number
    }

    status: 200

    resBody: {
      expense_application_line_templates: Types.ExpenseApplicationLineTemplateResponse['expense_application_line_template'][]
    }
  }

  post: {
    status: 201
    resBody: Types.ExpenseApplicationLineTemplateResponse
    reqFormat: URLSearchParams
    /** 経費科目の作成 */
    reqBody: Types.ExpenseApplicationLineTemplateParams
  }
}
