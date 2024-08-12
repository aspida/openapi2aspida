/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined;
    status: 200;

    /** OK */
    resBody: Types.UserInfo & {
      token: string;
      settings?: Types.$200_UserSettings | undefined;
    };

    reqBody: {
      pwd: string;
      email: string;
      fcmToken?: string | undefined;
      deviceToken?: string | undefined;
      otp?: number | undefined;
    };
  };
}>;
