/* eslint-disable */
export type Methods = {
  get: {
    query?: {
      /** defaults to World if not given */
      name?: string
    }

    status: 200
    /** returns a greeting */
    resBody: string
  }
}
