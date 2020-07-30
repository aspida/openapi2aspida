/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.sectionResponse
  }

  put: {
    status: 200
    resBody: Types.sectionResponse
    reqFormat: URLSearchParams
    reqBody?: Types.sectionParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
