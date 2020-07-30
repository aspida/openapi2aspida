/* eslint-disable */
import * as Types from '../../../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      visible_tags?: ('partner' | 'item' | 'tag' | 'section' | 'description' | 'wallet_txn_description' | 'all')[]
      start_date?: string
      end_date?: string
    }

    status: 200
    resBody: Types.journalStatusResponse
  }
}
