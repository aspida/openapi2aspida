/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      partner_id: number
      partner_code: string
      issue_date_start: string
      issue_date_end: string
      due_date_start: string
      due_date_end: string
      invoice_number: string
      description: string
      invoice_status: 'draft' | 'applying' | 'remanded' | 'rejected' | 'approved' | 'issued' | 'unsubmitted'
      payment_status: 'unsettled' | 'settled'
      offset: number
      limit: number
    }

    status: 200

    resBody: {
      invoices: Types.invoiceResponse['invoice'][]
    }
  }

  post: {
    status: 201
    resBody: Types.invoiceResponse
    reqFormat: URLSearchParams
    reqBody?: Types.invoiceCreateParams
  }
}
