/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      start_date: string
      end_date: string
      offset: number
      limit: number
    }

    status: 200

    resBody: {
      transfers: Types.transferResponse['transfer'][]
    }
  }

  post: {
    status: 201
    resBody: Types.transferResponse
    reqFormat: URLSearchParams
    reqBody?: Types.transferParams
  }
}
