/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** successful operation */
    resBody: Types.User;
  };

  /** This can only be done by the logged in user. */
  put: {
    /** Updated user object */
    reqBody: Types.User;
  };

  /** This can only be done by the logged in user. */
  delete: {
  };
}>;
