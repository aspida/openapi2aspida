/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      start_date: string
      end_date: string
      user_name: string
      number: number
      comment_type: 'posted' | 'raised' | 'resolved'
      comment_important: boolean
      category: 'all' | 'without_deal' | 'with_expense_application_line' | 'with_deal' | 'ignored'
      offset: number
      limit: number
    }

    status: 200

    resBody: {
      receipts: Types.receiptResponse['receipt'][]
    }
  }

  post: {
    status: 201
    resBody: Types.receiptResponse
    reqFormat: FormData
    reqBody: Types.receiptCreateParams
  }
}
