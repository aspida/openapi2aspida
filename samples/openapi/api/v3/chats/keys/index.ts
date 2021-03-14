/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserPublicKey & Types.UserSignedChallenge
    status: 200

    resBody: {
      token: string
      publishKey: string
      subscribeKey: string
      cipherKey: string

      senderDevice: {
        ios: string[]
        android: string[]
      }
    }
  }
}
