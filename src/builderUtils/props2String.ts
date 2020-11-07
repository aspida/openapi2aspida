export type PropValue = {
  isArray: boolean
  isEnum: boolean
  hasOf?: 'oneOf' | 'allOf' | 'anyOf'
  // eslint-disable-next-line no-use-before-define
  value: Prop[] | string | string[] | PropValue | PropValue[]
}

export type Prop = {
  name: string
  required: boolean
  values: PropValue[]
}

const array2String = (val: PropValue, indent: string) => {
  const hasMulti = (val.isEnum || val.hasOf) && Array.isArray(val.value) && val.value.length
  return `${hasMulti ? '(' : ''}${value2String(val, indent)}${hasMulti ? ')' : ''}[]`
}

export const value2String = (v: PropValue, indent: string): string =>
  `${
    v.hasOf
      ? values2String(v.value as PropValue[], v.hasOf, indent)
      : v.isArray
      ? array2String(v.value as PropValue, indent)
      : v.isEnum
      ? (v.value as string[]).join(' | ')
      : Array.isArray(v.value)
      ? props2String(v.value as Prop[], `  ${indent}`)
      : v.value
  }`

const values2String = (values: PropValue[], hasOf: PropValue['hasOf'], indent: string) =>
  `${hasOf === 'anyOf' ? 'Partial<' : ''}${values
    .map(a => value2String(a, indent))
    .join(hasOf === 'oneOf' ? ' | ' : ' & ')}${hasOf === 'anyOf' ? '>' : ''}`

const isMultiLine = (values: PropValue[]) => values.find(v => !v.isEnum && Array.isArray(v.value))

export const props2String = (props: Prop[], indent: string) =>
  `{\n${props
    .map(
      (p, i) =>
        `  ${indent}${p.name}${p.required ? '' : '?'}: ${values2String(
          p.values,
          undefined,
          indent
        )}${
          props.length - 1 === i || isMultiLine(p.values) || isMultiLine(props[i + 1].values)
            ? '\n'
            : ''
        }`
    )
    .join('\n')}${indent}}`
