/* eslint-disable */
import type { ReadStream } from 'fs'

export type Methods = {
  post: {
    status: 200

    /** OK */
    resBody: {
      imageId: number
    }

    reqFormat: FormData

    reqBody: {
      /** Image to upload. */
      file: File | ReadStream
      rightholder?: string
      statusCopyright?: 'unknown' | 'cc' | 'licensed' | 'sublicensed'
    }
  }
}
