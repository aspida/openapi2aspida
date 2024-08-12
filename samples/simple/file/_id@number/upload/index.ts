/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type { ReadStream } from 'fs';

export type Methods = DefineMethods<{
  post: {
    query?: {
      path?: string | undefined;
    } | undefined;

    status: 204;
    reqBody: (File | ReadStream);
  };
}>;
