/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Register a new user with the default role */
  post: {
    status: 200
    /** response */
    resBody: Types.Users_PermissionsUser
    reqBody: Types.NewUsers_PermissionsUser
  }
}
