/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      with_balance?: boolean
      type?: 'bank_account' | 'credit_card' | 'wallet'
    }

    status: 200

    resBody: {
      walletables: Types.walletableResponse['walletable'][]

      meta?: {
        up_to_date?: boolean
      }
    }
  }

  post: {
    status: 201
    resBody: Types.walletableCreateResponse
    reqFormat: URLSearchParams
    reqBody?: Types.walletableCreateParams
  }
}
