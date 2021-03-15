/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../../../../../../@types'

export type Methods = {
  /** Create shared audio item in chat */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.UserTokenHeader & Types.AppOrganisationToken
    status: 200

    /** OK */
    resBody: {
      id: string
    }

    reqFormat: FormData

    reqBody: {
      /** Audio to upload. */
      file: File | ReadStream
      caption?: string
      headline?: string
      imageId?: string
      published?: boolean
      /** text message to send to pubnub */
      formattedText?: string
    }
  }
}
