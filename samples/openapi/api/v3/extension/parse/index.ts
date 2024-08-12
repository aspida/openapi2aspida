/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../@types';

export type Methods = DefineMethods<{
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader | undefined;
    status: 200;

    /** OK */
    resBody: {
      type: Types.CardEnumModel;
      url: string;
      sourceName?: string | undefined;
      abstract?: string | undefined;
      quotePerson?: string | undefined;
      quotePersonHandle?: string | undefined;
      quote?: string | undefined;
      quoteSource?: string | undefined;
      quoteCreated?: string | undefined;
    };

    reqBody: {
      url: string;
    };
  };
}>;
