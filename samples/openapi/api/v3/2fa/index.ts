/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired | undefined;
    status: 200;

    /** OK */
    resBody: {
      dataUrl?: string | undefined;
      otpURL?: string | undefined;
      secret?: string | undefined;
    };

    reqBody: {
      email: string;
    };
  };
}>;
