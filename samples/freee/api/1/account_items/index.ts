/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      base_date?: string
    }

    status: 200
    resBody: Types.accountItemsResponse
  }

  post: {
    status: 201
    resBody: Types.accountItemResponse
    reqFormat: URLSearchParams
    reqBody: Types.accountItemParams
  }
}
