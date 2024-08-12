/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  /** Connect a provider */
  get: {
    status: 200;

    /** response */
    resBody: {
      foo?: string | undefined;
    };
  };
}>;
