/* eslint-disable */
export type UserId = {
  /**
   * id of the user for which the methods apply.
   * This value should be changed to the special keyword 'me' to simplify calls when access using OAuth2 with three-legged authentication
   */
  user_id: string
}

export type PhoneNumber = {
  /** The phone number to which the order refers to. 'E164 with +'' format. */
  phone_number: string
}

export type Identifier = {
  /** The user identifier (e.g. phone number) to filter the results */
  identifier?: string
}

export type OfferId = {
  /** Id of the offer */
  offer_id: string
}

export type OrderId = {
  /** Id of the purchase order */
  order_id: string
}

export type CategoriesId = {
  /** List of wanted category ids separated by commas */
  'categories.id'?: string
}

export type Status = {
  /** The status of the subscribed product used to filter the results */
  status?: string
}

export type Offers = Offer[]

/** Offer object */
export type Offer = {
  /** Unique id of the offer */
  id: string
  /** Name of the offer. User Friendly field. */
  name: string
  /** List of user identifiers (e.g. phone_numbers) that can be used to subscribe to the offer */
  identifiers?: string[]
  /** Description of the offer. User Friendly field. */
  description: string
  /** List of categories for which the offer applies */
  categories: OfferCategory[]
  /** Time when the offer will be available to the user, in ISO-8601 extended local date format. Time-offset from UTC may be used to match local OB time. */
  start_date?: string
  /** Time when the offer will expire for the user, in ISO-8601 extended local date format. Time-offset from UTC may be used to match local OB time. */
  end_date?: string
  /** List of prices for this offer */
  prices: Price[]
  product: OfferedProduct
}

/** category of offer */
export type OfferCategory = {
  /** Name of the category. */
  name: string
  /** short description of the category. User Friendly field. */
  description?: string
  id: 'promotion' | 'bundle' | 'sms' | 'voice' | 'data' | 'value_added_service' | 'app' | 'iptv' | 'device' | 'recurring' | 'bolt-on' | 'dth'
}

/** Object that model a product definition */
export type Product = {
  /** Name to be displayed when referring to this product. User Friendly field. */
  display_name: string
  product_type: ProductType
  descriptions?: Descriptions
  subscription_type?: SubscriptionType
  quota?: Quotas
  connection?: Connection
  packages?: Packages
  /** list of freely defined strings that tag the product based on some criteria */
  tags?: string[]
}

/** Specifies how the service is paid (prepaid, postpaid, etc) */
export type SubscriptionType = 'prepaid' | 'postpaid' | 'control'

/** The type of the product */
export type ProductType = 'mobile' | 'landline' | 'internet' | 'iptv' | 'bundle' | 'device' | 'voucher' | 'value_added_service' | 'bolt-on' | 'dth'

/** Object that models an offered product */
export type OfferedProduct = Product & {
  /** Array of products objects. Only applies for product bundle */
  sub_products?: OfferedProduct[]
}

/** Object that models a subscribed product */
export type SubscribedProduct = Product & {
  /** Unique identifier of the product */
  id: string
  /** Process state of the product */
  status: 'active' | 'activating' | 'suspended'
  /** List of user identifiers (e.g. phone_numbers) associated to this specific product instance. */
  identifiers: string[]
  /** Time when the product was subscribed, in ISO-8601 extended local date format. Time-offset from UTC may be used to match local OB time. */
  start_date: string
  /** Time when the product will finalize, in ISO-8601 extended local date format. Time-offset from UTC may be used to match local OB time. */
  end_date?: string
  /** List of prices for this subscribed product */
  prices?: Price[]
  /** Array of products objects. Only applies for product bundle */
  sub_products?: SubscribedProduct[]
}

/** It applies for product_type mobile, value_added_service and bolt-on, and provides information on available data, voice and sms quota */
export type Quotas = {
  /** list of data quotas associated to this product */
  data?: DataQuota[]
  /** list of voice quotas associated to this product */
  voice?: VoiceQuota[]
  /** list of SMS quotas associated to this product */
  sms?: SmsQuota[]
}

export type CommonQuota = {
  /** max units allowed by current quota. -1 is interpreted as there is no limit */
  max: number
  time_bands?: TimeBand[]
  origins?: Origin[]
}

/** Data quota information */
export type DataQuota = CommonQuota & {
  /** Unit used on the quota */
  unit: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte'
}

/** Voice quota information */
export type VoiceQuota = CommonQuota & {
  /** Unit used on the quota */
  unit: 'second' | 'minute' | 'hour'
  destinations?: Destination[]
}

/** SMS quota information */
export type SmsQuota = CommonQuota & {
  /** Unit used on the quota */
  unit: 'message'
  destinations?: Destination[]
}

/** Timebands when the quota applies */
export type TimeBand = 'day' | 'night' | 'morning' | 'evening' | 'weekends' | 'workdays' | 'all'

/** Destinations for which the quota applies */
export type Destination = 'telefonica' | 'non-telefonica' | 'rural' | 'local' | 'regional' | 'national' | 'international' | 'mobile' | 'landline' | 'any'

/** Origin for which the quota applies */
export type Origin = 'home' | 'roaming' | 'EU'

/** It applies only for product_type internet and provides information on connections characteristics */
export type Connection = {
  /** Connection type */
  type: 'fiber' | 'dsl' | 'unknown'
  /** Uplink speed in megabits per second */
  uplink_mbps: number
  /** Downlink speed in megabits per second */
  downlink_mbps: number
}

