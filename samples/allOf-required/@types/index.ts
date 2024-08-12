/* eslint-disable */
export type ResponseSchema = BaseSchema

export type BaseSchema = {
  /** required property in response */
  req_property?: string | undefined;
  /** unrequired property in response */
  unreq_property?: string | undefined;
}
