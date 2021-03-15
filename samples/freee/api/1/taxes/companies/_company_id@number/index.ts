/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    resBody: {
      taxes: {
        /** 税区分コード */
        code: number
        /** 税区分名 */
        name: string
        /** 税区分名（日本語表示用） */
        name_ja: string
        /** 税区分の表示カテゴリ（tax_5: 5%表示の税区分、tax_8: 8%表示の税区分、tax_r8: 軽減税率8%表示の税区分、tax_10: 10%表示の税区分、null: 税率未設定税区分） */
        display_category: 'tax_5' | 'tax_8' | 'tax_r8' | 'tax_10' | null
        /** true: 使用する、false: 使用しない */
        available: boolean
      }[]
    }
  }
}
