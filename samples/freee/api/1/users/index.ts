/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>事業所に所属するユーザーの一覧を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number;
      /** 取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 3000) */
      limit?: number | undefined;
    };

    status: 200;

    resBody: {
      users: Types.UserResponse['user'][];
    };
  };
}>;
