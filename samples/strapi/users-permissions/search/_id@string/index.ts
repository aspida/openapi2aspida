/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Search for users */
  get: {
    query?: {
      /** Maximum number of results possible */
      _limit?: number
      /** Sort according to a specific field. */
      _sort?: string
      /** Skip a specific number of entries (especially useful for pagination) */
      _start?: number
      /** Get entries that matches exactly your input */
      '='?: string
      /** Get records that are not equals to something */
      _ne?: string
      /** Get record that are lower than a value */
      _lt?: string
      /** Get records that are lower than or equal to a value */
      _lte?: string
      /** Get records that are greater than a value */
      _gt?: string
      /** Get records that are greater than  or equal a value */
      _gte?: string
      /** Get records that contains a value */
      _contains?: string
      /** Get records that contains (case sensitive) a value */
      _containss?: string
      /** Get records that matches any value in the array of values */
      _in?: string[]
      /** Get records that doesn't match any value in the array of values */
      _nin?: string[]
    }

    status: 200
    /** response */
    resBody: Types.Users_PermissionsUser[]
  }
}
