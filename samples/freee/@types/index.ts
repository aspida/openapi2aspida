/* eslint-disable */
import type { ReadStream } from 'fs'

export type PaymentParams = {
  /** 事業所ID */
  company_id: number
  /** 支払日 */
  date: string
  /** 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet, プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）: private_account_item)：payments指定時は必須 */
  from_walletable_type: 'bank_account' | 'credit_card' | 'wallet' | 'private_account_item'
  /** 口座ID（from_walletable_typeがprivate_account_itemの場合は勘定科目ID）：payments指定時は必須 */
  from_walletable_id: number
  /** 金額 */
  amount: number
}

export type DealCreateParams = {
  /** 発生日 (yyyy-mm-dd) */
  issue_date: string
  /** 収支区分 (収入: income, 支出: expense) */
  type: 'income' | 'expense'
  /** 事業所ID */
  company_id: number
  /** 支払期日(yyyy-mm-dd) */
  due_date?: string | undefined
  /** 取引先ID */
  partner_id?: number | undefined
  /** 取引先コード */
  partner_code?: string | undefined
  /** 管理番号 */
  ref_number?: string | undefined
  details: {
    /** 税区分コード */
    tax_code?: number | undefined
    /** 税区分ID（廃止予定。上記tax_codeを使用してください。tax_code, tax_idはどちらかの指定が必須です。） */
    tax_id?: number | undefined
    /** 勘定科目ID */
    account_item_id: number
    /** 取引金額（税込で指定してください） */
    amount: number
    /** 品目ID */
    item_id?: number | undefined
    /** 部門ID */
    section_id?: number | undefined
    /** メモタグID */
    tag_ids?: number[] | undefined
    /** セグメント１ID */
    segment_1_tag_id?: number | undefined
    /** セグメント２ID */
    segment_2_tag_id?: number | undefined
    /** セグメント３ID */
    segment_3_tag_id?: number | undefined
    /** 備考 */
    description?: string | undefined
    /** 消費税額（指定しない場合は自動で計算されます） */
    vat?: number | undefined
  }[]
  /** 支払行一覧（配列）：未指定の場合、未決済の取引を作成します。 */
  payments?: {
    /** 支払金額：payments指定時は必須 */
    amount: number
    /** 口座ID（from_walletable_typeがprivate_account_itemの場合は勘定科目ID）：payments指定時は必須 */
    from_walletable_id: number
    /** 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet, プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）: private_account_item)：payments指定時は必須 */
    from_walletable_type: 'bank_account' | 'credit_card' | 'wallet' | 'private_account_item'
    /** 支払日：payments指定時は必須 */
    date: string
  }[] | undefined
  /** 証憑ファイルID（配列） */
  receipt_ids?: number[] | undefined
}

export type DealUpdateParams = {
  /** 発生日 (yyyy-mm-dd) */
  issue_date: string
  /** 収支区分 (収入: income, 支出: expense) */
  type: 'income' | 'expense'
  /** 事業所ID */
  company_id: number
  /** 支払期日(yyyy-mm-dd) */
  due_date?: string | undefined
  /** 取引先ID */
  partner_id?: number | undefined
  /** 取引先コード */
  partner_code?: string | undefined
  /** 管理番号 */
  ref_number?: string | undefined
  details: {
    /** 取引行ID: 既存取引行を更新する場合に指定します。IDを指定しない取引行は、新規行として扱われ追加されます。また、detailsに含まれない既存の取引行は削除されます。更新後も残したい行は、必ず取引行IDを指定してdetailsに含めてください。 */
    id?: number | undefined
    /** 税区分コード */
    tax_code?: number | undefined
    /** 税区分ID（廃止予定。上記tax_codeを使用してください。tax_code, tax_idはどちらかの指定が必須です。） */
    tax_id?: number | undefined
    /** 勘定科目ID */
    account_item_id: number
    /** 取引金額（税込で指定してください） */
    amount: number
    /** 品目ID */
    item_id?: number | undefined
    /** 部門ID */
    section_id?: number | undefined
    /** メモタグID */
    tag_ids?: number[] | undefined
    /** セグメント１ID */
    segment_1_tag_id?: number | undefined
    /** セグメント２ID */
    segment_2_tag_id?: number | undefined
    /** セグメント３ID */
    segment_3_tag_id?: number | undefined
    /** 備考 */
    description?: string | undefined
    /** 消費税額（指定しない場合は自動で計算されます） */
    vat?: number | undefined
  }[]
  /** 証憑ファイルID（配列） */
  receipt_ids?: number[] | null | undefined
}

export type ManualJournalCreateParams = {
  /** 事業所ID */
  company_id: number
  /** 発生日 (yyyy-mm-dd) */
  issue_date: string
  /** 決算整理仕訳フラグ（falseまたは未指定の場合: 日常仕訳） */
  adjustment?: boolean | undefined
  details: {
    /** 貸借（貸方: credit, 借方: debit） */
    entry_side: 'debit' | 'credit'
    /** 税区分コード */
    tax_code: number
    /** 勘定科目ID */
    account_item_id: number
    /** 取引金額（税込で指定してください） */
    amount: number
    /** 消費税額（指定しない場合は自動で計算されます） */
    vat?: number | undefined
    /** 取引先ID */
    partner_id?: number | undefined
    /** 取引先コード */
    partner_code?: string | undefined
    /** 品目ID */
    item_id?: number | undefined
    /** 部門ID */
    section_id?: number | undefined
    /** メモタグID */
    tag_ids?: number[] | undefined
    /** セグメント１ID */
    segment_1_tag_id?: number | undefined
    /** セグメント２ID */
    segment_2_tag_id?: number | undefined
    /** セグメント３ID */
    segment_3_tag_id?: number | undefined
    /** 備考 */
    description?: string | undefined
  }[]
}

export type ManualJournalUpdateParams = {
  /** 事業所ID */
  company_id: number
  /** 発生日 (yyyy-mm-dd) */
  issue_date: string
  /** 決算整理仕訳フラグ（falseまたは未指定の場合: 日常仕訳） */
  adjustment?: boolean | undefined
  details: {
    /** 貸借行ID: 既存貸借行を更新または削除する場合に指定します。IDを指定しない貸借行は、新規行として扱われ追加されます。 */
    id?: number | undefined
    /** 貸借（貸方: credit, 借方: debit） */
    entry_side: 'debit' | 'credit'
    /** 税区分コード */
    tax_code: number
    /** 勘定科目ID */
    account_item_id: number
    /** 取引金額（税込で指定してください） */
    amount: number
    /** 消費税額（指定しない場合は自動で計算されます） */
    vat?: number | undefined
    /** 取引先ID */
    partner_id?: number | undefined
    /** 取引先コード */
    partner_code?: string | undefined
    /** 品目ID */
    item_id?: number | undefined
    /** 部門ID */
    section_id?: number | undefined
    /** メモタグID */
    tag_ids?: number[] | undefined
    /** セグメント１ID */
    segment_1_tag_id?: number | undefined
    /** セグメント２ID */
    segment_2_tag_id?: number | undefined
    /** セグメント３ID */
    segment_3_tag_id?: number | undefined
    /** 備考 */
    description?: string | undefined
  }[]
}

export type CompanyParams = {
  /** 事業所の正式名称 (100文字以内) */
  name?: string | undefined
  /** 正式名称フリガナ (100文字以内) */
  name_kana?: string | undefined
  /** 担当者名 (50文字以内) */
  contact_name?: string | undefined

  address_attributes?: {
    /** 郵便番号 */
    zipcode?: string | undefined
    /** 都道府県コード（0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    prefecture_code?: number | undefined
    /** 市区町村・番地 */
    street_name1?: string | undefined
    /** 建物名・部屋番号など */
    street_name2?: string | undefined
  } | undefined

  /** 電話番号１ */
  phone1?: string | undefined
  /** 電話番号２ */
  phone2?: string | undefined
  /** FAX */
  fax?: string | undefined

  sales_information_attributes?: {
    /** 種別（agriculture_forestry_fisheries_ore: 農林水産業/鉱業、construction: 建設、manufacturing_processing: 製造/加工、it: IT、transportation_logistics: 運輸/物流、retail_wholesale: 小売/卸売、finance_insurance: 金融/保険、real_estate_rental: 不動産/レンタル、profession: 士業/学術/専門技術サービス、design_production: デザイン/制作、food: 飲食、leisure_entertainment: レジャー/娯楽、lifestyle: 生活関連サービス、education: 教育/学習支援、medical_welfare: 医療/福祉、other_services: その他サービス、other: その他）Available values : agriculture_forestry_fisheries_ore, construction, manufacturing_processing, it, transportation_logistics, retail_wholesale, finance_insurance, real_estate_rental, profession, design_production, food, leisure_entertainment, lifestyle, education, medical_welfare, other_services, other */
    industry_class?: 'agriculture_forestry_fisheries_ore' | 'construction' | 'manufacturing_processing' | 'it' | 'transportation_logistics' | 'retail_wholesale' | 'finance_insurance' | 'real_estate_rental' | 'profession' | 'design_production' | 'food' | 'leisure_entertainment' | 'lifestyle' | 'education' | 'medical_welfare' | 'other_services' | 'other' | undefined
    /** 業種（agriculture: 農業, forestry: 林業, fishing_industry: 漁業、水産養殖業, mining: 鉱業、採石業、砂利採取業, civil_contractors: 土木工事業, pavement: 舗装工事業, carpenter: とび、大工、左官等の建設工事業, renovation: リフォーム工事業, electrical_plumbing: 電気、管工事等の設備工事業, grocery: 食料品の製造加工業, machinery_manufacturing: 機械器具の製造加工業, printing: 印刷業, other_manufacturing: その他の製造加工業, software_development: 受託：ソフトウェア、アプリ開発業, system_development: 受託：システム開発業, survey_analysis: 受託：調査、分析等の情報処理業, server_management: 受託：サーバー運営管理, website_production: 受託：ウェブサイト制作, online_service_management: オンラインサービス運営業, online_advertising_agency: オンライン広告代理店業, online_advertising_planning_production: オンライン広告企画・制作業, online_media_management: オンラインメディア運営業, portal_site_management: ポータルサイト運営業, other_it_services: その他、IT サービス業, transport_delivery: 輸送業、配送業, delivery: バイク便等の配達業, other_transportation_logistics: その他の運輸業、物流業, other_wholesale: 卸売業：その他, clothing_wholesale_fiber: 卸売業：衣類卸売／繊維, food_wholesale: 卸売業：飲食料品, entrusted_development_wholesale: 卸売業：機械器具, online_shop: 小売業：無店舗　オンラインショップ, fashion_grocery_store: 小売業：店舗あり　ファッション、雑貨, food_store: 小売業：店舗あり　生鮮食品、飲食料品, entrusted_store: 小売業：店舗あり　機械、器具, other_store: 小売業：店舗あり　その他, financial_instruments_exchange: 金融業：金融商品取引, commodity_futures_investment_advisor: 金融業：商品先物取引、商品投資顧問, other_financial: 金融業：その他, brokerage_insurance: 保険業：仲介、代理, other_insurance: 保険業：その他, real_estate_developer: 不動産業：ディベロッパー, real_estate_brokerage: 不動産業：売買、仲介, rent_coin_parking_management: 不動産業：賃貸、コインパーキング、管理, rental_office_co_working_space: 不動産業：レンタルオフィス、コワーキングスペース, rental_lease: レンタル業、リース業, cpa_tax_accountant: 士業：公認会計士事務所、税理士事務所, law_office: 士業：法律事務所, judicial_and_administrative_scrivener: 士業：司法書士事務所／行政書士事務所, labor_consultant: 士業：社会保険労務士事務所, other_profession: 士業：その他, business_consultant: 経営コンサルタント, academic_research_development: 学術・開発研究機関, advertising_agency: 広告代理店, advertising_planning_production: 広告企画／制作, design_development: ソフトウェア、アプリ開発業（受託）, apparel_industry_design: 服飾デザイン業、工業デザイン業, website_design: ウェブサイト制作（受託）, advertising_planning_design: 広告企画／制作業, other_design: その他、デザイン／制作, restaurants_coffee_shops: レストラン、喫茶店等の飲食店業, sale_of_lunch: 弁当の販売業, bread_confectionery_manufacture_sale: パン、菓子等の製造販売業, delivery_catering_mobile_catering: デリバリー業、ケータリング業、移動販売業, hotel_inn: 宿泊業：ホテル、旅館, homestay: 宿泊業：民泊, travel_agency: 旅行代理店業, leisure_sports_facility_management: レジャー、スポーツ等の施設運営業, show_event_management: ショー、イベント等の興行、イベント運営業, barber: ビューティ、ヘルスケア業：床屋、理容室, beauty_salon: ビューティ、ヘルスケア業：美容室, spa_sand_bath_sauna: ビューティ、ヘルスケア業：スパ、砂風呂、サウナ等, este_ail_salon: ビューティ、ヘルスケア業：その他、エステサロン、ネイルサロン等, bridal_planning_introduce_wedding: 冠婚葬祭業：ブライダルプランニング、結婚式場紹介等, memorial_ceremony_funeral: 冠婚葬祭業：メモリアルセレモニー、葬儀等, moving: 引っ越し業, courier_industry: 宅配業, house_maid_cleaning_agency: 家事代行サービス業：無店舗　ハウスメイド、掃除代行等, re_tailoring_clothes: 家事代行サービス業：店舗あり　衣類修理、衣類仕立て直し等, training_institute_management: 研修所等の施設運営業, tutoring_school: 学習塾、進学塾等の教育・学習支援業, music_calligraphy_abacus_classroom: 音楽教室、書道教室、そろばん教室等のの教育・学習支援業, english_school: 英会話スクール等の語学学習支援業, tennis_yoga_judo_school: テニススクール、ヨガ教室、柔道場等のスポーツ指導、支援業, culture_school: その他、カルチャースクール等の教育・学習支援業, seminar_planning_management: セミナー等の企画、運営業, hospital_clinic: 医療業：病院、一般診療所、クリニック等, dental_clinic: 医療業：歯科診療所, other_medical_services: 医療業：その他、医療サービス等, nursery: 福祉業：保育所等、児童向け施設型サービス, nursing_home: 福祉業：老人ホーム等、老人向け施設型サービス, rehabilitation_support_services: 福祉業：療育支援サービス等、障害者等向け施設型サービス, other_welfare: 福祉業：その他、施設型福祉サービス, visit_welfare_service: 福祉業：訪問型福祉サービス, recruitment_temporary_staffing: 人材紹介業、人材派遣業, life_related_recruitment_temporary_staffing: 生活関連サービスの人材紹介業、人材派遣業, car_maintenance_car_repair: 自動車整備業、自動車修理業, machinery_equipment_maintenance_repair: 機械機器類の整備業、修理業, cleaning_maintenance_building_management: 清掃業、メンテナンス業、建物管理業, security: 警備業, other_services: その他のサービス業, npo: NPO, general_incorporated_association: 一般社団法人, general_incorporated_foundation: 一般財団法人, other_association: その他組織) */
    industry_code?: 'agriculture' | 'forestry' | 'fishing_industry' | 'mining' | 'civil_contractors' | 'pavement' | 'carpenter' | 'renovation' | 'electrical_plumbing' | 'grocery' | 'machinery_manufacturing' | 'printing' | 'other_manufacturing' | 'software_development' | 'system_development' | 'survey_analysis' | 'server_management' | 'website_production' | 'online_service_management' | 'online_advertising_agency' | 'online_advertising_planning_production' | 'online_media_management' | 'portal_site_management' | 'other_it_services' | 'transport_delivery' | 'delivery' | 'other_transportation_logistics' | 'other_wholesale' | 'clothing_wholesale_fiber' | 'food_wholesale' | 'entrusted_development_wholesale' | 'online_shop' | 'fashion_grocery_store' | 'food_store' | 'entrusted_store' | 'other_store' | 'financial_instruments_exchange' | 'commodity_futures_investment_advisor' | 'other_financial' | 'brokerage_insurance' | 'other_insurance' | 'real_estate_developer' | 'real_estate_brokerage' | 'rent_coin_parking_management' | 'rental_office_co_working_space' | 'rental_lease' | 'cpa_tax_accountant' | 'law_office' | 'judicial_and_administrative_scrivener' | 'labor_consultant' | 'other_profession' | 'business_consultant' | 'academic_research_development' | 'advertising_agency' | 'advertising_planning_production' | 'design_development' | 'apparel_industry_design' | 'website_design' | 'advertising_planning_design' | 'other_design' | 'restaurants_coffee_shops' | 'sale_of_lunch' | 'bread_confectionery_manufacture_sale' | 'delivery_catering_mobile_catering' | 'hotel_inn' | 'homestay' | 'travel_agency' | 'leisure_sports_facility_management' | 'show_event_management' | 'barber' | 'beauty_salon' | 'spa_sand_bath_sauna' | 'este_ail_salon' | 'bridal_planning_introduce_wedding' | 'memorial_ceremony_funeral' | 'moving' | 'courier_industry' | 'house_maid_cleaning_agency' | 're_tailoring_clothes' | 'training_institute_management' | 'tutoring_school' | 'music_calligraphy_abacus_classroom' | 'english_school' | 'tennis_yoga_judo_school' | 'culture_school' | 'seminar_planning_management' | 'hospital_clinic' | 'dental_clinic' | 'other_medical_services' | 'nursery' | 'nursing_home' | 'rehabilitation_support_services' | 'other_welfare' | 'visit_welfare_service' | 'recruitment_temporary_staffing' | 'life_related_recruitment_temporary_staffing' | 'car_maintenance_car_repair' | 'machinery_equipment_maintenance_repair' | 'cleaning_maintenance_building_management' | 'security' | 'other_services' | 'npo' | 'general_incorporated_association' | 'general_incorporated_foundation' | 'other_association' | undefined
  } | undefined

  /** 従業員数（0: 経営者のみ、1: 2~5人、2: 6~10人、3: 11~20人、13: 21~50人、14: 51~100人、15: 101~300人、18: 301~500人、16: 501~1,000人、17: 1,001人以上 */
  head_count?: 0 | 1 | 2 | 3 | 13 | 14 | 15 | 18 | 16 | 17 | undefined
  /** 法人番号 (半角数字13桁、法人のみ) */
  corporate_number?: string | undefined

  fiscal_years_attributes?: {
    /** 製造業向け機能（0: 使用しない、1: 使用する） */
    use_industry_template?: number | undefined
    /** 固定資産の控除法（0: 直接控除法、1: 間接控除法） */
    indirect_write_off_method?: number | undefined
    /** 間接控除時の累計額（0: 共通、1: 資産分類別） */
    indirect_write_off_method_type?: number | undefined
    /** 期首日 */
    start_date?: string | undefined
    /** 期末日（決算日�� */
    end_date?: string | undefined
    /** 期 */
    accounting_period?: number | undefined
    /** 減価償却端数処理法(法人のみ)(0: 切り捨て、1: 切り上げ) */
    depreciation_fraction?: number | undefined
    /** 不動産所得使用区分(個人事業主のみ)（0: 使用しない、3: 使用する） */
    return_code?: number | undefined
    /** 消費税端数処理方法（0: 切り上げ、1: 切り捨て, 2: 四捨五入） */
    tax_fraction?: number | undefined
  } | undefined

  doc_template?: {
    /** レイアウト(0: レイアウト1, 1:レイアウト2, 3:封筒1, 4:レイアウト3(繰越金額欄あり), 5: 封筒2(繰越金額欄あり)) */
    invoice_layout?: number | undefined
    /** スタイル(0: クラシック, 1: モダン) */
    invoice_style?: number | undefined
    /** 金額端数処理方法（0: 切り上げ、1: 切り捨て, 2: 四捨五入） */
    amount_fraction?: number | undefined
  } | undefined

  /** 仕訳番号形式（not_used: 使用しない、digits: 数字（例：5091824）、alnum: 英数字（例：59J0P））Available values : not_used, digits, alnum */
  txn_number_format?: 'not_used' | 'digits' | 'alnum' | undefined
  /** プライベート資金/役員資金（0: 使用しない、1: 使用する） */
  private_settlement?: number | undefined
}

