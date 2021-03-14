import { OpenAPIV3 } from 'openapi-types'
import { Prop, PropValue } from './props2String'

export const defKey2defName = (key: string) => key.replace(/[^a-zA-Z0-9$_]/g, '_')

export const $ref2TypeName = (ref: string) => {
  const [, , , typeName, , propName] = ref.split('/')
  return { typeName, propName: propName || null }
}

// $ref2Type: replace /Array$/ for Swagger 2.0
export const $ref2Type = (ref: string) => {
  const { typeName, propName } = $ref2TypeName(ref)
  return `Types.${defKey2defName(typeName)}${propName ? `['${propName}']` : ''}`.replace(
    /Array$/,
    '[]'
  )
}

export const isRefObject = (
  params:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.ResponseObject
    | OpenAPIV3.RequestBodyObject
    | OpenAPIV3.HeaderObject
    | OpenAPIV3.ParameterObject
    | OpenAPIV3.SchemaObject
): params is OpenAPIV3.ReferenceObject => '$ref' in params

const isArraySchema = (schema: OpenAPIV3.SchemaObject): schema is OpenAPIV3.ArraySchemaObject =>
  schema.type === 'array'

export const isObjectSchema = (
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
): schema is OpenAPIV3.NonArraySchemaObject => !isRefObject(schema) && schema.type !== 'array'

export const getPropertyName = (name: string) =>
  /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name) ? name : `'${name}'`

const of2Values = (obj: OpenAPIV3.SchemaObject): PropValue[] | null => {
  const values = (obj.oneOf || obj.allOf || obj.anyOf || [])
    .map(p => schema2value(p))
    .filter(v => v) as PropValue[]
  return values.length ? values : null
}

const object2value = (obj: OpenAPIV3.NonArraySchemaObject): Prop[] => {
  const properties = obj.properties ?? {}

  const value = Object.keys(properties)
    .filter(name => {
      const target = properties[name]
      return isRefObject(target) || !target.deprecated
    })
    .map<Prop | null>(name => {
      const val = schema2value(properties[name])
      if (!val) return null

      return {
        name: getPropertyName(name),
        required: obj.required?.includes(name) ?? true,
        values: [val]
      }
    })
    .filter(v => v) as Prop[]

  const additionalProps = obj.additionalProperties
  if (additionalProps) {
    const val =
      additionalProps === true
        ? {
            isArray: false,
            isEnum: false,
            nullable: false,
            value: 'any'
          }
        : schema2value(additionalProps)

    if (val)
      value.push({
        name: '[key: string]',
        required: true,
        values: [val]
      })
  }

  return value
}

export const BINARY_TYPE = 'File | ReadStream'

export const schema2value = (
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject | undefined
): PropValue | null => {
  if (!schema) return null

  let isArray = false
  let isEnum = false
  let nullable = false
  let hasOf: PropValue['hasOf']
  let value: PropValue['value'] | null = null

  if (isRefObject(schema)) {
    value = $ref2Type(schema.$ref)
  } else {
    nullable = !!schema.nullable

    if (schema.oneOf || schema.allOf || schema.anyOf) {
      hasOf = schema.oneOf ? 'oneOf' : schema.allOf ? 'allOf' : 'anyOf'
      value = of2Values(schema)
    } else if (schema.enum) {
      isEnum = true
      value = schema.type === 'string' ? schema.enum.map(e => `'${e}'`) : schema.enum
    } else if (isArraySchema(schema)) {
      isArray = true
      value = schema2value(schema.items)
    } else if (schema.properties || schema.additionalProperties) {
      value = object2value(schema)
    } else if (schema.format === 'binary') {
      value = BINARY_TYPE
    } else if (schema.type !== 'object') {
      value = {
        integer: 'number',
        number: 'number',
        null: 'null',
        string: 'string',
        boolean: 'boolean'
      }[schema.type ?? 'string']
    }
  }

  return value ? { isArray, isEnum, nullable, hasOf, value } : null
}
