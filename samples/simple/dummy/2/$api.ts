/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/dummy/2'
  const PUT = 'PUT'

  return {
    put: (option?: { config?: T }) =>
      fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send(),
    $put: (option?: { config?: T }) =>
      fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
