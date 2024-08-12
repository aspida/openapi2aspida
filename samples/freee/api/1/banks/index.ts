/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>連携しているサービス一覧を取得する</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>type
   * <ul>
   * <li>bank_account : 銀行口座</li>
   * 
   * <li>credit_card : クレジットカード</li>
   * 
   * <li>wallet : その他の決済口座</li>
   * </ul>
   * </li>
   * </ul>
   */
  get: {
    query?: {
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset?: number | undefined;
      /** 取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 500) */
      limit?: number | undefined;
      /** サービス種別 */
      type?: 'bank' | 'credit_card' | 'wallet' | undefined;
    } | undefined;

    status: 200;

    resBody: {
      banks: Types.BankResponse['bank'][];
    };
  };
}>;
