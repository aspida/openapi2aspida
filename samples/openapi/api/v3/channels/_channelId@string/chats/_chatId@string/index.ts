/* eslint-disable */
import type * as Types from '../../../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    resBody: {
      chatId: number
      chatDescriptor: string
      channelId: number
      organisationId: number
      storyId: number
      itemId: number

      pinnedContent: {
        pinType: 'mix' | 'card'
      }

      storyIdPinned: number
      type: 'group' | 'p2p'
      accessType: 'private' | 'publicRead' | 'publicWrite'
      usersCount: number
      name: string
      payload: string
      access: 'admin' | 'banned' | 'r' | 'rw'
      thumbnails: {
        image: string
        initials: string
      }[]
      level: 'channel' | 'organisation'
      recipientId: number
      created: string
      updated: string
    }
  }

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

  delete: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200
  }
}
