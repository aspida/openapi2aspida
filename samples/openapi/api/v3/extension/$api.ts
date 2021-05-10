/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './audio'
// prettier-ignore
import { Methods as Methods1 } from './image'
// prettier-ignore
import { Methods as Methods2 } from './parse'
// prettier-ignore
import { Methods as Methods3 } from './story/_storyId@string'
// prettier-ignore
import { Methods as Methods4 } from './story/_storyId@string/audio'
// prettier-ignore
import { Methods as Methods5 } from './story/_storyId@string/image'
// prettier-ignore
import { Methods as Methods6 } from './story/_storyId@string/video'
// prettier-ignore
import { Methods as Methods7 } from './video'

// prettier-ignore
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
      /**
       * @returns OK
       */
      post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    image: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    parse: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'], config?: T }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    story: {
      _storyId: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          audio: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'], config?: T }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'], config?: T }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`
          },
          image: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods5['post']['reqBody'], headers?: Methods5['post']['reqHeaders'], config?: T }) =>
              fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods5['post']['reqBody'], headers?: Methods5['post']['reqHeaders'], config?: T }) =>
              fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH5}`
          },
          video: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods6['post']['reqBody'], headers?: Methods6['post']['reqHeaders'], config?: T }) =>
              fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods6['post']['reqBody'], headers?: Methods6['post']['reqHeaders'], config?: T }) =>
              fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH6}`
          },
          /**
           * @returns OK
           */
          post: (option: { body: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'], config?: T }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, prefix1, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'], config?: T }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, prefix1, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    video: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'], config?: T }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option, 'FormData').json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'], config?: T }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH7}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
