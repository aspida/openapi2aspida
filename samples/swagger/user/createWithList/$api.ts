/* eslint-disable */
// prettier-ignore
import { AspidaClient } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user/createWithList'
  const POST = 'POST'

  return {
    /**
     * @param option.body - List of user object
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch(prefix, PATH0, POST, option).send(),
    /**
     * @param option.body - List of user object
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
