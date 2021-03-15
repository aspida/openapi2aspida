/* eslint-disable */
import type * as Types from '../../../../../../../@types'

export type Methods = {
  /** Returns a list of items of chat shared content */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query: {
      offset: number
    }

    status: 200

    /** OK */
    resBody: {
      limit: number
      offset: number
    }
  }

  /** Create shared item in chat */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    /** OK */
    resBody: {
      id: string
    }

    /** item to create */
    reqBody: {
      type: Types.CardEnumModel
      title?: string
      abstract?: string
      sourceName?: string
      image?: string
      imageId?: string
      quotePerson?: string
      quote?: string
      url?: string
      quotePersonImageId?: string
      quotePersonImage?: string
      quoteSource?: string
      quotePersonHandle?: string
      videoId?: string
      text?: string
      headline?: string
      quoteCreated?: string
      published?: boolean
      /** text message to send to pubnub */
      formattedText?: string
    }
  }
}
