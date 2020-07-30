/* eslint-disable */
export type Methods = {
  post: {
    status: 200

    resBody: {
      token: string
    }

    reqBody?: {
      organisationSubdomain: string
      channelSubdomain: string
      userId: number
    }
  }
}
