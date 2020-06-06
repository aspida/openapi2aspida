import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { OpenAPIV3 } from 'openapi-types'

const getText = (url: string) =>
  new Promise<string>(resolve => {
    ;(url.startsWith('https') ? https : http)
      .get(url, res => {
        let body = ''
        res.setEncoding('utf8')

        res.on('data', chunk => {
          body += chunk
        })

        res.on('end', () => {
          resolve(body)
        })
      })
      .on('error', e => {
        console.log(`Could not get: ${url}\n`, e)
      })
  })

type DocInfo = { url: string; doc: OpenAPIV3.Document }
const hasExternalRegExp = /"\$ref":"[^#].+?"/g

const fetchExternalDocs = async (docs: OpenAPIV3.Document, inputDir: string) => {
  const docList: DocInfo[] = []
  const fetchingUrls: string[] = []

  const fetchDocs = (d: OpenAPIV3.Document, input: string) =>
    Promise.all(
      (JSON.stringify(d).match(hasExternalRegExp) ?? []).map(async ref => {
        const [, url] = ref.match(/"\$ref":"(.+?)#/)!

        if (fetchingUrls.includes(url)) return

        fetchingUrls.push(url)
        const doc: OpenAPIV3.Document = JSON.parse(
          await (url.startsWith('http')
            ? getText(url)
            : input.startsWith('http')
            ? getText(path.join(input, url))
            : fs.promises.readFile(path.join(input, url), 'utf8'))
        )
        docList[fetchingUrls.indexOf(url)] = { url, doc }

        await fetchDocs(doc, url.startsWith('http') ? url : path.join(input, url))
      })
    )

  await fetchDocs(docs, inputDir)
  return docList
}

const getComponentInfo = (docList: DocInfo[], url: string, prop: string) => {
  const data = docList.find(d => d.url === url)!.doc
  const target = prop.split('/').reduce((prev, current) => prev[current], data as any)
  if (target.name) return { type: 'parameters' as const, data: target }
  return { type: 'schemas' as const, data: target }
}

const resolveExternalDocs = async (docs: OpenAPIV3.Document, inputDir: string) => {
  const externalDocs = await fetchExternalDocs(docs, inputDir)
  const componentsInfoList: { url: string; prop: string; name: string }[] = []
  const replacedExternalDocs = externalDocs.map((selfDoc: DocInfo) => {
    let docsString = JSON.stringify(selfDoc.doc)
    ;(docsString.match(/"\$ref":".+?"/g) ?? []).forEach(refs => {
      const targetText = refs.replace('"$ref":"', '').slice(0, -1)
      const [, url = selfDoc.url, prop] = targetText.match(/(.+?)?#\/(.+)/)!
      const info = getComponentInfo(externalDocs, url, prop)
      const name = `External${externalDocs.findIndex(d => d.url === url)}_${prop.split('/').pop()}`
      docsString = docsString.replace(targetText, `#/components/${info.type}/${name}`)
      componentsInfoList.push({ url, prop, name })
    })

    return { url: selfDoc.url, doc: JSON.parse(docsString) }
  })

  return {
    externalDocs: replacedExternalDocs,
    components: componentsInfoList.reduce((prev, { url, prop, name }) => {
      const info = getComponentInfo(replacedExternalDocs, url, prop)
      return { ...prev, [info.type]: { ...prev[info.type], [name]: info.data } }
    }, {} as Record<string, any>)
  }
}

export default async (docs: OpenAPIV3.Document, inputDir: string): Promise<OpenAPIV3.Document> => {
  const { externalDocs, components } = await resolveExternalDocs(docs, inputDir)

  let docsString = JSON.stringify(docs)
  ;(docsString.match(hasExternalRegExp) ?? []).forEach(refs => {
    const targetText = refs.replace('"$ref":"', '').slice(0, -1)
    const [, url, prop] = targetText.match(/(.+?)#\/(.+)/)!

    const info = getComponentInfo(externalDocs, url, prop)
    components[info.type] = components[info.type] || {}
    const name = `External${externalDocs.findIndex(d => d.url === url)}_${prop.split('/').pop()}`
    Object.assign(components[info.type], { [name]: info.data })
    docsString = docsString.replace(targetText, `#/components/${info.type}/${name}`)
  })
  const resolved: OpenAPIV3.Document = JSON.parse(docsString)
  resolved.components = resolved.components || {}
  ;(Object.keys(components) as (keyof OpenAPIV3.ComponentsObject)[]).forEach(key => {
    resolved.components![key] = {
      ...resolved.components![key],
      ...components[key]
    }
  })

  return resolved
}
