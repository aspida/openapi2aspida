/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    resBody: {
      userId: number
      screenName: string
      email: string
      isStaff: boolean
      channelName?: string
      channelId?: number
      url?: string
    }
  }
}
