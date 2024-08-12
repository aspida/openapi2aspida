/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../../../../../@types';

export type Methods = DefineMethods<{
  /** Removes members from chat */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined;
    status: 200;

    reqBody: {
      /** List of user IDs to remove */
      users?: number[] | undefined;
      /** If true: will remove user from chat */
      self?: boolean | undefined;
    };
  };
}>;
