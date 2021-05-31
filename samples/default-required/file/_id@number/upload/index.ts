/* eslint-disable */
import type { ReadStream } from 'fs'

export type Methods = {
  post: {
    query: {
      path: string
    }

    status: 204
    reqBody: File | ReadStream
  }
}
