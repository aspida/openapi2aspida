/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../@types';

export type Methods = DefineMethods<{
  post: {
    /** Pet object that needs to be added to the store */
    reqBody: Types.Pet;
  };

  put: {
    /** Pet object that needs to be added to the store */
    reqBody: Types.Pet;
  };
}>;
