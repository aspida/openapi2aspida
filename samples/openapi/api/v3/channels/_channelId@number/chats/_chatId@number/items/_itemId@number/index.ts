/* eslint-disable */
import type * as Types from '../../../../../../../../@types'

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
}
