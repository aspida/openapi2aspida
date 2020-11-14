/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      download_type: 'csv' | 'pdf' | 'yayoi' | 'generic'
      company_id: number
      visible_tags: ('partner' | 'item' | 'tag' | 'section' | 'description' | 'wallet_txn_description' | 'all')[]
      start_date: string
      end_date: string
    }

    status: 202
    resBody: Types.journalsResponse
  }
}
