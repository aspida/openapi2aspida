/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 200;
    /** successful operation */
    resBody: Types.Order;
    /** order placed for purchasing the pet */
    reqBody: Types.Order;
  };
}>;