export type ItemParams = {
  /** 事業所ID */
  company_id: number
  /** 品目名 (30文字以内) */
  name: string
  /** ショートカット１ (20文字以内) */
  shortcut1?: string | undefined
  /** ショートカット２ (20文字以内) */
  shortcut2?: string | undefined
}

export type WalletableCreateParams = {
  /** 口座名 (255文字以内) */
  name: string
  /** 口座種別（bank_account : 銀行口座, credit_card : クレジットカード, wallet : その他の決済口座） */
  type: 'bank_account' | 'credit_card' | 'wallet'
  /** 事業所ID */
  company_id: number
  /** サービスID */
  bank_id?: number | undefined
  /** 決算書表示名（小カテゴリー）　例：売掛金, 受取手形, 未収入金（法人のみ）, 買掛金, 支払手形, 未払金, 預り金, 前受金 */
  group_name?: string | undefined
}

export type WalletableUpdateParams = {
  /** 口座名 (255文字以内) */
  name: string
  /** 事業所ID */
  company_id: number
}

export type TransferParams = {
  /** 振替先口座ID */
  to_walletable_id: number
  /** 振替先口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) */
  to_walletable_type: 'bank_account' | 'credit_card' | 'wallet'
  /** 振替元口座ID */
  from_walletable_id: number
  /** 振替元口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) */
  from_walletable_type: 'bank_account' | 'credit_card' | 'wallet'
  /** 金額 */
  amount: number
  /** 振替日 (yyyy-mm-dd) */
  date: string
  /** 事業所ID */
  company_id: number
  /** 備考 */
  description?: string | undefined
}

export type WalletTxnParams = {
  /** 入金／出金 (入金: income, 出金: expense) */
  entry_side: 'income' | 'expense'
  /** 取引内容 */
  description?: string | undefined
  /** 取引金額 */
  amount: number
  /** 口座ID */
  walletable_id: number
  /** 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) */
  walletable_type: 'bank_account' | 'credit_card' | 'wallet'
  /** 取引日 (yyyy-mm-dd) */
  date: string
  /** 事業所ID */
  company_id: number
  /** 残高 (銀行口座等) */
  balance?: number | undefined
}

export type ExpenseApplicationCreateParams = {
  /** 事業所ID */
  company_id: number
  /** 申請タイトル (250文字以内) */
  title: string
  /** 申請日 (yyyy-mm-dd) */
  issue_date: string
  /** 備考 (10000文字以内) */
  description?: string | undefined
  /** 会計freeeのWeb画面から申請内容を編集可能（デフォルト: false）：falseの場合、Web上からの項目行の追加／削除・金額の編集が出来なくなります。APIでの編集は可能です。 */
  editable_on_web?: boolean | undefined
  /** 部門ID */
  section_id?: number | undefined
  /** メモタグID */
  tag_ids?: number[] | undefined
  expense_application_lines: {
    /** 日付 (yyyy-mm-dd) */
    transaction_date?: string | undefined
    /** 内容 (250文字以内) */
    description?: string | undefined
    /** 金額 */
    amount?: number | undefined
    /** 経費科目ID */
    expense_application_line_template_id?: number | undefined
    /** 証憑ID */
    receipt_id?: number | undefined
  }[]
}

export type ExpenseApplicationUpdateParams = {
  /** 事業所ID */
  company_id: number
  /** 申請タイトル (250文字以内) */
  title: string
  /** 申請日 (yyyy-mm-dd) */
  issue_date: string
  /** 備考 (10000文字以内) */
  description?: string | undefined
  /** 会計freeeのWeb画面から申請内容を編集可能：falseの場合、Web上からの項目行の追加／削除・金額の編集が出来なくなります。APIでの編集は可能です。 */
  editable_on_web?: boolean | undefined
  /** 部門ID */
  section_id?: number | undefined
  /** メモタグID */
  tag_ids?: number[] | undefined
  expense_application_lines: {
    /** 経費申請の項目行ID: 既存項目行を更新する場合に指定します。IDを指定しない項目行は、新規行として扱われ追加されます。また、expense_application_linesに含まれない既存の項目行は削除されます。更新後も残したい行は、必ず経費申請の項目行IDを指定してexpense_application_linesに含めてください。 */
    id?: number | undefined
    /** 日付 (yyyy-mm-dd) */
    transaction_date?: string | undefined
    /** 内容 (250文字以内) */
    description?: string | undefined
    /** 金額 */
    amount?: number | undefined
    /** 経費科目ID */
    expense_application_line_template_id?: number | undefined
    /** 証憑ID */
    receipt_id?: number | undefined
  }[]
}

export type PartnerCreateParams = {
  /** 事業所ID */
  company_id: number
  /** 取引先名 (255文字以内) */
  name: string
  /** 取引先コード */
  code?: string | undefined
  /** ショートカット１ (255文字以内) */
  shortcut1?: string | undefined
  /** ショートカット２ (255文字以内) */
  shortcut2?: string | undefined
  /** 正式名称（255文字以内） */
  long_name?: string | undefined
  /** カナ名称（255文字以内） */
  name_kana?: string | undefined
  /** 敬称（御中、様、(空白)の3つから選択） */
  default_title?: string | undefined
  /** 電話番号 */
  phone?: string | undefined
  /** 担当者 氏名 (255文字以内) */
  contact_name?: string | undefined
  /** 担当者 メールアドレス (255文字以内) */
  email?: string | undefined
  /** 振込元口座ID（一括振込ファイル用）:（walletableのtypeが'bank_account'のidのみ指定できます。また、未設定にする場合は、nullを指定してください。） */
  payer_walletable_id?: number | null | undefined
  /** 振込手数料負担（一括振込ファイル用）: (振込元(当方): payer, 振込先(先方): payee) */
  transfer_fee_handling_side?: 'payer' | 'payee' | undefined

  address_attributes?: {
    /** 郵便番号（8文字以内） */
    zipcode?: string | undefined
    /** 都道府県コード（0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    prefecture_code?: number | undefined
    /** 市区町村・番地（255文字以内） */
    street_name1?: string | undefined
    /** 建物名・部屋番号など（255文字以内） */
    street_name2?: string | undefined
  } | undefined

  partner_doc_setting_attributes?: {
    /** 請求書送付方法(email:メール、posting:郵送、email_and_posting:メールと郵送) */
    sending_method?: 'email' | 'posting' | 'email_and_posting' | undefined
  } | undefined

  partner_bank_account_attributes?: {
    /** 銀行名 */
    bank_name?: string | undefined
    /** 銀行名（カナ） */
    bank_name_kana?: string | undefined
    /** 銀行番号 */
    bank_code?: string | undefined
    /** 支店名 */
    branch_name?: string | undefined
    /** 支店名（カナ） */
    branch_kana?: string | undefined
    /** 支店番号 */
    branch_code?: string | undefined
    /** 口座種別(ordinary:普通、checking：当座、earmarked：納税準備預金、savings：貯蓄、other:その他) */
    account_type?: string | undefined
    /** 口座番号 */
    account_number?: string | undefined
    /** 受取人名 */
    long_account_name?: string | undefined
    /** 受取人名（カナ） */
    account_name?: string | undefined
  } | undefined

  payment_term_attributes?: {
    /** 締め日（29, 30, 31日の末日を指定する場合は、32を指定してください。） */
    cutoff_day?: number | undefined
    /** 支払月 */
    additional_months?: number | undefined
    /** 支払日（29, 30, 31日の末日を指定する場合は、32を指定してください。） */
    fixed_day?: number | undefined
  } | undefined

  invoice_payment_term_attributes?: {
    /** 締め日（29, 30, 31日の末日を指定する場合は、32を指定してください。） */
    cutoff_day?: number | undefined
    /** 支払月 */
    additional_months?: number | undefined
    /** 支払日（29, 30, 31日の末日を指定する場合は、32を指定してください。） */
    fixed_day?: number | undefined
  } | undefined
}

export type PartnerUpdateParams = {
  /** 事業所ID */
  company_id: number
  /** 取引先名 (255文字以内) */
  name: string
  /** ショートカット１ (255文字以内) */
  shortcut1?: string | undefined
  /** ショートカット２ (255文字以内) */
  shortcut2?: string | undefined
  /** 正式名称（255文字以内） */
  long_name?: string | undefined
  /** カナ名称（255文字以内） */
  name_kana?: string | undefined
  /** 敬称（御中、様、(空白)の3つから選択） */
  default_title?: string | undefined
  /** 電話番号 */
  phone?: string | undefined
  /** 担当者 氏名 (255文字以内) */
  contact_name?: string | undefined
  /** 担当者 メールアドレス (255文字以内) */
  email?: string | undefined
  /** 振込元口座ID（一括振込ファイル用）:（walletableのtypeが'bank_account'のidのみ指定できます。また、未設定にする場合は、nullを指定してください。） */
  payer_walletable_id?: number | null | undefined
  /** 振込手数料負担（一括振込ファイル用）: (振込元(当方): payer, 振込先(先方): payee) */
  transfer_fee_handling_side?: 'payer' | 'payee' | undefined

  address_attributes?: {
    /** 郵便番号（8文字以内） */
    zipcode?: string | undefined
    /** 都道府県コード（0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    prefecture_code?: number | undefined
    /** 市区町村・番地（255文字以内） */
    street_name1?: string | undefined
    /** 建物名・部屋番号など（255文字以内） */
    street_name2?: string | undefined
  } | undefined

  partner_doc_setting_attributes?: {
    /** 請求書送付方法(email:メール、posting:郵送、email_and_posting:メールと郵送) */
    sending_method?: 'email' | 'posting' | 'email_and_posting' | undefined
  } | undefined

  partner_bank_account_attributes?: {
    /** 銀行名 */
    bank_name?: string | undefined
    /** 銀行名（カナ） */
    bank_name_kana?: string | undefined
    /** 銀行番号 */
    bank_code?: string | undefined
    /** 支店名 */
    branch_name?: string | undefined
    /** 支店名（カナ） */
    branch_kana?: string | undefined
    /** 支店番号 */
    branch_code?: string | undefined
    /** 口座種別(ordinary:普通、checking：当座、earmarked：納税準備預金、savings：貯蓄、other:その他) */
    account_type?: string | undefined
    /** 口座番号 */
    account_number?: string | undefined
    /** 受取人名 */
    long_account_name?: string | undefined
    /** 受取人名（カナ） */
    account_name?: string | undefined
  } | undefined

  payment_term_attributes?: {
    /** 締め日（29, 30, 31日の末日を指定する場合は、32を指定してください。） */
    cutoff_day?: number | undefined
    /** 支払月 */
    additional_months?: number | undefined
    /** 支払日（29, 30, 31日の末日を指定する場合は、32を指定してください。） */
    fixed_day?: number | undefined
  } | undefined

  invoice_payment_term_attributes?: {
    /** 締め日（29, 30, 31日の末日を指定する場合は、32を指定してください。） */
    cutoff_day?: number | undefined
    /** 支払月 */
    additional_months?: number | undefined
    /** 支払日（29, 30, 31日の末日を指定する場合は、32を指定してください。） */
    fixed_day?: number | undefined
  } | undefined
}

export type ReceiptCreateParams = {
  /** 事業所ID */
  company_id: number
  /** メモ (255文字以内) */
  description?: string | undefined
  /** 取引日 (yyyy-mm-dd) */
  issue_date?: string | undefined
  /** 証憑ファイル */
  receipt: (File | ReadStream)
}

export type ReceiptUpdateParams = {
  /** 事業所ID */
  company_id: number
  /** メモ (255文字以内) */
  description?: string | undefined
  /** 取引日 (yyyy-mm-dd) */
  issue_date: string
}

export type AccountItemParams = {
  /** 事業所ID */
  company_id: number

  account_item: {
    /** 勘定科目名 (30文字以内) */
    name: string
    /** ショートカット1 (20文字以内) */
    shortcut?: string | undefined
    /** ショートカット2(勘定科目コード)(20文字以内) */
    shortcut_num?: string | undefined
    /** 税区分 */
    tax_name: string
    /** 決算書表示名（小カテゴリー） */
    group_name: string
    /** 勘定科目カテゴリー */
    account_category: string
    /** 収入取引相手勘定科目名 */
    corresponding_income_name: string
    /** 支出取引相手勘定科目名 */
    corresponding_expense_name: string
    /** 減価償却累計額勘定科目 */
    accumulated_dep_account_item_name?: string | undefined
    /** 検索可能:2, 検索不可：3(登録時未指定の場合は2で登録されます。更新時未指定の場合はsearchableは変更されません。) */
    searchable?: number | undefined
    /** 品目 */
    items?: {
      id?: number | undefined
    }[] | undefined
    /** 取引先 */
    partners?: {
      id?: number | undefined
    }[] | undefined
  }
}

export type AccountItemsResponse = {
  account_items: {
    /** 勘定科目ID */
    id: number
    /** 勘定科目名 (30文字以内) */
    name: string
    /** ショートカット1 (20文字以内) */
    shortcut?: string | null | undefined
    /** ショートカット2(勘定科目コード) (20文字以内) */
    shortcut_num?: string | null | undefined
    /** デフォルト設定がされている税区分ID */
    default_tax_id?: number | undefined
    /** デフォルト設定がされている税区分コード */
    default_tax_code: number
    /** 勘定科目カテゴリー */
    account_category: string
    /** 勘定科目のカテゴリーID */
    account_category_id: number
    categories: string[]
    /** 勘定科目の使用設定（true: 使用する、false: 使用しない） */
    available: boolean
    /** 口座ID */
    walletable_id: number | null
    /** 決算書表示名（小カテゴリー） */
    group_name?: string | null | undefined
    /** 収入取引相手勘定科目名 */
    corresponding_income_name?: string | null | undefined
    /** 収入取引相手勘定科目ID */
    corresponding_income_id?: number | null | undefined
    /** 支出取引相手勘定科目名 */
    corresponding_expense_name?: string | null | undefined
    /** 支出取引相手勘定科目ID */
    corresponding_expense_id?: number | null | undefined
  }[]
}

export type AccountItemResponse = {
  account_item: {
    /** 勘定科目ID */
    id: number
    /** 勘定科目名 (30文字以内) */
    name: string
    /** 事業所ID */
    company_id: number
    /** 税区分コード */
    tax_code: number
    /** 勘定科目カテゴリー */
    account_category: string
    /** 勘定科目のカテゴリーID */
    account_category_id: number
    /** ショートカット1 (20文字以内) */
    shortcut?: string | undefined
    /** ショートカット2(勘定科目コード) (20文字以内) */
    shortcut_num?: string | undefined
    /** 支出取引相手勘定科目種別 */
    corresponding_type_expense: number
    /** 収入取引相手勘定科目種別 */
    corresponding_type_income: number
    /** 検索可能:2, 検索不可：3 */
    searchable: number
    /** 減価償却累計額勘定科目 */
    accumulated_dep_account_item_name?: string | undefined
    items?: {
      /** 品目ID */
      id: number
      /** 品目 */
      name: string
    }[] | undefined
    partners?: {
      /** 取引先ID */
      id: number
      /** 取引先 */
      name: string
    }[] | undefined
    /** 勘定科目の使用設定（true: 使用する、false: 使用しない） */
    available: boolean
    /** 口座ID */
    walletable_id: number | null
    /** 決算書表示名（小カテゴリー） */
    group_name?: string | null | undefined
    /** 収入取引相手勘定科目名 */
    corresponding_income_name?: string | null | undefined
    /** 収入取引相手勘定科目ID */
    corresponding_income_id?: number | null | undefined
    /** 支出取引相手勘定科目名 */
    corresponding_expense_name?: string | null | undefined
    /** 支出取引相手勘定科目ID */
    corresponding_expense_id?: number | null | undefined
  }
}

