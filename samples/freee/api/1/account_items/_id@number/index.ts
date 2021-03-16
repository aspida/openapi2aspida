/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した勘定科目の詳細を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.AccountItemResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>勘定科目を更新する</p>
   */
  put: {
    status: 200
    resBody: Types.AccountItemResponse
    reqFormat: URLSearchParams
    /** 勘定科目の更新 */
    reqBody: Types.AccountItemParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した勘定科目を削除する</p>
   * <h2 id="">注意点</h2>
   * <ul>
   * <li>削除できる勘定科目は、追加で作成したカスタム勘定項目のみです。</li>
   * <li>デフォルトで存在する勘定科目や口座の勘定科目は削除できません。</li></ul>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
