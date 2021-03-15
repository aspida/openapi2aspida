/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** List orders for a phone number */
  get: {
    status: 200
    /** Ok */
    resBody: Types.Orders

    resHeaders: {
      /** Correlation id for the different services */
      'x-correlator': string
    }
  }
}
