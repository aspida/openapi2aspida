/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  /** Retrieve a role depending on its id */
  get: {
    status: 200;
    /** response */
    resBody: Types.Users_PermissionsRole;
  };
}>;
