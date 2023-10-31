/* eslint-disable */
import type * as Types from '../../../../../../../@types'

export type Methods = {
  /** Returns a list of items of chat shared content */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader | undefined

    query?: {
      offset?: number | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      limit: number
      offset: number
      data: {
      }[]
    }
  }

  /** Create shared item in chat */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 200

    /** OK */
    resBody: {
      id: string
    }

    /** item to create */
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
      /** text message to send to pubnub */
      formattedText?: string | undefined
    }
  }
}
