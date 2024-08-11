import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_bj1b6o } from './trial_bs';
import type { Methods as Methods_wmtdii } from './trial_bs_three_years';
import type { Methods as Methods_2z7lt8 } from './trial_bs_two_years';
import type { Methods as Methods_a6uoin } from './trial_pl';
import type { Methods as Methods_1aezkng } from './trial_pl_sections';
import type { Methods as Methods_n5e4lp } from './trial_pl_three_years';
import type { Methods as Methods_10w8y9n } from './trial_pl_two_years';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/reports/trial_bs';
  const PATH1 = '/api/1/reports/trial_bs_three_years';
  const PATH2 = '/api/1/reports/trial_bs_two_years';
  const PATH3 = '/api/1/reports/trial_pl';
  const PATH4 = '/api/1/reports/trial_pl_sections';
  const PATH5 = '/api/1/reports/trial_pl_three_years';
  const PATH6 = '/api/1/reports/trial_pl_two_years';
  const GET = 'GET';

  return {
    trial_bs: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の貸借対照表を取得する</p>
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
       * <p>opening_balance : 期首残高 </p>
       * </li>
       *
       * <li>
       * <p>debit_amount : 借方金額 </p>
       * </li>
       * <li>
       * <p>credit_amount:  貸方金額 </p>
       * </li>
       * <li>
       * <p>closing_balance : 期末残高 </p>
       * </li>
       * <li>
       * <p>composition_ratio : 構成比</p>
       * </li>
       * <h2 id="_3">注意点</h2>
       * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li>  </ul>
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_bs?company_id=1&amp;fiscal_year=2017&amp;breakdown_display_type=partner</p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_bs&quot; :
       *     {
       *       &quot;company_id&quot; : 1,
       *       &quot;fiscal_year&quot; : 2017,
       *       &quot;breakdown_display_type&quot; : &quot;partner&quot;,
       *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
       *       &quot;balances&quot; : [{
       *         &quot;account_item_id&quot; : 1000,
       *         &quot;account_item_name&quot; : &quot;現金&quot;,
       *         &quot;hierarchy_level&quot; : 2,
       *         &quot;parent_account_category_id&quot; : 100;
       *         &quot;parent_account_category_name&quot; : &quot;流動資産&quot;,
       *         &quot;opening_balance&quot; : 100000,
       *         &quot;debit_amount&quot; : 50000,
       *         &quot;credit_amount&quot; : 20000,
       *         &quot;closing_balance&quot; : 130000,
       *         &quot;composition_ratio&quot; : 0.25
       *         &quot;partners&quot; : [{
       *           &quot;id&quot; : 123,
       *           &quot;name&quot; : &quot;freee&quot;,
       *           &quot;long_name&quot; : &quot;freee株式会社&quot;,
       *           &quot;opening_balance&quot; : 100000,
       *           &quot;debit_amount&quot; : 50000,
       *           &quot;credit_amount&quot; : 20000,
       *           &quot;closing_balance&quot; : 130000,
       *           &quot;composition_ratio&quot; : 0.25
       *           },
       *         ...
       *         ]
       *       },
       *       ...
       *       ]
       *     }
       * }</code></pre>
       */
      get: (option: { query: Methods_bj1b6o['get']['query'], config?: T | undefined }) =>
        fetch<Methods_bj1b6o['get']['resBody'], BasicHeaders, Methods_bj1b6o['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の貸借対照表を取得する</p>
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
       * <p>opening_balance : 期首残高 </p>
       * </li>
       *
       * <li>
       * <p>debit_amount : 借方金額 </p>
       * </li>
       * <li>
       * <p>credit_amount:  貸方金額 </p>
       * </li>
       * <li>
       * <p>closing_balance : 期末残高 </p>
       * </li>
       * <li>
       * <p>composition_ratio : 構成比</p>
       * </li>
       * <h2 id="_3">注意点</h2>
       * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li>  </ul>
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_bs?company_id=1&amp;fiscal_year=2017&amp;breakdown_display_type=partner</p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_bs&quot; :
       *     {
       *       &quot;company_id&quot; : 1,
       *       &quot;fiscal_year&quot; : 2017,
       *       &quot;breakdown_display_type&quot; : &quot;partner&quot;,
       *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
       *       &quot;balances&quot; : [{
       *         &quot;account_item_id&quot; : 1000,
       *         &quot;account_item_name&quot; : &quot;現金&quot;,
       *         &quot;hierarchy_level&quot; : 2,
       *         &quot;parent_account_category_id&quot; : 100;
       *         &quot;parent_account_category_name&quot; : &quot;流動資産&quot;,
       *         &quot;opening_balance&quot; : 100000,
       *         &quot;debit_amount&quot; : 50000,
       *         &quot;credit_amount&quot; : 20000,
       *         &quot;closing_balance&quot; : 130000,
       *         &quot;composition_ratio&quot; : 0.25
       *         &quot;partners&quot; : [{
       *           &quot;id&quot; : 123,
       *           &quot;name&quot; : &quot;freee&quot;,
       *           &quot;long_name&quot; : &quot;freee株式会社&quot;,
       *           &quot;opening_balance&quot; : 100000,
       *           &quot;debit_amount&quot; : 50000,
       *           &quot;credit_amount&quot; : 20000,
       *           &quot;closing_balance&quot; : 130000,
       *           &quot;composition_ratio&quot; : 0.25
       *           },
       *         ...
       *         ]
       *       },
       *       ...
       *       ]
       *     }
       * }</code></pre>
       */
      $get: (option: { query: Methods_bj1b6o['get']['query'], config?: T | undefined }) =>
        fetch<Methods_bj1b6o['get']['resBody'], BasicHeaders, Methods_bj1b6o['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_bj1b6o['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    trial_bs_three_years: {
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
      get: (option: { query: Methods_wmtdii['get']['query'], config?: T | undefined }) =>
        fetch<Methods_wmtdii['get']['resBody'], BasicHeaders, Methods_wmtdii['get']['status']>(prefix, PATH1, GET, option).json(),
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
      $get: (option: { query: Methods_wmtdii['get']['query'], config?: T | undefined }) =>
        fetch<Methods_wmtdii['get']['resBody'], BasicHeaders, Methods_wmtdii['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_wmtdii['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    trial_bs_two_years: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の貸借対照表(前年比較)を取得する</p>
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
       * <p>last_year_closing_balance:  前年度期末残高 </p>
       * </li>
       * <li>
       * <p>closing_balance : 期末残高 </p>
       * </li>
       * <h2 id="_3">注意点</h2>
       * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li>  </ul>
       *
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_bs_two_years?company_id=1&amp;fiscal_year=2017</p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_bs_two_years&quot; :
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
       *         &quot;last_year_closing_balance&quot; : 25000,
       *         &quot;closing_balance&quot; : 100000,
       *         &quot;year_on_year&quot; : 0.85
       *
       *       },
       *       ...
       *       ]
       *     }
       * }</code></pre>
       */
      get: (option: { query: Methods_2z7lt8['get']['query'], config?: T | undefined }) =>
        fetch<Methods_2z7lt8['get']['resBody'], BasicHeaders, Methods_2z7lt8['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の貸借対照表(前年比較)を取得する</p>
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
       * <p>last_year_closing_balance:  前年度期末残高 </p>
       * </li>
       * <li>
       * <p>closing_balance : 期末残高 </p>
       * </li>
       * <h2 id="_3">注意点</h2>
       * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li>  </ul>
       *
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_bs_two_years?company_id=1&amp;fiscal_year=2017</p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_bs_two_years&quot; :
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
       *         &quot;last_year_closing_balance&quot; : 25000,
       *         &quot;closing_balance&quot; : 100000,
       *         &quot;year_on_year&quot; : 0.85
       *
       *       },
       *       ...
       *       ]
       *     }
       * }</code></pre>
       */
      $get: (option: { query: Methods_2z7lt8['get']['query'], config?: T | undefined }) =>
        fetch<Methods_2z7lt8['get']['resBody'], BasicHeaders, Methods_2z7lt8['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_2z7lt8['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    trial_pl: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の損益計算書を取得する</p>
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
       * <p>opening_balance : 期首残高 </p>
       * </li>
       *
       * <li>
       * <p>debit_amount : 借方金額 </p>
       * </li>
       * <li>
       * <p>credit_amount:  貸方金額 </p>
       * </li>
       * <li>
       * <p>closing_balance : 期末残高 </p>
       * </li>
       * <li>
       * <p>composition_ratio : 構成比</p>
       * </li>
       * <h2 id="_3">注意点</h2>
       * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li> <li>配賦仕訳の絞り込み（cost_allocation）は法人向けのベーシックプラン以上で利用可能です。</li> </ul>
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_pl?company_id=1&amp;fiscal_year=2017&amp;breakdown_display_type=partner</p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_pl&quot; :
       *     {
       *       &quot;company_id&quot; : 1,
       *       &quot;fiscal_year&quot; : 2017,
       *       &quot;breakdown_display_type&quot; : &quot;partner&quot;,
       *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
       *       &quot;balances&quot; : [{
       *         &quot;account_item_id&quot; : 1500,
       *         &quot;account_item_name&quot; : &quot;売上高&quot;,
       *         &quot;hierarchy_level&quot; : 2,
       *         &quot;parent_account_category_id&quot; : 100;
       *         &quot;parent_account_category_name&quot; : &quot;営業収益&quot;,
       *         &quot;opening_balance&quot; : 100000,
       *         &quot;debit_amount&quot; : 50000,
       *         &quot;credit_amount&quot; : 20000,
       *         &quot;closing_balance&quot; : 130000,
       *         &quot;composition_ratio&quot; : 0.25
       *         &quot;partners&quot; : [{
       *           &quot;id&quot; : 123,
       *           &quot;name&quot; : &quot;freee&quot;,
       *           &quot;long_name&quot; : &quot;freee株式会社&quot;,
       *           &quot;opening_balance&quot; : 100000,
       *           &quot;debit_amount&quot; : 50000,
       *           &quot;credit_amount&quot; : 20000,
       *           &quot;closing_balance&quot; : 130000,
       *           &quot;composition_ratio&quot; : 0.25
       *           },
       *         ...
       *         ]
       *       },
       *       ...
       *       ]
       *     }
       * }</code></pre>
       */
      get: (option: { query: Methods_a6uoin['get']['query'], config?: T | undefined }) =>
        fetch<Methods_a6uoin['get']['resBody'], BasicHeaders, Methods_a6uoin['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の損益計算書を取得する</p>
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
       * <p>opening_balance : 期首残高 </p>
       * </li>
       *
       * <li>
       * <p>debit_amount : 借方金額 </p>
       * </li>
       * <li>
       * <p>credit_amount:  貸方金額 </p>
       * </li>
       * <li>
       * <p>closing_balance : 期末残高 </p>
       * </li>
       * <li>
       * <p>composition_ratio : 構成比</p>
       * </li>
       * <h2 id="_3">注意点</h2>
       * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li> <li>配賦仕訳の絞り込み（cost_allocation）は法人向けのベーシックプラン以上で利用可能です。</li> </ul>
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_pl?company_id=1&amp;fiscal_year=2017&amp;breakdown_display_type=partner</p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_pl&quot; :
       *     {
       *       &quot;company_id&quot; : 1,
       *       &quot;fiscal_year&quot; : 2017,
       *       &quot;breakdown_display_type&quot; : &quot;partner&quot;,
       *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
       *       &quot;balances&quot; : [{
       *         &quot;account_item_id&quot; : 1500,
       *         &quot;account_item_name&quot; : &quot;売上高&quot;,
       *         &quot;hierarchy_level&quot; : 2,
       *         &quot;parent_account_category_id&quot; : 100;
       *         &quot;parent_account_category_name&quot; : &quot;営業収益&quot;,
       *         &quot;opening_balance&quot; : 100000,
       *         &quot;debit_amount&quot; : 50000,
       *         &quot;credit_amount&quot; : 20000,
       *         &quot;closing_balance&quot; : 130000,
       *         &quot;composition_ratio&quot; : 0.25
       *         &quot;partners&quot; : [{
       *           &quot;id&quot; : 123,
       *           &quot;name&quot; : &quot;freee&quot;,
       *           &quot;long_name&quot; : &quot;freee株式会社&quot;,
       *           &quot;opening_balance&quot; : 100000,
       *           &quot;debit_amount&quot; : 50000,
       *           &quot;credit_amount&quot; : 20000,
       *           &quot;closing_balance&quot; : 130000,
       *           &quot;composition_ratio&quot; : 0.25
       *           },
       *         ...
       *         ]
       *       },
       *       ...
       *       ]
       *     }
       * }</code></pre>
       */
      $get: (option: { query: Methods_a6uoin['get']['query'], config?: T | undefined }) =>
        fetch<Methods_a6uoin['get']['resBody'], BasicHeaders, Methods_a6uoin['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_a6uoin['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    trial_pl_sections: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の損益計算書(部門比較)を取得する</p>
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
       * <p>closing_balance : 期末残高 </p>
       * </li>
       * <h2 id="_3">注意点</h2>
       * <ul> <li>個人向けのプレミアムプラン、法人向けのビジネスプラン以上で利用可能なAPIです。対象外のプランでは401エラーを返却します。</li> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li> <li>配賦仕訳の絞り込み（cost_allocation）は法人向けのベーシックプラン以上で利用可能です。</li> </ul>
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_pl_three_years?company_id=1&amp;section_ids=1,2,3&amp;fiscal_year=2017</p></p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_pl_sections&quot; :
       *     {
       *       &quot;company_id&quot; : 1,
       *       &quot;section_ids&quot; : &quot;1,2,3&quot;,
       *       &quot;fiscal_year&quot; : 2017,
       *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
       *       &quot;balances&quot; : [{
       *         &quot;account_item_id&quot; : 1500,
       *         &quot;account_item_name&quot; : &quot;売上高&quot;,
       *         &quot;hierarchy_level&quot; : 2,
       *         &quot;parent_account_category_id&quot; : 100;
       *         &quot;parent_account_category_name&quot; : &quot;営業収益&quot;,
       *         &quot;closing_balance&quot; : 1000000,
       *         &quot;sections&quot; : [{
       *           &quot;id&quot;: 1
       *           &quot;name&quot;: &quot;営業部&quot;,
       *           &quot;closing_balance&quot; : 100000
       *         },
       *         {
       *           &quot;id&quot;: 2
       *           &quot;name&quot;: &quot;広報部&quot;,
       *           &quot;closing_balance&quot; : 200000
       *         },
       *         {
       *           &quot;id&quot;: 3
       *           &quot;name&quot;: &quot;人事部&quot;,
       *           &quot;closing_balance&quot; : 300000
       *         },
       *         ...
       *         ]
       *       },
       *       ...
       *       ]
       *     }
       * }</code></pre>
       */
      get: (option: { query: Methods_1aezkng['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1aezkng['get']['resBody'], BasicHeaders, Methods_1aezkng['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の損益計算書(部門比較)を取得する</p>
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
       * <p>closing_balance : 期末残高 </p>
       * </li>
       * <h2 id="_3">注意点</h2>
       * <ul> <li>個人向けのプレミアムプラン、法人向けのビジネスプラン以上で利用可能なAPIです。対象外のプランでは401エラーを返却します。</li> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li> <li>配賦仕訳の絞り込み（cost_allocation）は法人向けのベーシックプラン以上で利用可能です。</li> </ul>
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_pl_three_years?company_id=1&amp;section_ids=1,2,3&amp;fiscal_year=2017</p></p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_pl_sections&quot; :
       *     {
       *       &quot;company_id&quot; : 1,
       *       &quot;section_ids&quot; : &quot;1,2,3&quot;,
       *       &quot;fiscal_year&quot; : 2017,
       *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
       *       &quot;balances&quot; : [{
       *         &quot;account_item_id&quot; : 1500,
       *         &quot;account_item_name&quot; : &quot;売上高&quot;,
       *         &quot;hierarchy_level&quot; : 2,
       *         &quot;parent_account_category_id&quot; : 100;
       *         &quot;parent_account_category_name&quot; : &quot;営業収益&quot;,
       *         &quot;closing_balance&quot; : 1000000,
       *         &quot;sections&quot; : [{
       *           &quot;id&quot;: 1
       *           &quot;name&quot;: &quot;営業部&quot;,
       *           &quot;closing_balance&quot; : 100000
       *         },
       *         {
       *           &quot;id&quot;: 2
       *           &quot;name&quot;: &quot;広報部&quot;,
       *           &quot;closing_balance&quot; : 200000
       *         },
       *         {
       *           &quot;id&quot;: 3
       *           &quot;name&quot;: &quot;人事部&quot;,
       *           &quot;closing_balance&quot; : 300000
       *         },
       *         ...
       *         ]
       *       },
       *       ...
       *       ]
       *     }
       * }</code></pre>
       */
      $get: (option: { query: Methods_1aezkng['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1aezkng['get']['resBody'], BasicHeaders, Methods_1aezkng['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1aezkng['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    trial_pl_three_years: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の損益計算書(３期間比較)を取得する</p>
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
       * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li> <li>配賦仕訳の絞り込み（cost_allocation）は法人向けのベーシックプラン以上で利用可能です。</li> </ul>
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_pl_three_years?company_id=1&fiscal_year=2017</p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_pl_three_years&quot; :
       *     {
       *       &quot;company_id&quot; : 1,
       *       &quot;fiscal_year&quot; : 2017,
       *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
       *       &quot;balances&quot; : [{
       *         &quot;account_item_id&quot; : 1500,
       *         &quot;account_item_name&quot; : &quot;売上高&quot;,
       *         &quot;hierarchy_level&quot; : 2,
       *         &quot;parent_account_category_id&quot; : 100;
       *         &quot;parent_account_category_name&quot; : &quot;営業収益&quot;,
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
      get: (option: { query: Methods_n5e4lp['get']['query'], config?: T | undefined }) =>
        fetch<Methods_n5e4lp['get']['resBody'], BasicHeaders, Methods_n5e4lp['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の損益計算書(３期間比較)を取得する</p>
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
       * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li> <li>配賦仕訳の絞り込み（cost_allocation）は法人向けのベーシックプラン以上で利用可能です。</li> </ul>
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_pl_three_years?company_id=1&fiscal_year=2017</p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_pl_three_years&quot; :
       *     {
       *       &quot;company_id&quot; : 1,
       *       &quot;fiscal_year&quot; : 2017,
       *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
       *       &quot;balances&quot; : [{
       *         &quot;account_item_id&quot; : 1500,
       *         &quot;account_item_name&quot; : &quot;売上高&quot;,
       *         &quot;hierarchy_level&quot; : 2,
       *         &quot;parent_account_category_id&quot; : 100;
       *         &quot;parent_account_category_name&quot; : &quot;営業収益&quot;,
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
      $get: (option: { query: Methods_n5e4lp['get']['query'], config?: T | undefined }) =>
        fetch<Methods_n5e4lp['get']['resBody'], BasicHeaders, Methods_n5e4lp['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_n5e4lp['get']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    trial_pl_two_years: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の損益計算書(前年比較)を取得する</p>
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
       * <p>last_year_closing_balance:  前年度期末残高 </p>
       * </li>
       * <li>
       * <p>closing_balance : 期末残高 </p>
       * </li>
       * <li>
       * <p>year_on_year : 前年比</p>
       * </li>
       * <h2 id="_3">注意点</h2>
       * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li> <li>配賦仕訳の絞り込み（cost_allocation）は法人向けのベーシックプラン以上で利用可能です。</li> </ul>
       *
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_pl_two_years?company_id=1&amp;fiscal_year=2017</p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_pl_two_years&quot; :
       *     {
       *       &quot;company_id&quot; : 1,
       *       &quot;fiscal_year&quot; : 2017,
       *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
       *       &quot;balances&quot; : [{
       *         &quot;account_item_id&quot; : 1500,
       *         &quot;account_item_name&quot; : &quot;売上高&quot;,
       *         &quot;hierarchy_level&quot; : 2,
       *         &quot;parent_account_category_id&quot; : 100;
       *         &quot;parent_account_category_name&quot; : &quot;営業収益&quot;,
       *         &quot;last_year_closing_balance&quot; : 25000,
       *         &quot;closing_balance&quot; : 100000,
       *         &quot;year_on_year&quot; : 0.85
       *
       *       },
       *       ...
       *       ]
       *     }
       * }</code></pre>
       */
      get: (option: { query: Methods_10w8y9n['get']['query'], config?: T | undefined }) =>
        fetch<Methods_10w8y9n['get']['resBody'], BasicHeaders, Methods_10w8y9n['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の損益計算書(前年比較)を取得する</p>
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
       * <p>last_year_closing_balance:  前年度期末残高 </p>
       * </li>
       * <li>
       * <p>closing_balance : 期末残高 </p>
       * </li>
       * <li>
       * <p>year_on_year : 前年比</p>
       * </li>
       * <h2 id="_3">注意点</h2>
       * <ul> <li>会計年度が指定されない場合、現在の会計年度がデフォルトとなります。</li> <li>絞り込み条件の日付と、月または年度は同時に指定することはできません。</li> <li>up_to_dateがfalseの場合、残高の集計が完了していません。最新の集計結果を確認したい場合は、時間を空けて再度取得する必要があります。</li> <li>配賦仕訳の絞り込み（cost_allocation）は法人向けのベーシックプラン以上で利用可能です。</li> </ul>
       *
       * <h2 id="_4">レスポンスの例</h2>
       *
       * <blockquote>
       * <p>GET https://api.freee.co.jp/api/1/reports/trial_pl_two_years?company_id=1&amp;fiscal_year=2017</p>
       * </blockquote>
       *
       * <pre><code>{
       *   &quot;trial_pl_two_years&quot; :
       *     {
       *       &quot;company_id&quot; : 1,
       *       &quot;fiscal_year&quot; : 2017,
       *       &quot;created_at&quot; : &quot;2018-05-01 12:00:50&quot
       *       &quot;balances&quot; : [{
       *         &quot;account_item_id&quot; : 1500,
       *         &quot;account_item_name&quot; : &quot;売上高&quot;,
       *         &quot;hierarchy_level&quot; : 2,
       *         &quot;parent_account_category_id&quot; : 100;
       *         &quot;parent_account_category_name&quot; : &quot;営業収益&quot;,
       *         &quot;last_year_closing_balance&quot; : 25000,
       *         &quot;closing_balance&quot; : 100000,
       *         &quot;year_on_year&quot; : 0.85
       *
       *       },
       *       ...
       *       ]
       *     }
       * }</code></pre>
       */
      $get: (option: { query: Methods_10w8y9n['get']['query'], config?: T | undefined }) =>
        fetch<Methods_10w8y9n['get']['resBody'], BasicHeaders, Methods_10w8y9n['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_10w8y9n['get']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
