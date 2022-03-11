/* eslint-disable */
import type { ReadStream } from 'fs'

export type Methods = {
  post: {
    query?: {
      path?: string | undefined
    } | undefined

    status: 204
    reqBody: (File | ReadStream)
  }
}
