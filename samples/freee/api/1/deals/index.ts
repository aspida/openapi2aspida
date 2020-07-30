/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      partner_id?: number
      account_item_id?: number
      partner_code?: string
      status?: 'unsettled' | 'settled'
      type?: 'income' | 'expense'
      start_issue_date?: string
      end_issue_date?: string
      start_due_date?: string
      end_due_date?: string
      start_renew_date?: string
      end_renew_date?: string
      offset?: number
      limit?: number
      registered_from?: 'me'
      accruals?: 'without' | 'with'
    }

    status: 200

    resBody: {
      deals: Types.dealResponse['deal'][]

      meta: {
        total_count: number
      }
    }
  }

  post: {
    status: 201
    resBody: Types.dealCreateResponse
    reqFormat: URLSearchParams
    reqBody?: Types.dealCreateParams
  }
}
