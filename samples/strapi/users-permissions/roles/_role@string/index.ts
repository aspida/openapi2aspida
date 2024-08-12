/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  /** Update a role */
  put: {
    status: 200;
    /** response */
    resBody: Types.Users_PermissionsRole;
    reqBody: Types.NewUsers_PermissionsRole;
  };

  /** Delete a role */
  delete: {
    status: 200;

    /** response */
    resBody: {
      foo?: string | undefined;
    };
  };
}>;
