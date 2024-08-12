/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../../../../../@types';

export type Methods = DefineMethods<{
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader | undefined;
    status: 200;

    /** OK */
    resBody: {
      ok: boolean;
    };

    reqBody: {
      formattedText?: string | undefined;
    };
  };
}>;
