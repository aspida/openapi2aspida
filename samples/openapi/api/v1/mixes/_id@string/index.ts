/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  put: {
    status: 200;

    reqBody: {
      name: string;
      title?: string | undefined;
    };
  };
}>;
