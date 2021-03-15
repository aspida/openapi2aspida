/* eslint-disable */
import type * as Types from '../../../../../../../../@types'

export type Methods = {
  /** Removes members from chat */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    reqBody: {
      /** List of user IDs to remove */
      users: number[]
      /** If true: will remove user from chat */
      self: boolean
    }
  }
}
