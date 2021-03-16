/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 500) */
      limit: number
    }

    status: 200

    resBody: {
      expense_applications: Types.ExpenseApplicationResponse['expense_application'][]
    }
  }

  /**
   * <h2 id="_1">概要</h2>
   * 
   * <p>指定した事業所の経費申請を作成する</p>
   * 
   * <h2 id="_2">注意点</h2>
   * <ul>
   *   <li>本APIでは、経費申請の下書きを作成することができます。申請作業はWebから行ってください。</li>
   *   <li>現在、申請経路はWeb上からのみ入力できます。Web上での申請時に指定してください。</li>
   *   <li>申請時には、申請タイトル(title)に加え、申請日(issue_date)、項目行については金額(amount)、日付(transaction_date)、内容(description)が必須項目となります。申請時の業務効率化のため、API入力をお勧めします。</li>
   *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
   *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
   * </ul>
   */
  post: {
    status: 201
    resBody: Types.ExpenseApplicationResponse
    reqFormat: URLSearchParams
    /** 経費申請の作成 */
    reqBody?: Types.ExpenseApplicationCreateParams
  }
}
