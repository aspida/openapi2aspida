/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * <p>指定した事業所の取引一覧（収入／支出）を取得する</p>
   * <h2 id="_2">定義</h2>
   * <ul>
   * <li>
   * <p>issue_date : 発生日</p>
   * </li>
   * <li>
   * <p>due_date : 支払期日</p>
   * </li>
   * <li>
   * <p>amount : 金額</p>
   * </li>
   * <li>
   * <p>due_amount : 支払残額</p>
   * </li>
   * <li>
   * <p>type</p>
   * <ul>
   * <li>income : 収入</li>
   * <li>expense : 支出</li>
   * </ul>
   * </li>
   * <li>
   * <p>details : 取引の明細行</p>
   * </li>
   * <li>
   * <p>accruals : 取引の債権債務行</p>
   * </li>
   * <li>
   * <p>renews : 取引の+更新行</p>
   * </li>
   * <li>
   * <p>payments : 取引の支払行</p>
   * </li>
   * <li>
   * <p>from_walletable_type</p>
   * <ul>
   * <li>bank_account : 銀行口座</li>
   * <li>credit_card : クレジットカード</li>
   * <li>wallet : 現金</li>
   * <li>private_account_item : プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）</li>
   * </ul>
   * </li>
   * <li>
   * <p>registered_from</p>
   * <ul>
   * <li>all : すべての取引</li>
   * <li>me : 自身が登録した取引</li>
   * </ul>
   * </li>
   * </ul>
   * <h2 id="_3">注意点</h2>
   * <ul>
   * <li>tax_idは廃止予定です。tax_codeをご利用ください。</li>
   * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</li>
   * </ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 取引先IDで絞込 */
      partner_id: number
      /** 勘定科目IDで絞込 */
      account_item_id: number
      /** 取引先コードで絞込 */
      partner_code: string
      /** 決済状況で絞込 (未決済: unsettled, 完了: settled) */
      status: 'unsettled' | 'settled'
      /** 収支区分 (収入: income, 支出: expense) */
      type: 'income' | 'expense'
      /** 発生日で絞込：開始日(yyyy-mm-dd) */
      start_issue_date: string
      /** 発生日で絞込：終了日(yyyy-mm-dd) */
      end_issue_date: string
      /** 支払期日で絞込：開始日(yyyy-mm-dd) */
      start_due_date: string
      /** 支払期日で絞込：終了日(yyyy-mm-dd) */
      end_due_date: string
      /** +更新日で絞込：開始日(yyyy-mm-dd) */
      start_renew_date: string
      /** +更新日で絞込：終了日(yyyy-mm-dd) */
      end_renew_date: string
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 20, 最大: 100) */
      limit: number
      /** 取引登録元アプリで絞込（me: 本APIを叩くアプリ自身から登録した取引のみ） */
      registered_from: 'me'
      /** 取引の債権債務行の表示（without: 表示しない(デフォルト), with: 表示する） */
      accruals: 'without' | 'with'
    }

    status: 200

    resBody: {
      deals: Types.DealResponse['deal'][]

      meta: {
        /** 検索条件に合致する取引の総数 */
        total_count: number
      }
    }
  }

  /**
   * <h2 id="">概要</h2>
   * <p>指定した事業所の取引（収入／支出）を作成する</p>
   * <h2 id="_2">定義</h2>
   * <ul>
   * <li>
   * <p>issue_date : 発生日</p>
   * </li>
   * <li>
   * <p>due_date : 支払期日</p>
   * </li>
   * <li>
   * <p>amount : 金額</p>
   * </li>
   * <li>
   * <p>due_amount : 支払残額</p>
   * </li>
   * <li>
   * <p>type</p>
   * <ul>
   * <li>income : 収入</li>
   * <li>expense : 支出</li>
   * </ul>
   * </li>
   * <li>
   * <p>ref_number : 管理番号</p>
   * </li>
   * <li>
   * <p>details : 取引の明細行</p>
   * </li>
   * <li>
   * <p>payments : 取引の支払行</p>
   * </li>
   * <li>
   * <p>receipt_ids : 証憑ファイルID</p>
   * </li>
   * <li>
   * <p>from_walletable_type</p>
   * <ul>
   * <li>bank_account : 銀行口座</li>
   * <li>credit_card : クレジットカード</li>
   * <li>wallet : 現金</li>
   * <li>private_account_item : プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）</li>
   * </ul>
   * </li>
   * </ul>
   * <h2 id="_3">注意点</h2>
   * <ul>
   * <li>
   * <p>tax_idは廃止予定です。tax_codeをご利用ください。</p>
   * </li>
   * <li>
   * <p>tax_code, tax_idはどちらかの指定が必須です。両方指定した場合はtax_codeが優先されます。</p>
   * </li>
   * <p><li>本APIでは+更新行(renews)の操作ができません。+更新行の作成APIをご利用ください。</p></li>
   * <p><li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</p></li>
   * <li>
   * <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</p></li>
   * </ul>
   */
  post: {
    status: 201
    resBody: Types.DealCreateResponse
    reqFormat: URLSearchParams
    /** 取引（収入／支出）の作成 */
    reqBody?: Types.DealCreateParams
  }
}
