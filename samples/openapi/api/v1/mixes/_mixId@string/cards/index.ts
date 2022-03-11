/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  post: {
    status: 204

    reqBody: {
      type: Types.CardEnumModel
      title?: string | undefined
      abstract?: string | undefined
      sourceName?: string | undefined
      image?: string | undefined
      imageId?: string | undefined
      quotePerson?: string | undefined
      quote?: string | undefined
      url?: string | undefined
      quotePersonImageId?: string | undefined
      quotePersonImage?: string | undefined
      quoteSource?: string | undefined
      quotePersonHandle?: string | undefined
      videoId?: string | undefined
      text?: string | undefined
      headline?: string | undefined
      quoteCreated?: string | undefined
      published?: boolean | undefined
    }
  }
}
