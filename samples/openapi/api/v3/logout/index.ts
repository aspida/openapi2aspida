/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined;
    status: 204;

    reqBody: {
      fcmToken?: string | undefined;
      deviceToken?: string | undefined;
    };
  };
}>;
