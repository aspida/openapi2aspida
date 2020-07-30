/* eslint-disable */
export type Methods = {
  get: {
    query: {
      username: string
      password: string
    }

    status: 200
    resBody: string

    resHeaders: {
      'X-Expires-After': string
      'X-Rate-Limit': number
    }
  }
}
