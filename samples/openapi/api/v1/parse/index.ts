/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  post: {
    status: 200

    resBody: Types.ArticleModel | Types.QuoteModel

    reqBody: {
      url: string
    }
  }
}
