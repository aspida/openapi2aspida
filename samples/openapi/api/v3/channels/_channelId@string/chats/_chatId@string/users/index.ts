/* eslint-disable */
import type * as Types from '../../../../../../../@types'

export type Methods = {
  /** Returns chat members with deleted */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 200
    /** OK */
    resBody: {
      id?: number | undefined
      email?: string | undefined
      screenName?: string | undefined
      access?: 'admin' | 'r' | 'rw' | 'banned' | undefined
      isDeleted?: number | undefined
      imageUrl?: string | undefined
      initials?: string | undefined
    }[]
  }

  /** Adds members to chat */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 201

    reqBody: {
      /** List of user IDs to add */
      users?: number[] | undefined
      /** List of users IDs. Disables sending add-service-message about users with these IDs. */
      bannedUsers?: number[] | undefined
      /** If true: will add user to public chat */
      self?: boolean | undefined
    }
  }

  /** Updates chat members */
  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 200

    reqBody: {
      /** To change users self should contain only one item with current user ID */
      users: {
        /** User ID */
        id: number
        /** It is only allowed to change self chatHidden property */
        chatHidden?: boolean | undefined
        /** It is only allowed to change other members access (if current user has chat admin access) */
        access?: 'r' | 'rw' | 'admin' | 'banned' | undefined
      }[]
    }
  }
}
