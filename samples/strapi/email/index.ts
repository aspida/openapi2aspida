/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  /** Send an email */
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
