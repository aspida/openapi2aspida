/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  post: {
    status: 200

    /** OK */
    resBody: Types.ArticleModel | Types.QuoteModel

    reqBody: {
      url: string
    }
  }
}
