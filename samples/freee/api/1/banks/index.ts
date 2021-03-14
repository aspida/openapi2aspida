/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      offset: number
      limit: number
      type: 'bank' | 'credit_card' | 'wallet'
    }

    status: 200

    resBody: {
      banks: Types.bankResponse['bank'][]
    }
  }
}
