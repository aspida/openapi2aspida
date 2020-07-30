/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.partnerResponse
  }

  put: {
    status: 200
    resBody: Types.partnerResponse
    reqFormat: URLSearchParams
    reqBody: Types.partnerUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
