/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../../@types';

export type Methods = DefineMethods<{
  /** Creates an purchase order for an offer by its offer_id and using invoice as payment method */
  post: {
    status: 201;
    /** Created */
    resBody: Types.Order;

    resHeaders: {
      /** Correlation id for the different services */
      'x-correlator': string;
    };

    /** Body to create a purchase order */
    reqBody: Types.CreatePurchaseOrderInvoice;
  };
}>;
