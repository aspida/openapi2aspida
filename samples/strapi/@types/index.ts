/* eslint-disable */
export type Users_PermissionsRole = {
  id: string
  name: string
  description?: string | undefined
  type?: string | undefined
  permissions?: {
    id: string
    type: string
    controller: string
    action: string
    enabled: boolean
    policy?: string | undefined
    role?: string | undefined
  }[] | undefined
  users?: {
    id: string
    username: string
    email: string
    provider?: string | undefined
    password?: string | undefined
    resetPasswordToken?: string | undefined
    confirmed?: boolean | undefined
    blocked?: boolean | undefined
    role?: string | undefined
  }[] | undefined
}

export type NewUsers_PermissionsRole = {
  name: string
  description?: string | undefined
  type?: string | undefined
  permissions?: string[] | undefined
  users?: string[] | undefined
}

export type Users_PermissionsUser = {
  id: string
  username: string
  email: string
  provider?: string | undefined
  confirmed?: boolean | undefined
  blocked?: boolean | undefined

  role?: {
    id: string
    name: string
    description?: string | undefined
    type?: string | undefined
    permissions?: string[] | undefined
    users?: string[] | undefined
  } | undefined
}

export type NewUsers_PermissionsUser = {
  username: string
  email: string
  provider?: string | undefined
  password?: string | undefined
  resetPasswordToken?: string | undefined
  confirmed?: boolean | undefined
  blocked?: boolean | undefined
  role?: string | undefined
}

export type Error = {
  code: number
  message: string
}
