/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** Returns valid pubnub keys and auth token, refreshes tokens and access if needed */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserPublicKey & Types.UserSignedChallenge
    status: 200

    /** OK */
    resBody: {
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
}
