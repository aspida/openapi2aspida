/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.manualJournalResponse
  }

  put: {
    status: 200
    resBody: Types.manualJournalResponse
    reqFormat: URLSearchParams
    reqBody?: Types.manualJournalUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
