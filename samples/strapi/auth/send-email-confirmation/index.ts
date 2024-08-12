/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  /** Send a confirmation email to user */
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
