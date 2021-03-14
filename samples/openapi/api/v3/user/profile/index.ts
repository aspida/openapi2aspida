/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../../@types'

export type Methods = {
  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader
    status: 204
    reqFormat: FormData

    reqBody: {
      screenName: string
      url: string
      image: File | ReadStream
      imageId: string
    }
  }
}
