/* eslint-disable */
import type * as Types from '../../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader | undefined
    status: 200

    /** OK */
    resBody: {
      ok: boolean
    }

    reqBody: {
      formattedText?: string | undefined
    }
  }

  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader | undefined
    status: 200
    /** OK */
    resBody: Types.ModelCard
  }
}
