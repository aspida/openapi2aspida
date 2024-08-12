/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../@types';

// @ts-expect-error
export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** OK */
    resBody: string;

    resHeaders: {
      'X-Simple': Types.X_Simple;
      'X-Description': Types.X_Description;
      'X-Ref': Types.X_Ref;
    };
  };
}>;
