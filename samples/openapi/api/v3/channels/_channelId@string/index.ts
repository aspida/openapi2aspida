/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** Returns a list of channel mixes with pre-fetching their contents */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query: {
      excludeItems: boolean
      excludePinned: boolean
    }

    status: 200
  }
}
