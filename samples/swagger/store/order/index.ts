/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  post: {
    status: 200
    /** successful operation */
    resBody: Types.Order
    /** order placed for purchasing the pet */
    reqBody: Types.Order
  }
}
