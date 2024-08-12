/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  post: {
    status: 204;

    reqBody: {
      url: string;
      published?: boolean | undefined;
      enableImage?: boolean | undefined;
    };
  };
}>;
