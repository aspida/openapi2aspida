/* eslint-disable */
import * as Types from '../../../../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader
    status: 200

    resBody: {
      ok: boolean
    }

    reqBody?: {
      formattedText?: string
    }
  }
}
