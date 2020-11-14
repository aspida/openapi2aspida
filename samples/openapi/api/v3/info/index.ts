/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    reqHeaders: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader
    status: 200

    resBody: {
      state: 'no_update' | 'force_update'
      link: string
    }
  }
}
