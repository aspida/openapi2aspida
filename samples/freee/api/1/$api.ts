import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1797yi2 } from './account_items';
import type { Methods as Methods_8qk0na } from './account_items/_id@number';
import type { Methods as Methods_pk8yl9 } from './banks';
import type { Methods as Methods_j8hc1r } from './banks/_id@number';
import type { Methods as Methods_xi4crh } from './companies';
import type { Methods as Methods_asyhtr } from './companies/_id@number';
import type { Methods as Methods_1j0wxe9 } from './deals';
import type { Methods as Methods_s42tfn } from './deals/_id@number';
import type { Methods as Methods_ydimfv } from './deals/_id@number/payments';
import type { Methods as Methods_119chy4 } from './deals/_id@number/payments/_payment_id@number';
import type { Methods as Methods_15d7fae } from './deals/_id@number/renews';
import type { Methods as Methods_1fsj8c8 } from './deals/_id@number/renews/_renew_id@number';
import type { Methods as Methods_om0dga } from './expense_application_line_templates';
import type { Methods as Methods_1nkkdy } from './expense_application_line_templates/_id@number';
import type { Methods as Methods_1watu38 } from './expense_applications';
import type { Methods as Methods_1ata4r4 } from './expense_applications/_id@number';
import type { Methods as Methods_dub6pf } from './forms/selectables';
import type { Methods as Methods_1im2cji } from './invoices';
import type { Methods as Methods_1hf812y } from './invoices/_id@number';
import type { Methods as Methods_1sl9ty } from './items';
import type { Methods as Methods_lcuria } from './items/_id@number';
import type { Methods as Methods_bpgo2i } from './journals';
import type { Methods as Methods_vrr9vn } from './journals/reports/_id@number/download';
import type { Methods as Methods_14rp4qp } from './journals/reports/_id@number/status';
import type { Methods as Methods_7xsoh1 } from './manual_journals';
import type { Methods as Methods_2ki4h3 } from './manual_journals/_id@number';
import type { Methods as Methods_13sbgxh } from './partners';
import type { Methods as Methods_zyy0xj } from './partners/_id@number';
import type { Methods as Methods_17ohx2p } from './partners/code/_code@string';
import type { Methods as Methods_1hbeo59 } from './quotations';
import type { Methods as Methods_xp60db } from './quotations/_id@number';
import type { Methods as Methods_lcgnb7 } from './receipts';
import type { Methods as Methods_gwls3x } from './receipts/_id@number';
import type { Methods as Methods_8z6ya0 } from './reports/trial_bs';
import type { Methods as Methods_1q45gpe } from './reports/trial_bs_three_years';
import type { Methods as Methods_1lqa25w } from './reports/trial_bs_two_years';
import type { Methods as Methods_376oif } from './reports/trial_pl';
import type { Methods as Methods_wf8kc4 } from './reports/trial_pl_sections';
import type { Methods as Methods_u62eat } from './reports/trial_pl_three_years';
import type { Methods as Methods_2kakxf } from './reports/trial_pl_two_years';
import type { Methods as Methods_bg6t02 } from './sections';
import type { Methods as Methods_13j4n1q } from './sections/_id@number';
import type { Methods as Methods_caj7ye } from './segments/_segment_id@number/tags';
import type { Methods as Methods_2j04oy } from './segments/_segment_id@number/tags/_id@number';
import type { Methods as Methods_rxnz0j } from './tags';
import type { Methods as Methods_1skf2bx } from './tags/_id@number';
import type { Methods as Methods_x92uhq } from './taxes/codes';
import type { Methods as Methods_agxjle } from './taxes/codes/_code@number';
import type { Methods as Methods_89r781 } from './taxes/companies/_company_id@number';
import type { Methods as Methods_uvjcbq } from './transfers';
import type { Methods as Methods_14ohnqa } from './transfers/_id@number';
import type { Methods as Methods_1xhiioa } from './users';
import type { Methods as Methods_su8bid } from './users/capabilities';
import type { Methods as Methods_jzr18p } from './users/me';
import type { Methods as Methods_1rv49ab } from './wallet_txns';
import type { Methods as Methods_h90hal } from './wallet_txns/_id@number';
import type { Methods as Methods_1nphqfo } from './walletables';
import type { Methods as Methods_xx015 } from './walletables/_type@string/_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/account_items';
  const PATH1 = '/api/1/banks';
  const PATH2 = '/api/1/companies';
  const PATH3 = '/api/1/deals';
  const PATH4 = '/payments';
  const PATH5 = '/renews';
  const PATH6 = '/api/1/expense_application_line_templates';
  const PATH7 = '/api/1/expense_applications';
  const PATH8 = '/api/1/forms/selectables';
  const PATH9 = '/api/1/invoices';
  const PATH10 = '/api/1/items';
  const PATH11 = '/api/1/journals';
  const PATH12 = '/api/1/journals/reports';
  const PATH13 = '/download';
  const PATH14 = '/status';
  const PATH15 = '/api/1/manual_journals';
  const PATH16 = '/api/1/partners';
  const PATH17 = '/api/1/partners/code';
  const PATH18 = '/api/1/quotations';
  const PATH19 = '/api/1/receipts';
  const PATH20 = '/api/1/reports/trial_bs';
  const PATH21 = '/api/1/reports/trial_bs_three_years';
  const PATH22 = '/api/1/reports/trial_bs_two_years';
  const PATH23 = '/api/1/reports/trial_pl';
  const PATH24 = '/api/1/reports/trial_pl_sections';
  const PATH25 = '/api/1/reports/trial_pl_three_years';
  const PATH26 = '/api/1/reports/trial_pl_two_years';
  const PATH27 = '/api/1/sections';
  const PATH28 = '/api/1/segments';
  const PATH29 = '/tags';
  const PATH30 = '/api/1/tags';
  const PATH31 = '/api/1/taxes/codes';
  const PATH32 = '/api/1/taxes/companies';
  const PATH33 = '/api/1/transfers';
  const PATH34 = '/api/1/users';
  const PATH35 = '/api/1/users/capabilities';
  const PATH36 = '/api/1/users/me';
  const PATH37 = '/api/1/wallet_txns';
  const PATH38 = '/api/1/walletables';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    account_items: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した勘定科目の詳細を取得する</p>
           */
          get: (option: { query: Methods_8qk0na['get']['query'], config?: T | undefined }) =>
            fetch<Methods_8qk0na['get']['resBody'], BasicHeaders, Methods_8qk0na['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した勘定科目の詳細を取得する</p>
           */
          $get: (option: { query: Methods_8qk0na['get']['query'], config?: T | undefined }) =>
            fetch<Methods_8qk0na['get']['resBody'], BasicHeaders, Methods_8qk0na['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>勘定科目を更新する</p>
           * @param option.body - 勘定科目の更新
           */
          put: (option: { body: Methods_8qk0na['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_8qk0na['put']['resBody'], BasicHeaders, Methods_8qk0na['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>勘定科目を更新する</p>
           * @param option.body - 勘定科目の更新
           */
          $put: (option: { body: Methods_8qk0na['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_8qk0na['put']['resBody'], BasicHeaders, Methods_8qk0na['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した勘定科目を削除する</p>
           * <h2 id="">注意点</h2>
           * <ul>
           * <li>削除できる勘定科目は、追加で作成したカスタム勘定項目のみです。</li>
           * <li>デフォルトで存在する勘定科目や口座の勘定科目は削除できません。</li></ul>
           */
          delete: (option: { query: Methods_8qk0na['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_8qk0na['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した勘定科目を削除する</p>
           * <h2 id="">注意点</h2>
           * <ul>
           * <li>削除できる勘定科目は、追加で作成したカスタム勘定項目のみです。</li>
           * <li>デフォルトで存在する勘定科目や口座の勘定科目は削除できません。</li></ul>
           */
          $delete: (option: { query: Methods_8qk0na['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_8qk0na['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_8qk0na['get']['query'] } | { method: 'delete'; query: Methods_8qk0na['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
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
      get: (option: { query: Methods_1797yi2['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1797yi2['get']['resBody'], BasicHeaders, Methods_1797yi2['get']['status']>(prefix, PATH0, GET, option).json(),
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
      $get: (option: { query: Methods_1797yi2['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1797yi2['get']['resBody'], BasicHeaders, Methods_1797yi2['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の勘定科目を作成する</p>
       * @param option.body - 勘定科目の作成
       */
      post: (option: { body: Methods_1797yi2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1797yi2['post']['resBody'], BasicHeaders, Methods_1797yi2['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の勘定科目を作成する</p>
       * @param option.body - 勘定科目の作成
       */
      $post: (option: { body: Methods_1797yi2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1797yi2['post']['resBody'], BasicHeaders, Methods_1797yi2['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1797yi2['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    banks: {
      _id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`;

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
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_j8hc1r['get']['resBody'], BasicHeaders, Methods_j8hc1r['get']['status']>(prefix, prefix1, GET, option).json(),
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
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_j8hc1r['get']['resBody'], BasicHeaders, Methods_j8hc1r['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
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
      get: (option?: { query?: Methods_pk8yl9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_pk8yl9['get']['resBody'], BasicHeaders, Methods_pk8yl9['get']['status']>(prefix, PATH1, GET, option).json(),
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
      $get: (option?: { query?: Methods_pk8yl9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_pk8yl9['get']['resBody'], BasicHeaders, Methods_pk8yl9['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_pk8yl9['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    companies: {
      _id: (val1: number) => {
        const prefix1 = `${PATH2}/${val1}`;

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
          get: (option?: { query?: Methods_asyhtr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_asyhtr['get']['resBody'], BasicHeaders, Methods_asyhtr['get']['status']>(prefix, prefix1, GET, option).json(),
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
          $get: (option?: { query?: Methods_asyhtr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_asyhtr['get']['resBody'], BasicHeaders, Methods_asyhtr['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>ユーザが所属する事業所の情報を更新する</p>
           *
           * <p>※同時に複数のリクエストを受け付けない</p>
           */
          put: (option?: { body?: Methods_asyhtr['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_asyhtr['put']['resBody'], BasicHeaders, Methods_asyhtr['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>ユーザが所属する事業所の情報を更新する</p>
           *
           * <p>※同時に複数のリクエストを受け付けない</p>
           */
          $put: (option?: { body?: Methods_asyhtr['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_asyhtr['put']['resBody'], BasicHeaders, Methods_asyhtr['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_asyhtr['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
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
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_xi4crh['get']['resBody'], BasicHeaders, Methods_xi4crh['get']['status']>(prefix, PATH2, GET, option).json(),
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
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_xi4crh['get']['resBody'], BasicHeaders, Methods_xi4crh['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    deals: {
      _id: (val1: number) => {
        const prefix1 = `${PATH3}/${val1}`;

        return {
          payments: {
            _payment_id: (val3: number) => {
              const prefix3 = `${prefix1}${PATH4}/${val3}`;

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
                put: (option: { body: Methods_119chy4['put']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_119chy4['put']['resBody'], BasicHeaders, Methods_119chy4['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json(),
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
                $put: (option: { body: Methods_119chy4['put']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_119chy4['put']['resBody'], BasicHeaders, Methods_119chy4['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json().then(r => r.body),
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
                delete: (option: { query: Methods_119chy4['delete']['query'], config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_119chy4['delete']['status']>(prefix, prefix3, DELETE, option).send(),
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
                $delete: (option: { query: Methods_119chy4['delete']['query'], config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_119chy4['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: (option?: { method: 'delete'; query: Methods_119chy4['delete']['query'] } | undefined) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              };
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
            post: (option: { body: Methods_ydimfv['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_ydimfv['post']['resBody'], BasicHeaders, Methods_ydimfv['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option, 'URLSearchParams').json(),
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
            $post: (option: { body: Methods_ydimfv['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_ydimfv['post']['resBody'], BasicHeaders, Methods_ydimfv['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option, 'URLSearchParams').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`,
          },
          renews: {
            _renew_id: (val3: number) => {
              const prefix3 = `${prefix1}${PATH5}/${val3}`;

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
                put: (option: { body: Methods_1fsj8c8['put']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_1fsj8c8['put']['resBody'], BasicHeaders, Methods_1fsj8c8['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json(),
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
                $put: (option: { body: Methods_1fsj8c8['put']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_1fsj8c8['put']['resBody'], BasicHeaders, Methods_1fsj8c8['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json().then(r => r.body),
                /**
                 * <h2 id="">概要</h2>
                 * <p>指定した事業所の取引（収入／支出）の+更新を削除する</p>
                 * <h2 id="_3">注意点</h2>
                 * <ul> <li>本APIでは+更新の削除のみ可能です。取引や支払行に対する削除はできません。</li> <li>renew_idにはrenewsのid(+更新ID)を指定してください。renewsのdetailsのid(+更新の明細行ID)を指定できません。</li>
                 * <li>月締めされている仕訳に紐づく＋更新行の編集・削除はできません。</li> <li>承認済み仕訳に紐づく＋更新行の編集・削除は管理者権限のユーザーのみ可能です。</li>
                 * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
                 */
                delete: (option: { query: Methods_1fsj8c8['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods_1fsj8c8['delete']['resBody'], BasicHeaders, Methods_1fsj8c8['delete']['status']>(prefix, prefix3, DELETE, option).json(),
                /**
                 * <h2 id="">概要</h2>
                 * <p>指定した事業所の取引（収入／支出）の+更新を削除する</p>
                 * <h2 id="_3">注意点</h2>
                 * <ul> <li>本APIでは+更新の削除のみ可能です。取引や支払行に対する削除はできません。</li> <li>renew_idにはrenewsのid(+更新ID)を指定してください。renewsのdetailsのid(+更新の明細行ID)を指定できません。</li>
                 * <li>月締めされている仕訳に紐づく＋更新行の編集・削除はできません。</li> <li>承認済み仕訳に紐づく＋更新行の編集・削除は管理者権限のユーザーのみ可能です。</li>
                 * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
                 */
                $delete: (option: { query: Methods_1fsj8c8['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods_1fsj8c8['delete']['resBody'], BasicHeaders, Methods_1fsj8c8['delete']['status']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
                $path: (option?: { method: 'delete'; query: Methods_1fsj8c8['delete']['query'] } | undefined) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              };
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
            post: (option: { body: Methods_15d7fae['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_15d7fae['post']['resBody'], BasicHeaders, Methods_15d7fae['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'URLSearchParams').json(),
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
            $post: (option: { body: Methods_15d7fae['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_15d7fae['post']['resBody'], BasicHeaders, Methods_15d7fae['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'URLSearchParams').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH5}`,
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
          get: (option: { query: Methods_s42tfn['get']['query'], config?: T | undefined }) =>
            fetch<Methods_s42tfn['get']['resBody'], BasicHeaders, Methods_s42tfn['get']['status']>(prefix, prefix1, GET, option).json(),
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
          $get: (option: { query: Methods_s42tfn['get']['query'], config?: T | undefined }) =>
            fetch<Methods_s42tfn['get']['resBody'], BasicHeaders, Methods_s42tfn['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
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
          put: (option?: { body?: Methods_s42tfn['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_s42tfn['put']['resBody'], BasicHeaders, Methods_s42tfn['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
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
          $put: (option?: { body?: Methods_s42tfn['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_s42tfn['put']['resBody'], BasicHeaders, Methods_s42tfn['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods_s42tfn['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_s42tfn['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods_s42tfn['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_s42tfn['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_s42tfn['get']['query'] } | { method: 'delete'; query: Methods_s42tfn['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
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
      get: (option: { query: Methods_1j0wxe9['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1j0wxe9['get']['resBody'], BasicHeaders, Methods_1j0wxe9['get']['status']>(prefix, PATH3, GET, option).json(),
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
      $get: (option: { query: Methods_1j0wxe9['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1j0wxe9['get']['resBody'], BasicHeaders, Methods_1j0wxe9['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
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
      post: (option?: { body?: Methods_1j0wxe9['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1j0wxe9['post']['resBody'], BasicHeaders, Methods_1j0wxe9['post']['status']>(prefix, PATH3, POST, option, 'URLSearchParams').json(),
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
      $post: (option?: { body?: Methods_1j0wxe9['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1j0wxe9['post']['resBody'], BasicHeaders, Methods_1j0wxe9['post']['status']>(prefix, PATH3, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1j0wxe9['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    expense_application_line_templates: {
      _id: (val1: number) => {
        const prefix1 = `${PATH6}/${val1}`;

        return {
          get: (option: { query: Methods_1nkkdy['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1nkkdy['get']['resBody'], BasicHeaders, Methods_1nkkdy['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods_1nkkdy['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1nkkdy['get']['resBody'], BasicHeaders, Methods_1nkkdy['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @param option.body - 経費科目の更新
           */
          put: (option: { body: Methods_1nkkdy['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1nkkdy['put']['resBody'], BasicHeaders, Methods_1nkkdy['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          /**
           * @param option.body - 経費科目の更新
           */
          $put: (option: { body: Methods_1nkkdy['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1nkkdy['put']['resBody'], BasicHeaders, Methods_1nkkdy['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods_1nkkdy['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1nkkdy['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods_1nkkdy['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1nkkdy['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1nkkdy['get']['query'] } | { method: 'delete'; query: Methods_1nkkdy['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の経費科目一覧を取得する</p>
       */
      get: (option: { query: Methods_om0dga['get']['query'], config?: T | undefined }) =>
        fetch<Methods_om0dga['get']['resBody'], BasicHeaders, Methods_om0dga['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の経費科目一覧を取得する</p>
       */
      $get: (option: { query: Methods_om0dga['get']['query'], config?: T | undefined }) =>
        fetch<Methods_om0dga['get']['resBody'], BasicHeaders, Methods_om0dga['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      /**
       * @param option.body - 経費科目の作成
       */
      post: (option: { body: Methods_om0dga['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_om0dga['post']['resBody'], BasicHeaders, Methods_om0dga['post']['status']>(prefix, PATH6, POST, option, 'URLSearchParams').json(),
      /**
       * @param option.body - 経費科目の作成
       */
      $post: (option: { body: Methods_om0dga['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_om0dga['post']['resBody'], BasicHeaders, Methods_om0dga['post']['status']>(prefix, PATH6, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_om0dga['get']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    expense_applications: {
      _id: (val1: number) => {
        const prefix1 = `${PATH7}/${val1}`;

        return {
          get: (option: { query: Methods_1ata4r4['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1ata4r4['get']['resBody'], BasicHeaders, Methods_1ata4r4['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods_1ata4r4['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1ata4r4['get']['resBody'], BasicHeaders, Methods_1ata4r4['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
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
          put: (option?: { body?: Methods_1ata4r4['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1ata4r4['put']['resBody'], BasicHeaders, Methods_1ata4r4['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
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
          $put: (option?: { body?: Methods_1ata4r4['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1ata4r4['put']['resBody'], BasicHeaders, Methods_1ata4r4['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
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
          delete: (option: { query: Methods_1ata4r4['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1ata4r4['delete']['status']>(prefix, prefix1, DELETE, option).send(),
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
          $delete: (option: { query: Methods_1ata4r4['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1ata4r4['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1ata4r4['get']['query'] } | { method: 'delete'; query: Methods_1ata4r4['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      get: (option: { query: Methods_1watu38['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1watu38['get']['resBody'], BasicHeaders, Methods_1watu38['get']['status']>(prefix, PATH7, GET, option).json(),
      $get: (option: { query: Methods_1watu38['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1watu38['get']['resBody'], BasicHeaders, Methods_1watu38['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
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
      post: (option?: { body?: Methods_1watu38['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1watu38['post']['resBody'], BasicHeaders, Methods_1watu38['post']['status']>(prefix, PATH7, POST, option, 'URLSearchParams').json(),
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
      $post: (option?: { body?: Methods_1watu38['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1watu38['post']['resBody'], BasicHeaders, Methods_1watu38['post']['status']>(prefix, PATH7, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1watu38['get']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    forms: {
      selectables: {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所のフォーム用選択項目情報を取得する</p>
         */
        get: (option: { query: Methods_dub6pf['get']['query'], config?: T | undefined }) =>
          fetch<Methods_dub6pf['get']['resBody'], BasicHeaders, Methods_dub6pf['get']['status']>(prefix, PATH8, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所のフォーム用選択項目情報を取得する</p>
         */
        $get: (option: { query: Methods_dub6pf['get']['query'], config?: T | undefined }) =>
          fetch<Methods_dub6pf['get']['resBody'], BasicHeaders, Methods_dub6pf['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_dub6pf['get']['query'] } | undefined) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    invoices: {
      _id: (val1: number) => {
        const prefix1 = `${PATH9}/${val1}`;

        return {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の請求書詳細を取得する</p>
           */
          get: (option: { query: Methods_1hf812y['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1hf812y['get']['resBody'], BasicHeaders, Methods_1hf812y['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の請求書詳細を取得する</p>
           */
          $get: (option: { query: Methods_1hf812y['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1hf812y['get']['resBody'], BasicHeaders, Methods_1hf812y['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
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
          put: (option?: { body?: Methods_1hf812y['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1hf812y['put']['resBody'], BasicHeaders, Methods_1hf812y['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
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
          $put: (option?: { body?: Methods_1hf812y['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1hf812y['put']['resBody'], BasicHeaders, Methods_1hf812y['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の請求書を削除する</p>
           */
          delete: (option: { query: Methods_1hf812y['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1hf812y['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の請求書を削除する</p>
           */
          $delete: (option: { query: Methods_1hf812y['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1hf812y['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1hf812y['get']['query'] } | { method: 'delete'; query: Methods_1hf812y['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の請求書一覧を取得する</p>
       */
      get: (option: { query: Methods_1im2cji['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1im2cji['get']['resBody'], BasicHeaders, Methods_1im2cji['get']['status']>(prefix, PATH9, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の請求書一覧を取得する</p>
       */
      $get: (option: { query: Methods_1im2cji['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1im2cji['get']['resBody'], BasicHeaders, Methods_1im2cji['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
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
      post: (option?: { body?: Methods_1im2cji['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1im2cji['post']['resBody'], BasicHeaders, Methods_1im2cji['post']['status']>(prefix, PATH9, POST, option, 'URLSearchParams').json(),
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
      $post: (option?: { body?: Methods_1im2cji['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1im2cji['post']['resBody'], BasicHeaders, Methods_1im2cji['post']['status']>(prefix, PATH9, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1im2cji['get']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    items: {
      _id: (val1: number) => {
        const prefix1 = `${PATH10}/${val1}`;

        return {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の品目を取得する</p>
           */
          get: (option: { query: Methods_lcuria['get']['query'], config?: T | undefined }) =>
            fetch<Methods_lcuria['get']['resBody'], BasicHeaders, Methods_lcuria['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の品目を取得する</p>
           */
          $get: (option: { query: Methods_lcuria['get']['query'], config?: T | undefined }) =>
            fetch<Methods_lcuria['get']['resBody'], BasicHeaders, Methods_lcuria['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の品目を更新する</p>
           * @param option.body - 品目の更新
           */
          put: (option?: { body?: Methods_lcuria['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_lcuria['put']['resBody'], BasicHeaders, Methods_lcuria['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の品目を更新する</p>
           * @param option.body - 品目の更新
           */
          $put: (option?: { body?: Methods_lcuria['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_lcuria['put']['resBody'], BasicHeaders, Methods_lcuria['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の品目を削除する</p>
           */
          delete: (option: { query: Methods_lcuria['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_lcuria['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の品目を削除する</p>
           */
          $delete: (option: { query: Methods_lcuria['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_lcuria['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_lcuria['get']['query'] } | { method: 'delete'; query: Methods_lcuria['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の品目一覧を取得する</p>
       */
      get: (option: { query: Methods_1sl9ty['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1sl9ty['get']['resBody'], BasicHeaders, Methods_1sl9ty['get']['status']>(prefix, PATH10, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の品目一覧を取得する</p>
       */
      $get: (option: { query: Methods_1sl9ty['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1sl9ty['get']['resBody'], BasicHeaders, Methods_1sl9ty['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の品目を作成する</p>
       * @param option.body - 品目の作成
       */
      post: (option?: { body?: Methods_1sl9ty['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1sl9ty['post']['resBody'], BasicHeaders, Methods_1sl9ty['post']['status']>(prefix, PATH10, POST, option, 'URLSearchParams').json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の品目を作成する</p>
       * @param option.body - 品目の作成
       */
      $post: (option?: { body?: Methods_1sl9ty['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1sl9ty['post']['resBody'], BasicHeaders, Methods_1sl9ty['post']['status']>(prefix, PATH10, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1sl9ty['get']['query'] } | undefined) =>
        `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    journals: {
      reports: {
        _id: (val2: number) => {
          const prefix2 = `${PATH12}/${val2}`;

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
              get: (option: { query: Methods_vrr9vn['get']['query'], config?: T | undefined }) =>
                fetch<Methods_vrr9vn['get']['resBody'], BasicHeaders, Methods_vrr9vn['get']['status']>(prefix, `${prefix2}${PATH13}`, GET, option).blob(),
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
              $get: (option: { query: Methods_vrr9vn['get']['query'], config?: T | undefined }) =>
                fetch<Methods_vrr9vn['get']['resBody'], BasicHeaders, Methods_vrr9vn['get']['status']>(prefix, `${prefix2}${PATH13}`, GET, option).blob().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_vrr9vn['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
              get: (option: { query: Methods_14rp4qp['get']['query'], config?: T | undefined }) =>
                fetch<Methods_14rp4qp['get']['resBody'], BasicHeaders, Methods_14rp4qp['get']['status']>(prefix, `${prefix2}${PATH14}`, GET, option).json(),
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
              $get: (option: { query: Methods_14rp4qp['get']['query'], config?: T | undefined }) =>
                fetch<Methods_14rp4qp['get']['resBody'], BasicHeaders, Methods_14rp4qp['get']['status']>(prefix, `${prefix2}${PATH14}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_14rp4qp['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
          };
        },
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
      get: (option: { query: Methods_bpgo2i['get']['query'], config?: T | undefined }) =>
        fetch<Methods_bpgo2i['get']['resBody'], BasicHeaders, Methods_bpgo2i['get']['status']>(prefix, PATH11, GET, option).json(),
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
      $get: (option: { query: Methods_bpgo2i['get']['query'], config?: T | undefined }) =>
        fetch<Methods_bpgo2i['get']['resBody'], BasicHeaders, Methods_bpgo2i['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_bpgo2i['get']['query'] } | undefined) =>
        `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    manual_journals: {
      _id: (val1: number) => {
        const prefix1 = `${PATH15}/${val1}`;

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
          get: (option: { query: Methods_2ki4h3['get']['query'], config?: T | undefined }) =>
            fetch<Methods_2ki4h3['get']['resBody'], BasicHeaders, Methods_2ki4h3['get']['status']>(prefix, prefix1, GET, option).json(),
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
          $get: (option: { query: Methods_2ki4h3['get']['query'], config?: T | undefined }) =>
            fetch<Methods_2ki4h3['get']['resBody'], BasicHeaders, Methods_2ki4h3['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
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
          put: (option?: { body?: Methods_2ki4h3['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_2ki4h3['put']['resBody'], BasicHeaders, Methods_2ki4h3['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
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
          $put: (option?: { body?: Methods_2ki4h3['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_2ki4h3['put']['resBody'], BasicHeaders, Methods_2ki4h3['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の振替伝票を削除する</p>
           */
          delete: (option: { query: Methods_2ki4h3['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_2ki4h3['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の振替伝票を削除する</p>
           */
          $delete: (option: { query: Methods_2ki4h3['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_2ki4h3['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_2ki4h3['get']['query'] } | { method: 'delete'; query: Methods_2ki4h3['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
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
      get: (option: { query: Methods_7xsoh1['get']['query'], config?: T | undefined }) =>
        fetch<Methods_7xsoh1['get']['resBody'], BasicHeaders, Methods_7xsoh1['get']['status']>(prefix, PATH15, GET, option).json(),
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
      $get: (option: { query: Methods_7xsoh1['get']['query'], config?: T | undefined }) =>
        fetch<Methods_7xsoh1['get']['resBody'], BasicHeaders, Methods_7xsoh1['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
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
      post: (option?: { body?: Methods_7xsoh1['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_7xsoh1['post']['resBody'], BasicHeaders, Methods_7xsoh1['post']['status']>(prefix, PATH15, POST, option, 'URLSearchParams').json(),
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
      $post: (option?: { body?: Methods_7xsoh1['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_7xsoh1['post']['resBody'], BasicHeaders, Methods_7xsoh1['post']['status']>(prefix, PATH15, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_7xsoh1['get']['query'] } | undefined) =>
        `${prefix}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    partners: {
      _id: (val1: number) => {
        const prefix1 = `${PATH16}/${val1}`;

        return {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の取引先を取得する</p>
           * <ul>
           * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
           */
          get: (option: { query: Methods_zyy0xj['get']['query'], config?: T | undefined }) =>
            fetch<Methods_zyy0xj['get']['resBody'], BasicHeaders, Methods_zyy0xj['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の取引先を取得する</p>
           * <ul>
           * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
           */
          $get: (option: { query: Methods_zyy0xj['get']['query'], config?: T | undefined }) =>
            fetch<Methods_zyy0xj['get']['resBody'], BasicHeaders, Methods_zyy0xj['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した取引先の情報を更新する</p>
           * <ul>
           * <li>codeを指定、更新することはできません。</li>
           * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
           * @param option.body - 取引先の更新
           */
          put: (option: { body: Methods_zyy0xj['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_zyy0xj['put']['resBody'], BasicHeaders, Methods_zyy0xj['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した取引先の情報を更新する</p>
           * <ul>
           * <li>codeを指定、更新することはできません。</li>
           * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）, 支払期日設定（payment_term_attributes, 請求の入金期日設定（invoice_payment_term_attributes）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
           * @param option.body - 取引先の更新
           */
          $put: (option: { body: Methods_zyy0xj['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_zyy0xj['put']['resBody'], BasicHeaders, Methods_zyy0xj['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の取引先を削除する</p>
           */
          delete: (option: { query: Methods_zyy0xj['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_zyy0xj['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の取引先を削除する</p>
           */
          $delete: (option: { query: Methods_zyy0xj['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_zyy0xj['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_zyy0xj['get']['query'] } | { method: 'delete'; query: Methods_zyy0xj['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      code: {
        _code: (val2: string) => {
          const prefix2 = `${PATH17}/${val2}`;

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
            put: (option: { body: Methods_17ohx2p['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_17ohx2p['put']['resBody'], BasicHeaders, Methods_17ohx2p['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
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
            $put: (option: { body: Methods_17ohx2p['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_17ohx2p['put']['resBody'], BasicHeaders, Methods_17ohx2p['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の取引先一覧を取得する</p>
       * <ul>
       * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
       */
      get: (option: { query: Methods_13sbgxh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_13sbgxh['get']['resBody'], BasicHeaders, Methods_13sbgxh['get']['status']>(prefix, PATH16, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の取引先一覧を取得する</p>
       * <ul>
       * <li>振込元口座ID（payer_walletable_id）, 振込手数料負担（transfer_fee_handling_side）は法人向けのプロフェッショナルプラン以上で利用可能です。</li></ul>
       */
      $get: (option: { query: Methods_13sbgxh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_13sbgxh['get']['resBody'], BasicHeaders, Methods_13sbgxh['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
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
      post: (option: { body: Methods_13sbgxh['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_13sbgxh['post']['resBody'], BasicHeaders, Methods_13sbgxh['post']['status']>(prefix, PATH16, POST, option, 'URLSearchParams').json(),
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
      $post: (option: { body: Methods_13sbgxh['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_13sbgxh['post']['resBody'], BasicHeaders, Methods_13sbgxh['post']['status']>(prefix, PATH16, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_13sbgxh['get']['query'] } | undefined) =>
        `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    quotations: {
      _id: (val1: number) => {
        const prefix1 = `${PATH18}/${val1}`;

        return {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の見積書詳細を取得する</p>
           */
          get: (option: { query: Methods_xp60db['get']['query'], config?: T | undefined }) =>
            fetch<Methods_xp60db['get']['resBody'], BasicHeaders, Methods_xp60db['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の見積書詳細を取得する</p>
           */
          $get: (option: { query: Methods_xp60db['get']['query'], config?: T | undefined }) =>
            fetch<Methods_xp60db['get']['resBody'], BasicHeaders, Methods_xp60db['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
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
          put: (option?: { body?: Methods_xp60db['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_xp60db['put']['resBody'], BasicHeaders, Methods_xp60db['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
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
          $put: (option?: { body?: Methods_xp60db['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_xp60db['put']['resBody'], BasicHeaders, Methods_xp60db['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の見積書を削除する</p>
           */
          delete: (option: { query: Methods_xp60db['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_xp60db['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の見積書を削除する</p>
           */
          $delete: (option: { query: Methods_xp60db['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_xp60db['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_xp60db['get']['query'] } | { method: 'delete'; query: Methods_xp60db['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の見積書一覧を取得する</p>
       */
      get: (option: { query: Methods_1hbeo59['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1hbeo59['get']['resBody'], BasicHeaders, Methods_1hbeo59['get']['status']>(prefix, PATH18, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所の見積書一覧を取得する</p>
       */
      $get: (option: { query: Methods_1hbeo59['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1hbeo59['get']['resBody'], BasicHeaders, Methods_1hbeo59['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
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
      post: (option?: { body?: Methods_1hbeo59['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1hbeo59['post']['resBody'], BasicHeaders, Methods_1hbeo59['post']['status']>(prefix, PATH18, POST, option, 'URLSearchParams').json(),
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
      $post: (option?: { body?: Methods_1hbeo59['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1hbeo59['post']['resBody'], BasicHeaders, Methods_1hbeo59['post']['status']>(prefix, PATH18, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1hbeo59['get']['query'] } | undefined) =>
        `${prefix}${PATH18}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    receipts: {
      _id: (val1: number) => {
        const prefix1 = `${PATH19}/${val1}`;

        return {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所のファイルボックス 証憑ファイルを取得する</p>
           */
          get: (option: { query: Methods_gwls3x['get']['query'], config?: T | undefined }) =>
            fetch<Methods_gwls3x['get']['resBody'], BasicHeaders, Methods_gwls3x['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所のファイルボックス 証憑ファイルを取得する</p>
           */
          $get: (option: { query: Methods_gwls3x['get']['query'], config?: T | undefined }) =>
            fetch<Methods_gwls3x['get']['resBody'], BasicHeaders, Methods_gwls3x['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
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
          put: (option: { body: Methods_gwls3x['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_gwls3x['put']['resBody'], BasicHeaders, Methods_gwls3x['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
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
          $put: (option: { body: Methods_gwls3x['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_gwls3x['put']['resBody'], BasicHeaders, Methods_gwls3x['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>ファイルボックスの証憑ファイルを削除する</p>
           */
          delete: (option: { query: Methods_gwls3x['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_gwls3x['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>ファイルボックスの証憑ファイルを削除する</p>
           */
          $delete: (option: { query: Methods_gwls3x['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_gwls3x['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_gwls3x['get']['query'] } | { method: 'delete'; query: Methods_gwls3x['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所のファイルボックス 証憑ファイル一覧を取得する</p>
       */
      get: (option: { query: Methods_lcgnb7['get']['query'], config?: T | undefined }) =>
        fetch<Methods_lcgnb7['get']['resBody'], BasicHeaders, Methods_lcgnb7['get']['status']>(prefix, PATH19, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所のファイルボックス 証憑ファイル一覧を取得する</p>
       */
      $get: (option: { query: Methods_lcgnb7['get']['query'], config?: T | undefined }) =>
        fetch<Methods_lcgnb7['get']['resBody'], BasicHeaders, Methods_lcgnb7['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ファイルボックスに証憑ファイルをアップロードする</p>
       */
      post: (option: { body: Methods_lcgnb7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_lcgnb7['post']['resBody'], BasicHeaders, Methods_lcgnb7['post']['status']>(prefix, PATH19, POST, option, 'FormData').json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ファイルボックスに証憑ファイルをアップロードする</p>
       */
      $post: (option: { body: Methods_lcgnb7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_lcgnb7['post']['resBody'], BasicHeaders, Methods_lcgnb7['post']['status']>(prefix, PATH19, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_lcgnb7['get']['query'] } | undefined) =>
        `${prefix}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
        get: (option: { query: Methods_8z6ya0['get']['query'], config?: T | undefined }) =>
          fetch<Methods_8z6ya0['get']['resBody'], BasicHeaders, Methods_8z6ya0['get']['status']>(prefix, PATH20, GET, option).json(),
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
        $get: (option: { query: Methods_8z6ya0['get']['query'], config?: T | undefined }) =>
          fetch<Methods_8z6ya0['get']['resBody'], BasicHeaders, Methods_8z6ya0['get']['status']>(prefix, PATH20, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_8z6ya0['get']['query'] } | undefined) =>
          `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
        get: (option: { query: Methods_1q45gpe['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1q45gpe['get']['resBody'], BasicHeaders, Methods_1q45gpe['get']['status']>(prefix, PATH21, GET, option).json(),
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
        $get: (option: { query: Methods_1q45gpe['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1q45gpe['get']['resBody'], BasicHeaders, Methods_1q45gpe['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1q45gpe['get']['query'] } | undefined) =>
          `${prefix}${PATH21}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
        get: (option: { query: Methods_1lqa25w['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lqa25w['get']['resBody'], BasicHeaders, Methods_1lqa25w['get']['status']>(prefix, PATH22, GET, option).json(),
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
        $get: (option: { query: Methods_1lqa25w['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lqa25w['get']['resBody'], BasicHeaders, Methods_1lqa25w['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1lqa25w['get']['query'] } | undefined) =>
          `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
        get: (option: { query: Methods_376oif['get']['query'], config?: T | undefined }) =>
          fetch<Methods_376oif['get']['resBody'], BasicHeaders, Methods_376oif['get']['status']>(prefix, PATH23, GET, option).json(),
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
        $get: (option: { query: Methods_376oif['get']['query'], config?: T | undefined }) =>
          fetch<Methods_376oif['get']['resBody'], BasicHeaders, Methods_376oif['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_376oif['get']['query'] } | undefined) =>
          `${prefix}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
        get: (option: { query: Methods_wf8kc4['get']['query'], config?: T | undefined }) =>
          fetch<Methods_wf8kc4['get']['resBody'], BasicHeaders, Methods_wf8kc4['get']['status']>(prefix, PATH24, GET, option).json(),
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
        $get: (option: { query: Methods_wf8kc4['get']['query'], config?: T | undefined }) =>
          fetch<Methods_wf8kc4['get']['resBody'], BasicHeaders, Methods_wf8kc4['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_wf8kc4['get']['query'] } | undefined) =>
          `${prefix}${PATH24}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
        get: (option: { query: Methods_u62eat['get']['query'], config?: T | undefined }) =>
          fetch<Methods_u62eat['get']['resBody'], BasicHeaders, Methods_u62eat['get']['status']>(prefix, PATH25, GET, option).json(),
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
        $get: (option: { query: Methods_u62eat['get']['query'], config?: T | undefined }) =>
          fetch<Methods_u62eat['get']['resBody'], BasicHeaders, Methods_u62eat['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_u62eat['get']['query'] } | undefined) =>
          `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
        get: (option: { query: Methods_2kakxf['get']['query'], config?: T | undefined }) =>
          fetch<Methods_2kakxf['get']['resBody'], BasicHeaders, Methods_2kakxf['get']['status']>(prefix, PATH26, GET, option).json(),
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
        $get: (option: { query: Methods_2kakxf['get']['query'], config?: T | undefined }) =>
          fetch<Methods_2kakxf['get']['resBody'], BasicHeaders, Methods_2kakxf['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_2kakxf['get']['query'] } | undefined) =>
          `${prefix}${PATH26}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    sections: {
      _id: (val1: number) => {
        const prefix1 = `${PATH27}/${val1}`;

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
          get: (option: { query: Methods_13j4n1q['get']['query'], config?: T | undefined }) =>
            fetch<Methods_13j4n1q['get']['resBody'], BasicHeaders, Methods_13j4n1q['get']['status']>(prefix, prefix1, GET, option).json(),
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
          $get: (option: { query: Methods_13j4n1q['get']['query'], config?: T | undefined }) =>
            fetch<Methods_13j4n1q['get']['resBody'], BasicHeaders, Methods_13j4n1q['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
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
          put: (option?: { body?: Methods_13j4n1q['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_13j4n1q['put']['resBody'], BasicHeaders, Methods_13j4n1q['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
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
          $put: (option?: { body?: Methods_13j4n1q['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_13j4n1q['put']['resBody'], BasicHeaders, Methods_13j4n1q['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の部門を削除する</p>
           */
          delete: (option: { query: Methods_13j4n1q['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_13j4n1q['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の部門を削除する</p>
           */
          $delete: (option: { query: Methods_13j4n1q['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_13j4n1q['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_13j4n1q['get']['query'] } | { method: 'delete'; query: Methods_13j4n1q['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
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
      get: (option: { query: Methods_bg6t02['get']['query'], config?: T | undefined }) =>
        fetch<Methods_bg6t02['get']['resBody'], BasicHeaders, Methods_bg6t02['get']['status']>(prefix, PATH27, GET, option).json(),
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
      $get: (option: { query: Methods_bg6t02['get']['query'], config?: T | undefined }) =>
        fetch<Methods_bg6t02['get']['resBody'], BasicHeaders, Methods_bg6t02['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
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
      post: (option?: { body?: Methods_bg6t02['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_bg6t02['post']['resBody'], BasicHeaders, Methods_bg6t02['post']['status']>(prefix, PATH27, POST, option, 'URLSearchParams').json(),
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
      $post: (option?: { body?: Methods_bg6t02['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_bg6t02['post']['resBody'], BasicHeaders, Methods_bg6t02['post']['status']>(prefix, PATH27, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_bg6t02['get']['query'] } | undefined) =>
        `${prefix}${PATH27}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    segments: {
      _segment_id: (val1: number) => {
        const prefix1 = `${PATH28}/${val1}`;

        return {
          tags: {
            _id: (val3: number) => {
              const prefix3 = `${prefix1}${PATH29}/${val3}`;

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
                put: (option: { body: Methods_2j04oy['put']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_2j04oy['put']['resBody'], BasicHeaders, Methods_2j04oy['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json(),
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
                $put: (option: { body: Methods_2j04oy['put']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_2j04oy['put']['resBody'], BasicHeaders, Methods_2j04oy['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json().then(r => r.body),
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
                delete: (option: { query: Methods_2j04oy['delete']['query'], config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_2j04oy['delete']['status']>(prefix, prefix3, DELETE, option).send(),
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
                $delete: (option: { query: Methods_2j04oy['delete']['query'], config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods_2j04oy['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: (option?: { method: 'delete'; query: Methods_2j04oy['delete']['query'] } | undefined) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              };
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
            get: (option: { query: Methods_caj7ye['get']['query'], config?: T | undefined }) =>
              fetch<Methods_caj7ye['get']['resBody'], BasicHeaders, Methods_caj7ye['get']['status']>(prefix, `${prefix1}${PATH29}`, GET, option).json(),
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
            $get: (option: { query: Methods_caj7ye['get']['query'], config?: T | undefined }) =>
              fetch<Methods_caj7ye['get']['resBody'], BasicHeaders, Methods_caj7ye['get']['status']>(prefix, `${prefix1}${PATH29}`, GET, option).json().then(r => r.body),
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
            post: (option: { body: Methods_caj7ye['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_caj7ye['post']['resBody'], BasicHeaders, Methods_caj7ye['post']['status']>(prefix, `${prefix1}${PATH29}`, POST, option, 'URLSearchParams').json(),
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
            $post: (option: { body: Methods_caj7ye['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_caj7ye['post']['resBody'], BasicHeaders, Methods_caj7ye['post']['status']>(prefix, `${prefix1}${PATH29}`, POST, option, 'URLSearchParams').json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_caj7ye['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH29}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
    },
    tags: {
      _id: (val1: number) => {
        const prefix1 = `${PATH30}/${val1}`;

        return {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所のメモタグを取得する</p>
           */
          get: (option: { query: Methods_1skf2bx['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1skf2bx['get']['resBody'], BasicHeaders, Methods_1skf2bx['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所のメモタグを取得する</p>
           */
          $get: (option: { query: Methods_1skf2bx['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1skf2bx['get']['resBody'], BasicHeaders, Methods_1skf2bx['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所のメモタグを更新する</p>
           * @param option.body - メモタグの更新
           */
          put: (option?: { body?: Methods_1skf2bx['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1skf2bx['put']['resBody'], BasicHeaders, Methods_1skf2bx['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所のメモタグを更新する</p>
           * @param option.body - メモタグの更新
           */
          $put: (option?: { body?: Methods_1skf2bx['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1skf2bx['put']['resBody'], BasicHeaders, Methods_1skf2bx['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所のメモタグを削除する</p>
           */
          delete: (option: { query: Methods_1skf2bx['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1skf2bx['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所のメモタグを削除する</p>
           */
          $delete: (option: { query: Methods_1skf2bx['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1skf2bx['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1skf2bx['get']['query'] } | { method: 'delete'; query: Methods_1skf2bx['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所のメモタグ一覧を取得する</p>
       */
      get: (option: { query: Methods_rxnz0j['get']['query'], config?: T | undefined }) =>
        fetch<Methods_rxnz0j['get']['resBody'], BasicHeaders, Methods_rxnz0j['get']['status']>(prefix, PATH30, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所のメモタグ一覧を取得する</p>
       */
      $get: (option: { query: Methods_rxnz0j['get']['query'], config?: T | undefined }) =>
        fetch<Methods_rxnz0j['get']['resBody'], BasicHeaders, Methods_rxnz0j['get']['status']>(prefix, PATH30, GET, option).json().then(r => r.body),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所のメモタグを作成する</p>
       * @param option.body - メモタグの作成
       */
      post: (option: { body: Methods_rxnz0j['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_rxnz0j['post']['resBody'], BasicHeaders, Methods_rxnz0j['post']['status']>(prefix, PATH30, POST, option, 'URLSearchParams').json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所のメモタグを作成する</p>
       * @param option.body - メモタグの作成
       */
      $post: (option: { body: Methods_rxnz0j['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_rxnz0j['post']['resBody'], BasicHeaders, Methods_rxnz0j['post']['status']>(prefix, PATH30, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_rxnz0j['get']['query'] } | undefined) =>
        `${prefix}${PATH30}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    taxes: {
      codes: {
        _code: (val2: number) => {
          const prefix2 = `${PATH31}/${val2}`;

          return {
            /**
             * <h2 id="">概要</h2>
             *
             * <p>税区分コードを取得する</p>
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_agxjle['get']['resBody'], BasicHeaders, Methods_agxjle['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * <h2 id="">概要</h2>
             *
             * <p>税区分コードを取得する</p>
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_agxjle['get']['resBody'], BasicHeaders, Methods_agxjle['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * <h2 id="">概要</h2>
         *
         * <p>税区分コード一覧を取得する</p>
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_x92uhq['get']['resBody'], BasicHeaders, Methods_x92uhq['get']['status']>(prefix, PATH31, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>税区分コード一覧を取得する</p>
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_x92uhq['get']['resBody'], BasicHeaders, Methods_x92uhq['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH31}`,
      },
      companies: {
        _company_id: (val2: number) => {
          const prefix2 = `${PATH32}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_89r781['get']['resBody'], BasicHeaders, Methods_89r781['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_89r781['get']['resBody'], BasicHeaders, Methods_89r781['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
    },
    transfers: {
      _id: (val1: number) => {
        const prefix1 = `${PATH33}/${val1}`;

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
          get: (option: { query: Methods_14ohnqa['get']['query'], config?: T | undefined }) =>
            fetch<Methods_14ohnqa['get']['resBody'], BasicHeaders, Methods_14ohnqa['get']['status']>(prefix, prefix1, GET, option).json(),
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
          $get: (option: { query: Methods_14ohnqa['get']['query'], config?: T | undefined }) =>
            fetch<Methods_14ohnqa['get']['resBody'], BasicHeaders, Methods_14ohnqa['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
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
          put: (option: { body: Methods_14ohnqa['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_14ohnqa['put']['resBody'], BasicHeaders, Methods_14ohnqa['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
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
          $put: (option: { body: Methods_14ohnqa['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_14ohnqa['put']['resBody'], BasicHeaders, Methods_14ohnqa['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の取引（振替）を削除する</p>
           */
          delete: (option: { query: Methods_14ohnqa['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_14ohnqa['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の取引（振替）を削除する</p>
           */
          $delete: (option: { query: Methods_14ohnqa['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_14ohnqa['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_14ohnqa['get']['query'] } | { method: 'delete'; query: Methods_14ohnqa['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
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
      get: (option: { query: Methods_uvjcbq['get']['query'], config?: T | undefined }) =>
        fetch<Methods_uvjcbq['get']['resBody'], BasicHeaders, Methods_uvjcbq['get']['status']>(prefix, PATH33, GET, option).json(),
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
      $get: (option: { query: Methods_uvjcbq['get']['query'], config?: T | undefined }) =>
        fetch<Methods_uvjcbq['get']['resBody'], BasicHeaders, Methods_uvjcbq['get']['status']>(prefix, PATH33, GET, option).json().then(r => r.body),
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
      post: (option?: { body?: Methods_uvjcbq['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_uvjcbq['post']['resBody'], BasicHeaders, Methods_uvjcbq['post']['status']>(prefix, PATH33, POST, option, 'URLSearchParams').json(),
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
      $post: (option?: { body?: Methods_uvjcbq['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_uvjcbq['post']['resBody'], BasicHeaders, Methods_uvjcbq['post']['status']>(prefix, PATH33, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_uvjcbq['get']['query'] } | undefined) =>
        `${prefix}${PATH33}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    users: {
      capabilities: {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザの権限情報を取得する</p>
         */
        get: (option: { query: Methods_su8bid['get']['query'], config?: T | undefined }) =>
          fetch<Methods_su8bid['get']['resBody'], BasicHeaders, Methods_su8bid['get']['status']>(prefix, PATH35, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザの権限情報を取得する</p>
         */
        $get: (option: { query: Methods_su8bid['get']['query'], config?: T | undefined }) =>
          fetch<Methods_su8bid['get']['resBody'], BasicHeaders, Methods_su8bid['get']['status']>(prefix, PATH35, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_su8bid['get']['query'] } | undefined) =>
          `${prefix}${PATH35}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      me: {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザの情報を取得する</p>
         */
        get: (option?: { query?: Methods_jzr18p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_jzr18p['get']['resBody'], BasicHeaders, Methods_jzr18p['get']['status']>(prefix, PATH36, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザの情報を取得する</p>
         */
        $get: (option?: { query?: Methods_jzr18p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_jzr18p['get']['resBody'], BasicHeaders, Methods_jzr18p['get']['status']>(prefix, PATH36, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザー情報を更新する</p>
         * @param option.body - ユーザー情報の更新
         */
        put: (option?: { body?: Methods_jzr18p['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_jzr18p['put']['resBody'], BasicHeaders, Methods_jzr18p['put']['status']>(prefix, PATH36, PUT, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザー情報を更新する</p>
         * @param option.body - ユーザー情報の更新
         */
        $put: (option?: { body?: Methods_jzr18p['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_jzr18p['put']['resBody'], BasicHeaders, Methods_jzr18p['put']['status']>(prefix, PATH36, PUT, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_jzr18p['get']['query'] } | undefined) =>
          `${prefix}${PATH36}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * <h2 id="">概要</h2>
       *
       * <p>事業所に所属するユーザーの一覧を取得する</p>
       */
      get: (option: { query: Methods_1xhiioa['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH34, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>事業所に所属するユーザーの一覧を取得する</p>
       */
      $get: (option: { query: Methods_1xhiioa['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH34, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xhiioa['get']['query'] } | undefined) =>
        `${prefix}${PATH34}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    wallet_txns: {
      _id: (val1: number) => {
        const prefix1 = `${PATH37}/${val1}`;

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
          get: (option: { query: Methods_h90hal['get']['query'], config?: T | undefined }) =>
            fetch<Methods_h90hal['get']['resBody'], BasicHeaders, Methods_h90hal['get']['status']>(prefix, prefix1, GET, option).json(),
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
          $get: (option: { query: Methods_h90hal['get']['query'], config?: T | undefined }) =>
            fetch<Methods_h90hal['get']['resBody'], BasicHeaders, Methods_h90hal['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の明細を削除する</p>
           */
          delete: (option: { query: Methods_h90hal['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_h90hal['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>指定した事業所の明細を削除する</p>
           */
          $delete: (option: { query: Methods_h90hal['delete']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_h90hal['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_h90hal['get']['query'] } | { method: 'delete'; query: Methods_h90hal['delete']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
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
      get: (option: { query: Methods_1rv49ab['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1rv49ab['get']['resBody'], BasicHeaders, Methods_1rv49ab['get']['status']>(prefix, PATH37, GET, option).json(),
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
      $get: (option: { query: Methods_1rv49ab['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1rv49ab['get']['resBody'], BasicHeaders, Methods_1rv49ab['get']['status']>(prefix, PATH37, GET, option).json().then(r => r.body),
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
      post: (option?: { body?: Methods_1rv49ab['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1rv49ab['post']['resBody'], BasicHeaders, Methods_1rv49ab['post']['status']>(prefix, PATH37, POST, option, 'URLSearchParams').json(),
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
      $post: (option?: { body?: Methods_1rv49ab['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1rv49ab['post']['resBody'], BasicHeaders, Methods_1rv49ab['post']['status']>(prefix, PATH37, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1rv49ab['get']['query'] } | undefined) =>
        `${prefix}${PATH37}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    walletables: {
      _type: (val1: string) => {
        const prefix1 = `${PATH38}/${val1}`;

        return {
          _id: (val2: number) => {
            const prefix2 = `${prefix1}/${val2}`;

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
              get: (option: { query: Methods_xx015['get']['query'], config?: T | undefined }) =>
                fetch<Methods_xx015['get']['resBody'], BasicHeaders, Methods_xx015['get']['status']>(prefix, prefix2, GET, option).json(),
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
              $get: (option: { query: Methods_xx015['get']['query'], config?: T | undefined }) =>
                fetch<Methods_xx015['get']['resBody'], BasicHeaders, Methods_xx015['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              /**
               * <h2 id="">概要</h2>
               *
               * <p>口座を更新する</p>
               * @param option.body - 口座の作成
               */
              put: (option: { body?: Methods_xx015['put']['reqBody'] | undefined, query: Methods_xx015['put']['query'], config?: T | undefined }) =>
                fetch<Methods_xx015['put']['resBody'], BasicHeaders, Methods_xx015['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
              /**
               * <h2 id="">概要</h2>
               *
               * <p>口座を更新する</p>
               * @param option.body - 口座の作成
               */
              $put: (option: { body?: Methods_xx015['put']['reqBody'] | undefined, query: Methods_xx015['put']['query'], config?: T | undefined }) =>
                fetch<Methods_xx015['put']['resBody'], BasicHeaders, Methods_xx015['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
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
              delete: (option: { query: Methods_xx015['delete']['query'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_xx015['delete']['status']>(prefix, prefix2, DELETE, option).send(),
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
              $delete: (option: { query: Methods_xx015['delete']['query'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_xx015['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_xx015['get']['query'] } | { method: 'put'; query: Methods_xx015['put']['query'] } | { method: 'delete'; query: Methods_xx015['delete']['query'] } | undefined) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            };
          },
        };
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
      get: (option: { query: Methods_1nphqfo['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1nphqfo['get']['resBody'], BasicHeaders, Methods_1nphqfo['get']['status']>(prefix, PATH38, GET, option).json(),
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
      $get: (option: { query: Methods_1nphqfo['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1nphqfo['get']['resBody'], BasicHeaders, Methods_1nphqfo['get']['status']>(prefix, PATH38, GET, option).json().then(r => r.body),
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
      post: (option?: { body?: Methods_1nphqfo['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1nphqfo['post']['resBody'], BasicHeaders, Methods_1nphqfo['post']['status']>(prefix, PATH38, POST, option, 'URLSearchParams').json(),
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
      $post: (option?: { body?: Methods_1nphqfo['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1nphqfo['post']['resBody'], BasicHeaders, Methods_1nphqfo['post']['status']>(prefix, PATH38, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1nphqfo['get']['query'] } | undefined) =>
        `${prefix}${PATH38}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
