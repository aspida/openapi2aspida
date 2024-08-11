import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1n5ahpw } from './audio';
import type { Methods as Methods_hb512n } from './image';
import type { Methods as Methods_bmz5l9 } from './parse';
import type { Methods as Methods_1p6kbgo } from './story/_storyId@string';
import type { Methods as Methods_f5tn7d } from './story/_storyId@string/audio';
import type { Methods as Methods_1yyae2 } from './story/_storyId@string/image';
import type { Methods as Methods_2mhh8s } from './story/_storyId@string/video';
import type { Methods as Methods_1xsdp01 } from './video';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/extension/audio';
  const PATH1 = '/api/v3/extension/image';
  const PATH2 = '/api/v3/extension/parse';
  const PATH3 = '/api/v3/extension/story';
  const PATH4 = '/audio';
  const PATH5 = '/image';
  const PATH6 = '/video';
  const PATH7 = '/api/v3/extension/video';
  const POST = 'POST';

  return {
    audio: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods_1n5ahpw['post']['reqBody'], headers?: Methods_1n5ahpw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1n5ahpw['post']['resBody'], BasicHeaders, Methods_1n5ahpw['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_1n5ahpw['post']['reqBody'], headers?: Methods_1n5ahpw['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1n5ahpw['post']['resBody'], BasicHeaders, Methods_1n5ahpw['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    image: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods_hb512n['post']['reqBody'], headers?: Methods_hb512n['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_hb512n['post']['resBody'], BasicHeaders, Methods_hb512n['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_hb512n['post']['reqBody'], headers?: Methods_hb512n['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_hb512n['post']['resBody'], BasicHeaders, Methods_hb512n['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    parse: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods_bmz5l9['post']['reqBody'], headers?: Methods_bmz5l9['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_bmz5l9['post']['resBody'], BasicHeaders, Methods_bmz5l9['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_bmz5l9['post']['reqBody'], headers?: Methods_bmz5l9['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_bmz5l9['post']['resBody'], BasicHeaders, Methods_bmz5l9['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    story: {
      _storyId: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`;

        return {
          audio: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods_f5tn7d['post']['reqBody'], headers?: Methods_f5tn7d['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_f5tn7d['post']['resBody'], BasicHeaders, Methods_f5tn7d['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods_f5tn7d['post']['reqBody'], headers?: Methods_f5tn7d['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_f5tn7d['post']['resBody'], BasicHeaders, Methods_f5tn7d['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`,
          },
          image: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods_1yyae2['post']['reqBody'], headers?: Methods_1yyae2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1yyae2['post']['resBody'], BasicHeaders, Methods_1yyae2['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods_1yyae2['post']['reqBody'], headers?: Methods_1yyae2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1yyae2['post']['resBody'], BasicHeaders, Methods_1yyae2['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH5}`,
          },
          video: {
            /**
             * @returns OK
             */
            post: (option: { body: Methods_2mhh8s['post']['reqBody'], headers?: Methods_2mhh8s['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_2mhh8s['post']['resBody'], BasicHeaders, Methods_2mhh8s['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option, 'FormData').json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods_2mhh8s['post']['reqBody'], headers?: Methods_2mhh8s['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods_2mhh8s['post']['resBody'], BasicHeaders, Methods_2mhh8s['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH6}`,
          },
          /**
           * @returns OK
           */
          post: (option: { body: Methods_1p6kbgo['post']['reqBody'], headers?: Methods_1p6kbgo['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1p6kbgo['post']['resBody'], BasicHeaders, Methods_1p6kbgo['post']['status']>(prefix, prefix1, POST, option, 'FormData').json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods_1p6kbgo['post']['reqBody'], headers?: Methods_1p6kbgo['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1p6kbgo['post']['resBody'], BasicHeaders, Methods_1p6kbgo['post']['status']>(prefix, prefix1, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    video: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods_1xsdp01['post']['reqBody'], headers?: Methods_1xsdp01['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1xsdp01['post']['resBody'], BasicHeaders, Methods_1xsdp01['post']['status']>(prefix, PATH7, POST, option, 'FormData').json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_1xsdp01['post']['reqBody'], headers?: Methods_1xsdp01['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1xsdp01['post']['resBody'], BasicHeaders, Methods_1xsdp01['post']['status']>(prefix, PATH7, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH7}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
