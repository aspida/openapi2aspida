/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    resBody: {
      taxes: {
        code: number
        name: string
        name_ja: string
        display_category: 'tax_5' | 'tax_8' | 'tax_r8' | 'tax_10' | null
        available: boolean
      }[]
    }
  }
}
