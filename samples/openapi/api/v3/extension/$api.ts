/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './audio'
import { Methods as Methods1 } from './image'
import { Methods as Methods2 } from './parse'
import { Methods as Methods3 } from './story/_storyId@string'
import { Methods as Methods4 } from './story/_storyId@string/audio'
import { Methods as Methods5 } from './story/_storyId@string/image'
import { Methods as Methods6 } from './story/_storyId@string/video'
import { Methods as Methods7 } from './video'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v3/extension/audio'
  const PATH1 = '/api/v3/extension/image'
  const PATH2 = '/api/v3/extension/parse'
  const PATH3 = '/api/v3/extension/story'
  const PATH4 = '/audio'
  const PATH5 = '/image'
  const PATH6 = '/video'
  const PATH7 = '/api/v3/extension/video'
  const POST = 'POST'

  return {
    audio: {
      post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
      $post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    image: {
      post: (option: { body: Methods1['post']['reqBody'], headers: Methods1['post']['reqHeaders'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      $post: (option: { body: Methods1['post']['reqBody'], headers: Methods1['post']['reqHeaders'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    parse: {
      post: (option: { body: Methods2['post']['reqBody'], headers: Methods2['post']['reqHeaders'], config?: T }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
      $post: (option: { body: Methods2['post']['reqBody'], headers: Methods2['post']['reqHeaders'], config?: T }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    story: {
      _storyId: (val0: string) => {
        const prefix0 = `${PATH3}/${val0}`

        return {
          audio: {
            post: (option: { body: Methods4['post']['reqBody'], headers: Methods4['post']['reqHeaders'], config?: T }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option, 'FormData').json(),
            $post: (option: { body: Methods4['post']['reqBody'], headers: Methods4['post']['reqHeaders'], config?: T }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH4}`
          },
          image: {
            post: (option: { body: Methods5['post']['reqBody'], headers: Methods5['post']['reqHeaders'], config?: T }) =>
              fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option, 'FormData').json(),
            $post: (option: { body: Methods5['post']['reqBody'], headers: Methods5['post']['reqHeaders'], config?: T }) =>
              fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH5}`
          },
          video: {
            post: (option: { body: Methods6['post']['reqBody'], headers: Methods6['post']['reqHeaders'], config?: T }) =>
              fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix0}${PATH6}`, POST, option, 'FormData').json(),
            $post: (option: { body: Methods6['post']['reqBody'], headers: Methods6['post']['reqHeaders'], config?: T }) =>
              fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix0}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH6}`
          },
          post: (option: { body: Methods3['post']['reqBody'], headers: Methods3['post']['reqHeaders'], config?: T }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, prefix0, POST, option, 'FormData').json(),
          $post: (option: { body: Methods3['post']['reqBody'], headers: Methods3['post']['reqHeaders'], config?: T }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, prefix0, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}`
        }
      }
    },
    video: {
      post: (option: { body: Methods7['post']['reqBody'], headers: Methods7['post']['reqHeaders'], config?: T }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option, 'FormData').json(),
      $post: (option: { body: Methods7['post']['reqBody'], headers: Methods7['post']['reqHeaders'], config?: T }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH7}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
