/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './_id@number/content'
import { Methods as Methods1 } from './_id@number/query'
import { Methods as Methods2 } from './_id@number/simple'

const PUT = 'PUT'
const PATH0 = '/dummy'
const PATH1 = '/content'
const PATH2 = '/query'
const PATH3 = '/simple'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        content: {
          put: (option?: { config?: T }) =>
            fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, `${prefix0}${PATH1}`, PUT, option).text(),
          $put: (option?: { config?: T }) =>
            fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, `${prefix0}${PATH1}`, PUT, option).text().then(r => r.body)
        },
        query: {
          put: (option?: { query?: Methods1['put']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send(),
          $put: (option?: { query?: Methods1['put']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send().then(r => r.body)
        },
        simple: {
          put: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, `${prefix0}${PATH3}`, PUT, option).send(),
          $put: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, `${prefix0}${PATH3}`, PUT, option).send().then(r => r.body)
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
