/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  /** Successfull redirection after approving a provider */
  get: {
    status: 200;

    /** response */
    resBody: {
      foo?: string | undefined;
    };
  };
}>;
