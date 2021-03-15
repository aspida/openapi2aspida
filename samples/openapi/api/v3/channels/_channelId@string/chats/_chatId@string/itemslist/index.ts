/* eslint-disable */
import type * as Types from '../../../../../../../@types'

export type Methods = {
  /** Returns chat items by list of ids */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    query: {
      /** coma separated ids of requested cards */
      ids: string
    }

    status: 200
    /** OK */
    resBody: Types.ModelCard[]
  }
}
