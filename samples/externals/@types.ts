/* eslint-disable */
export type UserId = {
  user_id: string
}

export type PhoneNumber = {
  phone_number: string
}

export type Identifier = {
  identifier?: string
}

export type OfferId = {
  offer_id: string
}

export type OrderId = {
  order_id: string
}

export type CategoriesId = {
  'categories.id'?: string
}

export type Status = {
  status?: string
}

export type Offers = Offer[]

export type Offer = {
  id: string
  name: string
  identifiers?: string[]
  description: string
  categories: OfferCategory[]
  start_date?: string
  end_date?: string
  prices: Price[]
  product: OfferedProduct
}

export type OfferCategory = {
  name: string
  description?: string
  id: 'promotion' | 'bundle' | 'sms' | 'voice' | 'data' | 'value_added_service' | 'app' | 'iptv' | 'device' | 'recurring' | 'bolt-on' | 'dth'
}

export type Product = {
  display_name: string
  product_type: ProductType
  descriptions?: Descriptions
  subscription_type?: SubscriptionType
  quota?: Quotas
  connection?: Connection
  packages?: Packages
  tags?: string[]
}

export type SubscriptionType = 'prepaid' | 'postpaid' | 'control'

export type ProductType = 'mobile' | 'landline' | 'internet' | 'iptv' | 'bundle' | 'device' | 'voucher' | 'value_added_service' | 'bolt-on' | 'dth'

export type OfferedProduct = Product & {
  sub_products?: OfferedProduct[]
}

export type SubscribedProduct = Product & {
  id: string
  status: 'active' | 'activating' | 'suspended'
  identifiers: string[]
  start_date: string
  end_date?: string
  prices?: Price[]
  sub_products?: SubscribedProduct[]
}

export type Quotas = {
  data?: DataQuota[]
  voice?: VoiceQuota[]
  sms?: SmsQuota[]
}

export type CommonQuota = {
  max: number
  time_bands?: TimeBand[]
  origins?: Origin[]
}

export type DataQuota = CommonQuota & {
  unit: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte'
}

export type VoiceQuota = CommonQuota & {
  unit: 'second' | 'minute' | 'hour'
  destinations?: Destination[]
}

export type SmsQuota = CommonQuota & {
  unit: 'message'
  destinations?: Destination[]
}

export type TimeBand = 'day' | 'night' | 'morning' | 'evening' | 'weekends' | 'workdays' | 'all'

export type Destination = 'telefonica' | 'non-telefonica' | 'rural' | 'local' | 'regional' | 'national' | 'international' | 'mobile' | 'landline' | 'any'

export type Origin = 'home' | 'roaming' | 'EU'

export type Connection = {
  type: 'fiber' | 'dsl' | 'unknown'
  uplink_mbps: number
  downlink_mbps: number
}

export type Package = {
  name: string
  package_id: string
}

export type Packages = Package[]

export type Description = {
  text: string
  url?: string
  category?: 'general' | 'dates' | 'promotion'
}

export type Descriptions = Description[]

export type Price = {
  description: string
  type: 'recurring' | 'usage' | 'one-off'
  recurring_period?: string
  period_duration?: string
  amount: External1_MoneyAmount
  tax: number
}

export type Orders = Order[]

export type Order = {
  id: string
  offer_id?: string
  product_id?: string
  identifier?: string
  creation_date: string
  type: 'purchase' | 'unsubscription' | 'update'
  status: OrderStatus
  error?: OrderError
}

export type OrderStatus = 'pending' | 'confirmed' | 'rejected'

export type OrderError = {
  code: string
  description: string
}

export type CreatePurchaseOrderInvoice = {
  offer_id: string
  identifier?: string
}

export type CreatePurchaseOrderWallet = {
  offer_id: string
  identifier?: string
  wallet_type: WalletType
}

export type CreatePurchaseOrderByPhoneNumberInvoice = {
  offer_id: string
}

export type CreatePurchaseOrderByPhoneNumberWallet = {
  offer_id: string
  wallet_type: WalletType
}

export type WalletType = 'general' | 'communications' | 'additional_services'

export type CreateUnsubscribeOrder = {
  product_id: string
}

export type CreateUpdateRenewOrder = {
  product_id: string
  renew: boolean
}

export type External0_ModelError = {
  message: string
}

export type External1_QuotaCategory = 'general' | 'promotion' | 'voucher' | 'application' | 'pay_per_use'

export type External0_InvalidArgument = {
  code: 'INVALID_ARGUMENT'
} & External0_ModelError

export type External0_PermissionDenied = {
  code: 'PERMISSION_DENIED'
} & External0_ModelError

export type External0_NotFound = {
  code: 'NOT_FOUND'
} & External0_ModelError

export type External0_AlreadyExists = {
  code: 'ALREADY_EXISTS'
} & External0_ModelError

export type External0_Internal = {
  code: 'INTERNAL'
} & External0_ModelError

export type External0_Timeout = {
  code: 'TIMEOUT'
} & External0_ModelError

export type External1_MoneyAmount = {
  value: number
  currency: string
  tax_included?: boolean
}
