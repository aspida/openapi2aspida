/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** Creates an unsubscribe order for a product_id */
  post: {
    status: 201
    /** Created */
    resBody: Types.Order

    resHeaders: {
      /** Correlation id for the different services */
      'x-correlator': string
    }

    /** Body to create a purchase order */
    reqBody: Types.CreateUnsubscribeOrder
  }
}