export type BankResponse = {
  bank: {
    /** 連携サービスID */
    id: number
    /** 連携サービス名 */
    name?: string | undefined
    /** 連携サービス種別: (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) */
    type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
    /** 連携サービス名(カナ) */
    name_kana?: string | null | undefined
  }
}

export type JournalsResponse = {
  journals: {
    /** 受け付けID */
    id: number
    /** 受け付けメッセージ */
    messages?: string | undefined
    /** 事業所ID */
    company_id: number
    /** ダウンロード形式 */
    download_type?: 'csv' | 'generic' | 'pdf' | undefined
    /** 取得開始日 (yyyy-mm-dd) */
    start_date?: string | undefined
    /** 取得終了日 (yyyy-mm-dd) */
    end_date?: string | undefined
    visible_tags?: ('partner' | 'item' | 'tag' | 'section' | 'description' | 'wallet_txn_description' | 'all')[] | undefined
    /** ステータス確認用URL */
    status_url?: string | undefined
  }
}

export type JournalStatusResponse = {
  journals: {
    /** 受け付けID */
    id: number
    /** 事業所ID */
    company_id: number
    /** ダウンロード形式 */
    download_type: 'csv' | 'generic' | 'pdf'
    /** 事業所ID */
    status: 'enqueued' | 'working' | 'uploaded' | 'failed'
    /** 取得開始日 (yyyy-mm-dd) */
    start_date: string
    /** 取得終了日 (yyyy-mm-dd) */
    end_date: string
    visible_tags: ('partner' | 'item' | 'tag' | 'section' | 'description' | 'wallet_txn_description' | 'all')[]
    /** ダウンロードURL */
    download_url?: string | undefined
  }
}

export type TrialBsResponse = {
  trial_bs: {
    /** 事業所ID */
    company_id: number
    /** 集計結果が最新かどうか */
    up_to_date: boolean
    /** 会計年度(条件に指定した時、または条件に月、日条件がない時のみ含まれる） */
    fiscal_year?: number | undefined
    /** 発生月で絞込：開始会計月(mm)(条件に指定した時のみ含まれる） */
    start_month?: number | undefined
    /** 発生月で絞込：終了会計月(mm)(条件に指定した時のみ含まれる） */
    end_month?: number | undefined
    /** 発生日で絞込：開始日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    start_date?: string | undefined
    /** 発生日で絞込：終了日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    end_date?: string | undefined
    /** 勘定科目の表示（勘定科目: account_item, 決算書表示:group）(条件に指定した時のみ含まれる） */
    account_item_display_type?: 'account_item' | 'group' | undefined
    /** 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item）(条件に指定した時のみ含まれる） */
    breakdown_display_type?: 'partner' | 'item' | 'account_item' | undefined
    /** 取引先ID(条件に指定した時のみ含まれる） */
    partner_id?: number | undefined
    /** 取引先コード(条件に指定した時のみ含まれる） */
    partner_code?: string | undefined
    /** 品目ID(条件に指定した時のみ含まれる） */
    item_id?: number | undefined
    /** 決算整理仕訳のみ: only, 決算整理仕訳以外: without(条件に指定した時のみ含まれる） */
    adjustment?: 'only' | 'without' | undefined
    /** 作成日時 */
    created_at?: string | undefined
    balances: {
      /** 勘定科目ID(勘定科目の時のみ含まれる) */
      account_item_id?: number | undefined
      /** 勘定科目名(勘定科目の時のみ含まれる) */
      account_item_name?: string | undefined
      /** breakdown_display_type:partner, account_item_display_type:account_item指定時のみ含まれる */
      partners?: {
        /** 取引先ID */
        id: number
        /** 取引先名 */
        name?: string | undefined
        /** 期首残高 */
        opening_balance?: number | undefined
        /** 借方金額 */
        debit_amount?: number | undefined
        /** 貸方金額 */
        credit_amount?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 構成比 */
        composition_ratio?: number | undefined
      }[] | undefined
      /** breakdown_display_type:item, account_item_display_type:account_item指定時のみ含まれる */
      items?: {
        /** 品目ID */
        id: number
        /** 品目 */
        name?: string | undefined
        /** 期首残高 */
        opening_balance?: number | undefined
        /** 借方金額 */
        debit_amount?: number | undefined
        /** 貸方金額 */
        credit_amount?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 構成比 */
        composition_ratio?: number | undefined
      }[] | undefined
      /** 勘定科目カテゴリーID(勘定科目カテゴリーの時のみ含まれる) */
      account_category_id?: number | undefined
      /** 勘定科目カテゴリー名(勘定科目カテゴリーの時のみ含まれる) */
      account_category_name?: string | undefined
      /** 合計行(勘定科目カテゴリー名の時のみ含まれる) */
      total_line?: boolean | undefined
      /** 階層レベル */
      hierarchy_level?: number | undefined
      /** 上位科目カテゴリーID(上層が存在する場合含まれる) */
      parent_account_category_id?: number | undefined
      /** 上位勘定科目カテゴリー名(上層が存在する場合含まれる) */
      parent_account_category_name?: string | undefined
      /** 期首残高 */
      opening_balance?: number | undefined
      /** 借方金額 */
      debit_amount?: number | undefined
      /** 貸方金額 */
      credit_amount?: number | undefined
      /** 期末残高 */
      closing_balance?: number | undefined
      /** 構成比 */
      composition_ratio?: number | undefined
    }[]
  }
}

export type TrialBsTwoYearsResponse = {
  trial_bs_two_years: {
    /** 事業所ID */
    company_id: number
    /** 集計結果が最新かどうか */
    up_to_date: boolean
    /** 会計年度(条件に指定した時、または条件に月、日条件がない時のみ含まれる） */
    fiscal_year?: number | undefined
    /** 発生月で絞込：開始会計月(mm)(条件に指定した時のみ含まれる） */
    start_month?: number | undefined
    /** 発生月で絞込：終了会計月(mm)(条件に指定した時のみ含まれる） */
    end_month?: number | undefined
    /** 発生日で絞込：開始日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    start_date?: string | undefined
    /** 発生日で絞込：終了日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    end_date?: string | undefined
    /** 勘定科目の表示（勘定科目: account_item, 決算書表示:group）(条件に指定した時のみ含まれる） */
    account_item_display_type?: 'account_item' | 'group' | undefined
    /** 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item）(条件に指定した時のみ含まれる） */
    breakdown_display_type?: 'partner' | 'item' | 'account_item' | undefined
    /** 取引先ID(条件に指定した時のみ含まれる） */
    partner_id?: number | undefined
    /** 取引先コード(条件に指定した時のみ含まれる） */
    partner_code?: string | undefined
    /** 品目ID(条件に指定した時のみ含まれる） */
    item_id?: number | undefined
    /** 決算整理仕訳のみ: only, 決算整理仕訳以外: without(条件に指定した時のみ含まれる） */
    adjustment?: 'only' | 'without' | undefined
    /** 作成日時 */
    created_at?: string | undefined
    balances: {
      /** 勘定科目ID(勘定科目の時のみ含まれる) */
      account_item_id?: number | undefined
      /** 勘定科目名(勘定科目の時のみ含まれる) */
      account_item_name?: string | undefined
      /** breakdown_display_type:partner, account_item_display_type:account_item指定時のみ含まれる */
      partners?: {
        /** 取引先ID */
        id: number
        /** 取引先名 */
        name?: string | undefined
        /** 前年度期末残高 */
        last_year_closing_balance?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 前年比 */
        year_on_year?: number | undefined
      }[] | undefined
      /** breakdown_display_type:item, account_item_display_type:account_item指定時のみ含まれる */
      items?: {
        /** 品目ID */
        id: number
        /** 品目 */
        name?: string | undefined
        /** 前年度期末残高 */
        last_year_closing_balance?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 前年比 */
        year_on_year?: number | undefined
      }[] | undefined
      /** 勘定科目カテゴリーID(勘定科目カテゴリーの時のみ含まれる) */
      account_category_id?: number | undefined
      /** 勘定科目カテゴリー名(勘定科目カテゴリーの時のみ含まれる) */
      account_category_name?: string | undefined
      /** 合計行(勘定科目カテゴリー名の時のみ含まれる) */
      total_line?: boolean | undefined
      /** 階層レベル */
      hierarchy_level?: number | undefined
      /** 上位科目カテゴリーID(上層が存在する場合含まれる) */
      parent_account_category_id?: number | undefined
      /** 上位勘定科目カテゴリー名(上層が存在する場合含まれる) */
      parent_account_category_name?: string | undefined
      /** 前年度期末残高 */
      last_year_closing_balance?: number | undefined
      /** 期末残高 */
      closing_balance?: number | undefined
      /** 前年比 */
      year_on_year?: number | undefined
    }[]
  }
}

export type TrialBsThreeYearsResponse = {
  trial_bs_three_years: {
    /** 事業所ID */
    company_id: number
    /** 集計結果が最新かどうか */
    up_to_date: boolean
    /** 会計年度(条件に指定した時、または条件に月、日条件がない時のみ含まれる） */
    fiscal_year?: number | undefined
    /** 発生月で絞込：開始会計月(mm)(条件に指定した時のみ含まれる） */
    start_month?: number | undefined
    /** 発生月で絞込：終了会計月(mm)(条件に指定した時のみ含まれる） */
    end_month?: number | undefined
    /** 発生日で絞込：開始日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    start_date?: string | undefined
    /** 発生日で絞込：終了日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    end_date?: string | undefined
    /** 勘定科目の表示（勘定科目: account_item, 決算書表示:group）(条件に指定した時のみ含まれる） */
    account_item_display_type?: 'account_item' | 'group' | undefined
    /** 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item）(条件に指定した時のみ含まれる） */
    breakdown_display_type?: 'partner' | 'item' | 'account_item' | undefined
    /** 取引先ID(条件に指定した時のみ含まれる） */
    partner_id?: number | undefined
    /** 取引先コード(条件に指定した時のみ含まれる） */
    partner_code?: string | undefined
    /** 品目ID(条件に指定した時のみ含まれる） */
    item_id?: number | undefined
    /** 決算整理仕訳のみ: only, 決算整理仕訳以外: without(条件に指定した時のみ含まれる） */
    adjustment?: 'only' | 'without' | undefined
    /** 作成日時 */
    created_at?: string | undefined
    balances: {
      /** 勘定科目ID(勘定科目の時のみ含まれる) */
      account_item_id?: number | undefined
      /** 勘定科目名(勘定科目の時のみ含まれる) */
      account_item_name?: string | undefined
      /** breakdown_display_type:partner, account_item_display_type:account_item指定時のみ含まれる */
      partners?: {
        /** 取引先ID */
        id: number
        /** 取引先名 */
        name?: string | undefined
        /** 前々年度期末残高 */
        two_years_before_closing_balance?: number | undefined
        /** 前年度期末残高 */
        last_year_closing_balance?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 前年比 */
        year_on_year?: number | undefined
      }[] | undefined
      /** breakdown_display_type:item, account_item_display_type:account_item指定時のみ含まれる */
      items?: {
        /** 品目ID */
        id: number
        /** 品目 */
        name?: string | undefined
        /** 前々年度期末残高 */
        two_years_before_closing_balance?: number | undefined
        /** 前年度期末残高 */
        last_year_closing_balance?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 前年比 */
        year_on_year?: number | undefined
      }[] | undefined
      /** 勘定科目カテゴリーID(勘定科目カテゴリーの時のみ含まれる) */
      account_category_id?: number | undefined
      /** 勘定科目カテゴリー名(勘定科目カテゴリーの時のみ含まれる) */
      account_category_name?: string | undefined
      /** 合計行(勘定科目カテゴリー名の時のみ含まれる) */
      total_line?: boolean | undefined
      /** 階層レベル */
      hierarchy_level?: number | undefined
      /** 上位科目カテゴリーID(上層が存在する場合含まれる) */
      parent_account_category_id?: number | undefined
      /** 上位勘定科目カテゴリー名(上層が存在する場合含まれる) */
      parent_account_category_name?: string | undefined
      /** 前々年度期末残高 */
      two_years_before_closing_balance?: number | undefined
      /** 前年度期末残高 */
      last_year_closing_balance?: number | undefined
      /** 期末残高 */
      closing_balance?: number | undefined
      /** 前年比 */
      year_on_year?: number | undefined
    }[]
  }
}

export type TrialPlResponse = {
  trial_pl: {
    /** 事業所ID */
    company_id: number
    /** 集計結果が最新かどうか */
    up_to_date: boolean
    /** 会計年度(条件に指定した時、または条件に月、日条件がない時のみ含まれる） */
    fiscal_year?: number | undefined
    /** 発生月で絞込：開始会計月(mm)(条件に指定した時のみ含まれる） */
    start_month?: number | undefined
    /** 発生月で絞込：終了会計月(mm)(条件に指定した時のみ含まれる） */
    end_month?: number | undefined
    /** 発生日で絞込：開始日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    start_date?: string | undefined
    /** 発生日で絞込：終了日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    end_date?: string | undefined
    /** 勘定科目の表示（勘定科目: account_item, 決算書表示:group）(条件に指定した時のみ含まれる） */
    account_item_display_type?: 'account_item' | 'group' | undefined
    /** 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item）(条件に指定した時のみ含まれる） */
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
    /** 取引先ID(条件に指定した時のみ含まれる） */
    partner_id?: number | undefined
    /** 取引先コード(条件に指定した時のみ含まれる） */
    partner_code?: string | undefined
    /** 品目ID(条件に指定した時のみ含まれる） */
    item_id?: number | undefined
    /** 部門ID(条件に指定した時のみ含まれる） */
    section_id?: number | undefined
    /** 決算整理仕訳のみ: only, 決算整理仕訳以外: without(条件に指定した時のみ含まれる） */
    adjustment?: 'only' | 'without' | undefined
    /** 配賦仕訳のみ：only,配賦仕訳以外：without(条件に指定した時のみ含まれる） */
    cost_allocation?: 'only' | 'without' | undefined
    /** 作成日時 */
    created_at?: string | undefined
    balances: {
      /** 勘定科目ID(勘定科目の時のみ含まれる) */
      account_item_id?: number | undefined
      /** 勘定科目名(勘定科目の時のみ含まれる) */
      account_item_name?: string | undefined
      /** breakdown_display_type:partner, account_item_display_type:account_item指定時のみ含まれる */
      partners?: {
        /** 取引先ID */
        id: number
        /** 取引先名 */
        name?: string | undefined
        /** 期首残高 */
        opening_balance?: number | undefined
        /** 借方金額 */
        debit_amount?: number | undefined
        /** 貸方金額 */
        credit_amount?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 構成比 */
        composition_ratio?: number | undefined
      }[] | undefined
      /** breakdown_display_type:item, account_item_display_type:account_item指定時のみ含まれる */
      items?: {
        /** 品目ID */
        id: number
        /** 品目 */
        name?: string | undefined
        /** 期首残高 */
        opening_balance?: number | undefined
        /** 借方金額 */
        debit_amount?: number | undefined
        /** 貸方金額 */
        credit_amount?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 構成比 */
        composition_ratio?: number | undefined
      }[] | undefined
      /** breakdown_display_type:section, account_item_display_type:account_item指定時のみ含まれる */
      sections?: {
        /** 部門ID */
        id: number
        /** 部門名 */
        name?: string | undefined
        /** 期首残高 */
        opening_balance?: number | undefined
        /** 借方金額 */
        debit_amount?: number | undefined
        /** 貸方金額 */
        credit_amount?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 構成比 */
        composition_ratio?: number | undefined
      }[] | undefined
      /** 勘定科目カテゴリーID(勘定科目カテゴリーの時のみ含まれる) */
      account_category_id?: number | undefined
      /** 勘定科目カテゴリー名(勘定科目カテゴリーの時のみ含まれる) */
      account_category_name?: string | undefined
      /** 合計行(勘定科目カテゴリー名の時のみ含まれる) */
      total_line?: boolean | undefined
      /** 階層レベル */
      hierarchy_level?: number | undefined
      /** 上位科目カテゴリーID(上層が存在する場合含まれる) */
      parent_account_category_id?: number | undefined
      /** 上位勘定科目カテゴリー名(上層が存在する場合含まれる) */
      parent_account_category_name?: string | undefined
      /** 期首残高 */
      opening_balance?: number | undefined
      /** 借方金額 */
      debit_amount?: number | undefined
      /** 貸方金額 */
      credit_amount?: number | undefined
      /** 期末残高 */
      closing_balance?: number | undefined
      /** 構成比 */
      composition_ratio?: number | undefined
    }[]
  }
}

