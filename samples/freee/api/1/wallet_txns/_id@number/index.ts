/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.walletTxnResponse
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
