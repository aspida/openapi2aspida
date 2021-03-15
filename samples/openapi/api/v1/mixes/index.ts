/* eslint-disable */
export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: {
      id: number
      title: number
      createdByCurrentClientAPI: boolean
    }[]
  }

  post: {
    status: 200

    /** OK */
    resBody: {
      id: number
    }

    reqBody: {
      name: string
      title?: string
    }
  }
}
