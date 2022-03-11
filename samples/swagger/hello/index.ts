/* eslint-disable */
export type Methods = {
  get: {
    query?: {
      /** defaults to World if not given */
      name?: string | undefined
    } | undefined

    status: 200
    /** returns a greeting */
    resBody: string
  }
}
