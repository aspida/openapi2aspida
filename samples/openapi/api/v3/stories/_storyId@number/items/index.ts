/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** Returns a story content with support pagination */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader | undefined

    query?: {
      offset?: number | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      limit: number
      offset: number
      data: Types.ModelCard[]
    }
  }
}