export type TrialPlTwoYearsResponse = {
  trial_pl_two_years: {
    /** 事業所ID */
    company_id: number
    /** 集計結果が最新かどうか */
    up_to_date: boolean
    /** 会計年度(条件に指定した時、または条件に月、日条件がない時のみ含まれる） */
    fiscal_year?: number | undefined
    /** 発生月で絞込：開始会計月(mm)(条件に指定した時のみ含まれる） */
    start_month?: number | undefined
    /** 発生月で絞込：終了会計月(mm)(条件に指定した時のみ含まれる） */
    end_month?: number | undefined
    /** 発生日で絞込：開始日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    start_date?: string | undefined
    /** 発生日で絞込：終了日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    end_date?: string | undefined
    /** 勘定科目の表示（勘定科目: account_item, 決算書表示:group）(条件に指定した時のみ含まれる） */
    account_item_display_type?: 'account_item' | 'group' | undefined
    /** 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item）(条件に指定した時のみ含まれる） */
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
    /** 取引先ID(条件に指定した時のみ含まれる） */
    partner_id?: number | undefined
    /** 取引先コード(条件に指定した時のみ含まれる） */
    partner_code?: string | undefined
    /** 品目ID(条件に指定した時のみ含まれる） */
    item_id?: number | undefined
    /** 部門ID(条件に指定した時のみ含まれる） */
    section_id?: number | undefined
    /** 決算整理仕訳のみ: only, 決算整理仕訳以外: without(条件に指定した時のみ含まれる） */
    adjustment?: 'only' | 'without' | undefined
    /** 配賦仕訳のみ：only,配賦仕訳以外：without(条件に指定した時のみ含まれる） */
    cost_allocation?: 'only' | 'without' | undefined
    /** 作成日時 */
    created_at?: string | undefined
    balances: {
      /** 勘定科目ID(勘定科目の時のみ含まれる) */
      account_item_id?: number | undefined
      /** 勘定科目名(勘定科目の時のみ含まれる) */
      account_item_name?: string | undefined
      /** breakdown_display_type:partner, account_item_display_type:account_item指定時のみ含まれる */
      partners?: {
        /** 取引先ID */
        id: number
        /** 取引先名 */
        name?: string | undefined
        /** 前年度期末残高 */
        last_year_closing_balance?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 前年比 */
        year_on_year?: number | undefined
      }[] | undefined
      /** breakdown_display_type:item, account_item_display_type:account_item指定時のみ含まれる */
      items?: {
        /** 品目ID */
        id: number
        /** 品目 */
        name?: string | undefined
        /** 前年度期末残高 */
        last_year_closing_balance?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 前年比 */
        year_on_year?: number | undefined
      }[] | undefined
      /** breakdown_display_type:section, account_item_display_type:account_item指定時のみ含まれる */
      sections?: {
        /** 部門ID */
        id: number
        /** 部門名 */
        name?: string | undefined
        /** 前年度期末残高 */
        last_year_closing_balance?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 前年比 */
        year_on_year?: number | undefined
      }[] | undefined
      /** 勘定科目カテゴリーID(勘定科目カテゴリーの時のみ含まれる) */
      account_category_id?: number | undefined
      /** 勘定科目カテゴリー名(勘定科目カテゴリーの時のみ含まれる) */
      account_category_name?: string | undefined
      /** 合計行(勘定科目カテゴリー名の時のみ含まれる) */
      total_line?: boolean | undefined
      /** 階層レベル */
      hierarchy_level?: number | undefined
      /** 上位科目カテゴリーID(上層が存在する場合含まれる) */
      parent_account_category_id?: number | undefined
      /** 上位勘定科目カテゴリー名(上層が存在する場合含まれる) */
      parent_account_category_name?: string | undefined
      /** 前年度期末残高 */
      last_year_closing_balance?: number | undefined
      /** 期末残高 */
      closing_balance?: number | undefined
      /** 前年比 */
      year_on_year?: number | undefined
    }[]
  }
}

export type TrialPlThreeYearsResponse = {
  trial_pl_three_years: {
    /** 事業所ID */
    company_id: number
    /** 集計結果が最新かどうか */
    up_to_date: boolean
    /** 会計年度(条件に指定した時、または条件に月、日条件がない時のみ含まれる） */
    fiscal_year?: number | undefined
    /** 発生月で絞込：開始会計月(mm)(条件に指定した時のみ含まれる） */
    start_month?: number | undefined
    /** 発生月で絞込：終了会計月(mm)(条件に指定した時のみ含まれる） */
    end_month?: number | undefined
    /** 発生日で絞込：開始日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    start_date?: string | undefined
    /** 発生日で絞込：終了日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    end_date?: string | undefined
    /** 勘定科目の表示（勘定科目: account_item, 決算書表示:group）(条件に指定した時のみ含まれる） */
    account_item_display_type?: 'account_item' | 'group' | undefined
    /** 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item）(条件に指定した時のみ含まれる） */
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
    /** 取引先ID(条件に指定した時のみ含まれる） */
    partner_id?: number | undefined
    /** 取引先コード(条件に指定した時のみ含まれる） */
    partner_code?: string | undefined
    /** 品目ID(条件に指定した時のみ含まれる） */
    item_id?: number | undefined
    /** 部門ID(条件に指定した時のみ含まれる） */
    section_id?: number | undefined
    /** 決算整理仕訳のみ: only, 決算整理仕訳以外: without(条件に指定した時のみ含まれる） */
    adjustment?: 'only' | 'without' | undefined
    /** 配賦仕訳のみ：only,配賦仕訳以外：without(条件に指定した時のみ含まれる） */
    cost_allocation?: 'only' | 'without' | undefined
    /** 作成日時 */
    created_at?: string | undefined
    balances: {
      /** 勘定科目ID(勘定科目の時のみ含まれる) */
      account_item_id?: number | undefined
      /** 勘定科目名(勘定科目の時のみ含まれる) */
      account_item_name?: string | undefined
      /** breakdown_display_type:partner, account_item_display_type:account_item指定時のみ含まれる */
      partners?: {
        /** 取引先ID */
        id: number
        /** 取引先名 */
        name?: string | undefined
        /** 前々年度期末残高 */
        two_years_before_closing_balance?: number | undefined
        /** 前年度期末残高 */
        last_year_closing_balance?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 前年比 */
        year_on_year?: number | undefined
      }[] | undefined
      /** breakdown_display_type:item, account_item_display_type:account_item指定時のみ含まれる */
      items?: {
        /** 品目ID */
        id: number
        /** 品目 */
        name?: string | undefined
        /** 前々年度期末残高 */
        two_years_before_closing_balance?: number | undefined
        /** 前年度期末残高 */
        last_year_closing_balance?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 前年比 */
        year_on_year?: number | undefined
      }[] | undefined
      /** breakdown_display_type:section, account_item_display_type:account_item指定時のみ含まれる */
      sections?: {
        /** 部門ID */
        id: number
        /** 部門名 */
        name?: string | undefined
        /** 前々年度期末残高 */
        two_years_before_closing_balance?: number | undefined
        /** 前年度期末残高 */
        last_year_closing_balance?: number | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** 前年比 */
        year_on_year?: number | undefined
      }[] | undefined
      /** 勘定科目カテゴリーID(勘定科目カテゴリーの時のみ含まれる) */
      account_category_id?: number | undefined
      /** 勘定科目カテゴリー名(勘定科目カテゴリーの時のみ含まれる) */
      account_category_name?: string | undefined
      /** 合計行(勘定科目カテゴリー名の時のみ含まれる) */
      total_line?: boolean | undefined
      /** 階層レベル */
      hierarchy_level?: number | undefined
      /** 上位科目カテゴリーID(上層が存在する場合含まれる) */
      parent_account_category_id?: number | undefined
      /** 上位勘定科目カテゴリー名(上層が存在する場合含まれる) */
      parent_account_category_name?: string | undefined
      /** 前々年度期末残高 */
      two_years_before_closing_balance?: number | undefined
      /** 前年度期末残高 */
      last_year_closing_balance?: number | undefined
      /** 期末残高 */
      closing_balance?: number | undefined
      /** 前年比 */
      year_on_year?: number | undefined
    }[]
  }
}

export type TrialPlSectionsResponse = {
  trial_pl_sections: {
    /** 事業所ID */
    company_id: number
    /** 集計結果が最新かどうか */
    up_to_date: boolean
    /** 出力する部門の指定 */
    section_ids: string
    /** 会計年度(条件に指定した時、または条件に月、日条件がない時のみ含まれる） */
    fiscal_year?: number | undefined
    /** 発生月で絞込：開始会計月(mm)(条件に指定した時のみ含まれる） */
    start_month?: number | undefined
    /** 発生月で絞込：終了会計月(mm)(条件に指定した時のみ含まれる） */
    end_month?: number | undefined
    /** 発生日で絞込：開始日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    start_date?: string | undefined
    /** 発生日で絞込：終了日(yyyy-mm-dd)(条件に指定した時のみ含まれる） */
    end_date?: string | undefined
    /** 勘定科目の表示（勘定科目: account_item, 決算書表示:group）(条件に指定した時のみ含まれる） */
    account_item_display_type?: 'account_item' | 'group' | undefined
    /** 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item）(条件に指定した時のみ含まれる） */
    breakdown_display_type?: 'partner' | 'item' | 'account_item' | undefined
    /** 取引先ID(条件に指定した時のみ含まれる） */
    partner_id?: number | undefined
    /** 取引先コード(条件に指定した時のみ含まれる） */
    partner_code?: string | undefined
    /** 品目ID(条件に指定した時のみ含まれる） */
    item_id?: number | undefined
    /** 決算整理仕訳のみ: only, 決算整理仕訳以外: without(条件に指定した時のみ含まれる） */
    adjustment?: 'only' | 'without' | undefined
    /** 配賦仕訳のみ：only,配賦仕訳以外：without(条件に指定した時のみ含まれる） */
    cost_allocation?: 'only' | 'without' | undefined
    /** 作成日時 */
    created_at?: string | undefined
    balances: {
      /** 勘定科目ID(勘定科目の時のみ含まれる) */
      account_item_id?: number | undefined
      /** 勘定科目名(勘定科目の時のみ含まれる) */
      account_item_name?: string | undefined
      /** 部門(勘定科目の時のみ含まれる) */
      sections?: {
        /** 部門ID */
        id: number
        /** 部門名 */
        name?: string | undefined
        /** 期末残高 */
        closing_balance?: number | undefined
        /** breakdown_display_type:partner, account_item_display_type:account_item指定時のみ含まれる */
        partners?: {
          /** 取引先ID */
          id: number
          /** 取引先名 */
          name?: string | undefined
          /** 期末残高 */
          closing_balance?: number | undefined
        }[] | undefined
        /** breakdown_display_type:item, account_item_display_type:account_item指定時のみ含まれる */
        items?: {
          /** 品目ID */
          id: number
          /** 品目 */
          name?: string | undefined
          /** 期末残高 */
          closing_balance?: number | undefined
        }[] | undefined
      }[] | undefined
      /** 勘定科目カテゴリーID(勘定科目カテゴリーの時のみ含まれる) */
      account_category_id?: number | undefined
      /** 勘定科目カテゴリー名(勘定科目カテゴリーの時のみ含まれる) */
      account_category_name?: string | undefined
      /** 合計行(勘定科目カテゴリー名の時のみ含まれる) */
      total_line?: boolean | undefined
      /** 階層レベル */
      hierarchy_level?: number | undefined
      /** 上位科目カテゴリーID(上層が存在する場合含まれる) */
      parent_account_category_id?: number | undefined
      /** 上位勘定科目カテゴリー名(上層が存在する場合含まれる) */
      parent_account_category_name?: string | undefined
      /** 期末残高 */
      closing_balance?: number | undefined
    }[]
  }
}

export type SectionParams = {
  /** 事業所ID */
  company_id: number
  /** 部門名 (30文字以内) */
  name: string
  /** 正式名称 (255文字以内) */
  long_name?: string | undefined
  /** ショートカット１ (20文字以内) */
  shortcut1?: string | undefined
  /** ショートカット２ (20文字以内) */
  shortcut2?: string | undefined
  /** 親部門ID (ビジネスプラン以上) */
  parent_id?: number | undefined
}

export type SectionResponse = {
  section: {
    /** 部門ID */
    id: number
    /** 部門名 (30文字以内) */
    name: string
    /** 正式名称（255文字以内） */
    long_name?: string | null | undefined
    /** 事業所ID */
    company_id: number
    /** ショートカット１ (20文字以内) */
    shortcut1?: string | null | undefined
    /** ショートカット２ (20文字以内) */
    shortcut2?: string | null | undefined
  }
}

export type DealCreateResponse = {
  deal: {
    /** 取引ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 発生日 (yyyy-mm-dd) */
    issue_date: string
    /** 支払期日 (yyyy-mm-dd) */
    due_date?: string | undefined
    /** 金額 */
    amount: number
    /** 支払金額 */
    due_amount?: number | undefined
    /** 収支区分 (収入: income, 支出: expense) */
    type?: 'income' | 'expense' | undefined
    /** 取引先ID */
    partner_id: number
    /** 取引先コード */
    partner_code?: string | null | undefined
    /** 管理番号 */
    ref_number?: string | undefined
    /** 決済状況 (未決済: unsettled, 完了: settled) */
    status: 'unsettled' | 'settled'
    /** 取引の明細行 */
    details?: {
      /** 取引行ID */
      id: number
      /** 勘定科目ID */
      account_item_id: number
      /** 税区分ID（廃止予定） */
      tax_id?: number | undefined
      /** 税区分コード */
      tax_code: number
      /** 品目ID */
      item_id?: number | null | undefined
      /** 部門ID */
      section_id?: number | null | undefined
      /** メモタグID */
      tag_ids?: number[] | undefined
      /** セグメント１ID */
      segment_1_tag_id?: number | null | undefined
      /** セグメント２ID */
      segment_2_tag_id?: number | null | undefined
      /** セグメント３ID */
      segment_3_tag_id?: number | null | undefined
      /** 取引金額 */
      amount: number
      /** 消費税額 */
      vat: number
      /** 備考 */
      description?: string | undefined
      /** 貸借（貸方: credit, 借方: debit） */
      entry_side: 'credit' | 'debit'
    }[] | undefined
    /** 取引の支払行 */
    payments?: {
      /** 取引行ID */
      id: number
      /** 支払日 */
      date: string
      /** 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet, プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）: private_account_item) */
      from_walletable_type?: 'bank_account' | 'credit_card' | 'wallet' | 'private_account_item' | undefined
      /** 口座ID（from_walletable_typeがprivate_account_itemの場合は勘定科目ID） */
      from_walletable_id?: number | undefined
      /** 支払金額 */
      amount: number
    }[] | undefined
  }
}

export type DealResponse = {
  deal: {
    /** 取引ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 発生日 (yyyy-mm-dd) */
    issue_date: string
    /** 支払期日 (yyyy-mm-dd) */
    due_date?: string | undefined
    /** 金額 */
    amount: number
    /** 支払金額 */
    due_amount?: number | undefined
    /** 収支区分 (収入: income, 支出: expense) */
    type?: 'income' | 'expense' | undefined
    /** 取引先ID */
    partner_id: number
    /** 取引先コード */
    partner_code?: string | null | undefined
    /** 管理番号 */
    ref_number?: string | undefined
    /** 決済状況 (未決済: unsettled, 完了: settled) */
    status: 'unsettled' | 'settled'
    /** 取引の明細行 */
    details?: {
      /** 取引行ID */
      id: number
      /** 勘定科目ID */
      account_item_id: number
      /** 税区分ID（廃止予定） */
      tax_id?: number | undefined
      /** 税区分コード */
      tax_code: number
      /** 品目ID */
      item_id?: number | null | undefined
      /** 部門ID */
      section_id?: number | null | undefined
      /** メモタグID */
      tag_ids?: number[] | undefined
      /** セグメント１ID */
      segment_1_tag_id?: number | null | undefined
      /** セグメント２ID */
      segment_2_tag_id?: number | null | undefined
      /** セグメント３ID */
      segment_3_tag_id?: number | null | undefined
      /** 取引金額 */
      amount: number
      /** 消費税額 */
      vat: number
      /** 備考 */
      description?: string | undefined
      /** 貸借（貸方: credit, 借方: debit） */
      entry_side: 'credit' | 'debit'
    }[] | undefined
    /** 取引の+更新行 */
    renews?: {
      /** +更新行ID */
      id: number
      /** 更新日 (yyyy-mm-dd) */
      update_date: string
      /** +更新の対象行ID */
      renew_target_id: number
      /** +更���の対象行タイプ */
      renew_target_type: 'detail' | 'accrual' | 'renew'
      /** +更新の明細行一覧（配列） */
      details: {
        /** +更新の明細行ID */
        id: number
        /** 貸借(貸方: credit, 借方: debit) */
        entry_side: 'credit' | 'debit'
        /** 勘定科目ID */
        account_item_id: number
        /** 税区分コード */
        tax_code: number
        /** 品目ID */
        item_id?: number | null | undefined
        /** 部門ID */
        section_id?: number | null | undefined
        tag_ids: number[]
        /** セグメント１ID */
        segment_1_tag_id?: number | null | undefined
        /** セグメント２ID */
        segment_2_tag_id?: number | null | undefined
        /** セグメント３ID */
        segment_3_tag_id?: number | null | undefined
        /** 金額（税込で指定してください） */
        amount: number
        /** 消費税額（指定しない場合は自動で計算されます） */
        vat: number
        /** 備考 */
        description?: string | null | undefined
      }[]
    }[] | undefined
    /** 取引の支払行 */
    payments?: {
      /** 取引行ID */
      id: number
      /** 支払日 */
      date: string
      /** 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet, プライベート資金（法人の場合は役員借入金もしくは役員借入金、個人の場合は事業主貸もしくは事業主借）: private_account_item) */
      from_walletable_type?: 'bank_account' | 'credit_card' | 'wallet' | 'private_account_item' | undefined
      /** 口座ID（from_walletable_typeがprivate_account_itemの場合は勘定科目ID） */
      from_walletable_id?: number | undefined
      /** 支払金額 */
      amount: number
    }[] | undefined
    /** 証憑ファイル */
    receipts?: {
      /** 証憑ID */
      id: number
      /** ステータス(unconfirmed:確認待ち、confirmed:確認済み、deleted:削除済み、ignored:無視) */
      status: 'unconfirmed' | 'confirmed' | 'deleted' | 'ignored'
      /** メモ */
      description?: string | undefined
      /** MIMEタイプ */
      mime_type: string
      /** 発生日 */
      issue_date?: string | undefined
      /** アップロード元種別 */
      origin: 'unknown' | 'web' | 'mobile_camera' | 'mobile_album' | 'scansnap' | 'scannable' | 'dropbox' | 'mail' | 'safety_contact_file' | 'public_api'
      /** 作成日時（ISO8601形式） */
      created_at: string
      /** ファイルのダウンロードURL（freeeにログインした状態でのみ閲覧可能です。） */
      file_src: string

      user: {
        /** ユーザID */
        id: number
        /** メールアドレス */
        email: string
        /** 表示名 */
        display_name?: string | null | undefined
      }
    }[] | undefined
  }
}

