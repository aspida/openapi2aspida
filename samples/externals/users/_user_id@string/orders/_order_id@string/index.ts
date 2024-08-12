/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../@types';

export type Methods = DefineMethods<{
  /** Get info of an order by order_id */
  get: {
    status: 200;
    /** Ok */
    resBody: Types.Order;

    resHeaders: {
      /** Correlation id for the different services */
      'x-correlator': string;
    };
  };
}>;
