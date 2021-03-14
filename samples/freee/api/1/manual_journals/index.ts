/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      start_issue_date: string
      end_issue_date: string
      entry_side: 'credit' | 'debit'
      account_item_id: number
      min_amount: number
      max_amount: number
      partner_id: number
      partner_code: string
      item_id: number
      section_id: number
      segment_1_tag_id: number
      segment_2_tag_id: number
      segment_3_tag_id: number
      comment_status: 'posted_with_mention' | 'raised_with_mention' | 'resolved_with_mention' | 'posted' | 'raised' | 'resolved' | 'none'
      comment_important: boolean
      adjustment: 'only' | 'without'
      txn_number: string
      offset: number
      limit: number
    }

    status: 200

    resBody: {
      manual_journals: Types.manualJournalResponse['manual_journal'][]
    }
  }

  post: {
    status: 201
    resBody: Types.manualJournalResponse
    reqFormat: URLSearchParams
    reqBody?: Types.manualJournalCreateParams
  }
}
