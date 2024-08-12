/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type { ReadStream } from 'fs';
import type * as Types from '../../../../../../@types';

export type Methods = DefineMethods<{
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined;
    status: 200;

    /** OK */
    resBody: {
      id: string;
    };

    reqFormat: FormData;

    reqBody: {
      /** Audio to upload. */
      file: (File | ReadStream);
      caption?: string | undefined;
      headline?: string | undefined;
      text?: string | undefined;
      imageId?: string | undefined;
      published?: boolean | undefined;
    };
  };
}>;
