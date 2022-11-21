import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@string'
import type { Methods as Methods2 } from './_mixId@string/cards'
import type { Methods as Methods3 } from './_mixId@string/url'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/mixes'
  const PATH1 = '/cards'
  const PATH2 = '/url'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).send(),
        $put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    _mixId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        cards: {
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).send(),
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        url: {
          post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).send(),
          $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        }
      }
    },
    /**
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns OK
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
