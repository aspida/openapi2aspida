/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from '.'

const GET = 'GET'
const PATH0 = '/user/login'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')

  return {
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).text(),
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).text().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
