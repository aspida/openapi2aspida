/* eslint-disable */
export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ダウンロードを実行する</p>
   * 
   * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>id : 受け付けID</li>
   * </ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Blob
  }
}
