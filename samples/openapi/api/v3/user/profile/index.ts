/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type { ReadStream } from 'fs';
import type * as Types from '../../../../@types';

export type Methods = DefineMethods<{
  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader | undefined;
    status: 204;
    reqFormat: FormData;

    reqBody: {
      screenName?: string | undefined;
      url?: string | undefined;
      /** Profile picture to upload. */
      image?: (File | ReadStream) | undefined;
      imageId?: string | undefined;
    };
  };
}>;
