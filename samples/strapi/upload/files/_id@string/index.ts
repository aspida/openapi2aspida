/* eslint-disable */
export type Methods = {
  /** Retrieve a single file depending on its id */
  get: {
    status: 200

    /** response */
    resBody: {
      foo: string
    }
  }

  /** Delete an uploaded file */
  delete: {
    status: 200

    /** response */
    resBody: {
      foo: string
    }
  }
}
