/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  /** Save newly updated firebase cloud messaging device token */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined;
    status: 204;

    reqBody: {
      fcmToken: string;
      deviceToken?: string | undefined;
    };
  };
}>;
