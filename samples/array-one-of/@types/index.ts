/* eslint-disable */
export type User = {
  id?: string | undefined
  roles?: (RoleA | RoleB)[] | undefined
}

export type RoleA = {
  name?: string | undefined
}

export type RoleB = {
  name?: string | undefined
  authority?: string | undefined
}
