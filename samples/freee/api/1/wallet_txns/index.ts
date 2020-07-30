/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      walletable_type?: 'bank_account' | 'credit_card' | 'wallet'
      walletable_id?: number
      start_date?: string
      end_date?: string
      entry_side?: 'income' | 'expense'
      offset?: number
      limit?: number
    }

    status: 200

    resBody: {
      wallet_txns: Types.walletTxnResponse['wallet_txn'][]
    }
  }

  post: {
    status: 201
    resBody: Types.walletTxnResponse
    reqFormat: URLSearchParams
    reqBody?: Types.walletTxnParams
  }
}
