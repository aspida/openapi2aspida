/* eslint-disable */
import * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      offset: number
      limit: number
    }

    status: 200

    resBody: {
      segment_tags: Types.segmentTagResponse['segment_tag'][]
    }
  }

  post: {
    status: 201
    resBody: Types.segmentTagResponse
    reqFormat: URLSearchParams
    reqBody: Types.segmentTagParams
  }
}
