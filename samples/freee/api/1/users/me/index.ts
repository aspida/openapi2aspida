/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ユーザの情報を取得する</p>
   */
  get: {
    query: {
      /** 取得情報にユーザが所属する事業所一覧を含める */
      companies: true
    }

    status: 200
    resBody: Types.MeResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ユーザー情報を更新する</p>
   */
  put: {
    status: 200
    resBody: Types.UserResponse
    reqFormat: URLSearchParams
    /** ユーザー情報の更新 */
    reqBody?: Types.UserParams
  }
}
