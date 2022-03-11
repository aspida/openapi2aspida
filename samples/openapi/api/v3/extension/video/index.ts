/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 200

    /** OK */
    resBody: {
      id: string
      width?: number | undefined
      height?: number | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** video to upload. */
      file: (File | ReadStream)
    }
  }
}
