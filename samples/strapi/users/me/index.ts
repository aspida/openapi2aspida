/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  /** Retrieve the logged in user information */
  get: {
    status: 200;
    /** response */
    resBody: Types.Users_PermissionsUser;
  };
}>;
