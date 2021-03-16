/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>ユーザの権限情報を取得する</p>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200

    resBody: {
      wallet_txns: Types.UserCapability
      deals: Types.UserCapability
      transfers: Types.UserCapability
      docs: Types.UserCapability
      doc_postings: Types.UserCapability
      receipts: Types.UserCapability
      receipt_stream_editor: Types.UserCapability
      expense_applications: Types.UserCapability
      spreadsheets: Types.UserCapability
      payment_requests: Types.UserCapability
      request_forms: Types.UserCapability
      approval_requests: Types.UserCapability
      reports: Types.UserCapability
      reports_income_expense: Types.UserCapability
      reports_receivables: Types.UserCapability
      reports_payables: Types.UserCapability
      reports_cash_balance: Types.UserCapability
      reports_crosstabs: Types.UserCapability
      reports_general_ledgers: Types.UserCapability
      reports_pl: Types.UserCapability
      reports_bs: Types.UserCapability
      reports_journals: Types.UserCapability
      reports_managements_planning: Types.UserCapability
      reports_managements_navigation: Types.UserCapability
      manual_journals: Types.UserCapability
      fixed_assets: Types.UserCapability
      inventory_refreshes: Types.UserCapability
      biz_allocations: Types.UserCapability
      payment_records: Types.UserCapability
      annual_reports: Types.UserCapability
      tax_reports: Types.UserCapability
      consumption_entries: Types.UserCapability
      tax_return: Types.UserCapability
      account_item_statements: Types.UserCapability
      month_end: Types.UserCapability
      year_end: Types.UserCapability
      walletables: Types.UserCapability
      companies: Types.UserCapability
      invitations: Types.UserCapability
      sign_in_logs: Types.UserCapability
      backups: Types.UserCapability
      opening_balances: Types.UserCapability
      system_conversion: Types.UserCapability
      resets: Types.UserCapability
      partners: Types.UserCapability
      items: Types.UserCapability
      sections: Types.UserCapability
      tags: Types.UserCapability
      account_items: Types.UserCapability
      taxes: Types.UserCapability
      user_matchers: Types.UserCapability
      deal_templates: Types.UserCapability
      manual_journal_templates: Types.UserCapability
      cost_allocations: Types.UserCapability
      approval_flow_routes: Types.UserCapability
      expense_application_templates: Types.UserCapability
      workflows: Types.UserCapability
      oauth_applications: Types.UserCapability
      oauth_authorizations: Types.UserCapability
      bank_accountant_staff_users: Types.UserCapability
    }
  }
}
