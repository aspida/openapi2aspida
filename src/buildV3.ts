import { OpenAPIV3 } from 'openapi-types'
import {
  isRefObject,
  $ref2Type,
  getPropertyName,
  schema2value,
  BINARY_TYPE
} from './builderUtils/converters'
import { props2String, Prop, PropValue, value2String } from './builderUtils/props2String'
import { resolveParamsRef, resolveResRef, resolveReqRef } from './builderUtils/resolvers'
import getDirName from './builderUtils/getDirName'
import schemas2Props from './builderUtils/schemas2Props'
import parameters2Props from './builderUtils/parameters2Props'

const methodNames = ['get', 'post', 'put', 'delete', 'head', 'options', 'patch'] as const

const getParamsList = (
  openapi: OpenAPIV3.Document,
  params?: (OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject)[]
) => params?.map(p => (isRefObject(p) ? resolveParamsRef(openapi, p.$ref) : p)) || []

export default (openapi: OpenAPIV3.Document) => {
  const files: { file: string[]; methods: string }[] = []
  const schemas = schemas2Props(openapi.components?.schemas, openapi) || []
  const parameters = parameters2Props(openapi.components?.parameters, openapi) || []

  files.push(
    ...Object.keys(openapi.paths)
      .map(path => {
        const methodProps = Object.keys(
          openapi.paths[path]!
        ).filter((method): method is typeof methodNames[number] =>
          methodNames.includes(method as typeof methodNames[number])
        )

        const file = [
          ...path
            .replace(/\/$/, '')
            .split('/')
            .slice(1)
            .map(p =>
              getDirName(p, [
                ...getParamsList(openapi, openapi.paths[path]!.parameters),
                ...methodProps.reduce(
                  (prev, c) => [
                    ...prev,
                    ...getParamsList(openapi, openapi.paths[path]![c]?.parameters)
                  ],
                  [] as OpenAPIV3.ParameterObject[]
                )
              ])
            ),
          'index'
        ]

        const methods = methodProps
          .map<Prop | null>(method => {
            const target = openapi.paths[path]![method]!

            if (target.deprecated) return null

            const params: Prop[] = []

            if (target.parameters || openapi.paths[path]!.parameters) {
              const reqRefHeaders: PropValue[] = []
              const reqHeaders: Prop[] = []
              const refQuery: PropValue[] = []
              const query: Prop[] = []
              let queryRequired = true

              ;[...(openapi.paths[path]!.parameters || []), ...(target.parameters || [])].forEach(
                p => {
                  if (isRefObject(p)) {
                    const ref = resolveParamsRef(openapi, p.$ref)
                    const val = {
                      isArray: false,
                      isEnum: false,
                      nullable: false,
                      value: $ref2Type(p.$ref)
                    }

                    switch (ref.in) {
                      case 'header':
                        reqRefHeaders.push(val)
                        break
                      case 'query':
                        refQuery.push(val)
                        queryRequired = ref.required ?? true
                        break
                      default:
                        break
                    }
                  } else {
                    const value = schema2value(p.schema)
                    if (!value) return

                    const prop = {
                      name: getPropertyName(p.name),
                      required: p.required ?? true,
                      values: [value]
                    }

                    switch (p.in) {
                      case 'header':
                        reqHeaders.push(prop)
                        break
                      case 'query':
                        query.push(prop)
                        queryRequired = p.required ?? true
                        break
                      default:
                        break
                    }
                  }
                }
              )

              if (reqHeaders.length || reqRefHeaders.length) {
                params.push({
                  name: 'reqHeaders',
                  required: false,
                  values: [
                    ...reqRefHeaders,
                    ...(reqHeaders.length
                      ? [{ isArray: false, isEnum: false, nullable: false, value: reqHeaders }]
                      : [])
                  ]
                })
              }

              if (refQuery.length || query.length) {
                params.push({
                  name: 'query',
                  required: queryRequired,
                  values: [
                    ...refQuery,
                    ...(query.length
                      ? [{ isArray: false, isEnum: false, nullable: false, value: query }]
                      : [])
                  ]
                })
              }
            }

            if (target.responses) {
              const code = Object.keys(target.responses).find(code => code.startsWith('20'))
              if (code) {
                params.push({
                  name: 'status',
                  required: true,
                  values: [{ isArray: false, isEnum: false, nullable: false, value: code }]
                })

                const res = target.responses[code]
                const ref = isRefObject(res) ? resolveResRef(openapi, res.$ref) : res

                if (ref.content?.['application/json']?.schema) {
                  const val = schema2value(ref.content['application/json'].schema)
                  val &&
                    params.push({
                      name: 'resBody',
                      required: true,
                      values: [val]
                    })
                }

                if (ref.headers) {
                  params.push({
                    name: 'resHeaders',
                    required: true,
                    values: [
                      {
                        isArray: false,
                        isEnum: false,
                        nullable: false,
                        value: Object.keys(ref.headers)
                          .map(header => {
                            const headerData = ref.headers![header]
                            const val = isRefObject(headerData)
                              ? {
                                  isArray: false,
                                  isEnum: false,
                                  value: $ref2Type(headerData.$ref)
                                }
                              : schema2value(headerData.schema)

                            return (
                              val && {
                                name: getPropertyName(header),
                                required: isRefObject(headerData)
                                  ? true
                                  : headerData.required ?? true,
                                values: [val]
                              }
                            )
                          })
                          .filter((v): v is Prop => !!v)
                      }
                    ]
                  })
                }
              }
            }

            if (target.requestBody) {
              let reqFormat = ''
              let reqBody: PropValue | null = null
              let required = true

              if (isRefObject(target.requestBody)) {
                const ref = resolveReqRef(openapi, target.requestBody.$ref)
                if (ref.content['multipart/form-data']?.schema) {
                  reqFormat = 'FormData'
                } else if (ref.content['application/x-www-form-urlencoded']?.schema) {
                  reqFormat = 'URLSearchParams'
                }

                reqBody = {
                  isArray: false,
                  isEnum: false,
                  nullable: false,
                  value: $ref2Type(target.requestBody.$ref)
                }
                required = ref.required ?? true
              } else {
                const typeSet = [
                  ['multipart/form-data', 'FormData'],
                  ['application/x-www-form-urlencoded', 'URLSearchParams'],
                  ['application/octet-stream', ''],
                  ['application/json', '']
                ]

                for (let i = 0; i < typeSet.length; i += 1) {
                  if (target.requestBody.content[typeSet[i][0]]?.schema) {
                    reqFormat = typeSet[i][1]
                    reqBody = schema2value(target.requestBody.content[typeSet[i][0]].schema!)
                    required = target.requestBody.required ?? true

                    break
                  }
                }
              }

              if (reqFormat) {
                params.push({
                  name: 'reqFormat',
                  required: true,
                  values: [{ isArray: false, isEnum: false, nullable: false, value: reqFormat }]
                })
              }

              if (reqBody) {
                params.push({
                  name: 'reqBody',
                  required,
                  values: [reqBody]
                })
              }
            }

            return {
              name: method,
              required: true,
              values: [{ isArray: false, isEnum: false, nullable: false, value: params }]
            }
          })
          .filter((method): method is Prop => !!method)

        if (methods.length) {
          const methodsText = props2String(methods, '')
          const hasBinary = methodsText.includes(BINARY_TYPE)
          const hasTypes = /( |<)Types\./.test(methodsText)

          return {
            file,
            methods: `/* eslint-disable */\n${
              hasBinary ? "import type { ReadStream } from 'fs'\n" : ''
            }${hasBinary && !hasTypes ? '\n' : ''}${
              hasTypes
                ? `import type * as Types from '${file.map(() => '').join('../')}@types'\n\n`
                : ''
            }export type Methods = ${methodsText}\n`
          }
        } else {
          return { file, methods: '' }
        }
      })
      .filter(file => file.methods)
  )

  const typesText =
    parameters.length + schemas.length
      ? [
          ...parameters.map(p => ({
            name: p.name,
            text: typeof p.props === 'string' ? p.props : props2String(p.props, '')
          })),
          ...schemas.map(s => ({
            name: s.name,
            text: value2String(s.value, '').replace(/\n {2}/g, '\n')
          }))
        ]
          .map(p => `\nexport type ${p.name} = ${p.text}\n`)
          .join('')
          .replace(/ Types\./g, ' ')
      : null

  return {
    baseURL: openapi.servers?.[0]?.url || '',
    types:
      typesText &&
      `/* eslint-disable */${
        typesText.includes(BINARY_TYPE) ? "\nimport type { ReadStream } from 'fs'\n" : ''
      }${typesText}`,
    files
  }
}
