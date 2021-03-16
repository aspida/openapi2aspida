/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の振替伝票一覧を取得する</p>
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
   * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
   * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</li></ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 発生日で絞込：開始日(yyyy-mm-dd) */
      start_issue_date: string
      /** 発生日で絞込：終了日(yyyy-mm-dd) */
      end_issue_date: string
      /** 貸借で絞込 (貸方: credit, 借方: debit) */
      entry_side: 'credit' | 'debit'
      /** 勘定科目IDで絞込 */
      account_item_id: number
      /** 金額で絞込：下限 */
      min_amount: number
      /** 金額で絞込：上限 */
      max_amount: number
      /** 取引先IDで絞込（0を指定すると、取引先が未選択の貸借行を絞り込めます） */
      partner_id: number
      /** 取引先コードで絞込 */
      partner_code: string
      /** 品目IDで絞込（0を指定すると、品目が未選択の貸借行を絞り込めます） */
      item_id: number
      /** 部門IDで絞込（0を指定すると、部門が未選択の貸借行を絞り込めます） */
      section_id: number
      /** セグメント１IDで絞り込み（0を指定すると、セグメント１が未選択の貸借行を絞り込めます） */
      segment_1_tag_id: number
      /** セグメント２IDで絞り込み（0を指定すると、セグメント２が未選択の貸借行を絞り込めます） */
      segment_2_tag_id: number
      /** セグメント３IDで絞り込み（0を指定すると、セグメント３が未選択の貸借行を絞り込めます） */
      segment_3_tag_id: number
      /** コメント状態で絞込（自分宛のコメント: posted_with_mention, 自分宛のコメント-未解決: raised_with_mention, 自分宛のコメント-解決済: resolved_with_mention, コメントあり: posted, 未解決: raised, 解決済: resolved, コメントなし: none） */
      comment_status: 'posted_with_mention' | 'raised_with_mention' | 'resolved_with_mention' | 'posted' | 'raised' | 'resolved' | 'none'
      /** 重要コメント付きの振替伝票を絞込 */
      comment_important: boolean
      /** 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without） */
      adjustment: 'only' | 'without'
      /** 仕訳番号で絞込（事業所の仕訳番号形式が有効な場合のみ） */
      txn_number: string
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 500) */
      limit: number
    }

    status: 200

    resBody: {
      manual_journals: Types.ManualJournalResponse['manual_journal'][]
    }
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の振替伝票を作成する</p>
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
   * <li>事業所の仕訳番号形式が有効な場合のみ、レスポンスで仕訳番号(txn_number)を返します。</li>
   * <li>貸借合わせて100行まで仕訳行を登録できます。</li>
   * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</li></ul>
   */
  post: {
    status: 201
    resBody: Types.ManualJournalResponse
    reqFormat: URLSearchParams
    /** 振替伝票の作成 */
    reqBody?: Types.ManualJournalCreateParams
  }
}
