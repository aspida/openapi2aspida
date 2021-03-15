/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    /** OK */
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
