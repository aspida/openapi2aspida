/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader
    status: 200

    /** OK */
    resBody: {
      type: Types.CardEnumModel
      url: string
      sourceName?: string
      abstract?: string
      quotePerson?: string
      quotePersonHandle?: string
      quote?: string
      quoteSource?: string
      quoteCreated?: string
    }

    reqBody: {
      url: string
    }
  }
}
