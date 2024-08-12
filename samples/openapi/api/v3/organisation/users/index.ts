/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../@types';

export type Methods = DefineMethods<{
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired | undefined;

    query: {
      search: string;
      offset?: number | undefined;
    };

    status: 200;

    /** OK */
    resBody: {
      count: number;
      offset?: number | undefined;
      data: {
        email: string;
        id: number;
        initials: string;
        role: string;
        roleScope: string;
        screenName: string;
      }[];
    };
  };
}>;
