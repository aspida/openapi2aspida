/* eslint-disable */
import type * as Types from '../../../../../../@types'

export type Methods = {
  /** Returns users chats in channel */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 200

    /** OK */
    resBody: {
      chatId?: number | undefined
      chatDescriptor?: string | undefined
      channelId?: number | undefined
      organisationId?: number | undefined
      /** Pinned mix ID */
      storyId?: number | undefined
      /** Pinned card ID */
      itemId?: number | undefined

      pinnedContent?: {
        pinType?: 'mix' | 'card' | undefined
      } | undefined

      /** ID of mix of shared cards */
      storyIdPinned?: number | undefined
      type?: 'group' | 'p2p' | undefined
      accessType?: 'private' | 'publicRead' | 'publicWrite' | undefined
      usersCount?: number | undefined
      name?: string | undefined
      payload?: string | undefined
      /** User access to chat */
      access?: 'admin' | 'banned' | 'r' | 'rw' | undefined
      /** Array of available members images or initials */
      thumbnails?: {
        image?: string | undefined
        initials?: string | undefined
      }[] | undefined
      level?: 'channel' | 'organisation' | undefined
      /** Id of recipient user if p2p */
      recipientId?: number | undefined
      created?: string | undefined
      updated?: string | undefined
    }
  }

  /** Updates chat */
  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 200

    reqBody: {
      name?: string | undefined
      accessType?: 'private' | 'publicWrite' | 'publicRead' | undefined
      payload?: string | undefined
      storyId?: number | undefined
      itemId?: number | undefined
      level?: 'channel' | 'organisation' | undefined
    }
  }

  /** Deletes chat */
  delete: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 200
  }
}
