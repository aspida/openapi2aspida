/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      limit?: number
    }

    status: 200

    resBody: {
      users: Types.userResponse['user'][]
    }
  }
}
