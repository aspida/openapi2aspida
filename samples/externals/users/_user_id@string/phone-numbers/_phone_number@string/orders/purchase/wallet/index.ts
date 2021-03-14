/* eslint-disable */
import type * as Types from '../../../../../../../@types'

export type Methods = {
  post: {
    status: 201
    resBody: Types.Order

    resHeaders: {
      'x-correlator': string
    }

    reqBody: Types.CreatePurchaseOrderByPhoneNumberWallet
  }
}
