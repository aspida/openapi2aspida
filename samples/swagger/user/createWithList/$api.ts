/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from '.'

const POST = 'POST'
const PATH0 = '/user/createWithList'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')

  return {
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<void>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<void>(prefix, PATH0, POST, option).send().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