export type SelectablesIndexResponse = {
  account_categories?: {
    /** 収支 */
    balance: 'expense' | 'income'
    /** 事業形態（個人事業主: personal、法人: corporate） */
    org_code: 'personal' | 'corporate'
    /** カテゴリーコード */
    role: string
    /** カテゴリー名 */
    title: string
    /** カテゴリーの説明 */
    desc?: string | undefined
    /** 勘定科目の一覧 */
    account_items: {
      /** 勘定科目ID */
      id: number
      /** 勘定科目 */
      name?: string | undefined
      /** 勘定科目の説明 */
      desc?: string | undefined
      /** 勘定科目の説明（詳細） */
      help?: string | undefined
      /** ショートカット */
      shortcut?: string | undefined

      default_tax?: {
        tax_rate_5?: {
          /** 税区分ID */
          id?: number | undefined
          /** 税区分 */
          name?: string | undefined
        } | undefined

        tax_rate_8?: {
          /** 税区分ID */
          id?: number | undefined
          /** 税区分 */
          name?: string | undefined
        } | undefined
      } | undefined
    }[]
  }[] | undefined
  /** 決算書表示名（小カテゴリー） */
  account_groups?: {
    /** 決算書表示名（小カテゴリー）ID */
    id: number
    /** 決算書表示名 */
    name: string
    /** 年度ID */
    account_structure_id: number
    /** 勘定科目カテゴリーID */
    account_category_id: number
    /** 詳細パラメータの種類 */
    detail_type?: number | undefined
    /** 並び順 */
    index: number
    /** 作成日時 */
    created_at?: string | undefined
    /** 更新日時 */
    updated_at?: string | undefined
  }[] | undefined
}

export type ItemResponse = {
  item: {
    /** 品目ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 品目名 (30文字以内) */
    name: string
    /** ショートカット１ (20文字以内) */
    shortcut1?: string | null | undefined
    /** ショートカット２ (20文字以内) */
    shortcut2?: string | null | undefined
  }
}

export type ManualJournalResponse = {
  manual_journal: {
    /** 振替伝票ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 発生日 (yyyy-mm-dd) */
    issue_date: string
    /** 決算整理仕訳フラグ（falseまたは未指定の場合: 日常仕訳） */
    adjustment: boolean
    /** 仕訳番号 */
    txn_number: string | null
    /** 貸借行一覧（配列）: 貸借合わせて100行まで登録できます。 */
    details: {
      /** 貸借行ID */
      id: number
      /** 貸借(貸方: credit, 借方: debit) */
      entry_side: 'credit' | 'debit'
      /** 勘定科目ID */
      account_item_id: number
      /** 税区分ID */
      tax_code: number
      /** 取引先ID */
      partner_id: number | null
      /** 取引先名 */
      partner_name: string | null
      /** 取引先コード */
      partner_code?: string | null | undefined
      /** 正式名称（255文字以内） */
      partner_long_name: string | null
      /** 品目ID */
      item_id: number | null
      /** 品目 */
      item_name: string | null
      /** 部門ID */
      section_id: number | null
      /** 部門 */
      section_name: string | null
      tag_ids: number[]
      tag_names: string[]
      /** セグメント１ID */
      segment_1_tag_id?: number | undefined
      /** セグメント１ID */
      segment_1_tag_name?: number | undefined
      /** セグメント２ID */
      segment_2_tag_id?: number | undefined
      /** セグメント２ */
      segment_2_tag_name?: number | undefined
      /** セグメント３ID */
      segment_3_tag_id?: number | undefined
      /** セグメント３ */
      segment_3_tag_name?: number | undefined
      /** 金額（税込で指定してください） */
      amount: number
      /** 消費税額（指定しない場合は自動で計算されます） */
      vat: number
      /** 備考 */
      description: string
    }[]
  }
}

export type TagParams = {
  /** 事業所ID */
  company_id: number
  /** メモタグ名 (30文字以内) */
  name: string
  /** メモタグ検索用 (20文字以内) */
  shortcut1?: string | undefined
  /** メモタグ検索用 (20文字以内) */
  shortcut2?: string | undefined
}

export type TagResponse = {
  tag: {
    /** タグID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 名前(30文字以内) */
    name: string | null
    /** ショートカット1 (255文字以内) */
    shortcut1?: string | null | undefined
    /** ショートカット2 (255文字以内) */
    shortcut2?: string | null | undefined
  }
}

export type CompanyUpdateResponse = {
  company: {
    /** 事業所ID */
    id: number
    /** 事業所の正式名称 (100文字以内) */
    name: string | null
    /** 正式名称フリガナ (100文字以内) */
    name_kana: string | null
    /** 事業所名 */
    display_name: string
    /** 源泉徴収税計算（0: 消費税を含める、1: 消費税を含めない） */
    tax_at_source_calc_type: number
    /** 担当者名 (50文字以内) */
    contact_name: string | null
    /** 従業員数（0: 経営者のみ、1: 2~5人、2: 6~10人、3: 11~20人、4: 21~30人、5: 31~40人、6: 41~100人、7: 100人以上 */
    head_count: number | null
    /** 法人番号 (半角数字13桁、法人のみ) */
    corporate_number: string
    /** 仕訳番号形式（not_used: 使用しない、digits: 数字（例：5091824）、alnum: 英数字（例：59J0P）） */
    txn_number_format: 'not_used' | 'digits' | 'alnum'
    /** 決済口座のデフォルト */
    default_wallet_account_id?: number | undefined
    /** プライベート資金/役員資金（false: 使用しない、true: 使用する） */
    private_settlement: boolean
    /** マイナスの表示方法（0: -、 1: △） */
    minus_format: number
    /** ユーザーの権限 */
    role: 'admin' | 'simple_accounting' | 'self_only' | 'read_only'
    /** 電話番号１ */
    phone1: string
    /** 電話番号２ */
    phone2: string | null
    /** FAX */
    fax: string | null
    /** 郵便番号 */
    zipcode: string
    /** 都道府県コード（0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    prefecture_code: number
    /** 市区町村・番地 */
    street_name1: string
    /** 建物名・部屋番号など */
    street_name2: string
    /** レイアウト(0: レイアウト1, 1:レイアウト2, 3:封筒1, 4:レイアウト3(繰越金額欄あり), 5: 封筒2(繰越金額欄あり)) */
    invoice_layout: number
    /** スタイル(0: クラシック, 1: モダン) */
    invoice_style: number
    /** 金額端数処理方法（0: 切り捨て、1: 切り上げ、2: 四捨五入） */
    amount_fraction: number
    /** 種別（agriculture_forestry_fisheries_ore: 農林水産業/鉱業、construction: 建設、manufacturing_processing: 製造/加工、it: IT、transportation_logistics: 運輸/物流、retail_wholesale: 小売/卸売、finance_insurance: 金融/保険、real_estate_rental: 不動産/レンタル、profession: 士業/学術/専門技術サービス、design_production: デザイン/制作、food: 飲食、leisure_entertainment: レジャー/娯楽、lifestyle: 生活関連サービス、education: 教育/学習支援、medical_welfare: 医療/福祉、other_services: その他サービス、other: その他） */
    industry_class: '' | 'agriculture_forestry_fisheries_ore' | 'construction' | 'manufacturing_processing' | 'it' | 'transportation_logistics' | 'retail_wholesale' | 'finance_insurance' | 'real_estate_rental' | 'profession' | 'design_production' | 'food' | 'lifestyle' | 'education' | 'medical_welfare' | 'other_services' | 'other'
    /** コード（transport_delivery: 輸送業/配送業、delivery: バイク便等の配達業、other_transportation_logistics: その他の運輸業、物流業） */
    industry_code: '' | 'transport_delivery' | 'delivery' | 'other_transportation_logistics'
    /** 仕訳承認フロー（enable: 有効、 disable: 無効） */
    workflow_setting: 'enable' | 'disable'
    fiscal_years?: {
      /** 製造業向け機能（true: 使用する、false: 使用しない） */
      use_industry_template: boolean
      /** 固定資産の控除法(false: 減価償却累計額でまとめる、true: 独立間接控除方式) */
      indirect_write_off_method: boolean
      /** 期首日 */
      start_date?: string | undefined
      /** 期末日 */
      end_date?: string | undefined
      /** 月次償却（0: しない、1: する） */
      depreciation_record_method: number
      /** 課税区分（0: 免税、1: 簡易課税、2: 本則課税（個別対応方式）、3: 本則課税（一括比例配分方式）、4: 本則課税（全額控除）） */
      tax_method: number
      /** 簡易課税用事業区分（0: 第一種：卸売業、1: 第二種：小売業、2: 第三種：農林水産業、工業、建設業、製造業など、3: 第四種：飲食店業など、4: 第五種：金融・保険業、運輸通信業、サービス業など、5: 第六種：不動産業など */
      sales_tax_business_code: number
      /** 消費税端数処理方法（0: 切り捨て、1: 切り上げ、2: 四捨五入） */
      tax_fraction: number
      /** 消費税経理処理方法（0: 税込経理、1: 旧税抜経理、2: 税抜経理） */
      tax_account_method: number
      /** 不動産所得使用区分（0: 一般、1: 一般/不動産） ※個人事業主のみ設定可能 */
      return_code: number
    }[] | undefined
  }
}

export type CompanyIndexResponse = {
  companies: {
    /** 事業所ID */
    id: number
    /** 事業所名 */
    name: string | null
    /** 事業所名（カナ） */
    name_kana: string | null
    /** 事業所名 */
    display_name: string | null
    /** ユーザーの権限 */
    role: 'admin' | 'simple_accounting' | 'self_only' | 'read_only'
  }[]
}

export type CompanyResponse = {
  company: {
    /** 事業所ID */
    id: number
    /** 事業所の正式名称 (100文字以内) */
    name: string | null
    /** 正式名称フリガナ (100文字以内) */
    name_kana: string | null
    /** 事業所名 */
    display_name: string
    /** 源泉徴収税計算（0: 消費税を含める、1: 消費税を含めない） */
    tax_at_source_calc_type: number
    /** 担当者名 (50文字以内) */
    contact_name: string | null
    /** 従業員数（0: 経営者のみ、1: 2~5人、2: 6~10人、3: 11~20人、4: 21~30人、5: 31~40人、6: 41~100人、7: 100人以上 */
    head_count: number | null
    /** 法人番号 (半角数字13桁、法人のみ) */
    corporate_number: string
    /** 仕訳番号形式（not_used: 使用しない、digits: 数字（例：5091824）、alnum: 英数字（例：59J0P）） */
    txn_number_format: 'not_used' | 'digits' | 'alnum'
    /** 決済口座のデフォルト */
    default_wallet_account_id?: number | undefined
    /** プライベート資金/役員資金（false: 使用しない、true: 使用する） */
    private_settlement: boolean
    /** マイナスの表示方法（0: -、 1: △） */
    minus_format: number
    /** ユーザーの権限 */
    role: 'admin' | 'simple_accounting' | 'self_only' | 'read_only'
    /** 電話番号１ */
    phone1: string
    /** 電話番号２ */
    phone2: string | null
    /** FAX */
    fax: string | null
    /** 郵便番号 */
    zipcode: string
    /** 都道府県コード（0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    prefecture_code: number
    /** 市区町村・番地 */
    street_name1: string
    /** 建物名・部屋番号など */
    street_name2: string
    /** レイアウト(0: レイアウト1, 1:レイアウト2, 3:封筒1, 4:レイアウト3(繰越金額欄あり), 5: 封筒2(繰越金額欄あり)) */
    invoice_layout: number
    /** スタイル(0: クラシック, 1: モダン) */
    invoice_style: number
    /** 金額端数処理方法（0: 切り捨て、1: 切り上げ、2: 四捨五入） */
    amount_fraction: number
    /** 種別（agriculture_forestry_fisheries_ore: 農林水産業/鉱業、construction: 建設、manufacturing_processing: 製造/加工、it: IT、transportation_logistics: 運輸/物流、retail_wholesale: 小売/卸売、finance_insurance: 金融/保険、real_estate_rental: 不動産/レンタル、profession: 士業/学術/専門技術サービス、design_production: デザイン/制作、food: 飲食、leisure_entertainment: レジャー/娯楽、lifestyle: 生活関連サービス、education: 教育/学習支援、medical_welfare: 医療/福祉、other_services: その他サービス、other: その他） */
    industry_class: '' | 'agriculture_forestry_fisheries_ore' | 'construction' | 'manufacturing_processing' | 'it' | 'transportation_logistics' | 'retail_wholesale' | 'finance_insurance' | 'real_estate_rental' | 'profession' | 'design_production' | 'food' | 'lifestyle' | 'education' | 'medical_welfare' | 'other_services' | 'other'
    /** コード（transport_delivery: 輸送業/配送業、delivery: バイク便等の配達業、other_transportation_logistics: その他の運輸業、物流業） */
    industry_code: '' | 'transport_delivery' | 'delivery' | 'other_transportation_logistics'
    /** 仕訳承認フロー（enable: 有効、 disable: 無効） */
    workflow_setting: 'enable' | 'disable'
    /** 取引先コードの利用設定（true: 有効、 false: 無効） */
    use_partner_code: boolean
    fiscal_years: Fiscal_years[]
  }
}

export type UnauthorizedError = {
  message?: string | undefined
  messages?: string | undefined
}

export type ForbiddenError = {
  message?: string | undefined
  messages?: string | undefined
}

export type BadRequestError = {
  status_code?: number | undefined
  errors?: {
    messages: string[] | string

    type: 'status' | 'validation' | 'error'
  }[] | undefined
}

export type BadRequestNotFoundError = {
  status_code?: number | undefined
  errors?: {
    messages: string[] | string

    type: 'status' | 'validation' | 'error'
  }[] | undefined
}

export type TooManyRequestsError = {
  status_code: number

  meta: {
    /** 設定されている上限値 */
    limit: number
    /** 使用回数をカウントする期間 (秒) */
    period?: number | undefined
    /** 上限に達するまでの使用可能回数 */
    remaining: number
    /** （上限値に達した場合）使用回数がリセットされる時刻 */
    reset: string
  }
}

export type InternalServerError = {
  status_code?: number | undefined
  errors?: {
    messages: string[] | string

    type: 'status' | 'validation' | 'error'
  }[] | undefined
}

export type ServiceUnavailableError = {
  status_code: number
  errors: {
    messages: string[]
    type: 'status' | 'error'
  }[]
}

export type PartnersResponse = {
  partners: {
    /** 取引先ID */
    id: number
    /** 取引先コード */
    code: string | null
    /** 事業所ID */
    company_id: number
    /** 取引先名 */
    name: string
    /** ショートカット1 (20文字以内) */
    shortcut1?: string | null | undefined
    /** ショートカット2 (20文字以内) */
    shortcut2?: string | null | undefined
    /** 正式名称（255文字以内） */
    long_name?: string | null | undefined
    /** カナ名称（255文字以内） */
    name_kana?: string | null | undefined
    /** 敬称（御中、様、(空白)の3つから選択） */
    default_title?: string | null | undefined
    /** 電話番号 */
    phone?: string | null | undefined
    /** 担当者 氏名 */
    contact_name?: string | null | undefined
    /** 担当者 メールアドレス */
    email?: string | null | undefined
    /** 振込元口座ID（一括振込ファイル用）:（未設定の場合は、nullです。） */
    payer_walletable_id?: number | null | undefined
    /** 振込手数料負担（一括振込ファイル用）: (振込元(当方): payer, 振込先(先方): payee) */
    transfer_fee_handling_side?: 'payer' | 'payee' | undefined
    /** 郵便番号 */
    'address_attributes[zipcode]'?: string | null | undefined
    /** 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    'address_attributes[prefecture_code]'?: number | undefined
    /** 市区町村・番地 */
    'address_attributes[street_name1]'?: string | null | undefined
    /** 建物名・部屋番号など */
    'address_attributes[street_name2]'?: string | null | undefined
    /** 請求書送付方法(mail:メール、posting:郵送、mail_and_posting:メールと郵送) */
    'partner_doc_setting_attributes[sending_method]'?: 'mail' | 'posting' | 'main_and_posting' | null | undefined
    /** 銀行名 */
    'partner_bank_account_attributes[bank_name]'?: string | null | undefined
    /** 銀行名（カナ） */
    'partner_bank_account_attributes[bank_name_kana]'?: string | null | undefined
    /** 銀行番号 */
    'partner_bank_account_attributes[bank_code]'?: string | null | undefined
    /** 支店名 */
    'partner_bank_account_attributes[branch_name]'?: string | null | undefined
    /** 支店名（カナ） */
    'partner_bank_account_attributes[branch_kana]'?: string | null | undefined
    /** 受取人名（カナ） */
    'partner_bank_account_attributes[branch_code]'?: string | null | undefined
    /** 口座種別(ordinary:普通、checking:当座、earmarked:納税準備預金、savings:貯蓄、other:その他) */
    'partner_bank_account_attributes[account_type]'?: 'ordinary' | 'checking' | 'earmarked' | 'savings' | 'other' | null | undefined
    /** 口座番号 */
    'partner_bank_account_attributes[account_number]'?: string | null | undefined
    /** 受取人名（カナ） */
    'partner_bank_account_attributes[account_name]'?: string | null | undefined
    /** 受取人名 */
    'partner_bank_account_attributes[long_account_name]'?: string | null | undefined
  }[]
}

