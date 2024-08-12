/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  /** Search for an uploaded file */
  get: {
    status: 200;

    /** response */
    resBody: {
      foo?: string | undefined;
    };
  };
}>;
