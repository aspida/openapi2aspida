/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../../@types';

export type Methods = DefineMethods<{
  /** Returns users chats in channel */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserPublicKey & Types.UserSignedChallenge | undefined;
    status: 200;

    /** OK */
    resBody: {
      /** array of chats */
      chats?: {
        access?: 'admin' | 'r' | 'w' | 'banned' | undefined;
        chatId?: number | undefined;
        chatDescriptor?: string | undefined;
        channelId?: number | undefined;
        organisationId?: number | undefined;
        name?: string | undefined;
        payload?: string | undefined;
        type?: 'group' | 'p2p' | undefined;
        accessType?: 'private' | 'publicWrite' | 'publicRead' | undefined;
        /** pinned mix ID */
        storyId?: number | undefined;
        /** pinned card ID */
        itemId?: number | undefined;
        /** ID of mix of shared cards */
        storyIdPinned?: number | undefined;
        /** if there are no pinned content in hidden mix */
        storyPinnedEmpty?: boolean | undefined;
        usersCount?: number | undefined;
        /** true if chat is public and user can join, false if user has already joined chat */
        publicToJoin?: boolean | undefined;
        /** Array of available members images or initials */
        thumbnails?: {
          image?: string | undefined;
          initials?: string | undefined;
        }[] | undefined;
        level?: 'channel' | 'organisation' | undefined;
        /** Id of recipient user if p2p */
        recipientId?: number | undefined;
        created?: string | undefined;
        updated?: string | undefined;
      }[] | undefined;
      /** Should be used as authKey when initializing pubnub instance */
      token?: string | undefined;
      publishKey?: string | undefined;
      subscribeKey?: string | undefined;
      cipherKey?: string | undefined;

      /** should be used with sending message to prevent self pushes */
      senderDevice?: {
        ios?: string[] | undefined;
        android?: string[] | undefined;
      } | undefined;
    };
  };

  /** Creates chat */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined;
    status: 201;

    /** OK */
    resBody: {
      chatId?: number | undefined;
      chatDescriptor?: string | undefined;
      channelId?: number | undefined;
      organisationId?: number | undefined;
      /** Pinned mix ID */
      storyId?: number | undefined;
      /** Pinned card ID */
      itemId?: number | undefined;

      pinnedContent?: {
        pinType?: 'mix' | 'card' | undefined;
      } | undefined;

      type?: 'group' | 'p2p' | undefined;
      accessType?: 'private' | 'publicRead' | 'publicWrite' | undefined;
      usersCount?: number | undefined;
      name?: string | undefined;
      payload?: string | undefined;
      /** User access to chat */
      access?: 'admin' | 'banned' | 'r' | 'rw' | undefined;
      /** Array of available members images or initials */
      thumbnails?: {
        image?: string | undefined;
        initials?: string | undefined;
      }[] | undefined;
      level?: 'channel' | 'organisation' | undefined;
      /** Id of recipient user if p2p */
      recipientId?: number | undefined;
      created?: string | undefined;
      updated?: string | undefined;
    };

    reqBody: {
      name: string;
      type: 'p2p' | 'group';
      level: 'channel' | 'organisation';
      accessType: 'private' | 'publicRead' | 'publicWrite';
      payload?: string | undefined;
      /** Mix to pin */
      storyId?: number | undefined;
      /** Card to pin */
      itemId?: number | undefined;
      /** Array of users to add with 'rw' rights (without you). If type = 'p2p' should contain only one item */
      users?: number[] | undefined;
    };
  };
}>;
