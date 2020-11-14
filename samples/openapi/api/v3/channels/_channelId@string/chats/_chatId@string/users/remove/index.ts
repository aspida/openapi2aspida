/* eslint-disable */
import * as Types from '../../../../../../../../@types'

export type Methods = {
  post: {
    reqHeaders: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    reqBody: {
      users: number[]
      self: boolean
    }
  }
}
