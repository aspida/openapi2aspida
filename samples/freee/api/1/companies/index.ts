/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ユーザが所属する事業所の一覧を取得する</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>role
   * <ul>
   * <li>admin : 管理者</li>
   * 
   * <li>simple_accounting : 一般</li>
   * 
   * <li>self_only : 取引登録のみ</li>
   * 
   * <li>read_only : 閲覧のみ</li>
   * </ul>
   * </li>
   * </ul>
   */
  get: {
    status: 200
    resBody: Types.CompanyIndexResponse
  }
}
