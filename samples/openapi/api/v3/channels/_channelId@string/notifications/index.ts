/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined

    query?: {
      published?: boolean | undefined
      offset?: number | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      count?: number | undefined
      limit?: number | undefined
      data?: {
        id: number
        message: string
        title: string
        priority: 'normal' | 'high'
        isSent: boolean
        ownerId: string
        organisationId: number
        deliveringTime: string
        expirationTime: string
        created: string
      }[] | undefined
    }
  }
}
