/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      companies: true
    }

    status: 200
    resBody: Types.meResponse
  }

  put: {
    status: 200
    resBody: Types.userResponse
    reqFormat: URLSearchParams
    reqBody?: Types.userParams
  }
}
