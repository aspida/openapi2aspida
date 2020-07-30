/* eslint-disable */
import * as Types from '../../../../../../@types'

export type Methods = {
  put: {
    status: 200
    resBody: Types.segmentTagResponse
    reqFormat: URLSearchParams
    reqBody: Types.segmentTagParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
