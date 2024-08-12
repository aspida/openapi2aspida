/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  put: {
    query?: {
      /** query */
      q?: string | undefined;
    } | undefined;

    status: 202;
  };
}>;
