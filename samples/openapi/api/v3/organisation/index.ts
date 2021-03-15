/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired
    status: 200
    /** OK */
    resBody: Types.OrganisationModel
  }
}