export type PartnerResponse = {
  partner: {
    /** 取引先ID */
    id: number
    /** 取引先コード */
    code: string | null
    /** 事業所ID */
    company_id: number
    /** 取引先名 */
    name: string
    /** ショートカット1 (20文字以内) */
    shortcut1?: string | null | undefined
    /** ショートカット2 (20文字以内) */
    shortcut2?: string | null | undefined
    /** 正式名称（255文字以内） */
    long_name?: string | null | undefined
    /** カナ名称（255文字以内） */
    name_kana?: string | null | undefined
    /** 敬称（御中、様、(空白)の3つから選択） */
    default_title?: string | null | undefined
    /** 電話番号 */
    phone?: string | null | undefined
    /** 担当者 氏名 */
    contact_name?: string | null | undefined
    /** 担当者 メールアドレス */
    email?: string | null | undefined
    /** 振込元口座ID（一括振込ファイル用）:（未設定の場合は、nullです。） */
    payer_walletable_id?: number | null | undefined
    /** 振込手数料負担（一括振込ファイル用）: (振込元(当方): payer, 振込先(先方): payee) */
    transfer_fee_handling_side?: 'payer' | 'payee' | undefined
    /** 郵便番号 */
    'address_attributes[zipcode]'?: string | null | undefined
    /** 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    'address_attributes[prefecture_code]'?: number | undefined
    /** 市区町村・番地 */
    'address_attributes[street_name1]'?: string | null | undefined
    /** 建物名・部屋番号など */
    'address_attributes[street_name2]'?: string | null | undefined
    /** 請求書送付方法(email:メール、posting:郵送、email_and_posting:メールと郵送) */
    'partner_doc_setting_attributes[sending_method]'?: 'email' | 'posting' | 'email_and_posting' | null | undefined
    /** 銀行名 */
    'partner_bank_account_attributes[bank_name]'?: string | null | undefined
    /** 銀行名（カナ） */
    'partner_bank_account_attributes[bank_name_kana]'?: string | null | undefined
    /** 銀行番号 */
    'partner_bank_account_attributes[bank_code]'?: string | null | undefined
    /** 支店名 */
    'partner_bank_account_attributes[branch_name]'?: string | null | undefined
    /** 支店名（カナ） */
    'partner_bank_account_attributes[branch_kana]'?: string | null | undefined
    /** 受取人名（カナ） */
    'partner_bank_account_attributes[branch_code]'?: string | null | undefined
    /** 口座種別(ordinary:普通、checking:当座、earmarked:納税準備預金、savings:貯蓄、other:その他) */
    'partner_bank_account_attributes[account_type]'?: 'ordinary' | 'checking' | 'earmarked' | 'savings' | 'other' | null | undefined
    /** 口座番号 */
    'partner_bank_account_attributes[account_number]'?: string | null | undefined
    /** 受取人名（カナ） */
    'partner_bank_account_attributes[account_name]'?: string | null | undefined
    /** 受取人名 */
    'partner_bank_account_attributes[long_account_name]'?: string | null | undefined
    /** 締め日（29, 30, 31日の末日を指定する場合は、32。） */
    'payment_term_attributes[cutoff_day]'?: number | null | undefined
    /** 支払月 */
    'payment_term_attributes[additional_months]'?: number | null | undefined
    /** 支払日（29, 30, 31日の末日を指定する場合は、32。） */
    'payment_term_attributes[fixed_day]'?: number | null | undefined
    /** 締め日（29, 30, 31日の末日を指定する場合は、32。） */
    'invoice_payment_term_attributes[cutoff_day]'?: number | null | undefined
    /** 支払月 */
    'invoice_payment_term_attributes[additional_months]'?: number | null | undefined
    /** 支払日（29, 30, 31日の末日を指定する場合は、32。） */
    'invoice_payment_term_attributes[fixed_day]'?: number | null | undefined
  }
}

export type TaxResponse = {
  tax: {
    /** 税区分コード */
    code: number
    /** 税区分名 */
    name: string
    /** 税区分名（日本語表示用） */
    name_ja: string
  }
}

export type WalletableResponse = {
  walletable: {
    /** 口座ID */
    id: number
    /** 口座名 (255文字以内) */
    name: string
    /** サービスID */
    bank_id: number | null
    /** 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) */
    type: 'bank_account' | 'credit_card' | 'wallet'
    /** 同期残高 */
    last_balance?: number | undefined
    /** 登録残高 */
    walletable_balance?: number | undefined

    meta?: {
      /** 集計結果が最新かどうか */
      up_to_date?: boolean | undefined
    } | undefined
  }
}

export type WalletableCreateResponse = {
  /** 口座ID */
  id: number
  /** 口座名, 最大255文字 */
  name: string
  /** サービスID */
  bank_id: number
  /** 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) */
  type: 'bank_account' | 'credit_card' | 'wallet'
}

export type WalletTxnResponse = {
  wallet_txn: {
    /** 明細ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 取引日(yyyy-mm-dd) */
    date: string
    /** 取引金額 */
    amount: number
    /** 未決済金額 */
    due_amount: number
    /** 残高(銀行口座等) */
    balance: number
    /** 入金／出金 (入金: income, 出金: expense) */
    entry_side: 'income' | 'expense'
    /** 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) */
    walletable_type: 'bank_account' | 'credit_card' | 'wallet'
    /** 口座ID */
    walletable_id: number
    /** 取引内容 */
    description: string
    /** 明細のステータス（消込待ち: 1, 消込済み: 2, 無視: 3, 消込中: 4） */
    status: number
  }
}

export type TransferResponse = {
  transfer: {
    /** 取引(振替)ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 金額 */
    amount: number
    /** 振替日 (yyyy-mm-dd) */
    date: string
    /** 振替元口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) */
    from_walletable_type: 'bank_account' | 'wallet' | 'credit_card' | null
    /** 振替元口座ID */
    from_walletable_id: number
    /** 振替先口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) */
    to_walletable_type: 'bank_account' | 'wallet' | 'credit_card' | null
    /** 振替先口座ID */
    to_walletable_id: number
    /** 備考 */
    description: string
  }
}

export type UserParams = {
  /** 表示名 (20文字以内) */
  display_name?: string | undefined
  /** 氏名（名） (20文字以内) */
  first_name?: string | undefined
  /** 氏名（姓） (20文字以内) */
  last_name?: string | undefined
  /** 氏名（カナ・名） (20文字以内) */
  first_name_kana?: string | undefined
  /** 氏名（カナ・姓） (20文字以内) */
  last_name_kana?: string | undefined
}

export type UserResponse = {
  user?: {
    /** ユーザーID */
    id: number
    /** メールアドレス */
    email: string
    /** 表示名 */
    display_name?: string | null | undefined
    /** 氏名（名） */
    first_name?: string | null | undefined
    /** 氏名（姓） */
    last_name?: string | null | undefined
    /** 氏名（カナ・名） */
    first_name_kana?: string | null | undefined
    /** 氏名（カナ・姓） */
    last_name_kana?: string | null | undefined
  } | undefined
}

export type MeResponse = {
  user: {
    /** ユーザーID */
    id: number
    /** メールアドレス */
    email: string
    /** 表示ユーザー名 */
    display_name?: string | null | undefined
    /** 名 */
    first_name?: string | null | undefined
    /** 姓 */
    last_name?: string | null | undefined
    /** 名（カナ） */
    first_name_kana?: string | null | undefined
    /** 姓（カナ） */
    last_name_kana?: string | null | undefined
    companies?: {
      /** 事業所ID */
      id: number
      /** 表示名 */
      display_name: string
      /** ユーザーの権限 */
      role: 'admin' | 'simple_accounting' | 'self_only' | 'read_only'
      /** カスタム権限（true: 使用する、false: 使用しない） */
      use_custom_role: boolean
    }[] | undefined
  }
}

export type UserCapability = {
  /** 閲覧 */
  read?: boolean | undefined
  /** 作成 */
  create?: boolean | undefined
  /** 更新 */
  update?: boolean | undefined
  /** 削除 */
  destroy?: boolean | undefined
}

export type ReceiptResponse = {
  receipt: {
    /** 証憑ID */
    id: number
    /** ステータス(unconfirmed:確認待ち、confirmed:確認済み、deleted:削除済み、ignored:無視) */
    status: 'unconfirmed' | 'confirmed' | 'deleted' | 'ignored'
    /** メモ */
    description?: string | undefined
    /** MIMEタイプ */
    mime_type: string
    /** 発生日 */
    issue_date?: string | undefined
    /** アップロード元種別 */
    origin: 'unknown' | 'web' | 'mobile_camera' | 'mobile_album' | 'scansnap' | 'scannable' | 'dropbox' | 'mail' | 'safety_contact_file' | 'public_api'
    /** 作成日時（ISO8601形式） */
    created_at: string
    /** ファイルのダウンロードURL（freeeにログインした状態でのみ閲覧可能です。） */
    file_src: string

    user: {
      /** ユーザID */
      id: number
      /** メールアドレス */
      email: string
      /** 表示名 */
      display_name?: string | null | undefined
    }
  }
}

export type Fiscal_years = {
  /** 製造業向け機能（true: 使用する、false: 使用しない） */
  use_industry_template: boolean
  /** 固定資産の控除法(false: 減価償却累計額でまとめる、true: 独立間接控除方式) */
  indirect_write_off_method: boolean
  /** 期首日 */
  start_date?: string | undefined
  /** 期末日 */
  end_date?: string | undefined
  /** 月次償却（0: しない、1: する） */
  depreciation_record_method: number
  /** 課税区分（0: 免税、1: 簡易課税、2: 本則課税（個別対応方式）、3: 本則課税（一括比例配分方式）、4: 本則課税（全額控除）） */
  tax_method: number
  /** 簡易課税用事業区分（0: 第一種：卸売業、1: 第二種：小売業、2: 第三種：農林水産業、工業、建設業、製造業など、3: 第四種：飲食店業など、4: 第五種：金融・保険業、運輸通信業、サービス業など、5: 第六種：不動産業など */
  sales_tax_business_code: number
  /** 消費税端数処理方法（0: 切り捨て、1: 切り上げ、2: 四捨五入） */
  tax_fraction: number
  /** 消費税経理処理方法（0: 税込経理、1: 旧税抜経理、2: 税抜経理） */
  tax_account_method: number
  /** 不動産所得使用区分（0: 一般、1: 一般/不動産） ※個人事業主のみ設定可能 */
  return_code: number
}

export type ExpenseApplicationResponse = {
  expense_application: {
    /** 経費申請ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 申請タイトル */
    title: string
    /** 申請日 (yyyy-mm-dd) */
    issue_date: string | null
    /** 備考 */
    description?: string | undefined
    /** 会計freeeのWeb画面から申請内容を編集可能：falseの場合、Web上からの項目行の追加／削除・金額の編集が出来なくなります。APIでの編集は可能です。 */
    editable_on_web: boolean
    /** 合計金額 */
    total_amount?: number | undefined
    /** 申請ステータス(draft:下書き, in_progress:申請中, approved:承認済, rejected:却下, feedback:差戻し) */
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    /** 部門ID */
    section_id?: number | null | undefined
    /** メモタグID */
    tag_ids?: number[] | undefined
    /** 経費申請の項目行一覧（配列） */
    expense_application_lines: {
      /** 経費申請の項目行ID */
      id: number
      /** 日付 (yyyy-mm-dd) */
      transaction_date?: string | undefined
      /** 内容 */
      description?: string | undefined
      /** 金額 */
      amount?: number | undefined
      /** 経費科目ID */
      expense_application_line_template_id?: number | undefined
      /** 証憑ID */
      receipt_id?: number | undefined
    }[]
    /** 取引ID (申請ステータス:statusがapprovedで、取引が存在する時のみdeal_idが表示されます) */
    deal_id: number | null
    /** 取引ステータス (申請ステータス:statusがapprovedで、取引が存在する時のみdeal_statusが表示されます settled:精算済み, unsettled:清算待ち) */
    deal_status: 'settled' | 'unsettled' | null
  }
}

export type ExpenseApplicationLineTemplateResponse = {
  expense_application_line_template: {
    /** 経費科目ID */
    id: number
    /** 経費科目名 */
    name: string
    /** 勘定科目ID */
    account_item_id?: number | undefined
    /** 勘定科目名 */
    account_item_name: string
    /** 税区分コード */
    tax_code?: number | undefined
    /** 税区分名 */
    tax_name: string
    /** 経費科目の説明 */
    description?: string | undefined
    /** 内容の補足 */
    line_description?: string | undefined
  }
}

export type ApprovalRequestParams = {
  /** 事業所ID */
  company_id: number
  /** 申請フォームID */
  request_form_id: number
  /** 経路申請ID */
  approval_flow_route_id: number
  /** 承認者ID */
  approver_id?: number | undefined
  /** 申請タイトル (255文字以内) */
  title: string
  request_items?: {
    /** 項目ID */
    id?: number | undefined
    /** 項目タイプ(single_line: 自由記述形式 1行, multi_line: 自由記述形式 複数行, select: プルダウン, date: 日付, amount: 金額, receipt: 添付ファイル) */
    type?: 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt' | undefined
    /** 項目の値 (項目タイプによって入力可能な値が異なります。詳細は注意点をご確認ください） */
    value?: string | undefined
  }[] | undefined
}

export type GeneralApplicationCreateParams = {
  /** 事業所ID */
  company_id: number
  /** 申請日 (yyyy-mm-dd) */
  application_date: string
  /** 申請経路ID */
  approval_flow_route_id: number
  /** 申請フォームID */
  form_id: number
  /** 承認者ID */
  approver_id?: number | undefined
  /** falseの時、in_progress:申請中で作成する。それ以外の時はdraft:下書きで作成する */
  draft: boolean
  /** 親申請ID(既存各種申請IDのみ指定可能です。) */
  parent_id?: number | undefined
  request_items: {
    /** 項目ID */
    id?: number | undefined
    /** 項目タイプ(title: 申請タイトル, single_line: 自由記述形式 1行, multi_line: 自由記述形式 複数行, select: プルダウン, date: 日付, amount: 金額, receipt: 添付ファイル) */
    type?: 'title' | 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt' | undefined
    /** 項目の値 */
    value?: string | undefined
  }[]
}

export type GeneralApplicationUpdateParams = {
  /** 事業所ID */
  company_id: number
  /** 申請日 (yyyy-mm-dd) */
  application_date: string
  /** 申請経路ID */
  approval_flow_route_id: number
  /** 承認者ID */
  approver_id?: number | undefined
  /** falseの時、in_progress:申請中で更新する。それ以外の時はdraft:下書きで更新する */
  draft: boolean
  request_items: {
    /** 項目ID */
    id?: number | undefined
    /** 項目タイプ(title: 申請タイトル, single_line: 自由記述形式 1行, multi_line: 自由記述形式 複数行, select: プルダウン, date: 日付, amount: 金額, receipt: 添付ファイル) */
    type?: 'title' | 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt' | undefined
    /** 項目の値 */
    value?: string | undefined
  }[]
}

export type GeneralApplicationActionCreateParams = {
  /** 事業所ID */
  company_id: number
  /** 操作(approve: 承認する、force_approve: 代理承認する、cancel: 申請を取り消す、reject: 却下する、feedback: 申請者へ差し戻す、force_feedback: 承認済み・却下済みを取り消す) */
  approval_action: 'approve' | 'force_approve' | 'cancel' | 'reject' | 'feedback' | 'force_feedback'
  /** 次ステップの承認者ID */
  next_approver_id?: number | null | undefined
}

export type RenewCreateParams = {
  /** 事業所ID */
  company_id: number
  /** 更新日 (yyyy-mm-dd) */
  update_date: string
  /** +更新対象行ID (details(取引の明細行), accruals(債権債務行), renewsのdetails(+更新の明細行)のIDを指定) */
  renew_target_id: number
  /** +更新の明細行 */
  details: {
    /** 勘定科目ID */
    account_item_id: number
    /** 税区分コード */
    tax_code: number
    /** 取引金額（税込で指定してください） */
    amount: number
    /** 消費税額（指定しない場合は自動で計算されます） */
    vat?: number | undefined
    /** 品目ID */
    item_id?: number | undefined
    /** 部門ID */
    section_id?: number | undefined
    /** メモタグID */
    tag_ids?: number[] | undefined
    /** セグメント１ID */
    segment_1_tag_id?: number | undefined
    /** セグメント２ID */
    segment_2_tag_id?: number | undefined
    /** セグメント３ID */
    segment_3_tag_id?: number | undefined
    /** 備考 */
    description?: string | undefined
  }[]
}

export type RenewUpdateParams = {
  /** 事業所ID */
  company_id: number
  /** 更新日 (yyyy-mm-dd) */
  update_date: string
  /** +更新の明細行 */
  details: {
    /** 勘定科目ID */
    account_item_id: number
    /** 税区分コード */
    tax_code: number
    /** 取引金額（税込で指定してください） */
    amount: number
    /** 消費税額（指定しない場合は自動で計算されます） */
    vat?: number | undefined
    /** 品目ID */
    item_id?: number | undefined
    /** 部門ID */
    section_id?: number | undefined
    /** メモタグID */
    tag_ids?: number[] | undefined
    /** セグメント１ID */
    segment_1_tag_id?: number | undefined
    /** セグメント２ID */
    segment_2_tag_id?: number | undefined
    /** セグメント３ID */
    segment_3_tag_id?: number | undefined
    /** 備考 */
    description?: string | undefined
  }[]
}

