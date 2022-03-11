/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 200

    /** OK */
    resBody: {
      id: string
    }

    reqFormat: FormData

    reqBody: {
      type: Types.CardEnumModel
      caption?: string | undefined
      title?: string | undefined
      abstract?: string | undefined
      sourceName?: string | undefined
      image?: string | undefined
      imageId?: number | undefined
      quotePerson?: string | undefined
      quote?: string | undefined
      url?: string | undefined
      quotePersonImageId?: number | undefined
      quotePersonImage?: string | undefined
      quoteSource?: string | undefined
      quotePersonHandle?: string | undefined
      videoId?: number | undefined
      video?: (File | ReadStream) | undefined
      audioId?: number | undefined
      audio?: (File | ReadStream) | undefined
      text?: string | undefined
      headline?: string | undefined
      quoteCreated?: string | undefined
      published?: boolean | undefined
    }
  }
}
