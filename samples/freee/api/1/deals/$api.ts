/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_id@number'
// prettier-ignore
import { Methods as Methods2 } from './_id@number/payments'
// prettier-ignore
import { Methods as Methods3 } from './_id@number/payments/_payment_id@number'
// prettier-ignore
import { Methods as Methods4 } from './_id@number/renews'
// prettier-ignore
import { Methods as Methods5 } from './_id@number/renews/_renew_id@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/deals'
  const PATH1 = '/payments'
  const PATH2 = '/renews'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        payments: {
          _payment_id: (val2: number) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

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
              put: (option: { body: Methods3['put']['reqBody'], config?: T }) =>
                fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
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
              $put: (option: { body: Methods3['put']['reqBody'], config?: T }) =>
                fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
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
              delete: (option: { query: Methods3['delete']['query'], config?: T }) =>
                fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix2, DELETE, option).send(),
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
              $delete: (option: { query: Methods3['delete']['query'], config?: T }) =>
                fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: (option?: { method: 'delete'; query: Methods3['delete']['query'] }) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
          post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'URLSearchParams').json(),
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
          $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'URLSearchParams').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        renews: {
          _renew_id: (val2: number) => {
            const prefix2 = `${prefix0}${PATH2}/${val2}`

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
              put: (option: { body: Methods5['put']['reqBody'], config?: T }) =>
                fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
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
              $put: (option: { body: Methods5['put']['reqBody'], config?: T }) =>
                fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
              /**
               * <h2 id="">概要</h2>
               * <p>指定した事業所の取引（収入／支出）の+更新を削除する</p>
               * <h2 id="_3">注意点</h2>
               * <ul> <li>本APIでは+更新の削除のみ可能です。取引や支払行に対する削除はできません。</li> <li>renew_idにはrenewsのid(+更新ID)を指定してください。renewsのdetailsのid(+更新の明細行ID)を指定できません。</li>
               * <li>月締めされている仕訳に紐づく＋更新行の編集・削除はできません。</li> <li>承認済み仕訳に紐づく＋更新行の編集・削除は管理者権限のユーザーのみ可能です。</li>
               * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
               */
              delete: (option: { query: Methods5['delete']['query'], config?: T }) =>
                fetch<Methods5['delete']['resBody'], BasicHeaders, Methods5['delete']['status']>(prefix, prefix2, DELETE, option).json(),
              /**
               * <h2 id="">概要</h2>
               * <p>指定した事業所の取引（収入／支出）の+更新を削除する</p>
               * <h2 id="_3">注意点</h2>
               * <ul> <li>本APIでは+更新の削除のみ可能です。取引や支払行に対する削除はできません。</li> <li>renew_idにはrenewsのid(+更新ID)を指定してください。renewsのdetailsのid(+更新の明細行ID)を指定できません。</li>
               * <li>月締めされている仕訳に紐づく＋更新行の編集・削除はできません。</li> <li>承認済み仕訳に紐づく＋更新行の編集・削除は管理者権限のユーザーのみ可能です。</li>
               * <li>本APIで取引を更新すると、消費税の計算方法は必ず内税方式が選択されます。</li> </ul>
               */
              $delete: (option: { query: Methods5['delete']['query'], config?: T }) =>
                fetch<Methods5['delete']['resBody'], BasicHeaders, Methods5['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
              $path: (option?: { method: 'delete'; query: Methods5['delete']['query'] }) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
          post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'URLSearchParams').json(),
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
          $post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'URLSearchParams').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
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
        get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
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
        $get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
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
        put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
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
        $put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] } | { method: 'delete'; query: Methods1['delete']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
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
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
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
    post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
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
    $post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
