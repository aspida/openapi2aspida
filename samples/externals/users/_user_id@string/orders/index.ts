/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: Types.Identifier
    status: 200
    resBody: Types.Orders

    resHeaders: {
      'x-correlator': string
    }
  }
}
