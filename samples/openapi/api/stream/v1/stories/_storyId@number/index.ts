/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query: {
      token: string
      offset?: number | undefined
      limit?: number | undefined
    }

    status: 200

    /** OK */
    resBody: {
      count: number
      data: Types.ModelCard[]
    }
  }
}
