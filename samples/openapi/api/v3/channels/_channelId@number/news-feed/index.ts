/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query: {
      timestamp: number
      offset: number
      limit: number
      reverse: boolean
    }

    status: 200

    resBody: {
      count: number
      data: (Types.ModelCard & {
        storyId: number

        reactions: Types.ReactionCountModel & {
          myReaction: Types.ReactionEnumModel
        }
      })[]
    }
  }
}
