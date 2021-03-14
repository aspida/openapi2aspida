/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      partner_id: number
      partner_code: string
      start_issue_date: string
      end_issue_date: string
      quotation_number: string
      description: string
      quotation_status: 'all' | 'unsubmitted' | 'submitted'
      offset: number
      limit: number
    }

    status: 200

    resBody: {
      quotations: Types.quotationResponse['quotation'][]
    }
  }

  post: {
    status: 201
    resBody: Types.quotationResponse
    reqFormat: URLSearchParams
    reqBody?: Types.quotationCreateParams
  }
}
