/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  post: {
    status: 200
    resBody: Types.ApiResponse
    reqFormat: FormData

    reqBody?: {
      additionalMetadata?: string
      file?: Blob
    }
  }
}
