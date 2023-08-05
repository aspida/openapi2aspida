/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Returns a single pet */
  get: {
    status: 200
    /** successful operation */
    resBody: Types.Pet
  }

  post: {
    reqFormat: URLSearchParams

    reqBody: {
      /** Updated name of the pet */
      name?: string | undefined
      /** Updated status of the pet */
      status?: string | undefined
    }
  }

  delete: {
    reqHeaders?: {
      api_key?: string | undefined
    } | undefined
  }
}
