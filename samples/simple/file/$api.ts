/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './_id@number/upload'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/file'
  const PATH1 = '/upload'
  const POST = 'POST'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        upload: {
          post: (option?: { body?: Methods0['post']['reqBody'], query?: Methods0['post']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'Blob').send(),
          $post: (option?: { body?: Methods0['post']['reqBody'], query?: Methods0['post']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'Blob').send().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods0['post']['query'] }) =>
            `${prefix}${prefix0}${PATH1}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
