/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200

    resBody: {
      tags: Types.tagResponse['tag'][]
    }
  }

  post: {
    status: 201
    resBody: Types.tagResponse
    reqFormat: URLSearchParams
    reqBody: Types.tagParams
  }
}
