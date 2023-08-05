/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader | undefined

    query?: {
      /** date string or number of milliseconds */
      timestamp?: number | undefined
      offset?: number | undefined
      limit?: number | undefined
      reverse?: boolean | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      count: number
      data: (Types.ModelCard & {
        storyId?: number | undefined

        reactions?: Types.ReactionCountModel & {
          myReaction?: Types.ReactionEnumModel | undefined
        } | undefined
      })[]
    }
  }
}
