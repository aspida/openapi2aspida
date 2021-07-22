/* eslint-disable */
export type User = {
  id: string
  roles: (RoleA | RoleB)[]
}

export type RoleA = {
  name: string
}

export type RoleB = {
  name: string
  authority: string
}
