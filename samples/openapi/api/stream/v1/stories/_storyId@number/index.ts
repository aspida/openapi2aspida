/* eslint-disable */
import * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query: {
      token: string
      offset: number
      limit: number
    }

    status: 200

    resBody: {
      count: number
      data: Types.ModelCard[]
    }
  }
}
