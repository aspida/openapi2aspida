/* eslint-disable */
/** Customer */
export type Customer = {
  /** ID */
  id?: number
  /** NAME */
  name?: string
  /** Type of pet 1:dog 2:cat 3:other */
  pet?: 1 | 2 | 3
}

/** Customer */
export type Customer2 = {
  /** ID */
  id: number
  /** NAME */
  name: string
  /** Type of pet 1:dog 2:cat 3:other */
  pet?: 1 | 2 | 3
}

/** Customer */
export type Customer3 = {
  /** ID */
  id: number
  /** NAME */
  name: string
  /** Type of pet 1:dog 2:cat 3:other */
  pet: 1 | 2 | 3
}
