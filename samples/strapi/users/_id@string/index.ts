/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  /** Retrieve a single user depending on his id */
  get: {
    status: 200;
    /** response */
    resBody: Types.Users_PermissionsUser;
  };

  /** Update an existing user */
  put: {
    status: 200;
    /** response */
    resBody: Types.Users_PermissionsUser;
    reqBody: Types.NewUsers_PermissionsUser;
  };

  /** Delete an existing user */
  delete: {
    status: 200;

    /** response */
    resBody: {
      foo?: string | undefined;
    };
  };
}>;
