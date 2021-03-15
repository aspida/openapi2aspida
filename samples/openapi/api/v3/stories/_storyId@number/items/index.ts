/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** Returns a story content with support pagination */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query: {
      offset: number
    }

    status: 200

    /** OK */
    resBody: {
      limit: number
      offset: number
      data: Types.ModelCard[]
    }
  }
}
