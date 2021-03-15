/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    query: {
      unpublished: boolean
      'read-only': boolean
    }

    status: 200
    /** OK */
    resBody: {
      id: number
      name: string
      role: string
      created: string
      subdomain: string
      url: string
      ownerEmail: string
      ownerName: string
      organisationName?: string
      ownerId: number
      organisationId: number
      pinnedStoryId?: number
      stories: {
        id: number
        title: number
        status: string
        ownerId: number
        allowAccessToEditorLimited: boolean
      }[]
    }[]
  }
}
