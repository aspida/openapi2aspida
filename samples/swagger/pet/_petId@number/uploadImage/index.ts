/* eslint-disable */
import type { ReadStream } from 'fs'
import * as Types from '../../../@types'

export type Methods = {
  post: {
    status: 200
    resBody: Types.ApiResponse
    reqFormat: FormData

    reqBody: {
      additionalMetadata: string
      file: File | ReadStream
    }
  }
}
