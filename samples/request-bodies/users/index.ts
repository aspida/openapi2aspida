/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../@types';

export type Methods = DefineMethods<{
  post: {
    status: 200;
    reqBody: Types.UserRequestBody;
  };
}>;
