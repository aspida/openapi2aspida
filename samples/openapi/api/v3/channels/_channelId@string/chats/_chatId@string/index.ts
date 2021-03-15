/* eslint-disable */
import type * as Types from '../../../../../../@types'

export type Methods = {
  /** Returns users chats in channel */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    /** OK */
    resBody: {
      chatId: number
      chatDescriptor: string
      channelId: number
      organisationId: number
      /** Pinned mix ID */
      storyId: number
      /** Pinned card ID */
      itemId: number

      pinnedContent: {
        pinType: 'mix' | 'card'
      }

      /** ID of mix of shared cards */
      storyIdPinned: number
      type: 'group' | 'p2p'
      accessType: 'private' | 'publicRead' | 'publicWrite'
      usersCount: number
      name: string
      payload: string
      /** User access to chat */
      access: 'admin' | 'banned' | 'r' | 'rw'
      /** Array of available members images or initials */
      thumbnails: {
        image: string
        initials: string
      }[]
      level: 'channel' | 'organisation'
      /** Id of recipient user if p2p */
      recipientId: number
      created: string
      updated: string
    }
  }

  /** Updates chat */
  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    reqBody: {
      name: string
      accessType: 'private' | 'publicWrite' | 'publicRead'
      payload: string
      storyId: number
      itemId: number
      level: 'channel' | 'organisation'
    }
  }

  /** Deletes chat */
  delete: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200
  }
}
