/* eslint-disable */
import type * as Types from '../../../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader
    status: 200

    /** OK */
    resBody: {
      action: 'add' | 'remove' | 'replace'

      reactions: Types.ReactionCountModel & {
        myReaction: Types.ReactionEnumModel
      }

      previousStatus: Types.ReactionEnumModel
      userType: 'anonymous' | 'unique'
    }

    reqBody: {
      reaction?: Types.ReactionEnumModel
    }
  }
}
