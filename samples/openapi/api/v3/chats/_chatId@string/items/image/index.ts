/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../../../../@types'

export type Methods = {
  /** Create shared image item in chat */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    /** OK */
    resBody: {
      id: string
    }

    reqFormat: FormData

    reqBody: {
      /** Image to upload. */
      file: File | ReadStream
      caption?: string
      headline?: string
      published?: boolean
      /** text message to send to pubnub */
      formattedText?: string
    }
  }
}