export type ExpenseApplicationLineTemplateParams = {
  /** 事業所ID */
  company_id: number
  /** 経費科目名 (100文字以内) */
  name: string
  /** 勘定科目ID */
  account_items_id?: number | undefined
  /** 品目ID */
  item_id?: number | undefined
  /** 税区分コード（税区分のdisplay_categoryがtax_5: 5%表示の税区分, tax_r8: 軽減税率8%表示の税区分に該当するtax_codeのみ利用可能です。税区分のdisplay_categoryは /taxes/companies/{:company_id}のAPIから取得可能です。） */
  tax_code: number
  /** 経費科目の説明 (1000文字以内) */
  description?: string | undefined
  /** 内容の補足 (1000文字以内) */
  line_description?: string | undefined
}

export type ApprovalRequestResponse = {
  approval_request: {
    /** 各種申請ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 申請日 (yyyy-mm-dd) */
    application_date: string
    /** 申請タイトル */
    title: string
    /** 申請者ID */
    applicant_id: number
    /** 承認者ID */
    approver_id: number | null
    /** 申請No. */
    application_number: string
    /** 申請ステータス */
    status: 'draft'
    /** 各種申請の項目一覧（配列） */
    request_items: {
      /** 項目ID */
      id: number
      /** 項目タイプ */
      type: string
      /** 項目の値 */
      value: string
    }[]
  }
}

export type GeneralApplicationsIndexResponse = {
  general_applications: {
    /** 各種申請ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 申請日 (yyyy-mm-dd) */
    application_date: string
    /** 申請タイトル */
    title: string
    /** 申請者ID */
    applicant_id: number
    /** 承認者ID */
    approver_id: number | null
    /** 申請No. */
    application_number: string
    /** 申請ステータス(draft:下書き, in_progress:申請中, approved:承認済, rejected:却下, feedback:差戻し) */
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    /** 各種申請の項目一覧（配列） */
    request_items: {
      /** 項目ID */
      id: number
      /** 項目タイプ(title: 申請タイトル, single_line: 自由記述形式 1行, multi_line: 自由記述形式 複数行, select: プルダウン, date: 日付, amount: 金額, receipt: 添付ファイル) */
      type: 'title' | 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt'
      /** 項目の値 */
      value: string
    }[]
    /** 申請フォームID */
    form_id: number
    /** 申請経路ID */
    approval_flow_route_id: number
  }[]
}

export type GeneralApplicationResponse = {
  general_application: {
    /** 各種申請ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 申請日 (yyyy-mm-dd) */
    application_date: string
    /** 申請タイトル */
    title: string
    /** 申請者ID */
    applicant_id: number
    /** 承認者ID */
    approver_id: number | null
    /** 申請No. */
    application_number: string
    /** 申請ステータス(draft:下書き, in_progress:申請中, approved:承認済, rejected:却下, feedback:差戻し) */
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    /** 各種申請の項目一覧（配列） */
    request_items: {
      /** 項目ID */
      id: number
      /** 項目タイプ(title: 申請タイトル, single_line: 自由記述形式 1行, multi_line: 自由記述形式 複数行, select: プルダウン, date: 日付, amount: 金額, receipt: 添付ファイル) */
      type: 'title' | 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt'
      /** 項目の値 */
      value: string
    }[]
    /** 申請フォームID */
    form_id: number
    /** 申請経路ID */
    approval_flow_route_id: number
    /** 最終承認者ID(statusがapproved時以外はnullになります。) */
    last_approver_id: number | null
    /** 最終承認日時(ISO8601形式 statusがapproved時以外はnullになります。) */
    last_approved_at: string | null
    /** 各種申請のコメント一覧（配列） */
    comments: {
      /** コメント内容 */
      comment: string
      /** ユーザーID */
      user_id: number
      /** コメント日時(ISO8601形式) */
      posted_at: string
    }[]
    /** 各種申請の承認履歴（配列） */
    approval_flow_logs: {
      /** 操作(apply: 申請, approve: 承認, force_approve: 代理承認, ancel: 取消, reject: 却下, eedback: 差戻し) */
      action: 'apply' | 'approve' | 'force_approve' | 'cancel' | 'reject' | 'feedback'
      /** ユーザーID */
      user_id: number
      /** コメント日時(ISO8601形式) */
      updated_at: string
    }[]
  }
}

export type GeneralApplicationFormResponse = {
  general_application_form: {
    /** 申請フォームID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 申請フォームの名前 */
    name: string
    /** 申請フォームの説明 */
    description: string
    /** ステータス(draft: 申請で使用しない、active: 申請で使用する、deleted: 削除済み) */
    status: 'draft' | 'active' | 'deleted'
    /** 作成日時 */
    created_date: string
    /** 表示順 */
    form_order: number | null
    /** 申請フォームの項目 */
    parts?: {
      /** 項目ID */
      id: number
      /** 順序 */
      order?: number | undefined
      /** 項目種別 (title: 申請タイトル, single_line: 自由記述形式 1行, multi_line: 自由記述形式 複数行, select: プルダウン, date: 日付, amount: 金額, receipt: 添付ファイル) */
      type?: 'title' | 'single_line' | 'multi_line' | 'select' | 'date' | 'amount' | 'receipt' | undefined
      /** 項目名 */
      label?: string | undefined
      /** 追加説明 */
      annotation?: string | null | undefined
      /** 必須かどうか */
      required?: boolean | null | undefined
      /** 選択項目 */
      values?: {
        /** 選択項目名 */
        name: string
        /** 順序 */
        order: number
      }[] | null | undefined
      /** 上限金額 */
      max_amount?: number | null | undefined
      /** 下限金額 */
      min_amount?: number | null | undefined
    }[] | undefined
    /** 適用された経路数 */
    route_setting_count: number
  }
}

export type ApprovalFlowRouteResponse = {
  approval_flow_route: {
    /** 申請経路ID */
    id: number
    /** 申請経路名 */
    name?: string | undefined
    /** 申請経路の説明 */
    description?: string | undefined
    /** 更新したユーザのユーザID */
    user_id?: number | null | undefined
    /** システム作成の申請経路かどうか */
    definition_system?: boolean | undefined
    /** この申請経路を使用中の申請があるかどうか */
    is_in_progress?: boolean | undefined
    /** 最初の承認ステップのID */
    first_step_id?: number | undefined
    /** 申請種別 */
    usages?: ('TxnApproval' | 'ExpenseApplication' | 'PaymentRequest' | 'ApprovalRequest' | 'DocApproval')[] | undefined
  }
}

export type SegmentTagResponse = {
  segment_tag: {
    /** セグメントタグID */
    id: number
    /** セグメントタグ名 */
    name: string
    /** 備考 */
    description: string | null
    /** ショートカット１ (20文字以内) */
    shortcut1: string | null
    /** ショートカット２ (20文字以内) */
    shortcut2: string | null
  }
}

export type SegmentTagParams = {
  /** 事業所ID */
  company_id: number
  /** セグメントタグ名 (30文字以内) */
  name: string
  /** 備考 (30文字以内) */
  description?: string | undefined
  /** ショートカット１ (20文字以内) */
  shortcut1?: string | undefined
  /** ショートカット２ (20文字以内) */
  shortcut2?: string | undefined
}

export type InvoiceResponse = {
  invoice: {
    /** 請求書ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 請求日 (yyyy-mm-dd) */
    issue_date: string
    /** 取引先ID */
    partner_id: number | null
    /** 取引先コード */
    partner_code?: string | null | undefined
    /** 請求書番号 */
    invoice_number: string
    /** タイトル */
    title?: string | null | undefined
    /** 期日 (yyyy-mm-dd) */
    due_date?: string | null | undefined
    /** 合計金額 */
    total_amount: number
    /** 合計金額 */
    total_vat?: number | undefined
    /** 小計 */
    sub_total?: number | undefined
    /** 売上計上日 */
    booking_date?: string | null | undefined
    /** 概要 */
    description?: string | null | undefined
    /** 請求書ステータス  (draft: 下書き, applying: 申請中, remanded: 差し戻し, rejected: 却下, approved: 承認済み, issued: 発行済み) */
    invoice_status: 'draft' | 'applying' | 'remanded' | 'rejected' | 'approved' | 'issued'
    /** 入金ステータス  (unsettled: 入金待ち, settled: 入金済み) */
    payment_status?: '' | 'unsettled' | 'settled' | undefined
    /** 入金日 */
    payment_date?: string | null | undefined
    /** Web共有日時(最新) */
    web_published_at?: string | null | undefined
    /** Web共有ダウンロード日時(最新) */
    web_downloaded_at?: string | null | undefined
    /** Web共有取引先確認日時(最新) */
    web_confirmed_at?: string | null | undefined
    /** メール送信日時(最新) */
    mail_sent_at?: string | null | undefined
    /** 郵送ステータス(unrequested: リクエスト前, preview_registered: プレビュー登録, preview_failed: プレビュー登録失敗, ordered: 注文中, order_failed: 注文失敗, printing: 印刷中, canceled: キャンセル, posted: 投函済み) */
    posting_status: '' | 'unrequested' | 'preview_registered' | 'preview_failed' | 'ordered' | 'order_failed' | 'printing' | 'canceled' | 'posted'
    /** 取引先名 */
    partner_name?: string | null | undefined
    /** 取引先正式名称 */
    partner_long_name?: string | null | undefined
    /** 敬称（御中、様、(空白)の3つから選択） */
    partner_title?: string | null | undefined
    /** 郵便番号 */
    partner_zipcode?: string | null | undefined
    /** 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    partner_prefecture_code?: number | null | undefined
    /** 都道府県 */
    partner_prefecture_name?: string | null | undefined
    /** 市区町村・番地 */
    partner_address1?: string | null | undefined
    /** 建物名・部屋番号など */
    partner_address2?: string | null | undefined
    /** 取引先担当者名 */
    partner_contact_info?: string | null | undefined
    /** 事業所名 */
    company_name: string
    /** 郵便番号 */
    company_zipcode?: string | null | undefined
    /** 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    company_prefecture_code?: number | null | undefined
    /** 都道府県 */
    company_prefecture_name?: string | null | undefined
    /** 市区町村・番地 */
    company_address1?: string | null | undefined
    /** 建物名・部屋番号など */
    company_address2?: string | null | undefined
    /** 事業所担当者名 */
    company_contact_info?: string | null | undefined
    /** 支払方法 (振込: transfer, 引き落とし: direct_debit) */
    payment_type: '' | 'transfer' | 'direct_debit'
    /** 支払口座 */
    payment_bank_info?: string | null | undefined
    /** メッセージ */
    message?: string | null | undefined
    /** 備考 */
    notes?: string | null | undefined
    /** レイアウト(default_classic: レイアウト１/クラシック, standard_classic: レイアウト２/クラシック, envelope_classic: 封筒１/クラシック, carried_forward_standard_classic: レイアウト３（繰越金額欄あり）/クラシック, carried_forward_envelope_classic: 封筒２（繰越金額欄あり）/クラシック, default_modern: レイアウト１/モダン, standard_modern: レイアウト２/モダン, envelope_modern: 封筒/モダン) */
    invoice_layout: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'carried_forward_standard_classic' | 'carried_forward_envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern'
    /** 請求書の消費税計算方法(inclusive: 内税, exclusive: 外税) */
    tax_entry_method: '' | 'inclusive' | 'exclusive'
    /** 取引ID (invoice_statusがissuedの時のみIDが表示されます) */
    deal_id?: number | null | undefined
    /** 請求内容 */
    invoice_contents?: {
      /** 請求内容ID */
      id: number
      /** 順序 */
      order: number
      /** 行の種類 */
      type: 'normal' | 'discount' | 'text'
      /** 数量 */
      qty: number
      /** 単位 */
      unit: string | null
      /** 単価 */
      unit_price: number
      /** 金額 */
      amount: number
      /** 消費税額 */
      vat: number
      /** 軽減税率税区分（true: 対象、false: 対象外） */
      reduced_vat: boolean
      /** 備考 */
      description: string | null
      /** 勘定科目ID */
      account_item_id: number | null
      /** 勘定科目名 */
      account_item_name: string | null
      /** 税区分コード */
      tax_code: number | null
      /** 品目ID */
      item_id: number | null
      /** 品目 */
      item_name: string | null
      /** 部門ID */
      section_id: number | null
      /** 部門 */
      section_name: string | null
      tag_ids: number[]
      tag_names: string[]
      /** セグメント１ID */
      segment_1_tag_id?: number | null | undefined
      /** セグメント１ID */
      segment_1_tag_name?: string | null | undefined
      /** セグメント２ID */
      segment_2_tag_id?: number | null | undefined
      /** セグメント２ */
      segment_2_tag_name?: string | null | undefined
      /** セグメント３ID */
      segment_3_tag_id?: number | null | undefined
      /** セグメント３ */
      segment_3_tag_name?: string | null | undefined
    }[] | undefined

    total_amount_per_vat_rate: {
      /** 税率5%の税込み金額合計 */
      vat_5: number
      /** 税率8%の税込み金額合計 */
      vat_8: number
      /** 軽減税率8%の税込み金額合計 */
      reduced_vat_8: number
      /** 税率10%の税込み金額合計 */
      vat_10: number
    }
  }
}

export type InvoiceCreateParams = {
  /** 事業所ID */
  company_id: number
  /** 請求日 (yyyy-mm-dd) */
  issue_date?: string | undefined
  /** 取引先ID */
  partner_id?: number | null | undefined
  /** 取引先コード */
  partner_code?: string | null | undefined
  /** 請求書番号 (デフォルト: 自動採番されます) */
  invoice_number?: string | undefined
  /** タイトル (デフォルト: 請求書) */
  title?: string | undefined
  /** 期日 (yyyy-mm-dd) */
  due_date?: string | undefined
  /** 売上計上日 */
  booking_date?: string | undefined
  /** 概要 */
  description?: string | undefined
  /** 請求書ステータス  (draft: 下書き (デフォルト), issue: 発行(請求先ワークフローを利用している場合は指定できません)) */
  invoice_status?: 'draft' | 'issue' | undefined
  /** 請求書に表示する取引先名（未指定の場合は取引先の名称をそのまま利用します） */
  partner_name?: string | null | undefined
  /** 敬称（御中、様、(空白)の3つから選択） */
  partner_title?: string | null | undefined
  /** 取引先担当者名 */
  partner_contact_info?: string | null | undefined
  /** 取引先郵便番号 (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_zipcode?: string | null | undefined
  /** 取引先都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄) (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_prefecture_code?: number | null | undefined
  /** 取引先市区町村・番地 (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_address1?: string | null | undefined
  /** 取引先建物名・部屋番号など (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_address2?: string | null | undefined
  /** 事業所名 (デフォルトは事業所設定情報が補完されます) */
  company_name?: string | undefined
  /** 郵便番号 (デフォルトは事業所設定情報が補完されます) */
  company_zipcode?: string | undefined
  /** 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄) (デフォルトは事業所設定情報が補完されます) */
  company_prefecture_code?: number | undefined
  /** 市区町村・番地 (デフォルトは事業所設定情報が補完されます) */
  company_address1?: string | undefined
  /** 建物名・部屋番号など (デフォルトは事業所設定情報が補完されます) */
  company_address2?: string | undefined
  /** 事業所担当者名 (デフォルトは事業所設定情報が補完されます) */
  company_contact_info?: string | undefined
  /** 支払方法 (振込: transfer, 引き落とし: direct_debit) */
  payment_type?: 'transfer' | 'direct_debit' | undefined
  /** 支払口座 */
  payment_bank_info?: string | undefined
  /** 振込専用口座の利用(利用しない: not_use(デフォルト), 利用する: use) */
  use_virtual_transfer_account?: 'not_use' | 'use' | undefined
  /** メッセージ (デフォルト: 下記の通りご請求申し上げます。) */
  message?: string | undefined
  /** 備考 */
  notes?: string | undefined
  /** レイアウト(default_classic: レイアウト１/クラシック (デフォルト), standard_classic: レイアウト２/クラシック, envelope_classic: 封筒１/クラシック, carried_forward_standard_classic: レイアウト３（繰越金額欄あり）/クラシック, carried_forward_envelope_classic: 封筒２（繰越金額欄あり）/クラシック, default_modern: レイアウト１/モダン, standard_modern: レイアウト２/モダン, envelope_modern: 封筒/モダン) */
  invoice_layout?: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'carried_forward_standard_classic' | 'carried_forward_envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern' | undefined
  /** 請求書の消費税計算方法(inclusive: 内税表示, exclusive: 外税表示 (デフォルト)) */
  tax_entry_method?: 'inclusive' | 'exclusive' | undefined
  /** 請求内容 */
  invoice_contents?: {
    /** 順序 */
    order: number
    /** 行の種類 */
    type: 'normal' | 'discount' | 'text'
    /** 数量 */
    qty?: number | undefined
    /** 単位 */
    unit?: string | undefined
    /** 単価 (tax_entry_method: inclusiveの場合は税込価格、tax_entry_method: exclusiveの場合は税抜価格となります) */
    unit_price?: number | undefined
    /** 消費税額 */
    vat?: number | null | undefined
    /** 備考 */
    description?: string | undefined
    /** 勘定科目ID */
    account_item_id?: number | undefined
    /** 税区分ID */
    tax_code?: number | undefined
    /** 品目ID */
    item_id?: number | undefined
    /** 部門ID */
    section_id?: number | undefined
    tag_ids?: number[] | undefined
    /** セグメント１ID */
    segment_1_tag_id?: number | undefined
    /** セグメント２ID */
    segment_2_tag_id?: number | undefined
    /** セグメント３ID */
    segment_3_tag_id?: number | undefined
  }[] | undefined
}

