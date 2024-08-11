import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_4kcwcm } from './_storyId@string';
import type { Methods as Methods_1pdca13 } from './_storyId@string/audio';
import type { Methods as Methods_b9upc } from './_storyId@string/image';
import type { Methods as Methods_1uompqu } from './_storyId@string/video';

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
          post: (option: { body: Methods_1pdca13['post']['reqBody'], headers?: Methods_1pdca13['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1pdca13['post']['resBody'], BasicHeaders, Methods_1pdca13['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_1pdca13['post']['reqBody'], headers?: Methods_1pdca13['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1pdca13['post']['resBody'], BasicHeaders, Methods_1pdca13['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        image: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods_b9upc['post']['reqBody'], headers?: Methods_b9upc['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_b9upc['post']['resBody'], BasicHeaders, Methods_b9upc['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_b9upc['post']['reqBody'], headers?: Methods_b9upc['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_b9upc['post']['resBody'], BasicHeaders, Methods_b9upc['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
        video: {
          /**
           * @returns OK
           */
          post: (option: { body: Methods_1uompqu['post']['reqBody'], headers?: Methods_1uompqu['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1uompqu['post']['resBody'], BasicHeaders, Methods_1uompqu['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_1uompqu['post']['reqBody'], headers?: Methods_1uompqu['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1uompqu['post']['resBody'], BasicHeaders, Methods_1uompqu['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`,
        },
        /**
         * @returns OK
         */
        post: (option: { body: Methods_4kcwcm['post']['reqBody'], headers?: Methods_4kcwcm['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_4kcwcm['post']['resBody'], BasicHeaders, Methods_4kcwcm['post']['status']>(prefix, prefix0, POST, option, 'FormData').json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_4kcwcm['post']['reqBody'], headers?: Methods_4kcwcm['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods_4kcwcm['post']['resBody'], BasicHeaders, Methods_4kcwcm['post']['status']>(prefix, prefix0, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
