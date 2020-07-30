/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from '.'

const PUT = 'PUT'
const PATH0 = '/api/v3/user/profile'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')

  return {
    put: (option?: { body?: Methods0['put']['reqBody'], headers?: Methods0['put']['reqHeaders'], config?: T }) =>
      fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option, 'FormData').send(),
    $put: (option?: { body?: Methods0['put']['reqBody'], headers?: Methods0['put']['reqHeaders'], config?: T }) =>
      fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option, 'FormData').send().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
