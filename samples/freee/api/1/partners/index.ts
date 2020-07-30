/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      offset?: number
      limit?: number
      keyword?: string
    }

    status: 200
    resBody: Types.partnersResponse
  }

  post: {
    status: 201
    resBody: Types.partnerResponse
    reqFormat: URLSearchParams
    reqBody: Types.partnerCreateParams
  }
}
