/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    /** OK */
    resBody: Types.UserInfo & {
      token: string
      settings?: Types.$200_UserSettings
    }

    reqBody: {
      pwd: string
      email: string
      fcmToken?: string
      deviceToken?: string
      otp?: number
    }
  }
}
