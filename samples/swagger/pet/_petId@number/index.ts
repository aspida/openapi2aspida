/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.Pet
  }

  post: {
    reqFormat: URLSearchParams

    reqBody: {
      name: string
      status: string
    }
  }

  delete: {
    reqHeaders?: {
      api_key?: string
    }
  }
}
