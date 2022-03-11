/* eslint-disable */
export type AppIdHeader = {
  'x-tchop-app-id': string
}

export type AppPlatformHeader = {
  'x-tchop-app-platform': 'android' | 'ios' | 'android-hockey' | 'ios-hockey'
}

export type AppVersionHeader = {
  'x-tchop-app-version': string
}

export type UserTokenHeader = {
  /** User token */
  'x-tchop-token': string
}

export type AppOrganisationToken = {
  'x-tchop-app-organisation-token'?: string | undefined
}

export type UserPublicKey = {
  'x-tchop-user-public-key'?: string | undefined
}

export type UserSignedChallenge = {
  'x-tchop-user-signed-challenge'?: string | undefined
}

export type AppOrganisationTokenRequired = {
  'x-tchop-app-organisation-token': string
}

export type UserInstanceIdHeader = {
  /** Firebase Instance ID provides a unique identifier for each app instance and a mechanism to authenticate and authorize actions (example: sending FCM messages) */
  'x-tchop-firebase-instance-id'?: string | undefined
}

export type ErrorModel = {
  code: string
  message: string
  messageCode?: string | undefined
}

export type ErrorValidationModel = {
  code: string
  errors: {
    code: string
    key: string
    message: string
  }[]
  message: string
}

export type UserInfo = {
  id: number
  username: string
  email: string
  avatar?: string | undefined
  url: string
}

export type $200_UserSettings = {
  isAppLocked: boolean
}

export type OrganisationModel = {
  name: string
  subdomain: string
  locale: string
  androidStoreLink?: string | undefined
  androidAppId?: string | undefined
  androidHokeyStoreLink?: string | undefined
  androidAppHokeyId?: string | undefined
  iosStoreLink?: string | undefined
  iosAppId?: string | undefined
  iosHokeyStoreLink?: string | undefined
  iosAppHokeyId?: string | undefined
  fcmServerKeyId?: number | undefined
  allowToStoreOriginalImageFile: string
  twoFactorForce: string
  sessionExpirationTime: string
  appLockEnabled: boolean
  id: number
  uuid: string
  created: string
  isSystem: boolean
  pinnedStoryId: number
  hasPinnedMixes: boolean
}

export type BaseMixModel = {
  id: number
  title: string
  subtitle: string
  created: string
  updated: string
  ticker: boolean
  readOnly: boolean
  shareUrl: string
  previewUrl: string
  includeInNewsFeed: boolean
  displayItemUpdatedTime?: string | undefined
  image?: ImageModel | undefined
}

export type ModelMixV3 = BaseMixModel & {
  cards: ModelCard[]
  itemsNum: number
}

export type ImageModel = {
  id: number
  statusCopyright: number
  rightholder: string
  thumb: string
  status: 'ok' | 'processing' | 'error'
  url?: string | undefined
}

export type AudioModel = {
  id: number
  url?: string | undefined
  thumb: string
  originalThumb?: string | undefined
  status: string
  duration?: number | undefined
  width?: number | undefined
  height?: number | undefined
}

export type ModelCard = {
  id: number
  type: CardEnumModel
  createdByLabel?: string | undefined
  created: string
  postedTime: string
  updated: string
  published: boolean
  position?: number | undefined
  headline?: string | undefined
  quotePerson?: string | undefined
  quotePersonHandle?: string | undefined
  quote?: string | undefined
  title?: string | undefined
  sourceName?: string | undefined
  url?: string | undefined
  abstract?: string | undefined
  image?: ImageModel | undefined
  audio?: AudioModel | undefined
  styles?: CardStyleModel | undefined
  author?: CardAuthorModel | undefined
}

export type CardAuthorModel = {
  type: 'curate-backend' | 'api'
  name: string
  email?: string | undefined
  image?: ImageModel | undefined
}

export type ReactionEnumModel = 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry'

export type CardEnumModel = 'article' | 'image' | 'video' | 'quote' | 'editorial' | 'audio'

/** The number of reactions to each type */
export type ReactionCountModel = {
  like?: number | undefined
  love?: number | undefined
  haha?: number | undefined
  wow?: number | undefined
  sad?: number | undefined
  angry?: number | undefined
}

export type MediaEXIFModel = {
  gps?: {
    x: number
    y: number
  } | undefined
}

export type CardStyleModel = {
  showAuthor?: boolean | undefined
  /** Alternative UI Templates for article cards */
  teaserStyle?: 'standard' | 'small_with_text' | 'small_without_text' | 'big_without_text' | undefined
}

export type QuoteModel = {
  quotePerson?: string | undefined
  quotePersonHandle?: string | undefined
  quote?: string | undefined
  quoteSource?: string | undefined
  image?: string | undefined
  quotePersonImage?: string | undefined
  quoteCreated?: string | undefined
}

export type ArticleModel = {
  title?: string | undefined
  abstract?: string | undefined
  sourceName?: string | undefined
  image?: string | undefined
}
