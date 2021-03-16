/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の振替伝票を取得する</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul> <li> <p>issue_date : 発生日</p> </li>
   * <li> <p>adjustment : 決算整理仕訳フラグ（true: 決算整理仕訳, false: 日常仕訳）</p> </li>
   * <li> <p>txn_number : 仕訳番号</p> </li>
   * <li> <p>details : 振替伝票の貸借行</p> </li>
   * <li> <p>entry_side : 貸借区分</p>
   * <ul> <li>credit : 貸方</li>
   * <li>debit : 借方</li> </ul> </li>
   * <li> <p>amount : 金額</p> </li> </ul>
   * 
   * <h2 id="_3">注意点</h2>
   * 
   * <ul>
   * <li>振替伝票は売掛・買掛レポートには反映されません。債権・債務データの登録は取引(Deals)をお使いください。</li>
   * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
   * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * </ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.ManualJournalResponse
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の振替伝票を更新する</p>
   * 
   * <h2 id="_2">定義</h2>
   * 
   * <ul>
   * <li>
   * <p>issue_date : 発生日</p>
   * </li>
   * 
   * <li>
   * <p>adjustment : 決算整理仕訳フラグ（true: 決算整理仕訳, false: 日常仕訳）</p>
   * </li>
   * 
   * <li>
   * <p>txn_number : 仕訳番号</p>
   * </li>
   * 
   * <li>
   * <p>details : 振替伝票の貸借行</p>
   * </li>
   * 
   * <li>
   * <p>entry_side : 貸借区分</p>
   * 
   * <ul>
   * <li>credit : 貸方</li>
   * 
   * <li>debit : 借方</li>
   * </ul>
   * </li>
   * 
   * <li>
   * <p>amount : 金額</p>
   * </li>
   * </ul>
   * 
   * <h2 id="_3">注意点</h2>
   * 
   * <ul>
   * <li>振替伝票は売掛・買掛レポートには反映されません。債権・債務データの登録は取引(Deals)をお使いください。</li>
   * 
   * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
   * <li>貸借合わせて100行まで仕訳行を登録できます。</li>
   * 
   * <li>detailsに含まれない既存の貸借行は削除されます。更新後も残したい行は、必ず貸借行IDを指定してdetailsに含めてください。</li>
   * 
   * <li>detailsに含まれる貸借行IDの指定がある行は、更新行として扱われ更新されます。</li>
   * 
   * <li>detailsに含まれる貸借行IDの指定がない行は、新規行として扱われ追加されます。</li>
   * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</li></ul>
   */
  put: {
    status: 200
    resBody: Types.ManualJournalResponse
    reqFormat: URLSearchParams
    /** 振替伝票の更新 */
    reqBody?: Types.ManualJournalUpdateParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の振替伝票を削除する</p>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
