/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  /** Register a new user with the default role */
  post: {
    status: 200;
    /** response */
    resBody: Types.Users_PermissionsUser;
    reqBody: Types.NewUsers_PermissionsUser;
  };
}>;
