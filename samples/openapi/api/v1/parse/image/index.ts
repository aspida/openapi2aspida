/* eslint-disable */
export type Methods = {
  post: {
    status: 200

    resBody: {
      imageId: number
    }

    reqFormat: FormData

    reqBody?: {
      file: Blob
      rightholder?: string
      statusCopyright?: 'unknown' | 'cc' | 'licensed' | 'sublicensed'
    }
  }
}
