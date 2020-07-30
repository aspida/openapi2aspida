/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200

    resBody: {
      wallet_txns: Types.userCapability
      deals: Types.userCapability
      transfers: Types.userCapability
      docs: Types.userCapability
      doc_postings: Types.userCapability
      receipts: Types.userCapability
      receipt_stream_editor: Types.userCapability
      expense_applications: Types.userCapability
      spreadsheets: Types.userCapability
      payment_requests: Types.userCapability
      request_forms: Types.userCapability
      approval_requests: Types.userCapability
      reports: Types.userCapability
      reports_income_expense: Types.userCapability
      reports_receivables: Types.userCapability
      reports_payables: Types.userCapability
      reports_cash_balance: Types.userCapability
      reports_crosstabs: Types.userCapability
      reports_general_ledgers: Types.userCapability
      reports_pl: Types.userCapability
      reports_bs: Types.userCapability
      reports_journals: Types.userCapability
      reports_managements_planning: Types.userCapability
      reports_managements_navigation: Types.userCapability
      manual_journals: Types.userCapability
      fixed_assets: Types.userCapability
      inventory_refreshes: Types.userCapability
      biz_allocations: Types.userCapability
      payment_records: Types.userCapability
      annual_reports: Types.userCapability
      tax_reports: Types.userCapability
      consumption_entries: Types.userCapability
      tax_return: Types.userCapability
      account_item_statements: Types.userCapability
      month_end: Types.userCapability
      year_end: Types.userCapability
      walletables: Types.userCapability
      companies: Types.userCapability
      invitations: Types.userCapability
      sign_in_logs: Types.userCapability
      backups: Types.userCapability
      opening_balances: Types.userCapability
      system_conversion: Types.userCapability
      resets: Types.userCapability
      partners: Types.userCapability
      items: Types.userCapability
      sections: Types.userCapability
      tags: Types.userCapability
      account_items: Types.userCapability
      taxes: Types.userCapability
      user_matchers: Types.userCapability
      deal_templates: Types.userCapability
      manual_journal_templates: Types.userCapability
      cost_allocations: Types.userCapability
      approval_flow_routes: Types.userCapability
      expense_application_templates: Types.userCapability
      workflows: Types.userCapability
      oauth_applications: Types.userCapability
      oauth_authorizations: Types.userCapability
      bank_accountant_staff_users: Types.userCapability
    }
  }
}
