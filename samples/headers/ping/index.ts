/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: string

    resHeaders: {
      'X-Simple': Types.X_Simple
      'X-Description': Types.X_Description
      'X-Ref': Types.X_Ref
    }
  }
}
