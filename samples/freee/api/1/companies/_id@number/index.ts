/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ユーザが所属する事業所の詳細を取得する</p>
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
   * 
   * <h2 id="_3">
   */
  get: {
    query: {
      /** 取得情報に勘定科目・税区分コード・税区分・品目・取引先・部門・メモタグ・口座の一覧を含める */
      details: true
      /** 取得情報に勘定科目一覧を含める */
      account_items: true
      /** 取得情報に税区分コード・税区分一覧を含める */
      taxes: true
      /** 取得情報に品目一覧を含める */
      items: true
      /** 取得情報に取引先一覧を含める */
      partners: true
      /** 取得情報に部門一覧を含める */
      sections: true
      /** 取得情報にメモタグ一覧を含める */
      tags: true
      /** 取得情報に口座一覧を含める */
      walletables: true
    }

    status: 200
    resBody: Types.CompanyResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ユーザが所属する事業所の情報を更新する</p>
   * 
   * <p>※同時に複数のリクエストを受け付けない</p>
   */
  put: {
    status: 200
    resBody: Types.CompanyUpdateResponse
    reqFormat: URLSearchParams
    reqBody?: Types.CompanyParams
  }
}
