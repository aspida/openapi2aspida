/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './register'

const POST = 'POST'
const PATH0 = '/auth/local'
const PATH1 = '/auth/local/register'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')

  return {
    register: {
      post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body)
    },
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
