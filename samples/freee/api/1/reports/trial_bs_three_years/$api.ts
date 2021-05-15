/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/reports/trial_bs_three_years'
  const GET = 'GET'

  return {
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の貸借対照表(３期間比較)を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     *
     * <li>
     * <p>created_at : 作成日時</p>
     * </li>
     *
     * <li>
     * <p>account_item_name : 勘定科目名</p>
     * </li>
     *
     * <li>
     * <p>hierarchy_level: 階層レベル</p>
     * </li>
     *
     * <li>
     * <p>parent_account_category_name: 上位勘定科目カテゴリー名(上層が存在する場合含まれる)</p>
     * </li>
     * <li>
     * <p>two_years_before_closing_balance:  前々年度期末残高 </p>
     * </li>
     * <li>
     * <p>last_year_closing_balance:  前年度期末残高 </p>
     * </li>
     * <li>
     * <p>closing_balance : 期末残高 </p>
     * </li>
     * <li>
     * <p>year_on_year : 前年比</p>
     * </li>
     * <h2 id="_3">注意点</h2>
     * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li>  </ul>
     * <h2 id="_4">レスポンスの例</h2>
     *
     * <blockquote>
     * <p>GET https://api.freee.co.jp/api/1/reports/trial_bs_three_years?company_id=1&amp;fiscal_year=2017</p>
     * </blockquote>
     *
     * <pre><code>{
     *   &quot;trial_bs_three_years&quot; :
     *     {
     *       &quot;company_id&quot; : 1,
     *       &quot;fiscal_year&quot; : 2017,
     *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
     *       &quot;balances&quot; : [{
     *         &quot;account_item_id&quot; : 1000,
     *         &quot;account_item_name&quot; : &quot;現金&quot;,
     *         &quot;hierarchy_level&quot; : 2,
     *         &quot;parent_account_category_id&quot; : 100;
     *         &quot;parent_account_category_name&quot; : &quot;流動資産&quot;,
     *         &quot;two_year_before_closing_balance&quot; : 50000,
     *         &quot;last_year_closing_balance&quot; : 25000,
     *         &quot;closing_balance&quot; : 100000,
     *         &quot;year_on_year&quot; : 0.85
     *       },
     *       ...
     *       ]
     *     }
     * }</code></pre>
     */
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の貸借対照表(３期間比較)を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     *
     * <li>
     * <p>created_at : 作成日時</p>
     * </li>
     *
     * <li>
     * <p>account_item_name : 勘定科目名</p>
     * </li>
     *
     * <li>
     * <p>hierarchy_level: 階層レベル</p>
     * </li>
     *
     * <li>
     * <p>parent_account_category_name: 上位勘定科目カテゴリー名(上層が存在する場合含まれる)</p>
     * </li>
     * <li>
     * <p>two_years_before_closing_balance:  前々年度期末残高 </p>
     * </li>
     * <li>
     * <p>last_year_closing_balance:  前年度期末残高 </p>
     * </li>
     * <li>
     * <p>closing_balance : 期末残高 </p>
     * </li>
     * <li>
     * <p>year_on_year : 前年比</p>
     * </li>
     * <h2 id="_3">注意点</h2>
     * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li>  </ul>
     * <h2 id="_4">レスポンスの例</h2>
     *
     * <blockquote>
     * <p>GET https://api.freee.co.jp/api/1/reports/trial_bs_three_years?company_id=1&amp;fiscal_year=2017</p>
     * </blockquote>
     *
     * <pre><code>{
     *   &quot;trial_bs_three_years&quot; :
     *     {
     *       &quot;company_id&quot; : 1,
     *       &quot;fiscal_year&quot; : 2017,
     *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
     *       &quot;balances&quot; : [{
     *         &quot;account_item_id&quot; : 1000,
     *         &quot;account_item_name&quot; : &quot;現金&quot;,
     *         &quot;hierarchy_level&quot; : 2,
     *         &quot;parent_account_category_id&quot; : 100;
     *         &quot;parent_account_category_name&quot; : &quot;流動資産&quot;,
     *         &quot;two_year_before_closing_balance&quot; : 50000,
     *         &quot;last_year_closing_balance&quot; : 25000,
     *         &quot;closing_balance&quot; : 100000,
     *         &quot;year_on_year&quot; : 0.85
     *       },
     *       ...
     *       ]
     *     }
     * }</code></pre>
     */
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
