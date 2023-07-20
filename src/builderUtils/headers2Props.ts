import { OpenAPIV3 } from 'openapi-types'
import { isRefObject, defKey2defName, $ref2Type, schema2value } from './converters'
import { PropValue } from './props2String'

export type Header = { name: string; value: string | PropValue }

export default (headers: OpenAPIV3.ComponentsObject['headers']) =>
  headers &&
  Object.keys(headers)
    .map(defKey => {
      const target = headers[defKey]
      let value: Header['value']

      if (isRefObject(target)) {
        value = $ref2Type(target.$ref)
      } else {
        const result = schema2value(target.schema, false)
        if (!result) return null
        value = { ...result, description: target.description ?? null }
      }

      return { name: defKey2defName(defKey), value }
    })
    .filter((v): v is Header => !!v)
