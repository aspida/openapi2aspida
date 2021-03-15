/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Update a role */
  put: {
    status: 200
    /** response */
    resBody: Types.Users_PermissionsRole
    reqBody: Types.NewUsers_PermissionsRole
  }

  /** Delete a role */
  delete: {
    status: 200

    /** response */
    resBody: {
      foo: string
    }
  }
}
