/* eslint-disable */
import { AspidaClient } from 'aspida'


const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')

  return {

  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
