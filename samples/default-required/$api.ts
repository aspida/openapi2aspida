/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './dummy/_id@number/content'
// prettier-ignore
import { Methods as Methods1 } from './dummy/_id@number/query'
// prettier-ignore
import { Methods as Methods2 } from './dummy/_id@number/simple'
// prettier-ignore
import { Methods as Methods3 } from './file/_id@number/upload'
// prettier-ignore
import { Methods as Methods4 } from './user/_id@number'
// prettier-ignore
import { Methods as Methods5 } from './user/_id@number/abc'
// prettier-ignore
import { Methods as Methods6 } from './user/_id@number/xyz'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/dummy'
  const PATH1 = '/content'
  const PATH2 = '/query'
  const PATH3 = '/simple'
  const PATH4 = '/file'
  const PATH5 = '/upload'
  const PATH6 = '/user'
  const PATH7 = '/abc'
  const PATH8 = '/xyz'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    dummy: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          content: {
            /**
             * @returns accept
             */
            put: (option?: { config?: T }) =>
              fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, `${prefix1}${PATH1}`, PUT, option).text(),
            /**
             * @returns accept
             */
            $put: (option?: { config?: T }) =>
              fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, `${prefix1}${PATH1}`, PUT, option).text().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`
          },
          query: {
            put: (option: { query: Methods1['put']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).send(),
            $put: (option: { query: Methods1['put']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).send().then(r => r.body),
            $path: (option?: { method: 'put'; query: Methods1['put']['query'] }) =>
              `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          simple: {
            put: (option?: { config?: T }) =>
              fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, `${prefix1}${PATH3}`, PUT, option).send(),
            $put: (option?: { config?: T }) =>
              fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, `${prefix1}${PATH3}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          }
        }
      }
    },
    file: {
      _id: (val1: number) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          upload: {
            post: (option: { body: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option).send(),
            $post: (option: { body: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option).send().then(r => r.body),
            $path: (option?: { method: 'post'; query: Methods3['post']['query'] }) =>
              `${prefix}${prefix1}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    },
    user: {
      _id: (val1: number) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          abc: {
            get: (option: { query: Methods5['get']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).send(),
            $get: (option: { query: Methods5['get']['query'], config?: T }) =>
              fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
              `${prefix}${prefix1}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          xyz: {
            get: (option?: { config?: T }) =>
              fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).send(),
            $get: (option?: { config?: T }) =>
              fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).send().then(r => r.body),
            put: (option?: { config?: T }) =>
              fetch<void, BasicHeaders, Methods6['put']['status']>(prefix, `${prefix1}${PATH8}`, PUT, option).send(),
            $put: (option?: { config?: T }) =>
              fetch<void, BasicHeaders, Methods6['put']['status']>(prefix, `${prefix1}${PATH8}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH8}`
          },
          get: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).send(),
          $get: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          patch: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods4['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          $patch: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods4['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
