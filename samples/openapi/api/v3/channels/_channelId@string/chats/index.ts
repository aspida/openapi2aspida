/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** Returns users chats in channel */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserPublicKey & Types.UserSignedChallenge
    status: 200

    /** OK */
    resBody: {
      /** array of chats */
      chats: {
        access: 'admin' | 'r' | 'w' | 'banned'
        chatId: number
        chatDescriptor: string
        channelId: number
        organisationId: number
        name: string
        payload: string
        type: 'group' | 'p2p'
        accessType: 'private' | 'publicWrite' | 'publicRead'
        /** pinned mix ID */
        storyId: number
        /** pinned card ID */
        itemId: number
        /** ID of mix of shared cards */
        storyIdPinned: number
        /** if there are no pinned content in hidden mix */
        storyPinnedEmpty: boolean
        usersCount: number
        /** true if chat is public and user can join, false if user has already joined chat */
        publicToJoin: boolean
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
      }[]
      /** Should be used as authKey when initializing pubnub instance */
      token: string
      publishKey: string
      subscribeKey: string
      cipherKey: string

      /** should be used with sending message to prevent self pushes */
      senderDevice: {
        ios: string[]
        android: string[]
      }
    }
  }

  /** Creates chat */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 201

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

    reqBody: {
      name: string
      type: 'p2p' | 'group'
      level: 'channel' | 'organisation'
      accessType: 'private' | 'publicRead' | 'publicWrite'
      payload?: string
      /** Mix to pin */
      storyId?: number
      /** Card to pin */
      itemId?: number
      /** Array of users to add with 'rw' rights (without you). If type = 'p2p' should contain only one item */
      users?: number[]
    }
  }
}
