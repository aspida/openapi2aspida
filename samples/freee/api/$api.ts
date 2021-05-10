/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './1/account_items'
// prettier-ignore
import { Methods as Methods1 } from './1/account_items/_id@number'
// prettier-ignore
import { Methods as Methods2 } from './1/banks'
// prettier-ignore
import { Methods as Methods3 } from './1/banks/_id@number'
// prettier-ignore
import { Methods as Methods4 } from './1/companies'
// prettier-ignore
import { Methods as Methods5 } from './1/companies/_id@number'
// prettier-ignore
import { Methods as Methods6 } from './1/deals'
// prettier-ignore
import { Methods as Methods7 } from './1/deals/_id@number'
// prettier-ignore
import { Methods as Methods8 } from './1/deals/_id@number/payments'
// prettier-ignore
import { Methods as Methods9 } from './1/deals/_id@number/payments/_payment_id@number'
// prettier-ignore
import { Methods as Methods10 } from './1/deals/_id@number/renews'
// prettier-ignore
import { Methods as Methods11 } from './1/deals/_id@number/renews/_renew_id@number'
// prettier-ignore
import { Methods as Methods12 } from './1/expense_application_line_templates'
// prettier-ignore
import { Methods as Methods13 } from './1/expense_application_line_templates/_id@number'
// prettier-ignore
import { Methods as Methods14 } from './1/expense_applications'
// prettier-ignore
import { Methods as Methods15 } from './1/expense_applications/_id@number'
// prettier-ignore
import { Methods as Methods16 } from './1/forms/selectables'
// prettier-ignore
import { Methods as Methods17 } from './1/invoices'
// prettier-ignore
import { Methods as Methods18 } from './1/invoices/_id@number'
// prettier-ignore
import { Methods as Methods19 } from './1/items'
// prettier-ignore
import { Methods as Methods20 } from './1/items/_id@number'
// prettier-ignore
import { Methods as Methods21 } from './1/journals'
// prettier-ignore
import { Methods as Methods22 } from './1/journals/reports/_id@number/download'
// prettier-ignore
import { Methods as Methods23 } from './1/journals/reports/_id@number/status'
// prettier-ignore
import { Methods as Methods24 } from './1/manual_journals'
// prettier-ignore
import { Methods as Methods25 } from './1/manual_journals/_id@number'
// prettier-ignore
import { Methods as Methods26 } from './1/partners'
// prettier-ignore
import { Methods as Methods27 } from './1/partners/_id@number'
// prettier-ignore
import { Methods as Methods28 } from './1/partners/code/_code@string'
// prettier-ignore
import { Methods as Methods29 } from './1/quotations'
// prettier-ignore
import { Methods as Methods30 } from './1/quotations/_id@number'
// prettier-ignore
import { Methods as Methods31 } from './1/receipts'
// prettier-ignore
import { Methods as Methods32 } from './1/receipts/_id@number'
// prettier-ignore
import { Methods as Methods33 } from './1/reports/trial_bs'
// prettier-ignore
import { Methods as Methods34 } from './1/reports/trial_bs_three_years'
// prettier-ignore
import { Methods as Methods35 } from './1/reports/trial_bs_two_years'
// prettier-ignore
import { Methods as Methods36 } from './1/reports/trial_pl'
// prettier-ignore
import { Methods as Methods37 } from './1/reports/trial_pl_sections'
// prettier-ignore
import { Methods as Methods38 } from './1/reports/trial_pl_three_years'
// prettier-ignore
import { Methods as Methods39 } from './1/reports/trial_pl_two_years'
// prettier-ignore
import { Methods as Methods40 } from './1/sections'
// prettier-ignore
import { Methods as Methods41 } from './1/sections/_id@number'
// prettier-ignore
import { Methods as Methods42 } from './1/segments/_segment_id@number/tags'
// prettier-ignore
import { Methods as Methods43 } from './1/segments/_segment_id@number/tags/_id@number'
// prettier-ignore
import { Methods as Methods44 } from './1/tags'
// prettier-ignore
import { Methods as Methods45 } from './1/tags/_id@number'
// prettier-ignore
import { Methods as Methods46 } from './1/taxes/codes'
// prettier-ignore
import { Methods as Methods47 } from './1/taxes/codes/_code@number'
// prettier-ignore
import { Methods as Methods48 } from './1/taxes/companies/_company_id@number'
// prettier-ignore
import { Methods as Methods49 } from './1/transfers'
// prettier-ignore
import { Methods as Methods50 } from './1/transfers/_id@number'
// prettier-ignore
import { Methods as Methods51 } from './1/users'
// prettier-ignore
import { Methods as Methods52 } from './1/users/capabilities'
// prettier-ignore
import { Methods as Methods53 } from './1/users/me'
// prettier-ignore
import { Methods as Methods54 } from './1/wallet_txns'
// prettier-ignore
import { Methods as Methods55 } from './1/wallet_txns/_id@number'
// prettier-ignore
import { Methods as Methods56 } from './1/walletables'
// prettier-ignore
import { Methods as Methods57 } from './1/walletables/_type/_id@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/account_items'
  const PATH1 = '/api/1/banks'
  const PATH2 = '/api/1/companies'
  const PATH3 = '/api/1/deals'
  const PATH4 = '/payments'
  const PATH5 = '/renews'
  const PATH6 = '/api/1/expense_application_line_templates'
  const PATH7 = '/api/1/expense_applications'
  const PATH8 = '/api/1/forms/selectables'
  const PATH9 = '/api/1/invoices'
  const PATH10 = '/api/1/items'
  const PATH11 = '/api/1/journals'
  const PATH12 = '/api/1/journals/reports'
  const PATH13 = '/download'
  const PATH14 = '/status'
  const PATH15 = '/api/1/manual_journals'
  const PATH16 = '/api/1/partners'
  const PATH17 = '/api/1/partners/code'
  const PATH18 = '/api/1/quotations'
  const PATH19 = '/api/1/receipts'
  const PATH20 = '/api/1/reports/trial_bs'
  const PATH21 = '/api/1/reports/trial_bs_three_years'
  const PATH22 = '/api/1/reports/trial_bs_two_years'
  const PATH23 = '/api/1/reports/trial_pl'
  const PATH24 = '/api/1/reports/trial_pl_sections'
  const PATH25 = '/api/1/reports/trial_pl_three_years'
  const PATH26 = '/api/1/reports/trial_pl_two_years'
  const PATH27 = '/api/1/sections'
  const PATH28 = '/api/1/segments'
  const PATH29 = '/tags'
  const PATH30 = '/api/1/tags'
  const PATH31 = '/api/1/taxes/codes'
  const PATH32 = '/api/1/taxes/companies'
  const PATH33 = '/api/1/transfers'
  const PATH34 = '/api/1/users'
  const PATH35 = '/api/1/users/capabilities'
  const PATH36 = '/api/1/users/me'
  const PATH37 = '/api/1/wallet_txns'
  const PATH38 = '/api/1/walletables'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    $1: {
      account_items: {
        _id: (val2: number) => {
          const prefix2 = `${PATH0}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した勘定科目の詳細を取得する</p>
             */
            get: (option: { query: Methods1['get']['query'], config?: T }) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した勘定科目の詳細を取得する</p>
             */
            $get: (option: { query: Methods1['get']['query'], config?: T }) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>勘定科目を更新する</p>
             * @param option.body - 勘定科目の更新
             */
            put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
              fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>勘定科目を更新する</p>
             * @param option.body - 勘定科目の更新
             */
            $put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
              fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した勘定科目を削除する</p>
             * <h2 id="">注意点</h2>
             * <ul>
             * <li>削除できる勘定科目は、追加で作成したカスタム勘定項目のみです。</li>
             * <li>デフォルトで存在する勘定科目や口座の勘定科目は削除できません。</li></ul>
             */
            delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した勘定科目を削除する</p>
             * <h2 id="">注意点</h2>
             * <ul>
             * <li>削除できる勘定科目は、追加で作成したカスタム勘定項目のみです。</li>
             * <li>デフォルトで存在する勘定科目や口座の勘定科目は削除できません。</li></ul>
             */
            $delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods1['get']['query'] } | { method: 'delete'; query: Methods1['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の勘定科目一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>default_tax_id : デフォルト設定がされている税区分ID</li>
         *
         * <li>default_tax_code : リクエストした日時を基準とした税区分コード</li>
         * </ul>
         */
        get: (option: { query: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の勘定科目一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>default_tax_id : デフォルト設定がされている税区分ID</li>
         *
         * <li>default_tax_code : リクエストした日時を基準とした税区分コード</li>
         * </ul>
         */
        $get: (option: { query: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の勘定科目を作成する</p>
         * @param option.body - 勘定科目の作成
         */
        post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
          fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の勘定科目を作成する</p>
         * @param option.body - 勘定科目の作成
         */
        $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
          fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      banks: {
        _id: (val2: number) => {
          const prefix2 = `${PATH1}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>連携しているサービスを取得する</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>type
             * <ul>
             * <li>bank_account : 銀行口座</li>
             *
             * <li>credit_card : クレジットカード</li>
             *
             * <li>wallet : その他の決済口座</li>
             * </ul>
             * </li>
             * </ul>
             */
            get: (option?: { config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>連携しているサービスを取得する</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>type
             * <ul>
             * <li>bank_account : 銀行口座</li>
             *
             * <li>credit_card : クレジットカード</li>
             *
             * <li>wallet : その他の決済口座</li>
             * </ul>
             * </li>
             * </ul>
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>連携しているサービス一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>type
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         */
        get: (option: { query: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>連携しているサービス一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>type
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         */
        $get: (option: { query: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      companies: {
        _id: (val2: number) => {
          const prefix2 = `${PATH2}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ユーザが所属する事業所の詳細を取得する</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>role
             * <ul>
             * <li>admin : 管理者</li>
             *
             * <li>simple_accounting : 一般</li>
             *
             * <li>self_only : 取引登録のみ</li>
             *
             * <li>read_only : 閲覧のみ</li>
             * </ul>
             * </li>
             * </ul>
             *
             * <h2 id="_3">
             */
            get: (option: { query: Methods5['get']['query'], config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ユーザが所属する事業所の詳細を取得する</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>role
             * <ul>
             * <li>admin : 管理者</li>
             *
             * <li>simple_accounting : 一般</li>
             *
             * <li>self_only : 取引登録のみ</li>
             *
             * <li>read_only : 閲覧のみ</li>
             * </ul>
             * </li>
             * </ul>
             *
             * <h2 id="_3">
             */
            $get: (option: { query: Methods5['get']['query'], config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ユーザが所属する事業所の情報を更新する</p>
             *
             * <p>※同時に複数のリクエストを受け付けない</p>
             */
            put: (option?: { body?: Methods5['put']['reqBody'], config?: T }) =>
              fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ユーザが所属する事業所の情報を更新する</p>
             *
             * <p>※同時に複数のリクエストを受け付けない</p>
             */
            $put: (option?: { body?: Methods5['put']['reqBody'], config?: T }) =>
              fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザが所属する事業所の一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>role
         * <ul>
         * <li>admin : 管理者</li>
         *
         * <li>simple_accounting : 一般</li>
         *
         * <li>self_only : 取引登録のみ</li>
         *
         * <li>read_only : 閲覧のみ</li>
         * </ul>
         * </li>
         * </ul>
         */
        get: (option?: { config?: T }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザが所属する事業所の一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>role
         * <ul>
         * <li>admin : 管理者</li>
         *
         * <li>simple_accounting : 一般</li>
         *
         * <li>self_only : 取引登録のみ</li>
         *
         * <li>read_only : 閲覧のみ</li>
         * </ul>
         * </li>
         * </ul>
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`
      },
      deals: {
        _id: (val2: number) => {
          const prefix2 = `${PATH3}/${val2}`

          return {
            payments: {
              _payment_id: (val4: number) => {
                const prefix4 = `${prefix2}${PATH4}/${val4}`

                return {
                  /**
                   * <h2 id="">概要</h2>
                   * <p>指定した事業所の取引（収入／支出）の支払行を更新する</p>
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
                   * </ul>
                   * @param option.body - 取引（収入／支出）の支払行更新
                   */
                  put: (option: { body: Methods9['put']['reqBody'], config?: T }) =>
                    fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, prefix4, PUT, option, 'URLSearchParams').json(),
                  /**
                   * <h2 id="">概要</h2>
                   * <p>指定した事業所の取引（収入／支出）の支払行を更新する</p>
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
                   * </ul>
                   * @param option.body - 取引（収入／支出）の支払行更新
                   */
                  $put: (option: { body: Methods9['put']['reqBody'], config?: T }) =>
                    fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, prefix4, PUT, option, 'URLSearchParams').json().then(r => r.body),
                  /**
                   * <h2 id="">概要</h2>
                   * <p>指定した事業所の取引（収入／支出）の支払行を削除する</p>
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
                   * </ul>
                   */
                  delete: (option: { query: Methods9['delete']['query'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                  /**
                   * <h2 id="">概要</h2>
                   * <p>指定した事業所の取引（収入／支出）の支払行を削除する</p>
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
                   * </ul>
                   */
                  $delete: (option: { query: Methods9['delete']['query'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                  $path: (option?: { method: 'delete'; query: Methods9['delete']['query'] }) =>
                    `${prefix}${prefix4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              /**
               * <h2 id="">概要</h2>
               * <p>指定した事業所の取引（収入／支出）の支払行を作成する</p>
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
               * <li> <p>details : 取引の明細行</p> </li>
               * <li> <p>renews : 取引の+更新行</p> </li>
               * <li> <p>payments : 取引の支払行</p> </li>
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
               * @param option.body - 取引（収入／支出）の支払行作成
               */
              post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
                fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option, 'URLSearchParams').json(),
              /**
               * <h2 id="">概要</h2>
               * <p>指定した事業所の取引（収入／支出）の支払行を作成する</p>
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
               * <li> <p>details : 取引の明細行</p> </li>
               * <li> <p>renews : 取引の+更新行</p> </li>
               * <li> <p>payments : 取引の支払行</p> </li>
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
               * @param option.body - 取引（収入／支出）の支払行作成
               */
              $post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
                fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option, 'URLSearchParams').json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH4}`
            },
            renews: {
              _renew_id: (val4: number) => {
                const prefix4 = `${prefix2}${PATH5}/${val4}`

                return {
                  /**
                   * <h2 id="">概要</h2>
                   * <p>指定した事業所の取引（収入／支出）の+更新を更新する</p>
                   * <h2 id="_2">定義</h2>
                   * <ul> <li> <p>issue_date : 発生日</p> </li>
                   * <li> <p>due_date : 支払期日</p> </li>
                   * <li> <p>amount : 金額</p> </li>
                   * <li> <p>due_amount : 支払残額</p> </li>
                   * <li> <p>type</p>
                   * <ul> <li>income : 収入</li>
                   * <li>expense : 支出</li> </ul> </li>
                   * <li> <p>details : 取引の明細行</p> </li>
                   * <li> <p>accruals : 取引の債権債務行</p> </li>
                   * <li> <p>renews : 取引の+更新行</p> </li>
                   * <li> <p>payments : 取引の支払行</p> </li>
                   * <li> <p>from_walletable_type</p>
                   * <ul> <li>bank_account : 銀行口座</li>
                   * <li>credit_card : クレジットカード</li>
                   * <li>wallet : 現金</li>
                   * <li>private_account_item : プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）</li>
                   * </ul> </li> </ul>
                   * <h2 id="_3">注意点</h2>
                   * <ul> <li>本APIでは+更新の更新のみ可能です。取引や支払行に対する更新はできません。</li> <li>renew_idにはrenewsのid(+更新ID)を指定してください。renewsのdetailsのid(+更新の明細行ID)を指定できません。</li> <li>月締めされている仕訳に紐づく＋更新行の編集・削除はできません。</li> <li>承認済み仕訳に紐づく＋更新行の編集・削除は管理者権限のユーザーのみ可能です。</li>
                   * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
                   * @param option.body - +更新の更新情報
                   */
                  put: (option: { body: Methods11['put']['reqBody'], config?: T }) =>
                    fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, prefix4, PUT, option, 'URLSearchParams').json(),
                  /**
                   * <h2 id="">概要</h2>
                   * <p>指定した事業所の取引（収入／支出）の+更新を更新する</p>
                   * <h2 id="_2">定義</h2>
                   * <ul> <li> <p>issue_date : 発生日</p> </li>
                   * <li> <p>due_date : 支払期日</p> </li>
                   * <li> <p>amount : 金額</p> </li>
                   * <li> <p>due_amount : 支払残額</p> </li>
                   * <li> <p>type</p>
                   * <ul> <li>income : 収入</li>
                   * <li>expense : 支出</li> </ul> </li>
                   * <li> <p>details : 取引の明細行</p> </li>
                   * <li> <p>accruals : 取引の債権債務行</p> </li>
                   * <li> <p>renews : 取引の+更新行</p> </li>
                   * <li> <p>payments : 取引の支払行</p> </li>
                   * <li> <p>from_walletable_type</p>
                   * <ul> <li>bank_account : 銀行口座</li>
                   * <li>credit_card : クレジットカード</li>
                   * <li>wallet : 現金</li>
                   * <li>private_account_item : プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）</li>
                   * </ul> </li> </ul>
                   * <h2 id="_3">注意点</h2>
                   * <ul> <li>本APIでは+更新の更新のみ可能です。取引や支払行に対する更新はできません。</li> <li>renew_idにはrenewsのid(+更新ID)を指定してください。renewsのdetailsのid(+更新の明細行ID)を指定できません。</li> <li>月締めされている仕訳に紐づく＋更新行の編集・削除はできません。</li> <li>承認済み仕訳に紐づく＋更新行の編集・削除は管理者権限のユーザーのみ可能です。</li>
                   * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
                   * @param option.body - +更新の更新情報
                   */
                  $put: (option: { body: Methods11['put']['reqBody'], config?: T }) =>
                    fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, prefix4, PUT, option, 'URLSearchParams').json().then(r => r.body),
                  /**
                   * <h2 id="">概要</h2>
                   * <p>指定した事業所の取引（収入／支出）の+更新を削除する</p>
                   * <h2 id="_3">注意点</h2>
                   * <ul> <li>本APIでは+更新の削除のみ可能です。取引や支払行に対する削除はできません。</li> <li>renew_idにはrenewsのid(+更新ID)を指定してください。renewsのdetailsのid(+更新の明細行ID)を指定できません。</li>
                   * <li>月締めされている仕訳に紐づく＋更新行の編集・削除はできません。</li> <li>承認済み仕訳に紐づく＋更新行の編集・削除は管理者権限のユーザーのみ可能です。</li>
                   * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
                   */
                  delete: (option: { query: Methods11['delete']['query'], config?: T }) =>
                    fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, prefix4, DELETE, option).json(),
                  /**
                   * <h2 id="">概要</h2>
                   * <p>指定した事業所の取引（収入／支出）の+更新を削除する</p>
                   * <h2 id="_3">注意点</h2>
                   * <ul> <li>本APIでは+更新の削除のみ可能です。取引や支払行に対する削除はできません。</li> <li>renew_idにはrenewsのid(+更新ID)を指定してください。renewsのdetailsのid(+更新の明細行ID)を指定できません。</li>
                   * <li>月締めされている仕訳に紐づく＋更新行の編集・削除はできません。</li> <li>承認済み仕訳に紐づく＋更新行の編集・削除は管理者権限のユーザーのみ可能です。</li>
                   * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
                   */
                  $delete: (option: { query: Methods11['delete']['query'], config?: T }) =>
                    fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, prefix4, DELETE, option).json().then(r => r.body),
                  $path: (option?: { method: 'delete'; query: Methods11['delete']['query'] }) =>
                    `${prefix}${prefix4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              /**
               * <h2 id="">概要</h2>
               * <p>指定した事業所の取引（収入／支出）の+更新を作成する</p>
               * <h2 id="_2">定義</h2>
               * <ul> <li> <p>issue_date : 発生日</p> </li>
               * <li> <p>due_date : 支払期日</p> </li>
               * <li> <p>amount : 金額</p> </li>
               * <li> <p>due_amount : 支払残額</p> </li>
               * <li> <p>type</p>
               * <ul> <li>income : 収入</li>
               * <li>expense : 支出</li> </ul> </li>
               * <li> <p>details : 取引の明細行</p> </li>
               * <li> <p>accruals : 取引の債権債務行</p> </li>
               * <li> <p>renews : 取引の+更新行</p> </li>
               * <li> <p>payments : 取引の支払行</p> </li>
               * <li> <p>from_walletable_type</p>
               * <ul> <li>bank_account : 銀行口座</li>
               * <li>credit_card : クレジットカード</li>
               * <li>wallet : 現金</li>
               * <li>private_account_item : プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）</li>
               * </ul> </li> </ul>
               * <h2 id="_3">注意点</h2>
               * <ul> <li>本APIではdetails(取引の明細行)、accruals(債権債務行)、renewsのdetails(+更新の明細行)のみ操作可能です。</li>
               * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
               * @param option.body - 取引（収入／支出）に対する+更新の情報
               */
              post: (option: { body: Methods10['post']['reqBody'], config?: T }) =>
                fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option, 'URLSearchParams').json(),
              /**
               * <h2 id="">概要</h2>
               * <p>指定した事業所の取引（収入／支出）の+更新を作成する</p>
               * <h2 id="_2">定義</h2>
               * <ul> <li> <p>issue_date : 発生日</p> </li>
               * <li> <p>due_date : 支払期日</p> </li>
               * <li> <p>amount : 金額</p> </li>
               * <li> <p>due_amount : 支払残額</p> </li>
               * <li> <p>type</p>
               * <ul> <li>income : 収入</li>
               * <li>expense : 支出</li> </ul> </li>
               * <li> <p>details : 取引の明細行</p> </li>
               * <li> <p>accruals : 取引の債権債務行</p> </li>
               * <li> <p>renews : 取引の+更新行</p> </li>
               * <li> <p>payments : 取引の支払行</p> </li>
               * <li> <p>from_walletable_type</p>
               * <ul> <li>bank_account : 銀行口座</li>
               * <li>credit_card : クレジットカード</li>
               * <li>wallet : 現金</li>
               * <li>private_account_item : プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）</li>
               * </ul> </li> </ul>
               * <h2 id="_3">注意点</h2>
               * <ul> <li>本APIではdetails(取引の明細行)、accruals(債権債務行)、renewsのdetails(+更新の明細行)のみ操作可能です。</li>
               * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
               * @param option.body - 取引（収入／支出）に対する+更新の情報
               */
              $post: (option: { body: Methods10['post']['reqBody'], config?: T }) =>
                fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option, 'URLSearchParams').json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH5}`
            },
            /**
             * <h2 id="">概要</h2>
             * <p>指定した事業所の取引（収入／支出）を取得する</p>
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
             * </ul>
             */
            get: (option: { query: Methods7['get']['query'], config?: T }) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             * <p>指定した事業所の取引（収入／支出）を取得する</p>
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
             * </ul>
             */
            $get: (option: { query: Methods7['get']['query'], config?: T }) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             * <p>指定した事業所の取引（収入／支出）を更新する</p>
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
             * <p>receipt_ids : 証憑ファイルID</p>
             * </li>
             * </ul>
             * <h2 id="_3">注意点</h2>
             * <ul>
             * <li>本APIでは支払行(payments)の操作ができません。支払行の作成・更新・削除APIをご利用ください。</li>
             * <li>本APIでは+更新行(renews)の操作ができません。+更新行の作成・更新・削除APIをご利用ください。</li>
             * <li>本APIでは収入／支出の切替えができません。既存の取引を削除後、再度作成してください。</li>
             * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li>
             * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
             * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</ul>
             * @param option.body - 取引（収入／支出）の更新
             */
            put: (option?: { body?: Methods7['put']['reqBody'], config?: T }) =>
              fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             * <p>指定した事業所の取引（収入／支出）を更新する</p>
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
             * <p>receipt_ids : 証憑ファイルID</p>
             * </li>
             * </ul>
             * <h2 id="_3">注意点</h2>
             * <ul>
             * <li>本APIでは支払行(payments)の操作ができません。支払行の作成・更新・削除APIをご利用ください。</li>
             * <li>本APIでは+更新行(renews)の操作ができません。+更新行の作成・更新・削除APIをご利用ください。</li>
             * <li>本APIでは収入／支出の切替えができません。既存の取引を削除後、再度作成してください。</li>
             * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li>
             * <li>セグメントタグ情報は法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
             * <li>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。またpartner_codeとpartner_idは同時に指定することはできません。</ul>
             * @param option.body - 取引（収入／支出）の更新
             */
            $put: (option?: { body?: Methods7['put']['reqBody'], config?: T }) =>
              fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            delete: (option: { query: Methods7['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option: { query: Methods7['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods7['get']['query'] } | { method: 'delete'; query: Methods7['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
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
        get: (option: { query: Methods6['get']['query'], config?: T }) =>
          fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json(),
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
        $get: (option: { query: Methods6['get']['query'], config?: T }) =>
          fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
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
         * @param option.body - 取引（収入／支出）の作成
         */
        post: (option?: { body?: Methods6['post']['reqBody'], config?: T }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH3, POST, option, 'URLSearchParams').json(),
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
         * @param option.body - 取引（収入／支出）の作成
         */
        $post: (option?: { body?: Methods6['post']['reqBody'], config?: T }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH3, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods6['get']['query'] }) =>
          `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      expense_application_line_templates: {
        _id: (val2: number) => {
          const prefix2 = `${PATH6}/${val2}`

          return {
            get: (option: { query: Methods13['get']['query'], config?: T }) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option: { query: Methods13['get']['query'], config?: T }) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * @param option.body - 経費科目の更新
             */
            put: (option: { body: Methods13['put']['reqBody'], config?: T }) =>
              fetch<Methods13['put']['resBody'], BasicHeaders, Methods13['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * @param option.body - 経費科目の更新
             */
            $put: (option: { body: Methods13['put']['reqBody'], config?: T }) =>
              fetch<Methods13['put']['resBody'], BasicHeaders, Methods13['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            delete: (option: { query: Methods13['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods13['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option: { query: Methods13['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods13['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods13['get']['query'] } | { method: 'delete'; query: Methods13['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の経費科目一覧を取得する</p>
         */
        get: (option: { query: Methods12['get']['query'], config?: T }) =>
          fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH6, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の経費科目一覧を取得する</p>
         */
        $get: (option: { query: Methods12['get']['query'], config?: T }) =>
          fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
        /**
         * @param option.body - 経費科目の作成
         */
        post: (option: { body: Methods12['post']['reqBody'], config?: T }) =>
          fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, PATH6, POST, option, 'URLSearchParams').json(),
        /**
         * @param option.body - 経費科目の作成
         */
        $post: (option: { body: Methods12['post']['reqBody'], config?: T }) =>
          fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, PATH6, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods12['get']['query'] }) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      expense_applications: {
        _id: (val2: number) => {
          const prefix2 = `${PATH7}/${val2}`

          return {
            get: (option: { query: Methods15['get']['query'], config?: T }) =>
              fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option: { query: Methods15['get']['query'], config?: T }) =>
              fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の経費申請を更新する</p>
             *
             * <h2 id="_2">注意点</h2>
             * <ul>
             *   <li>本APIでは、経費申請の下書きを更新することができます。申請作業はWebから行ってください。</li>
             *   <li>現在、申請経路はWeb上からのみ入力できます。Web上での申請時に指定してください。</li>
             *   <li>申請時には、申請タイトル(title)に加え、申請日(issue_date)、項目行については金額(amount)、日付(transaction_date)、内容(description)が必須項目となります。申請時の業務効率化のため、API入力をお勧めします。</li>
             *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
             *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
             * </ul>
             * @param option.body - 経費申請の更新
             */
            put: (option?: { body?: Methods15['put']['reqBody'], config?: T }) =>
              fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の経費申請を更新する</p>
             *
             * <h2 id="_2">注意点</h2>
             * <ul>
             *   <li>本APIでは、経費申請の下書きを更新することができます。申請作業はWebから行ってください。</li>
             *   <li>現在、申請経路はWeb上からのみ入力できます。Web上での申請時に指定してください。</li>
             *   <li>申請時には、申請タイトル(title)に加え、申請日(issue_date)、項目行については金額(amount)、日付(transaction_date)、内容(description)が必須項目となります。申請時の業務効率化のため、API入力をお勧めします。</li>
             *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
             *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
             * </ul>
             * @param option.body - 経費申請の更新
             */
            $put: (option?: { body?: Methods15['put']['reqBody'], config?: T }) =>
              fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の経費申請を削除する</p>
             *
             * <h2 id="_2">注意点</h2>
             * <ul>
             *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
             *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
             * </ul>
             */
            delete: (option: { query: Methods15['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods15['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の経費申請を削除する</p>
             *
             * <h2 id="_2">注意点</h2>
             * <ul>
             *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
             *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
             * </ul>
             */
            $delete: (option: { query: Methods15['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods15['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods15['get']['query'] } | { method: 'delete'; query: Methods15['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        get: (option: { query: Methods14['get']['query'], config?: T }) =>
          fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH7, GET, option).json(),
        $get: (option: { query: Methods14['get']['query'], config?: T }) =>
          fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
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
         * @param option.body - 経費申請の作成
         */
        post: (option?: { body?: Methods14['post']['reqBody'], config?: T }) =>
          fetch<Methods14['post']['resBody'], BasicHeaders, Methods14['post']['status']>(prefix, PATH7, POST, option, 'URLSearchParams').json(),
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
         * @param option.body - 経費申請の作成
         */
        $post: (option?: { body?: Methods14['post']['reqBody'], config?: T }) =>
          fetch<Methods14['post']['resBody'], BasicHeaders, Methods14['post']['status']>(prefix, PATH7, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods14['get']['query'] }) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      forms: {
        selectables: {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所のフォーム用選択項目情報を取得する</p>
           */
          get: (option: { query: Methods16['get']['query'], config?: T }) =>
            fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH8, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所のフォーム用選択項目情報を取得する</p>
           */
          $get: (option: { query: Methods16['get']['query'], config?: T }) =>
            fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods16['get']['query'] }) =>
            `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      invoices: {
        _id: (val2: number) => {
          const prefix2 = `${PATH9}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の請求書詳細を取得する</p>
             */
            get: (option: { query: Methods18['get']['query'], config?: T }) =>
              fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の請求書詳細を取得する</p>
             */
            $get: (option: { query: Methods18['get']['query'], config?: T }) =>
              fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の請求書を更新する</p>
             *
             * <h2 id="_1">注意点</h2>
             * <ul>
             * <li> <p>入金済みの請求書に対する金額関連の変更はできません。</p> </li>
             * <li> <p>請求書ステータスは確定(issue)のみ指定可能です。請求書ステータスを確定する時のみ指定してください。</p> </li>
             * <li> <p>請求書WFを利用している場合、承認済み請求書は承認権限を持たないユーザーでは更新できません。</p> </li>
             * <li> <p>更新後の請求書ステータス(invoice_status)が下書き以外の場合、請求内容の合計金額が0円以上になる必要があります。</p> </li>
             * <li> <p>partner_code, partner_idを両方同時に指定することはできません。</p> </li>
             * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
             * </ul>
             * @param option.body - 請求書の更新
             */
            put: (option?: { body?: Methods18['put']['reqBody'], config?: T }) =>
              fetch<Methods18['put']['resBody'], BasicHeaders, Methods18['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の請求書を更新する</p>
             *
             * <h2 id="_1">注意点</h2>
             * <ul>
             * <li> <p>入金済みの請求書に対する金額関連の変更はできません。</p> </li>
             * <li> <p>請求書ステータスは確定(issue)のみ指定可能です。請求書ステータスを確定する時のみ指定してください。</p> </li>
             * <li> <p>請求書WFを利用している場合、承認済み請求書は承認権限を持たないユーザーでは更新できません。</p> </li>
             * <li> <p>更新後の請求書ステータス(invoice_status)が下書き以外の場合、請求内容の合計金額が0円以上になる必要があります。</p> </li>
             * <li> <p>partner_code, partner_idを両方同時に指定することはできません。</p> </li>
             * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
             * </ul>
             * @param option.body - 請求書の更新
             */
            $put: (option?: { body?: Methods18['put']['reqBody'], config?: T }) =>
              fetch<Methods18['put']['resBody'], BasicHeaders, Methods18['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の請求書を削除する</p>
             */
            delete: (option: { query: Methods18['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods18['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の請求書を削除する</p>
             */
            $delete: (option: { query: Methods18['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods18['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods18['get']['query'] } | { method: 'delete'; query: Methods18['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の請求書一覧を取得する</p>
         */
        get: (option: { query: Methods17['get']['query'], config?: T }) =>
          fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH9, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の請求書一覧を取得する</p>
         */
        $get: (option: { query: Methods17['get']['query'], config?: T }) =>
          fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の請求書を作成する</p>
         *
         * <h2 id="_1">注意点</h2>
         * <ul>
         * <li> <p>partner_code, partner_idはどちらかの指定が必須です。ただし両方同時に指定することはできません。</p> </li>
         * <li> <p>請求書ステータス(invoice_status)を発行(issue)で利用した場合、請求内容の合計金額が0円以上になる必要があります。</p> </li>
         * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
         * </ul>
         * @param option.body - 請求書の作成
         */
        post: (option?: { body?: Methods17['post']['reqBody'], config?: T }) =>
          fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, PATH9, POST, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の請求書を作成する</p>
         *
         * <h2 id="_1">注意点</h2>
         * <ul>
         * <li> <p>partner_code, partner_idはどちらかの指定が必須です。ただし両方同時に指定することはできません。</p> </li>
         * <li> <p>請求書ステータス(invoice_status)を発行(issue)で利用した場合、請求内容の合計金額が0円以上になる必要があります。</p> </li>
         * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
         * </ul>
         * @param option.body - 請求書の作成
         */
        $post: (option?: { body?: Methods17['post']['reqBody'], config?: T }) =>
          fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, PATH9, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods17['get']['query'] }) =>
          `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      items: {
        _id: (val2: number) => {
          const prefix2 = `${PATH10}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の品目を取得する</p>
             */
            get: (option: { query: Methods20['get']['query'], config?: T }) =>
              fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の品目を取得する</p>
             */
            $get: (option: { query: Methods20['get']['query'], config?: T }) =>
              fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の品目を更新する</p>
             * @param option.body - 品目の更新
             */
            put: (option?: { body?: Methods20['put']['reqBody'], config?: T }) =>
              fetch<Methods20['put']['resBody'], BasicHeaders, Methods20['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の品目を更新する</p>
             * @param option.body - 品目の更新
             */
            $put: (option?: { body?: Methods20['put']['reqBody'], config?: T }) =>
              fetch<Methods20['put']['resBody'], BasicHeaders, Methods20['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の品目を削除する</p>
             */
            delete: (option: { query: Methods20['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods20['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の品目を削除する</p>
             */
            $delete: (option: { query: Methods20['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods20['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods20['get']['query'] } | { method: 'delete'; query: Methods20['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の品目一覧を取得する</p>
         */
        get: (option: { query: Methods19['get']['query'], config?: T }) =>
          fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH10, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の品目一覧を取得する</p>
         */
        $get: (option: { query: Methods19['get']['query'], config?: T }) =>
          fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の品目を作成する</p>
         * @param option.body - 品目の作成
         */
        post: (option?: { body?: Methods19['post']['reqBody'], config?: T }) =>
          fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, PATH10, POST, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の品目を作成する</p>
         * @param option.body - 品目の作成
         */
        $post: (option?: { body?: Methods19['post']['reqBody'], config?: T }) =>
          fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, PATH10, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods19['get']['query'] }) =>
          `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      journals: {
        reports: {
          _id: (val3: number) => {
            const prefix3 = `${PATH12}/${val3}`

            return {
              download: {
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
                get: (option: { query: Methods22['get']['query'], config?: T }) =>
                  fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, `${prefix3}${PATH13}`, GET, option).blob(),
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
                $get: (option: { query: Methods22['get']['query'], config?: T }) =>
                  fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, `${prefix3}${PATH13}`, GET, option).blob().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods22['get']['query'] }) =>
                  `${prefix}${prefix3}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              status: {
                /**
                 * <h2 id="">概要</h2>
                 *
                 * <p>ダウンロードリクエストのステータスを確認する</p>
                 *
                 * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
                 *
                 * <h2 id="_2">定義</h2>
                 *
                 * <ul>
                 * <li>
                 * <p>status</p>
                 *
                 * <ul>
                 * <li>enqueued : 実行待ち</li>
                 *
                 * <li>working : 実行中</li>
                 *
                 * <li>uploaded : 準備完了</li>
                 * </ul>
                 * </li>
                 *
                 * <li>
                 * <p>id : 受け付けID</p>
                 * </li>
                 * </ul>
                 */
                get: (option: { query: Methods23['get']['query'], config?: T }) =>
                  fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, `${prefix3}${PATH14}`, GET, option).json(),
                /**
                 * <h2 id="">概要</h2>
                 *
                 * <p>ダウンロードリクエストのステータスを確認する</p>
                 *
                 * <p>＊このAPIは無料プランのアカウントではご利用になれません</p>
                 *
                 * <h2 id="_2">定義</h2>
                 *
                 * <ul>
                 * <li>
                 * <p>status</p>
                 *
                 * <ul>
                 * <li>enqueued : 実行待ち</li>
                 *
                 * <li>working : 実行中</li>
                 *
                 * <li>uploaded : 準備完了</li>
                 * </ul>
                 * </li>
                 *
                 * <li>
                 * <p>id : 受け付けID</p>
                 * </li>
                 * </ul>
                 */
                $get: (option: { query: Methods23['get']['query'], config?: T }) =>
                  fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, `${prefix3}${PATH14}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods23['get']['query'] }) =>
                  `${prefix}${prefix3}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            }
          }
        },
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
        get: (option: { query: Methods21['get']['query'], config?: T }) =>
          fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, PATH11, GET, option).json(),
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
        $get: (option: { query: Methods21['get']['query'], config?: T }) =>
          fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods21['get']['query'] }) =>
          `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      manual_journals: {
        _id: (val2: number) => {
          const prefix2 = `${PATH15}/${val2}`

          return {
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
            get: (option: { query: Methods25['get']['query'], config?: T }) =>
              fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, prefix2, GET, option).json(),
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
            $get: (option: { query: Methods25['get']['query'], config?: T }) =>
              fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
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
             * @param option.body - 振替伝票の更新
             */
            put: (option?: { body?: Methods25['put']['reqBody'], config?: T }) =>
              fetch<Methods25['put']['resBody'], BasicHeaders, Methods25['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
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
             * @param option.body - 振替伝票の更新
             */
            $put: (option?: { body?: Methods25['put']['reqBody'], config?: T }) =>
              fetch<Methods25['put']['resBody'], BasicHeaders, Methods25['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の振替伝票を削除する</p>
             */
            delete: (option: { query: Methods25['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods25['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の振替伝票を削除する</p>
             */
            $delete: (option: { query: Methods25['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods25['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods25['get']['query'] } | { method: 'delete'; query: Methods25['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
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
        get: (option: { query: Methods24['get']['query'], config?: T }) =>
          fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH15, GET, option).json(),
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
        $get: (option: { query: Methods24['get']['query'], config?: T }) =>
          fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
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
         * @param option.body - 振替伝票の作成
         */
        post: (option?: { body?: Methods24['post']['reqBody'], config?: T }) =>
          fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, PATH15, POST, option, 'URLSearchParams').json(),
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
         * @param option.body - 振替伝票の作成
         */
        $post: (option?: { body?: Methods24['post']['reqBody'], config?: T }) =>
          fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, PATH15, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods24['get']['query'] }) =>
          `${prefix}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      partners: {
        _id: (val2: number) => {
          const prefix2 = `${PATH16}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の取引先を取得する</p>
             * <ul>
             * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
             */
            get: (option: { query: Methods27['get']['query'], config?: T }) =>
              fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の取引先を取得する</p>
             * <ul>
             * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
             */
            $get: (option: { query: Methods27['get']['query'], config?: T }) =>
              fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した取引先の情報を更新する</p>
             * <ul>
             * <li>codeを指定、更新することはできません。</li>
             * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
             * @param option.body - 取引先の更新
             */
            put: (option: { body: Methods27['put']['reqBody'], config?: T }) =>
              fetch<Methods27['put']['resBody'], BasicHeaders, Methods27['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した取引先の情報を更新する</p>
             * <ul>
             * <li>codeを指定、更新することはできません。</li>
             * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
             * @param option.body - 取引先の更新
             */
            $put: (option: { body: Methods27['put']['reqBody'], config?: T }) =>
              fetch<Methods27['put']['resBody'], BasicHeaders, Methods27['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の取引先を削除する</p>
             */
            delete: (option: { query: Methods27['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods27['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の取引先を削除する</p>
             */
            $delete: (option: { query: Methods27['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods27['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods27['get']['query'] } | { method: 'delete'; query: Methods27['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        code: {
          _code: (val3: string) => {
            const prefix3 = `${PATH17}/${val3}`

            return {
              /**
               * <h2 id="">概要</h2>
               *
               * <p>取引先コードをキーに、指定した取引先の情報を更新する</p>
               * <ul>
               * <li>このAPIを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</li>
               * <li>コードを日本語に設定している場合は、URLエンコードしてURLに含めるようにしてください。</li>
               * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
               * @param option.body - 取引先の更新
               */
              put: (option: { body: Methods28['put']['reqBody'], config?: T }) =>
                fetch<Methods28['put']['resBody'], BasicHeaders, Methods28['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json(),
              /**
               * <h2 id="">概要</h2>
               *
               * <p>取引先コードをキーに、指定した取引先の情報を更新する</p>
               * <ul>
               * <li>このAPIを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</li>
               * <li>コードを日本語に設定している場合は、URLエンコードしてURLに含めるようにしてください。</li>
               * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
               * @param option.body - 取引先の更新
               */
              $put: (option: { body: Methods28['put']['reqBody'], config?: T }) =>
                fetch<Methods28['put']['resBody'], BasicHeaders, Methods28['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引先一覧を取得する</p>
         * <ul>
         * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
         */
        get: (option: { query: Methods26['get']['query'], config?: T }) =>
          fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH16, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引先一覧を取得する</p>
         * <ul>
         * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
         */
        $get: (option: { query: Methods26['get']['query'], config?: T }) =>
          fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引先を作成する</p>
         * <ul>
         * <li>codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</li>
         * <li>取引先コードの利用を有効にしている場合は、codeの指定は必須です。</li>
         * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
         * @param option.body - 取引先の作成
         */
        post: (option: { body: Methods26['post']['reqBody'], config?: T }) =>
          fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, PATH16, POST, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引先を作成する</p>
         * <ul>
         * <li>codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</li>
         * <li>取引先コードの利用を有効にしている場合は、codeの指定は必須です。</li>
         * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
         * @param option.body - 取引先の作成
         */
        $post: (option: { body: Methods26['post']['reqBody'], config?: T }) =>
          fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, PATH16, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods26['get']['query'] }) =>
          `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      quotations: {
        _id: (val2: number) => {
          const prefix2 = `${PATH18}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の見積書詳細を取得する</p>
             */
            get: (option: { query: Methods30['get']['query'], config?: T }) =>
              fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の見積書詳細を取得する</p>
             */
            $get: (option: { query: Methods30['get']['query'], config?: T }) =>
              fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の見積書を更新する</p>
             *
             * <h2 id="_1">注意点</h2>
             * <ul>
             * <li> <p>partner_code, partner_idを両方同時に指定することはできません。</p> </li>
             * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
             * </ul>
             * @param option.body - 見積書の更新
             */
            put: (option?: { body?: Methods30['put']['reqBody'], config?: T }) =>
              fetch<Methods30['put']['resBody'], BasicHeaders, Methods30['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の見積書を更新する</p>
             *
             * <h2 id="_1">注意点</h2>
             * <ul>
             * <li> <p>partner_code, partner_idを両方同時に指定することはできません。</p> </li>
             * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
             * </ul>
             * @param option.body - 見積書の更新
             */
            $put: (option?: { body?: Methods30['put']['reqBody'], config?: T }) =>
              fetch<Methods30['put']['resBody'], BasicHeaders, Methods30['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の見積書を削除する</p>
             */
            delete: (option: { query: Methods30['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods30['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の見積書を削除する</p>
             */
            $delete: (option: { query: Methods30['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods30['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods30['get']['query'] } | { method: 'delete'; query: Methods30['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の見積書一覧を取得する</p>
         */
        get: (option: { query: Methods29['get']['query'], config?: T }) =>
          fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, PATH18, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の見積書一覧を取得する</p>
         */
        $get: (option: { query: Methods29['get']['query'], config?: T }) =>
          fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の見積書を作成する</p>
         *
         * <h2 id="_1">注意点</h2>
         * <ul>
         * <li> <p>partner_code, partner_idはどちらかの指定が必須です。ただし両方同時に指定することはできません。</p> </li>
         * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
         * </ul>
         * @param option.body - 見積書の作成
         */
        post: (option?: { body?: Methods29['post']['reqBody'], config?: T }) =>
          fetch<Methods29['post']['resBody'], BasicHeaders, Methods29['post']['status']>(prefix, PATH18, POST, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の見積書を作成する</p>
         *
         * <h2 id="_1">注意点</h2>
         * <ul>
         * <li> <p>partner_code, partner_idはどちらかの指定が必須です。ただし両方同時に指定することはできません。</p> </li>
         * <li> <p>partner_codeを利用するには、事業所の設定から取引先コードの利用を有効にする必要があります。</p> </li>
         * </ul>
         * @param option.body - 見積書の作成
         */
        $post: (option?: { body?: Methods29['post']['reqBody'], config?: T }) =>
          fetch<Methods29['post']['resBody'], BasicHeaders, Methods29['post']['status']>(prefix, PATH18, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods29['get']['query'] }) =>
          `${prefix}${PATH18}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      receipts: {
        _id: (val2: number) => {
          const prefix2 = `${PATH19}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所のファイルボックス 証憑ファイルを取得する</p>
             */
            get: (option: { query: Methods32['get']['query'], config?: T }) =>
              fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所のファイルボックス 証憑ファイルを取得する</p>
             */
            $get: (option: { query: Methods32['get']['query'], config?: T }) =>
              fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ファイルボックスの証憑ファイル情報を更新する</p>
             * <h2 id="_2">注意点</h2>
             * <ul>
             *   <li>本APIでは、証憑ファイルの再アップロードはできません。</li>
             * </ul>
             * @param option.body - 経費申請の更新
             */
            put: (option: { body: Methods32['put']['reqBody'], config?: T }) =>
              fetch<Methods32['put']['resBody'], BasicHeaders, Methods32['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ファイルボックスの証憑ファイル情報を更新する</p>
             * <h2 id="_2">注意点</h2>
             * <ul>
             *   <li>本APIでは、証憑ファイルの再アップロードはできません。</li>
             * </ul>
             * @param option.body - 経費申請の更新
             */
            $put: (option: { body: Methods32['put']['reqBody'], config?: T }) =>
              fetch<Methods32['put']['resBody'], BasicHeaders, Methods32['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ファイルボックスの証憑ファイルを削除する</p>
             */
            delete: (option: { query: Methods32['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods32['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>ファイルボックスの証憑ファイルを削除する</p>
             */
            $delete: (option: { query: Methods32['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods32['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods32['get']['query'] } | { method: 'delete'; query: Methods32['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所のファイルボックス 証憑ファイル一覧を取得する</p>
         */
        get: (option: { query: Methods31['get']['query'], config?: T }) =>
          fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, PATH19, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所のファイルボックス 証憑ファイル一覧を取得する</p>
         */
        $get: (option: { query: Methods31['get']['query'], config?: T }) =>
          fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ファイルボックスに証憑ファイルをアップロードする</p>
         */
        post: (option: { body: Methods31['post']['reqBody'], config?: T }) =>
          fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH19, POST, option, 'FormData').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ファイルボックスに証憑ファイルをアップロードする</p>
         */
        $post: (option: { body: Methods31['post']['reqBody'], config?: T }) =>
          fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH19, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods31['get']['query'] }) =>
          `${prefix}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      reports: {
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
          get: (option: { query: Methods33['get']['query'], config?: T }) =>
            fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH20, GET, option).json(),
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
          $get: (option: { query: Methods33['get']['query'], config?: T }) =>
            fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH20, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods33['get']['query'] }) =>
            `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
          get: (option: { query: Methods34['get']['query'], config?: T }) =>
            fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH21, GET, option).json(),
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
          $get: (option: { query: Methods34['get']['query'], config?: T }) =>
            fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods34['get']['query'] }) =>
            `${prefix}${PATH21}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
          get: (option: { query: Methods35['get']['query'], config?: T }) =>
            fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, PATH22, GET, option).json(),
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
          $get: (option: { query: Methods35['get']['query'], config?: T }) =>
            fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods35['get']['query'] }) =>
            `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
          get: (option: { query: Methods36['get']['query'], config?: T }) =>
            fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, PATH23, GET, option).json(),
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
          $get: (option: { query: Methods36['get']['query'], config?: T }) =>
            fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods36['get']['query'] }) =>
            `${prefix}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
          get: (option: { query: Methods37['get']['query'], config?: T }) =>
            fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, PATH24, GET, option).json(),
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
          $get: (option: { query: Methods37['get']['query'], config?: T }) =>
            fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods37['get']['query'] }) =>
            `${prefix}${PATH24}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
          get: (option: { query: Methods38['get']['query'], config?: T }) =>
            fetch<Methods38['get']['resBody'], BasicHeaders, Methods38['get']['status']>(prefix, PATH25, GET, option).json(),
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
          $get: (option: { query: Methods38['get']['query'], config?: T }) =>
            fetch<Methods38['get']['resBody'], BasicHeaders, Methods38['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods38['get']['query'] }) =>
            `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
          get: (option: { query: Methods39['get']['query'], config?: T }) =>
            fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, PATH26, GET, option).json(),
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
          $get: (option: { query: Methods39['get']['query'], config?: T }) =>
            fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods39['get']['query'] }) =>
            `${prefix}${PATH26}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      sections: {
        _id: (val2: number) => {
          const prefix2 = `${PATH27}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の部門を参照する</p><h2 id="_2">レスポンスの例</h2>
             *
             * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
             * {
             *   &quot;section&quot; : {
             *     &quot;id&quot; : 102,
             *     &quot;company_id&quot; : 1,
             *     &quot;name&quot; : &quot;開発部門&quot;,
             *     &quot;long_name&quot;: &quot;開発部門&quot;,
             *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
             *     &quot;shortcut2&quot; : &quot;123&quot;,
             *     &quot;indent_count&quot;: 1,
             *     &quot;parent_id&quot;: 101
             *   }
             * }
             * // それ以外のプラン
             * {
             *   &quot;section&quot; : {
             *     &quot;id&quot; : 102,
             *     &quot;company_id&quot; : 1,
             *     &quot;name&quot; : &quot;開発部門&quot;,
             *     &quot;long_name&quot;: &quot;開発部門&quot;,
             *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
             *     &quot;shortcut2&quot; : &quot;123&quot;
             *   }
             * }</code></pre>
             */
            get: (option: { query: Methods41['get']['query'], config?: T }) =>
              fetch<Methods41['get']['resBody'], BasicHeaders, Methods41['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の部門を参照する</p><h2 id="_2">レスポンスの例</h2>
             *
             * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
             * {
             *   &quot;section&quot; : {
             *     &quot;id&quot; : 102,
             *     &quot;company_id&quot; : 1,
             *     &quot;name&quot; : &quot;開発部門&quot;,
             *     &quot;long_name&quot;: &quot;開発部門&quot;,
             *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
             *     &quot;shortcut2&quot; : &quot;123&quot;,
             *     &quot;indent_count&quot;: 1,
             *     &quot;parent_id&quot;: 101
             *   }
             * }
             * // それ以外のプラン
             * {
             *   &quot;section&quot; : {
             *     &quot;id&quot; : 102,
             *     &quot;company_id&quot; : 1,
             *     &quot;name&quot; : &quot;開発部門&quot;,
             *     &quot;long_name&quot;: &quot;開発部門&quot;,
             *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
             *     &quot;shortcut2&quot; : &quot;123&quot;
             *   }
             * }</code></pre>
             */
            $get: (option: { query: Methods41['get']['query'], config?: T }) =>
              fetch<Methods41['get']['resBody'], BasicHeaders, Methods41['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の部門を更新する</p><h2 id="_2">レスポンスの例</h2>
             *
             * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
             * {
             *   &quot;section&quot; : {
             *     &quot;id&quot; : 102,
             *     &quot;company_id&quot; : 1,
             *     &quot;name&quot; : &quot;開発部門&quot;,
             *     &quot;long_name&quot;: &quot;開発部門&quot;,
             *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
             *     &quot;shortcut2&quot; : &quot;123&quot;,
             *     &quot;indent_count&quot;: 1,
             *     &quot;parent_id&quot;: 101
             *   }
             * }
             * // それ以外のプラン
             * {
             *   &quot;section&quot; : {
             *     &quot;id&quot; : 102,
             *     &quot;company_id&quot; : 1,
             *     &quot;name&quot; : &quot;開発部門&quot;,
             *     &quot;long_name&quot;: &quot;開発部門&quot;,
             *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
             *     &quot;shortcut2&quot; : &quot;123&quot;
             *   }
             * }</code></pre>
             * @param option.body - 部門の更新
             */
            put: (option?: { body?: Methods41['put']['reqBody'], config?: T }) =>
              fetch<Methods41['put']['resBody'], BasicHeaders, Methods41['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の部門を更新する</p><h2 id="_2">レスポンスの例</h2>
             *
             * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
             * {
             *   &quot;section&quot; : {
             *     &quot;id&quot; : 102,
             *     &quot;company_id&quot; : 1,
             *     &quot;name&quot; : &quot;開発部門&quot;,
             *     &quot;long_name&quot;: &quot;開発部門&quot;,
             *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
             *     &quot;shortcut2&quot; : &quot;123&quot;,
             *     &quot;indent_count&quot;: 1,
             *     &quot;parent_id&quot;: 101
             *   }
             * }
             * // それ以外のプラン
             * {
             *   &quot;section&quot; : {
             *     &quot;id&quot; : 102,
             *     &quot;company_id&quot; : 1,
             *     &quot;name&quot; : &quot;開発部門&quot;,
             *     &quot;long_name&quot;: &quot;開発部門&quot;,
             *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
             *     &quot;shortcut2&quot; : &quot;123&quot;
             *   }
             * }</code></pre>
             * @param option.body - 部門の更新
             */
            $put: (option?: { body?: Methods41['put']['reqBody'], config?: T }) =>
              fetch<Methods41['put']['resBody'], BasicHeaders, Methods41['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の部門を削除する</p>
             */
            delete: (option: { query: Methods41['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods41['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の部門を削除する</p>
             */
            $delete: (option: { query: Methods41['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods41['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods41['get']['query'] } | { method: 'delete'; query: Methods41['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門一覧を取得する</p>
         *
         * <h2 id="_2">レスポンスの例</h2>
         *
         * <blockquote>
         * <p>GET https://api.freee.co.jp/api/1/sections?company_id=1</p>
         * </blockquote>
         *
         * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
         * {
         *   &quot;sections&quot; : [
         *     {
         *       &quot;id&quot; : 101,
         *       &quot;company_id&quot; : 1,
         *       &quot;name&quot; : &quot;開発部門&quot;,
         *       &quot;long_name&quot;: &quot;開発部門&quot;,
         *       &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *       &quot;shortcut2&quot; : &quot;123&quot;,
         *       &quot;indent_count&quot;: 1,
         *       &quot;parent_id&quot;: 11
         *     },
         *     ...
         *   ]
         * }
         * // それ以外のプラン
         * {
         *   &quot;sections&quot; : [
         *     {
         *       &quot;id&quot; : 101,
         *       &quot;company_id&quot; : 1,
         *       &quot;name&quot; : &quot;開発部門&quot;,
         *       &quot;long_name&quot;: &quot;開発部門&quot;,
         *       &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *       &quot;shortcut2&quot; : &quot;123&quot;
         *     },
         *     ...
         *   ]
         * }</code></pre>
         */
        get: (option: { query: Methods40['get']['query'], config?: T }) =>
          fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, PATH27, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門一覧を取得する</p>
         *
         * <h2 id="_2">レスポンスの例</h2>
         *
         * <blockquote>
         * <p>GET https://api.freee.co.jp/api/1/sections?company_id=1</p>
         * </blockquote>
         *
         * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
         * {
         *   &quot;sections&quot; : [
         *     {
         *       &quot;id&quot; : 101,
         *       &quot;company_id&quot; : 1,
         *       &quot;name&quot; : &quot;開発部門&quot;,
         *       &quot;long_name&quot;: &quot;開発部門&quot;,
         *       &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *       &quot;shortcut2&quot; : &quot;123&quot;,
         *       &quot;indent_count&quot;: 1,
         *       &quot;parent_id&quot;: 11
         *     },
         *     ...
         *   ]
         * }
         * // それ以外のプラン
         * {
         *   &quot;sections&quot; : [
         *     {
         *       &quot;id&quot; : 101,
         *       &quot;company_id&quot; : 1,
         *       &quot;name&quot; : &quot;開発部門&quot;,
         *       &quot;long_name&quot;: &quot;開発部門&quot;,
         *       &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *       &quot;shortcut2&quot; : &quot;123&quot;
         *     },
         *     ...
         *   ]
         * }</code></pre>
         */
        $get: (option: { query: Methods40['get']['query'], config?: T }) =>
          fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門を作成する</p>
         *
         * <h2 id="_2">レスポンスの例</h2>
         *
         * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;,
         *     &quot;indent_count&quot;: 1,
         *     &quot;parent_id&quot;: 101
         *   }
         * }
         * // それ以外のプラン
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;
         *   }
         * }</code></pre>
         * @param option.body - 部門の作成
         */
        post: (option?: { body?: Methods40['post']['reqBody'], config?: T }) =>
          fetch<Methods40['post']['resBody'], BasicHeaders, Methods40['post']['status']>(prefix, PATH27, POST, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門を作成する</p>
         *
         * <h2 id="_2">レスポンスの例</h2>
         *
         * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;,
         *     &quot;indent_count&quot;: 1,
         *     &quot;parent_id&quot;: 101
         *   }
         * }
         * // それ以外のプラン
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;
         *   }
         * }</code></pre>
         * @param option.body - 部門の作成
         */
        $post: (option?: { body?: Methods40['post']['reqBody'], config?: T }) =>
          fetch<Methods40['post']['resBody'], BasicHeaders, Methods40['post']['status']>(prefix, PATH27, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods40['get']['query'] }) =>
          `${prefix}${PATH27}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      segments: {
        _segment_id: (val2: number) => {
          const prefix2 = `${PATH28}/${val2}`

          return {
            tags: {
              _id: (val4: number) => {
                const prefix4 = `${prefix2}${PATH29}/${val4}`

                return {
                  /**
                   * <h2 id="">概要</h2>
                   *
                   * <p>指定した事業所のセグメントタグを更新する</p>
                   *
                   * <h2 id="">注意点</h2>
                   *
                   * <ul>
                   *
                   * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
                   *
                   * </ul>
                   * @param option.body - セグメントタグの作成
                   */
                  put: (option: { body: Methods43['put']['reqBody'], config?: T }) =>
                    fetch<Methods43['put']['resBody'], BasicHeaders, Methods43['put']['status']>(prefix, prefix4, PUT, option, 'URLSearchParams').json(),
                  /**
                   * <h2 id="">概要</h2>
                   *
                   * <p>指定した事業所のセグメントタグを更新する</p>
                   *
                   * <h2 id="">注意点</h2>
                   *
                   * <ul>
                   *
                   * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
                   *
                   * </ul>
                   * @param option.body - セグメントタグの作成
                   */
                  $put: (option: { body: Methods43['put']['reqBody'], config?: T }) =>
                    fetch<Methods43['put']['resBody'], BasicHeaders, Methods43['put']['status']>(prefix, prefix4, PUT, option, 'URLSearchParams').json().then(r => r.body),
                  /**
                   * <h2 id="">概要</h2>
                   *
                   * <p>指定した事業所のセグメントタグを削除する</p>
                   *
                   * <h2 id="">注意点</h2>
                   *
                   * <ul>
                   *
                   * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
                   *
                   * </ul>
                   */
                  delete: (option: { query: Methods43['delete']['query'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods43['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                  /**
                   * <h2 id="">概要</h2>
                   *
                   * <p>指定した事業所のセグメントタグを削除する</p>
                   *
                   * <h2 id="">注意点</h2>
                   *
                   * <ul>
                   *
                   * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
                   *
                   * </ul>
                   */
                  $delete: (option: { query: Methods43['delete']['query'], config?: T }) =>
                    fetch<void, BasicHeaders, Methods43['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                  $path: (option?: { method: 'delete'; query: Methods43['delete']['query'] }) =>
                    `${prefix}${prefix4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              /**
               * <h2 id="">概要</h2>
               *
               * <p>指定した事業所のセグメントタグ一覧を取得する</p>
               *
               * <h2 id="">注意点</h2>
               *
               * <ul>
               *
               * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
               *
               * </ul>
               */
              get: (option: { query: Methods42['get']['query'], config?: T }) =>
                fetch<Methods42['get']['resBody'], BasicHeaders, Methods42['get']['status']>(prefix, `${prefix2}${PATH29}`, GET, option).json(),
              /**
               * <h2 id="">概要</h2>
               *
               * <p>指定した事業所のセグメントタグ一覧を取得する</p>
               *
               * <h2 id="">注意点</h2>
               *
               * <ul>
               *
               * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
               *
               * </ul>
               */
              $get: (option: { query: Methods42['get']['query'], config?: T }) =>
                fetch<Methods42['get']['resBody'], BasicHeaders, Methods42['get']['status']>(prefix, `${prefix2}${PATH29}`, GET, option).json().then(r => r.body),
              /**
               * <h2 id="">概要</h2>
               *
               * <p>指定した事業所のセグメントタグを作成する</p>
               *
               * <h2 id="">注意点</h2>
               *
               * <ul>
               *
               * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
               *
               * </ul>
               * @param option.body - セグメントタグの作成
               */
              post: (option: { body: Methods42['post']['reqBody'], config?: T }) =>
                fetch<Methods42['post']['resBody'], BasicHeaders, Methods42['post']['status']>(prefix, `${prefix2}${PATH29}`, POST, option, 'URLSearchParams').json(),
              /**
               * <h2 id="">概要</h2>
               *
               * <p>指定した事業所のセグメントタグを作成する</p>
               *
               * <h2 id="">注意点</h2>
               *
               * <ul>
               *
               * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
               *
               * </ul>
               * @param option.body - セグメントタグの作成
               */
              $post: (option: { body: Methods42['post']['reqBody'], config?: T }) =>
                fetch<Methods42['post']['resBody'], BasicHeaders, Methods42['post']['status']>(prefix, `${prefix2}${PATH29}`, POST, option, 'URLSearchParams').json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods42['get']['query'] }) =>
                `${prefix}${prefix2}${PATH29}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        }
      },
      tags: {
        _id: (val2: number) => {
          const prefix2 = `${PATH30}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所のメモタグを取得する</p>
             */
            get: (option: { query: Methods45['get']['query'], config?: T }) =>
              fetch<Methods45['get']['resBody'], BasicHeaders, Methods45['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所のメモタグを取得する</p>
             */
            $get: (option: { query: Methods45['get']['query'], config?: T }) =>
              fetch<Methods45['get']['resBody'], BasicHeaders, Methods45['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所のメモタグを更新する</p>
             * @param option.body - メモタグの更新
             */
            put: (option?: { body?: Methods45['put']['reqBody'], config?: T }) =>
              fetch<Methods45['put']['resBody'], BasicHeaders, Methods45['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所のメモタグを更新する</p>
             * @param option.body - メモタグの更新
             */
            $put: (option?: { body?: Methods45['put']['reqBody'], config?: T }) =>
              fetch<Methods45['put']['resBody'], BasicHeaders, Methods45['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所のメモタグを削除する</p>
             */
            delete: (option: { query: Methods45['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods45['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所のメモタグを削除する</p>
             */
            $delete: (option: { query: Methods45['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods45['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods45['get']['query'] } | { method: 'delete'; query: Methods45['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所のメモタグ一覧を取得する</p>
         */
        get: (option: { query: Methods44['get']['query'], config?: T }) =>
          fetch<Methods44['get']['resBody'], BasicHeaders, Methods44['get']['status']>(prefix, PATH30, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所のメモタグ一覧を取得する</p>
         */
        $get: (option: { query: Methods44['get']['query'], config?: T }) =>
          fetch<Methods44['get']['resBody'], BasicHeaders, Methods44['get']['status']>(prefix, PATH30, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所のメモタグを作成する</p>
         * @param option.body - メモタグの作成
         */
        post: (option: { body: Methods44['post']['reqBody'], config?: T }) =>
          fetch<Methods44['post']['resBody'], BasicHeaders, Methods44['post']['status']>(prefix, PATH30, POST, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所のメモタグを作成する</p>
         * @param option.body - メモタグの作成
         */
        $post: (option: { body: Methods44['post']['reqBody'], config?: T }) =>
          fetch<Methods44['post']['resBody'], BasicHeaders, Methods44['post']['status']>(prefix, PATH30, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods44['get']['query'] }) =>
          `${prefix}${PATH30}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      taxes: {
        codes: {
          _code: (val3: number) => {
            const prefix3 = `${PATH31}/${val3}`

            return {
              /**
               * <h2 id="">概要</h2>
               *
               * <p>税区分コードを取得する</p>
               */
              get: (option?: { config?: T }) =>
                fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * <h2 id="">概要</h2>
               *
               * <p>税区分コードを取得する</p>
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          /**
           * <h2 id="">概要</h2>
           *
           * <p>税区分コード一覧を取得する</p>
           */
          get: (option?: { config?: T }) =>
            fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, PATH31, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>税区分コード一覧を取得する</p>
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH31}`
        },
        companies: {
          _company_id: (val3: number) => {
            const prefix3 = `${PATH32}/${val3}`

            return {
              get: (option?: { config?: T }) =>
                fetch<Methods48['get']['resBody'], BasicHeaders, Methods48['get']['status']>(prefix, prefix3, GET, option).json(),
              $get: (option?: { config?: T }) =>
                fetch<Methods48['get']['resBody'], BasicHeaders, Methods48['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          }
        }
      },
      transfers: {
        _id: (val2: number) => {
          const prefix2 = `${PATH33}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の取引（振替）を取得する</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>
             * <p>amount : 振替金額</p>
             * </li>
             *
             * <li>
             * <p>from_walletable_type, to_walletable_type</p>
             *
             * <ul>
             * <li>bank_account : 銀行口座</li>
             *
             * <li>credit_card : クレジットカード</li>
             *
             * <li>wallet : その他の決済口座</li>
             * </ul>
             * </li>
             * </ul>
             */
            get: (option: { query: Methods50['get']['query'], config?: T }) =>
              fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の取引（振替）を取得する</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>
             * <p>amount : 振替金額</p>
             * </li>
             *
             * <li>
             * <p>from_walletable_type, to_walletable_type</p>
             *
             * <ul>
             * <li>bank_account : 銀行口座</li>
             *
             * <li>credit_card : クレジットカード</li>
             *
             * <li>wallet : その他の決済口座</li>
             * </ul>
             * </li>
             * </ul>
             */
            $get: (option: { query: Methods50['get']['query'], config?: T }) =>
              fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の取引（振替）を更新する</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>
             * <p>amount : 振替金額</p>
             * </li>
             *
             * <li>
             * <p>from_walletable_type, to_walletable_type</p>
             *
             * <ul>
             * <li>bank_account : 銀行口座</li>
             *
             * <li>credit_card : クレジットカード</li>
             *
             * <li>wallet : その他の決済口座</li>
             * </ul>
             * </li>
             * </ul>
             * @param option.body - 取引（振替）の更新
             */
            put: (option: { body: Methods50['put']['reqBody'], config?: T }) =>
              fetch<Methods50['put']['resBody'], BasicHeaders, Methods50['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の取引（振替）を更新する</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>
             * <p>amount : 振替金額</p>
             * </li>
             *
             * <li>
             * <p>from_walletable_type, to_walletable_type</p>
             *
             * <ul>
             * <li>bank_account : 銀行口座</li>
             *
             * <li>credit_card : クレジットカード</li>
             *
             * <li>wallet : その他の決済口座</li>
             * </ul>
             * </li>
             * </ul>
             * @param option.body - 取引（振替）の更新
             */
            $put: (option: { body: Methods50['put']['reqBody'], config?: T }) =>
              fetch<Methods50['put']['resBody'], BasicHeaders, Methods50['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の取引（振替）を削除する</p>
             */
            delete: (option: { query: Methods50['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods50['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の取引（振替）を削除する</p>
             */
            $delete: (option: { query: Methods50['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods50['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods50['get']['query'] } | { method: 'delete'; query: Methods50['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引（振替）一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 振替金額</p>
         * </li>
         *
         * <li>
         * <p>from_walletable_type, to_walletable_type</p>
         *
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         */
        get: (option: { query: Methods49['get']['query'], config?: T }) =>
          fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, PATH33, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引（振替）一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 振替金額</p>
         * </li>
         *
         * <li>
         * <p>from_walletable_type, to_walletable_type</p>
         *
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         */
        $get: (option: { query: Methods49['get']['query'], config?: T }) =>
          fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, PATH33, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引（振替）を作成する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 振替金額</p>
         * </li>
         *
         * <li>
         * <p>from_walletable_type, to_walletable_type</p>
         *
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         * @param option.body - 取引（振替）の作成
         */
        post: (option?: { body?: Methods49['post']['reqBody'], config?: T }) =>
          fetch<Methods49['post']['resBody'], BasicHeaders, Methods49['post']['status']>(prefix, PATH33, POST, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の取引（振替）を作成する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 振替金額</p>
         * </li>
         *
         * <li>
         * <p>from_walletable_type, to_walletable_type</p>
         *
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         * @param option.body - 取引（振替）の作成
         */
        $post: (option?: { body?: Methods49['post']['reqBody'], config?: T }) =>
          fetch<Methods49['post']['resBody'], BasicHeaders, Methods49['post']['status']>(prefix, PATH33, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods49['get']['query'] }) =>
          `${prefix}${PATH33}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      users: {
        capabilities: {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>ユーザの権限情報を取得する</p>
           */
          get: (option: { query: Methods52['get']['query'], config?: T }) =>
            fetch<Methods52['get']['resBody'], BasicHeaders, Methods52['get']['status']>(prefix, PATH35, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>ユーザの権限情報を取得する</p>
           */
          $get: (option: { query: Methods52['get']['query'], config?: T }) =>
            fetch<Methods52['get']['resBody'], BasicHeaders, Methods52['get']['status']>(prefix, PATH35, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods52['get']['query'] }) =>
            `${prefix}${PATH35}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        me: {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>ユーザの情報を取得する</p>
           */
          get: (option: { query: Methods53['get']['query'], config?: T }) =>
            fetch<Methods53['get']['resBody'], BasicHeaders, Methods53['get']['status']>(prefix, PATH36, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>ユーザの情報を取得する</p>
           */
          $get: (option: { query: Methods53['get']['query'], config?: T }) =>
            fetch<Methods53['get']['resBody'], BasicHeaders, Methods53['get']['status']>(prefix, PATH36, GET, option).json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>ユーザー情報を更新する</p>
           * @param option.body - ユーザー情報の更新
           */
          put: (option?: { body?: Methods53['put']['reqBody'], config?: T }) =>
            fetch<Methods53['put']['resBody'], BasicHeaders, Methods53['put']['status']>(prefix, PATH36, PUT, option, 'URLSearchParams').json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>ユーザー情報を更新する</p>
           * @param option.body - ユーザー情報の更新
           */
          $put: (option?: { body?: Methods53['put']['reqBody'], config?: T }) =>
            fetch<Methods53['put']['resBody'], BasicHeaders, Methods53['put']['status']>(prefix, PATH36, PUT, option, 'URLSearchParams').json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods53['get']['query'] }) =>
            `${prefix}${PATH36}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>事業所に所属するユーザーの一覧を取得する</p>
         */
        get: (option: { query: Methods51['get']['query'], config?: T }) =>
          fetch<Methods51['get']['resBody'], BasicHeaders, Methods51['get']['status']>(prefix, PATH34, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>事業所に所属するユーザーの一覧を取得する</p>
         */
        $get: (option: { query: Methods51['get']['query'], config?: T }) =>
          fetch<Methods51['get']['resBody'], BasicHeaders, Methods51['get']['status']>(prefix, PATH34, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods51['get']['query'] }) =>
          `${prefix}${PATH34}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      wallet_txns: {
        _id: (val2: number) => {
          const prefix2 = `${PATH37}/${val2}`

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の明細を取得する</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>
             * <p>amount : 明細金額</p>
             * </li>
             *
             * <li>
             * <p>due_amount : 取引登録待ち金額</p>
             * </li>
             *
             * <li>
             * <p>balance : 残高</p>
             * </li>
             *
             * <li>
             * <p>entry_side</p>
             *
             * <ul>
             * <li>income : 入金</li>
             *
             * <li>expense : 出金</li>
             * </ul>
             * </li>
             *
             * <li>
             * <p>walletable_type</p>
             *
             * <ul>
             * <li>bank_account : 銀行口座</li>
             *
             * <li>credit_card : クレジットカード</li>
             *
             * <li>wallet : その他の決済口座</li>
             * </ul>
             * </li>
             * </ul>
             */
            get: (option: { query: Methods55['get']['query'], config?: T }) =>
              fetch<Methods55['get']['resBody'], BasicHeaders, Methods55['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の明細を取得する</p>
             *
             * <h2 id="_2">定義</h2>
             *
             * <ul>
             * <li>
             * <p>amount : 明細金額</p>
             * </li>
             *
             * <li>
             * <p>due_amount : 取引登録待ち金額</p>
             * </li>
             *
             * <li>
             * <p>balance : 残高</p>
             * </li>
             *
             * <li>
             * <p>entry_side</p>
             *
             * <ul>
             * <li>income : 入金</li>
             *
             * <li>expense : 出金</li>
             * </ul>
             * </li>
             *
             * <li>
             * <p>walletable_type</p>
             *
             * <ul>
             * <li>bank_account : 銀行口座</li>
             *
             * <li>credit_card : クレジットカード</li>
             *
             * <li>wallet : その他の決済口座</li>
             * </ul>
             * </li>
             * </ul>
             */
            $get: (option: { query: Methods55['get']['query'], config?: T }) =>
              fetch<Methods55['get']['resBody'], BasicHeaders, Methods55['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の明細を削除する</p>
             */
            delete: (option: { query: Methods55['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods55['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>指定した事業所の明細を削除する</p>
             */
            $delete: (option: { query: Methods55['delete']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods55['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods55['get']['query'] } | { method: 'delete'; query: Methods55['delete']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の明細一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 明細金額</p>
         * </li>
         *
         * <li>
         * <p>due_amount : 取引登録待ち金額</p>
         * </li>
         *
         * <li>
         * <p>balance : 残高</p>
         * </li>
         *
         * <li>
         * <p>entry_side</p>
         *
         * <ul>
         * <li>income : 入金</li>
         *
         * <li>expense : 出金</li>
         * </ul>
         * </li>
         *
         * <li>
         * <p>walletable_type</p>
         *
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         */
        get: (option: { query: Methods54['get']['query'], config?: T }) =>
          fetch<Methods54['get']['resBody'], BasicHeaders, Methods54['get']['status']>(prefix, PATH37, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の明細一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 明細金額</p>
         * </li>
         *
         * <li>
         * <p>due_amount : 取引登録待ち金額</p>
         * </li>
         *
         * <li>
         * <p>balance : 残高</p>
         * </li>
         *
         * <li>
         * <p>entry_side</p>
         *
         * <ul>
         * <li>income : 入金</li>
         *
         * <li>expense : 出金</li>
         * </ul>
         * </li>
         *
         * <li>
         * <p>walletable_type</p>
         *
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         */
        $get: (option: { query: Methods54['get']['query'], config?: T }) =>
          fetch<Methods54['get']['resBody'], BasicHeaders, Methods54['get']['status']>(prefix, PATH37, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の明細を作成する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 明細金額</p>
         * </li>
         *
         * <li>
         * <p>due_amount : 取引登録待ち金額</p>
         * </li>
         *
         * <li>
         * <p>balance : 残高</p>
         * </li>
         *
         * <li>
         * <p>entry_side</p>
         *
         * <ul>
         * <li>income : 入金</li>
         *
         * <li>expense : 出金</li>
         * </ul>
         * </li>
         *
         * <li>
         * <p>walletable_type</p>
         *
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         * @param option.body - 明細の作成
         */
        post: (option?: { body?: Methods54['post']['reqBody'], config?: T }) =>
          fetch<Methods54['post']['resBody'], BasicHeaders, Methods54['post']['status']>(prefix, PATH37, POST, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の明細を作成する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>amount : 明細金額</p>
         * </li>
         *
         * <li>
         * <p>due_amount : 取引登録待ち金額</p>
         * </li>
         *
         * <li>
         * <p>balance : 残高</p>
         * </li>
         *
         * <li>
         * <p>entry_side</p>
         *
         * <ul>
         * <li>income : 入金</li>
         *
         * <li>expense : 出金</li>
         * </ul>
         * </li>
         *
         * <li>
         * <p>walletable_type</p>
         *
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         * </ul>
         * @param option.body - 明細の作成
         */
        $post: (option?: { body?: Methods54['post']['reqBody'], config?: T }) =>
          fetch<Methods54['post']['resBody'], BasicHeaders, Methods54['post']['status']>(prefix, PATH37, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods54['get']['query'] }) =>
          `${prefix}${PATH37}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      walletables: {
        _type: (val2: number | string) => {
          const prefix2 = `${PATH38}/${val2}`

          return {
            _id: (val3: number) => {
              const prefix3 = `${prefix2}/${val3}`

              return {
                /**
                 * <h2 id="">概要</h2>
                 *
                 * <p>指定した事業所の口座情報を取得する</p>
                 *
                 * <h2 id="_2">定義</h2>
                 *
                 * <ul>
                 * <li>type
                 * <ul>
                 * <li>bank_account : 銀行口座</li>
                 *
                 * <li>credit_card : クレジットカード</li>
                 *
                 * <li>wallet : その他の決済口座</li>
                 * </ul>
                 * </li>
                 *
                 * <li>walletable_balance : 登録残高</li>
                 *
                 * <li>last_balance : 同期残高</li>
                 * </ul>
                 */
                get: (option: { query: Methods57['get']['query'], config?: T }) =>
                  fetch<Methods57['get']['resBody'], BasicHeaders, Methods57['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * <h2 id="">概要</h2>
                 *
                 * <p>指定した事業所の口座情報を取得する</p>
                 *
                 * <h2 id="_2">定義</h2>
                 *
                 * <ul>
                 * <li>type
                 * <ul>
                 * <li>bank_account : 銀行口座</li>
                 *
                 * <li>credit_card : クレジットカード</li>
                 *
                 * <li>wallet : その他の決済口座</li>
                 * </ul>
                 * </li>
                 *
                 * <li>walletable_balance : 登録残高</li>
                 *
                 * <li>last_balance : 同期残高</li>
                 * </ul>
                 */
                $get: (option: { query: Methods57['get']['query'], config?: T }) =>
                  fetch<Methods57['get']['resBody'], BasicHeaders, Methods57['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                /**
                 * <h2 id="">概要</h2>
                 *
                 * <p>口座を更新する</p>
                 * @param option.body - 口座の作成
                 */
                put: (option: { body?: Methods57['put']['reqBody'], query: Methods57['put']['query'], config?: T }) =>
                  fetch<Methods57['put']['resBody'], BasicHeaders, Methods57['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json(),
                /**
                 * <h2 id="">概要</h2>
                 *
                 * <p>口座を更新する</p>
                 * @param option.body - 口座の作成
                 */
                $put: (option: { body?: Methods57['put']['reqBody'], query: Methods57['put']['query'], config?: T }) =>
                  fetch<Methods57['put']['resBody'], BasicHeaders, Methods57['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json().then(r => r.body),
                /**
                 * <h2 id="">概要</h2>
                 *
                 * <p>指定した事業所の口座を削除する</p>
                 *
                 * <h2 id="">注意点</h2>
                 * <ul>
                 * <li>削除を実行するには、当該口座に関連する仕訳データを事前に削除する必要があります。</li>
                 * <li>当該口座に仕訳が残っていないか確認するには、レポートの「仕訳帳」等を参照し、必要に応じて、「取引」や「口座振替」も削除します。</li>
                 *
                 * </ul>
                 */
                delete: (option: { query: Methods57['delete']['query'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods57['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                /**
                 * <h2 id="">概要</h2>
                 *
                 * <p>指定した事業所の口座を削除する</p>
                 *
                 * <h2 id="">注意点</h2>
                 * <ul>
                 * <li>削除を実行するには、当該口座に関連する仕訳データを事前に削除する必要があります。</li>
                 * <li>当該口座に仕訳が残っていないか確認するには、レポートの「仕訳帳」等を参照し、必要に応じて、「取引」や「口座振替」も削除します。</li>
                 *
                 * </ul>
                 */
                $delete: (option: { query: Methods57['delete']['query'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods57['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods57['get']['query'] } | { method: 'put'; query: Methods57['put']['query'] } | { method: 'delete'; query: Methods57['delete']['query'] }) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            }
          }
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の口座一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>type
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         *
         * <li>walletable_balance : 登録残高</li>
         *
         * <li>last_balance : 同期残高</li>
         * </ul>
         */
        get: (option: { query: Methods56['get']['query'], config?: T }) =>
          fetch<Methods56['get']['resBody'], BasicHeaders, Methods56['get']['status']>(prefix, PATH38, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の口座一覧を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>type
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         *
         * <li>walletable_balance : 登録残高</li>
         *
         * <li>last_balance : 同期残高</li>
         * </ul>
         */
        $get: (option: { query: Methods56['get']['query'], config?: T }) =>
          fetch<Methods56['get']['resBody'], BasicHeaders, Methods56['get']['status']>(prefix, PATH38, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所に口座を作成する</p>
         *
         * <h2 id="">注意点</h2>
         * <ul><li>同期に対応した口座はこのAPIでは作成できません</li></ul>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>type</p>
         *
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         *
         * <li>
         * <p>name : 口座名</p>
         * </li>
         *
         * <li>
         * <p>bank_id : サービスID</p>
         * </li>
         *
         * <li>
         * <p>group_name : 決算書表示名（小カテゴリー）　例：売掛金, 受取手形, 未収入金（法人のみ）, 買掛金, 支払手形, 未払金, 預り金, 前受金</p>
         * </li>
         * </ul>
         * @param option.body - 口座の作成
         */
        post: (option?: { body?: Methods56['post']['reqBody'], config?: T }) =>
          fetch<Methods56['post']['resBody'], BasicHeaders, Methods56['post']['status']>(prefix, PATH38, POST, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所に口座を作成する</p>
         *
         * <h2 id="">注意点</h2>
         * <ul><li>同期に対応した口座はこのAPIでは作成できません</li></ul>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>
         * <p>type</p>
         *
         * <ul>
         * <li>bank_account : 銀行口座</li>
         *
         * <li>credit_card : クレジットカード</li>
         *
         * <li>wallet : その他の決済口座</li>
         * </ul>
         * </li>
         *
         * <li>
         * <p>name : 口座名</p>
         * </li>
         *
         * <li>
         * <p>bank_id : サービスID</p>
         * </li>
         *
         * <li>
         * <p>group_name : 決算書表示名（小カテゴリー）　例：売掛金, 受取手形, 未収入金（法人のみ）, 買掛金, 支払手形, 未払金, 預り金, 前受金</p>
         * </li>
         * </ul>
         * @param option.body - 口座の作成
         */
        $post: (option?: { body?: Methods56['post']['reqBody'], config?: T }) =>
          fetch<Methods56['post']['resBody'], BasicHeaders, Methods56['post']['status']>(prefix, PATH38, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods56['get']['query'] }) =>
          `${prefix}${PATH38}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
