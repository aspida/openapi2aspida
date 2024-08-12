/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  /** Returns a map of status codes to quantities */
  get: {
    status: 200;

    /** successful operation */
    resBody: {
      [key: string]: number;
    };
  };
}>;
