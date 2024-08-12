/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../@types';

export type Methods = DefineMethods<{
  /** This can only be done by the logged in user. */
  post: {
    /** Created user object */
    reqBody: Types.User;
  };
}>;
