import { OpenAPIV3 } from 'openapi-types'
import { getPropertyName, schema2value } from './converters'

export default (
  text: string,
  params: OpenAPIV3.ParameterObject[],
  required: boolean,
  replaceLeadingAtMark: string
) => {
  if (text === '*') return '_any'
  if (!/^{/.test(text)) {
    if (replaceLeadingAtMark !== '@' && text.startsWith('@'))
      return text.replace('@', replaceLeadingAtMark)
    return text
  }

  const valName = text.slice(1, -1)
  const schemaVal = schema2value(
    params.find(p => p.in === 'path' && p.name === valName)?.schema,
    required
  )

  return `_${getPropertyName(valName)}${
    schemaVal && typeof schemaVal.value === 'string' ? `@${schemaVal.value}` : ''
  }`
}
