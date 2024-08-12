/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    query?: {
      /** defaults to World if not given */
      name?: string | undefined;
    } | undefined;

    status: 200;
    /** returns a greeting */
    resBody: string;
  };
}>;
