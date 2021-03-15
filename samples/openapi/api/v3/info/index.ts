/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Send in to about app to server. If app is to old and need be force updated in responce you have link to new app */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader
    status: 200

    /** OK */
    resBody: {
      state: 'no_update' | 'force_update'
      link: string
    }
  }
}
