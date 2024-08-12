/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  post: {
    /** List of user object */
    reqBody: Types.User[];
  };
}>;
