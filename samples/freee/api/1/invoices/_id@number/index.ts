/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.invoiceResponse
  }

  put: {
    status: 200
    resBody: Types.invoiceResponse
    reqFormat: URLSearchParams
    reqBody?: Types.invoiceUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}
