/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Retrieve all user documents */
  get: {
    query?: {
      /** Maximum number of results possible */
      _limit?: number | undefined
      /** Sort according to a specific field. */
      _sort?: string | undefined
      /** Skip a specific number of entries (especially useful for pagination) */
      _start?: number | undefined
      /** Get entries that matches exactly your input */
      '='?: string | undefined
      /** Get records that are not equals to something */
      _ne?: string | undefined
      /** Get record that are lower than a value */
      _lt?: string | undefined
      /** Get records that are lower than or equal to a value */
      _lte?: string | undefined
      /** Get records that are greater than a value */
      _gt?: string | undefined
      /** Get records that are greater than  or equal a value */
      _gte?: string | undefined
      /** Get records that contains a value */
      _contains?: string | undefined
      /** Get records that contains (case sensitive) a value */
      _containss?: string | undefined
      /** Get records that matches any value in the array of values */
      _in?: string[] | undefined
      /** Get records that doesn't match any value in the array of values */
      _nin?: string[] | undefined
    } | undefined

    status: 200
    /** response */
    resBody: Types.Users_PermissionsUser[]
  }
}
