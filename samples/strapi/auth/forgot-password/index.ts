/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  /** Send the reset password email link */
  post: {
    status: 200;

    /** response */
    resBody: {
      foo?: string | undefined;
    };

    reqBody: {
      foo?: string | undefined;
    };
  };
}>;
