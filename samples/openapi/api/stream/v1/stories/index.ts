/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../@types';

export type Methods = DefineMethods<{
  /** It returns all stories with first 75 cards */
  get: {
    query: {
      token: string;
    };

    status: 200;
    /** OK */
    resBody: Types.ModelMixV3;
  };
}>;
