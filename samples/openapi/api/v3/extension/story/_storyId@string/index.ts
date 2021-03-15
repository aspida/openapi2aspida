/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    /** OK */
    resBody: {
      id: string
    }

    reqFormat: FormData

    reqBody: {
      type: Types.CardEnumModel
      caption?: string
      title?: string
      abstract?: string
      sourceName?: string
      image?: string
      imageId?: number
      quotePerson?: string
      quote?: string
      url?: string
      quotePersonImageId?: number
      quotePersonImage?: string
      quoteSource?: string
      quotePersonHandle?: string
      videoId?: number
      video?: File | ReadStream
      audioId?: number
      audio?: File | ReadStream
      text?: string
      headline?: string
      quoteCreated?: string
      published?: boolean
    }
  }
}
