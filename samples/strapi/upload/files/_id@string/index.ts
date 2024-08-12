/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  /** Retrieve a single file depending on its id */
  get: {
    status: 200;

    /** response */
    resBody: {
      foo?: string | undefined;
    };
  };

  /** Delete an uploaded file */
  delete: {
    status: 200;

    /** response */
    resBody: {
      foo?: string | undefined;
    };
  };
}>;
