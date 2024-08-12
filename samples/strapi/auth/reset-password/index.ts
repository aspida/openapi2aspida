/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  /** Change a user's password */
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
