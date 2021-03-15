/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** It returns all stories with first 75 cards */
  get: {
    query: {
      token: string
    }

    status: 200
    /** OK */
    resBody: Types.ModelMixV3
  }
}
