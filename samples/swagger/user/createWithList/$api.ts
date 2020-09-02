/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user/createWithList'
  const POST = 'POST'

  return {
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<void>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<void>(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
