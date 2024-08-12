/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  /** Multiple status values can be provided with comma separated strings */
  get: {
    query: {
      /** Status values that need to be considered for filter */
      status: ('available' | 'pending' | 'sold')[];
    };

    status: 200;
    /** successful operation */
    resBody: Types.Pet[];
  };
}>;