export type InvoiceUpdateParams = {
  /** 事業所ID */
  company_id: number
  /** 請求日 (yyyy-mm-dd) */
  issue_date?: string | undefined
  /** 取引先ID */
  partner_id?: number | null | undefined
  /** 取引先コード */
  partner_code?: string | null | undefined
  /** 請求書番号 (デフォルト: 自動採番されます) */
  invoice_number?: string | undefined
  /** タイトル (デフォルト: 請求書) */
  title?: string | undefined
  /** 期日 (yyyy-mm-dd) */
  due_date?: string | undefined
  /** 売上計上日 */
  booking_date?: string | undefined
  /** 概要 */
  description?: string | undefined
  /** 請求書ステータス  (draft: 下書き (デフォルト), issue: 発行(請求先ワークフローを利用している場合は承認済の請求書にのみ指定できます)) */
  invoice_status?: 'draft' | 'issue' | undefined
  /** 請求書に表示する取引先名（未指定の場合は取引先の名称をそのまま利用します） */
  partner_name?: string | null | undefined
  /** 敬称（御中、様、(空白)の3つから選択） */
  partner_title?: string | null | undefined
  /** 取引先担当者名 */
  partner_contact_info?: string | null | undefined
  /** 取引先郵便番号 (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_zipcode?: string | null | undefined
  /** 取引先都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄) (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_prefecture_code?: number | null | undefined
  /** 取引先市区町村・番地 (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_address1?: string | null | undefined
  /** 取引先建物名・部屋番号など (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_address2?: string | null | undefined
  /** 事業所名 (デフォルトは事業所設定情報が補完されます) */
  company_name?: string | undefined
  /** 郵便番号 (デフォルトは事業所設定情報が補完されます) */
  company_zipcode?: string | undefined
  /** 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄) (デフォルトは事業所設定情報が補完されます) */
  company_prefecture_code?: number | undefined
  /** 市区町村・番地 (デフォルトは事業所設定情報が補完されます) */
  company_address1?: string | undefined
  /** 建物名・部屋番号など (デフォルトは事業所設定情報が補完されます) */
  company_address2?: string | undefined
  /** 事業所担当者名 (デフォルトは事業所設定情報が補完されます) */
  company_contact_info?: string | undefined
  /** 支払方法 (振込: transfer, 引き落とし: direct_debit) */
  payment_type?: 'transfer' | 'direct_debit' | undefined
  /** 支払口座 */
  payment_bank_info?: string | undefined
  /** 振込専用口座の利用(利用しない: not_use(デフォルト), 利用する: use) */
  use_virtual_transfer_account?: 'not_use' | 'use' | undefined
  /** メッセージ (デフォルト: 下記の通りご請求申し上げます。) */
  message?: string | undefined
  /** 備考 */
  notes?: string | undefined
  /** レイアウト(default_classic: レイアウト１/クラシック (デフォルト), standard_classic: レイアウト２/クラシック, envelope_classic: 封筒１/クラシック, carried_forward_standard_classic: レイアウト３（繰越金額欄あり）/クラシック, carried_forward_envelope_classic: 封筒２（繰越金額欄あり）/クラシック, default_modern: レイアウト１/モダン, standard_modern: レイアウト２/モダン, envelope_modern: 封筒/モダン) */
  invoice_layout?: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'carried_forward_standard_classic' | 'carried_forward_envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern' | undefined
  /** 請求書の消費税計算方法(inclusive: 内税表示, exclusive: 外税表示 (デフォルト)) */
  tax_entry_method?: 'inclusive' | 'exclusive' | undefined
  /** 請求内容 */
  invoice_contents?: {
    /** 請求内容ID */
    id?: number | undefined
    /** 順序 */
    order: number
    /** 行の種類 */
    type: 'normal' | 'discount' | 'text'
    /** 数量 */
    qty?: number | undefined
    /** 単位 */
    unit?: string | undefined
    /** 単価 (tax_entry_method: inclusiveの場合は税込価格、tax_entry_method: exclusiveの場合は税抜価格となります) */
    unit_price?: number | undefined
    /** 消費税額 */
    vat?: number | null | undefined
    /** 備考 */
    description?: string | undefined
    /** 勘定科目ID */
    account_item_id?: number | undefined
    /** 税区分ID */
    tax_code?: number | undefined
    /** 品目ID */
    item_id?: number | undefined
    /** 部門ID */
    section_id?: number | undefined
    tag_ids?: number[] | undefined
    /** セグメント１ID */
    segment_1_tag_id?: number | undefined
    /** セグメント２ID */
    segment_2_tag_id?: number | undefined
    /** セグメント３ID */
    segment_3_tag_id?: number | undefined
  }[] | undefined
}

export type QuotationResponse = {
  quotation: {
    /** 見積書ID */
    id: number
    /** 事業所ID */
    company_id: number
    /** 見積日 (yyyy-mm-dd) */
    issue_date: string
    /** 取引先ID */
    partner_id: number | null
    /** 取引先コード */
    partner_code?: string | null | undefined
    /** 見積書番号 */
    quotation_number: string
    /** タイトル */
    title?: string | null | undefined
    /** 合計金額 */
    total_amount: number
    /** 消費税 */
    total_vat?: number | undefined
    /** 小計 */
    sub_total?: number | undefined
    /** 概要 */
    description?: string | null | undefined
    /** 見積書ステータス  (unsubmitted: 送付待ち, submitted: 送付済み, all: 全て) */
    quotation_status: 'unsubmitted' | 'submitted' | 'all'
    /** Web共有日時(最新) */
    web_published_at?: string | null | undefined
    /** Web共有ダウンロード日時(最新) */
    web_downloaded_at?: string | null | undefined
    /** Web共有取引先確認日時(最新) */
    web_confirmed_at?: string | null | undefined
    /** メール送信日時(最新) */
    mail_sent_at?: string | null | undefined
    /** 取引先名 */
    partner_name?: string | null | undefined
    /** 取引先正式名称 */
    partner_display_name?: string | null | undefined
    /** 敬称（御中、様、(空白)の3つから選択） */
    partner_title: '御中' | '様' | '(空白)' | null
    /** 郵便番号 */
    partner_zipcode?: string | null | undefined
    /** 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    partner_prefecture_code?: number | null | undefined
    /** 都道府県 */
    partner_prefecture_name?: string | null | undefined
    /** 市区町村・番地 */
    partner_address1?: string | null | undefined
    /** 建物名・部屋番号など */
    partner_address2?: string | null | undefined
    /** 取引先担当者名 */
    partner_contact_info?: string | null | undefined
    /** 事業所名 */
    company_name: string
    /** 郵便番号 */
    company_zipcode?: string | null | undefined
    /** 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 */
    company_prefecture_code?: number | null | undefined
    /** 都道府県 */
    company_prefecture_name?: string | null | undefined
    /** 市区町村・番地 */
    company_address1?: string | null | undefined
    /** 建物名・部屋番号など */
    company_address2?: string | null | undefined
    /** 事業所担当者名 */
    company_contact_info?: string | null | undefined
    /** メッセージ */
    message?: string | null | undefined
    /** 備考 */
    notes?: string | null | undefined
    /** レイアウト(default_classic: レイアウト１/クラシック, standard_classic: レイアウト２/クラシック, envelope_classic: 封筒１/クラシック, carried_forward_standard_classic: レイアウト３（繰越金額欄あり）/クラシック, carried_forward_envelope_classic: 封筒２（繰越金額欄あり）/クラシック, default_modern: レイアウト１/モダン, standard_modern: レイアウト２/モダン, envelope_modern: 封筒/モダン) */
    quotation_layout: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'carried_forward_standard_classic' | 'carried_forward_envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern'
    /** 見積書の消費税計算方法(inclusive: 内税, exclusive: 外税) */
    tax_entry_method: '' | 'inclusive' | 'exclusive'
    /** 見積内容 */
    quotation_contents?: {
      /** 見積内容ID */
      id: number
      /** 順序 */
      order: number
      /** 行の種類 */
      type: 'normal' | 'discount' | 'text'
      /** 数量 */
      qty: number
      /** 単位 */
      unit: string | null
      /** 単価 */
      unit_price: number
      /** 金額 */
      amount: number
      /** 消費税額 */
      vat: number
      /** 軽減税率税区分（true: 対象、false: 対象外） */
      reduced_vat: boolean
      /** 備考 */
      description: string | null
      /** 勘定科目ID */
      account_item_id: number | null
      /** 勘定科目名 */
      account_item_name: string | null
      /** 税区分コード */
      tax_code: number | null
      /** 品目ID */
      item_id: number | null
      /** 品目 */
      item_name: string | null
      /** 部門ID */
      section_id: number | null
      /** 部門 */
      section_name: string | null
      tag_ids: number[]
      tag_names: string[]
      /** セグメント１ID */
      segment_1_tag_id?: number | null | undefined
      /** セグメント１ID */
      segment_1_tag_name?: string | null | undefined
      /** セグメント２ID */
      segment_2_tag_id?: number | null | undefined
      /** セグメント２ */
      segment_2_tag_name?: string | null | undefined
      /** セグメント３ID */
      segment_3_tag_id?: number | null | undefined
      /** セグメント３ */
      segment_3_tag_name?: string | null | undefined
    }[] | undefined

    total_amount_per_vat_rate: {
      /** 税率5%の税込み金額合計 */
      vat_5: number
      /** 税率8%の税込み金額合計 */
      vat_8: number
      /** 軽減税率8%の税込み金額合計 */
      reduced_vat_8: number
      /** 税率10%の税込み金額合計 */
      vat_10: number
    }
  }
}

export type QuotationCreateParams = {
  /** 事業所ID */
  company_id: number
  /** 見積日 (yyyy-mm-dd) */
  issue_date?: string | undefined
  /** 取引先ID */
  partner_id?: number | null | undefined
  /** 取引先コード */
  partner_code?: string | null | undefined
  /** 見積書番号 (デフォルト: 自動採番されます) */
  quotation_number?: string | undefined
  /** タイトル (デフォルト: 見積書) */
  title?: string | undefined
  /** 概要 */
  description?: string | undefined
  /** 見積書ステータス  (unsubmitted: 送付待ち, submitted: 送付済み) */
  quotation_status?: 'unsubmitted' | 'submitted' | undefined
  /** 見積書に表示する取引先名 */
  partner_display_name: string
  /** 敬称（御中、様、(空白)の3つから選択） */
  partner_title: string
  /** 取引先担当者名 */
  partner_contact_info?: string | null | undefined
  /** 取引先郵便番号 (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_zipcode?: string | null | undefined
  /** 取引先都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄) (デフォルトはpartner_idもしくはpartner_codeで指定された取引先設定情報が補完されます) */
  partner_prefecture_code?: number | null | undefined
  /** 取引先市区町村・番地 (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_address1?: string | null | undefined
  /** 取引先建物名・部屋番号など (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_address2?: string | null | undefined
  /** 事業所名 (デフォルトは事業所設定情報が補完されます) */
  company_name?: string | undefined
  /** 郵便番号 (デフォルトは事業所設定情報が補完されます) */
  company_zipcode?: string | undefined
  /** 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄) (デフォルトは事業所設定情報が補完されます) */
  company_prefecture_code?: number | undefined
  /** 市区町村・番地 (デフォルトは事業所設定情報が補完されます) */
  company_address1?: string | undefined
  /** 建物名・部屋番号など (デフォルトは事業所設定情報が補完されます) */
  company_address2?: string | undefined
  /** 事業所担当者名 (デフォルトは事業所設定情報が補完されます) */
  company_contact_info?: string | undefined
  /** メッセージ (デフォルト: 下記の通り御見積申し上げます。) */
  message?: string | undefined
  /** 備考 */
  notes?: string | undefined
  /** レイアウト(default_classic: レイアウト１/クラシック (デフォルト), standard_classic: レイアウト２/クラシック, envelope_classic: 封筒１/クラシック, default_modern: レイアウト１/モダン, standard_modern: レイアウト２/モダン, envelope_modern: 封筒/モダン) */
  quotation_layout?: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern' | undefined
  /** 見積書の消費税計算方法(inclusive: 内税表示, exclusive: 外税表示 (デフォルト)) */
  tax_entry_method?: 'inclusive' | 'exclusive' | undefined
  /** 見積内容 */
  quotation_contents?: {
    /** 順序 */
    order: number
    /** 行の種類 */
    type: 'normal' | 'discount' | 'text'
    /** 数量 */
    qty?: number | undefined
    /** 単位 */
    unit?: string | undefined
    /** 単価 (tax_entry_method: inclusiveの場合は税込価格、tax_entry_method: exclusiveの場合は税抜価格となります) */
    unit_price?: number | undefined
    /** 消費税額 */
    vat?: number | null | undefined
    /** 備考 */
    description?: string | undefined
    /** 勘定科目ID */
    account_item_id?: number | undefined
    /** 税区分ID */
    tax_code?: number | undefined
    /** 品目ID */
    item_id?: number | undefined
    /** 部門ID */
    section_id?: number | undefined
    tag_ids?: number[] | undefined
    /** セグメント１ID */
    segment_1_tag_id?: number | undefined
    /** セグメント２ID */
    segment_2_tag_id?: number | undefined
    /** セグメント３ID */
    segment_3_tag_id?: number | undefined
  }[] | undefined
}

export type QuotationUpdateParams = {
  /** 事業所ID */
  company_id: number
  /** 見積日 (yyyy-mm-dd) */
  issue_date?: string | undefined
  /** 取引先ID */
  partner_id?: number | null | undefined
  /** 取引先コード */
  partner_code?: string | null | undefined
  /** 見積書番号 (デフォルト: 自動採番されます) */
  quotation_number?: string | undefined
  /** タイトル (デフォルト: 見積書) */
  title?: string | undefined
  /** 概要 */
  description?: string | undefined
  /** 見積書ステータス  (unsubmitted: 送付待ち, submitted: 送付済み) */
  quotation_status?: 'unsubmitted' | 'submitted' | undefined
  /** 見積書に表示する取引先名 */
  partner_display_name: string
  /** 敬称（御中、様、(空白)の3つから選択） */
  partner_title: string
  /** 取引先担当者名 */
  partner_contact_info?: string | null | undefined
  /** 取引先郵便番号 (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_zipcode?: string | null | undefined
  /** 取引先都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄) (デフォルトはpartner_idもしくはpartner_codeで指定された取引先設定情報が補完されます) */
  partner_prefecture_code?: number | null | undefined
  /** 取引先市区町村・番地 (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_address1?: string | null | undefined
  /** 取引先建物名・部屋番号など (デフォルトはpartner_idもしくははpartner_codeで指定された取引先設定情報が補完されます) */
  partner_address2?: string | null | undefined
  /** 事業所名 (デフォルトは事業所設定情報が補完されます) */
  company_name?: string | undefined
  /** 郵便番号 (デフォルトは事業所設定情報が補完されます) */
  company_zipcode?: string | undefined
  /** 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄) (デフォルトは事業所設定情報が補完されます) */
  company_prefecture_code?: number | undefined
  /** 市区町村・番地 (デフォルトは事業所設定情報が補完されます) */
  company_address1?: string | undefined
  /** 建物名・部屋番号など (デフォルトは事業所設定情報が補完されます) */
  company_address2?: string | undefined
  /** 事業所担当者名 (デフォルトは事業所設定情報が補完されます) */
  company_contact_info?: string | undefined
  /** メッセージ (デフォルト: 下記の通り御見積申し上げます。) */
  message?: string | undefined
  /** 備考 */
  notes?: string | undefined
  /** レイアウト(default_classic: レイアウト１/クラシック (デフォルト), standard_classic: レイアウト２/クラシック, envelope_classic: 封筒１/クラシック, default_modern: レイアウト１/モダン, standard_modern: レイアウト２/モダン, envelope_modern: 封筒/モダン) */
  quotation_layout?: 'default_classic' | 'standard_classic' | 'envelope_classic' | 'default_modern' | 'standard_modern' | 'envelope_modern' | undefined
  /** 見積書の消費税計算方法(inclusive: 内税表示, exclusive: 外税表示 (デフォルト)) */
  tax_entry_method?: 'inclusive' | 'exclusive' | undefined
  /** 見積内容 */
  quotation_contents?: {
    /** 見積内容ID */
    id?: number | undefined
    /** 順序 */
    order: number
    /** 行の種類 */
    type: 'normal' | 'discount' | 'text'
    /** 数量 */
    qty?: number | undefined
    /** 単位 */
    unit?: string | undefined
    /** 単価 (tax_entry_method: inclusiveの場合は税込価格、tax_entry_method: exclusiveの場合は税抜価格となります) */
    unit_price?: number | undefined
    /** 消費税額 */
    vat?: number | null | undefined
    /** 備考 */
    description?: string | undefined
    /** 勘定科目ID */
    account_item_id?: number | undefined
    /** 税区分ID */
    tax_code?: number | undefined
    /** 品目ID */
    item_id?: number | undefined
    /** 部門ID */
    section_id?: number | undefined
    tag_ids?: number[] | undefined
    /** セグメント１ID */
    segment_1_tag_id?: number | undefined
    /** セグメント２ID */
    segment_2_tag_id?: number | undefined
    /** セグメント３ID */
    segment_3_tag_id?: number | undefined
  }[] | undefined
}

export type CompaniesPlanResponse = {
  /** 事業所ID */
  id: number
  /** 会計プラン 個人用(non_charged: 無料プラン、starter: スターター、standard: スタンダード、premium: プレミアム) 法人用(non_charged: 無料プラン、minimum: ミニマム、basic: ベーシック、professional: プロフェッショナル、enterprise: エンタープライズ) */
  plan: 'non_charged' | 'starter' | 'standard' | 'premium' | 'minimum' | 'basic' | 'professional' | 'enterprise'
  /** 事業形態（個人事業主: personal、法人: corporate） */
  org_code: 'personal' | 'corporate'
}
