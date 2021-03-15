/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  post: {
    status: 200
    /** successful operation */
    resBody: Types.ApiResponse
    reqFormat: FormData

    reqBody: {
      /** Additional data to pass to server */
      additionalMetadata: string
      /** file to upload */
      file: File | ReadStream
    }
  }
}