/** Package information */
export type Package = {
  /** Name of the package. User Friendly field. */
  name: string
  /** Unique package identifier */
  package_id: string
}

/** It applies only for product_type iptv and dth; provides information on available TV packages */
export type Packages = Package[]

/** Information about the product for displaying purposes. */
export type Description = {
  /** Text with information about the product. User Friendly field. */
  text: string
  /** HTTPS URL */
  url?: string
  /**
   * Category of the description. This field is used to provide further info about displaying of the description text:
   *  - 'general': Default value for any description without specific category.
   *  - 'dates': Information about dates, related with the life-cycle of the product (e.g: contractual information about renowation conditions)
   *  - 'promotion': Information about product acquisition conditions, such as if special price is being applied and for how long, or if data quota is duplicated during first three months.
   */
  category?: 'general' | 'dates' | 'promotion'
}

export type Descriptions = Description[]

/** Price information */
export type Price = {
  /** Description of the price. User Friendly field. */
  description: string
  /** Type of the price */
  type: 'recurring' | 'usage' | 'one-off'
  /**
   * Period between charge of the price. Applies when type equals recurring.
   *  Additional to pre-defined values of daily, weekly, monthly, yearly, any indication of number of days or hours is possible, with format {x}-days or {x}-hours (e.g.: 7-days or 24-hours).
   */
  recurring_period?: string
  /**
   * Period for which the product will be subscribed. It does not mean that offer is available for indicated period, it means that the product will be acquired and will last for indicated period. Applies when type equals one-off or usage. For backwards compatibility, in case of recurring prices, recurring_period param is used instead.
   *  Additional to pre-defined values of day, week, month, year, any indication of number of days or hours is possible, with format {x}-days or {x}-hours (e.g.: 7-days or 24-hours).
   */
  period_duration?: string
  amount: External1_MoneyAmount
  /** porcentage factor of the taxes applied */
  tax: number
}

/** List of orders */
export type Orders = Order[]

/** Information related to an order */
export type Order = {
  /** Unique id of the order */
  id: string
  /** Id of the purchased offer */
  offer_id?: string
  /** Id of the subscribed product this order relates to */
  product_id?: string
  /** user identifer (e.g. phone number) associated to the order */
  identifier?: string
  /** Time when the order was created, in ISO-8601 extended local date format. Time-offset from UTC may be used to match local OB time. */
  creation_date: string
  /** type of the order */
  type: 'purchase' | 'unsubscription' | 'update'
  status: OrderStatus
  error?: OrderError
}

export type OrderStatus = 'pending' | 'confirmed' | 'rejected'

/** Information related to an error when trying to purchase an offer */
export type OrderError = {
  /** Error code produces when trying to purchase an offer */
  code: string
  /** Message information related to the error when trying to purchase an offer. User Friendly field. */
  description: string
}

/** Information of what offer has to be used to create the order */
export type CreatePurchaseOrderInvoice = {
  /** Id of the offer related to the new order */
  offer_id: string
  /** user identifer (e.g. phone number) associated to the order */
  identifier?: string
}

/** Information of what offer has to be used to create the order */
export type CreatePurchaseOrderWallet = {
  /** Id of the offer related to the new order */
  offer_id: string
  /** user identifer (e.g. phone number) associated to the order */
  identifier?: string
  wallet_type: WalletType
}

/** Information of what offer has to be used to create the order using invoice has payment method */
export type CreatePurchaseOrderByPhoneNumberInvoice = {
  /** Id of the offer related to the new order */
  offer_id: string
}

/** Information of what offer has to be used to create the order using wallet as payment method */
export type CreatePurchaseOrderByPhoneNumberWallet = {
  /** Id of the offer related to the new order */
  offer_id: string
  wallet_type: WalletType
}

/** type of the wallet */
export type WalletType = 'general' | 'communications' | 'additional_services'

/** Information to create a product unsubscribe order */
export type CreateUnsubscribeOrder = {
  /** Id of the product to be unsubscribed */
  product_id: string
}

/** Information to create an order to set renew config of a product. */
export type CreateUpdateRenewOrder = {
  /** Id of the product to be updated */
  product_id: string
  /** True to indicate that product renovation config should be activated, false to do the opposite */
  renew: boolean
}

export type External0_ModelError = {
  /** A human readable description of what the event represent */
  message: string
}

export type External1_QuotaCategory = 'general' | 'promotion' | 'voucher' | 'application' | 'pay_per_use'

export type External0_InvalidArgument = {
  /** Client specified an invalid argument, request body or query param. */
  code: 'INVALID_ARGUMENT'
} & External0_ModelError

export type External0_PermissionDenied = {
  /** Client does not have sufficient permissions to perform this action. */
  code: 'PERMISSION_DENIED'
} & External0_ModelError

export type External0_NotFound = {
  /** The specified resource is not found */
  code: 'NOT_FOUND'
} & External0_ModelError

export type External0_AlreadyExists = {
  /** The resource that a client tried to create already exists. */
  code: 'ALREADY_EXISTS'
} & External0_ModelError

export type External0_Internal = {
  /** Unknown server error.Typically a server bug. */
  code: 'INTERNAL'
} & External0_ModelError

export type External0_Timeout = {
  /** Request timeout exceeded */
  code: 'TIMEOUT'
} & External0_ModelError

/** Money amount */
export type External1_MoneyAmount = {
  /** Amount value */
  value: number
  /** Currency code in which the amount is expressed. ISO 4217 */
  currency: string
  /** true if the amount includes government taxes */
  tax_included?: boolean
}
