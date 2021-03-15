/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired
    status: 200

    /** OK */
    resBody: {
      dataUrl: string
      otpURL: string
      secret: string
    }

    reqBody: {
      email: string
    }
  }
}
