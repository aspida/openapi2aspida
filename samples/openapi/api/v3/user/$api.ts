/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_userId@string'
// prettier-ignore
import { Methods as Methods2 } from './profile'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v3/user'
  const PATH1 = '/api/v3/user/profile'
  const GET = 'GET'
  const PUT = 'PUT'

  return {
    _userId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * @returns OK
         */
        get: (option?: { headers?: Methods1['get']['reqHeaders'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { headers?: Methods1['get']['reqHeaders'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    profile: {
      put: (option: { body: Methods2['put']['reqBody'], headers?: Methods2['put']['reqHeaders'], config?: T }) =>
        fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, PATH1, PUT, option, 'FormData').send(),
      $put: (option: { body: Methods2['put']['reqBody'], headers?: Methods2['put']['reqHeaders'], config?: T }) =>
        fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, PATH1, PUT, option, 'FormData').send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    /**
     * @returns OK
     */
    get: (option?: { headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
