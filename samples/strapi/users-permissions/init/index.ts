/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  /** Check if the first admin user has already been registered */
  get: {
    status: 200;

    /** response */
    resBody: {
      foo?: string | undefined;
    };
  };
}>;
