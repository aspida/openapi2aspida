/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../../@types';

export type Methods = DefineMethods<{
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>税区分コードを取得する</p>
   */
  get: {
    status: 200;
    resBody: Types.TaxResponse;
  };
}>;
