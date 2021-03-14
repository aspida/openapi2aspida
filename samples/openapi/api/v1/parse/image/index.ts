/* eslint-disable */
import type { ReadStream } from 'fs'

export type Methods = {
  post: {
    status: 200

    resBody: {
      imageId: number
    }

    reqFormat: FormData

    reqBody: {
      file: File | ReadStream
      rightholder?: string
      statusCopyright?: 'unknown' | 'cc' | 'licensed' | 'sublicensed'
    }
  }
}
