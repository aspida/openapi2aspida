/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      details: true
      account_items: true
      taxes: true
      items: true
      partners: true
      sections: true
      tags: true
      walletables: true
    }

    status: 200
    resBody: Types.companyResponse
  }

  put: {
    status: 200
    resBody: Types.companyUpdateResponse
    reqFormat: URLSearchParams
    reqBody?: Types.companyParams
  }
}
