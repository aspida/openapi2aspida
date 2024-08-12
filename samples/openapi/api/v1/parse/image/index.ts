/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type { ReadStream } from 'fs';

export type Methods = DefineMethods<{
  post: {
    status: 200;

    /** OK */
    resBody: {
      imageId: number;
    };

    reqFormat: FormData;

    reqBody: {
      /** Image to upload. */
      file: (File | ReadStream);
      rightholder?: string | undefined;
      statusCopyright?: 'unknown' | 'cc' | 'licensed' | 'sublicensed' | undefined;
    };
  };
}>;
