/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../../../../@types';

export type Methods = DefineMethods<{
  /** Returns chat items by list of ids */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined;

    query: {
      /** coma separated ids of requested cards */
      ids: string;
    };

    status: 200;
    /** OK */
    resBody: Types.ModelCard[];
  };
}>;
