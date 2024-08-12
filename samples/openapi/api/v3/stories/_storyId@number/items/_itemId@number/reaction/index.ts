/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../../../../@types';

export type Methods = DefineMethods<{
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader | undefined;
    status: 200;

    /** OK */
    resBody: {
      action?: 'add' | 'remove' | 'replace' | undefined;

      reactions?: Types.ReactionCountModel & {
        myReaction?: Types.ReactionEnumModel | undefined;
      } | undefined;

      previousStatus?: Types.ReactionEnumModel | undefined;
      userType?: 'anonymous' | 'unique' | undefined;
    };

    reqBody: {
      reaction?: Types.ReactionEnumModel | undefined;
    };
  };
}>;
