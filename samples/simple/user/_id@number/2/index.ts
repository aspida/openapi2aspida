/* eslint-disable */
export type Methods = {
  get: {
    query: {
      path: string
      '123456789123456789123456789123456789'?: string | undefined
    }

    status: 200

    /** accept */
    resBody: {
      /** ID */
      id: number
      /** NAME */
      name: string
    }
  }

  post: {
    query: {
      path: string
      '123456789123456789123456789123456789'?: string | undefined
    }

    status: 200

    /** accept */
    resBody: {
      /** ID */
      id: number
      /** NAME */
      name?: string | undefined
    }
  }
}
