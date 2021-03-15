/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Save newly updated firebase cloud messaging device token */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 204

    reqBody: {
      fcmToken: string
      deviceToken?: string
    }
  }
}
