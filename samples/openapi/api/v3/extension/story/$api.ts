import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods0 } from './_storyId@string';
import type { Methods as Methods1 } from './_storyId@string/audio';
import type { Methods as Methods2 } from './_storyId@string/image';
import type { Methods as Methods3 } from './_storyId@string/video';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/extension/story';
  const PATH1 = '/audio';
  const PATH2 = '/image';
  const PATH3 = '/video';
  const POST = 'POST';

  return {
    _storyId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        audio: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        image: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
        video: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`,
        },
        /**
         * @returns OK
         */
        post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, prefix0, POST, option, 'FormData').json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, prefix0, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
