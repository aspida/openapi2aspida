/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    query?: {
      q?: string | undefined;
    } | undefined;

    status: 202;
  };
}>;
