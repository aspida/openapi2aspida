/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions */
  get: {
    status: 200
    /** successful operation */
    resBody: Types.Order
  }

  /** For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors */
  delete: {
  }
}
