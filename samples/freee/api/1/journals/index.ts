/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ユーザが所属する事業所の仕訳帳のダウンロードをリクエストします 生成されるファイルに関しては、<a href="https://support.freee.co.jp/hc/ja/articles/204599604#2">ヘルプページ</a>をご参照ください</p>
   * 
   * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>download_type
   * <ul>
   * <li>generic(freee Webからダウンロードできるものと同じ)</li>
   * 
   * <li>csv (yayoi形式)</li>
   * 
   * <li>pdf</li>
   * </ul>
   * </li>
   * 
   * <li>visible_tags : 指定しない場合は従来の仕様の仕訳帳が出力されます
   * <ul>
   * <li>partner : 取引先タグ</li>
   * 
   * <li>item : 品目タグ</li>
   * 
   * <li>tag : メモタグ</li>
   * 
   * <li>section : 部門タグ</li>
   * 
   * <li>description : 備考欄</li>
   * 
   * <li>wallet_txn_description : 明細の備考欄</li>
   * 
   * <li>all : 指定された場合は上記の設定をすべて有効として扱います</li>
   * </ul>
   * </li>
   * 
   * <li>id : 受け付けID</li>
   * </ul>
   */
  get: {
    query: {
      /** ダウンロード形式 */
      download_type: 'csv' | 'pdf' | 'yayoi' | 'generic'
      /** 事業所ID */
      company_id: number
      /** 補助科目やコメントとして出力する項目 */
      visible_tags: ('partner' | 'item' | 'tag' | 'section' | 'description' | 'wallet_txn_description' | 'all')[]
      /** 取得開始日 (yyyy-mm-dd) */
      start_date: string
      /** 取得終了日 (yyyy-mm-dd) */
      end_date: string
    }

    status: 202
    resBody: Types.JournalsResponse
  }
}
