/* eslint-disable */
import * as Types from '../../@types'

export type Methods = {
  get: {
    query: {
      status: ('available' | 'pending' | 'sold')[]
    }

    status: 200
    resBody: Types.Pet[]
  }
}
