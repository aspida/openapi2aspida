import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1uc1f5c } from './me';
import type { Methods as Methods_1fx2lts } from './mixes';
import type { Methods as Methods_1bmu6gs } from './mixes/_id@string';
import type { Methods as Methods_11aaikm } from './mixes/_mixId@string/cards';
import type { Methods as Methods_c0yrrk } from './mixes/_mixId@string/url';
import type { Methods as Methods_bmz5l9 } from './parse';
import type { Methods as Methods_cmjmnf } from './parse/image';
import type { Methods as Methods_1pns1yn } from './token';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/me';
  const PATH1 = '/api/v1/mixes';
  const PATH2 = '/cards';
  const PATH3 = '/url';
  const PATH4 = '/api/v1/parse';
  const PATH5 = '/api/v1/parse/image';
  const PATH6 = '/api/v1/token';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    me: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['get']['resBody'], BasicHeaders, Methods_1uc1f5c['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['get']['resBody'], BasicHeaders, Methods_1uc1f5c['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    mixes: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          put: (option: { body: Methods_1bmu6gs['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1bmu6gs['put']['status']>(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods_1bmu6gs['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1bmu6gs['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      _mixId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          cards: {
            post: (option: { body: Methods_11aaikm['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_11aaikm['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send(),
            $post: (option: { body: Methods_11aaikm['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_11aaikm['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
          url: {
            post: (option: { body: Methods_c0yrrk['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_c0yrrk['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).send(),
            $post: (option: { body: Methods_c0yrrk['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_c0yrrk['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`,
          },
        };
      },
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1fx2lts['get']['resBody'], BasicHeaders, Methods_1fx2lts['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1fx2lts['get']['resBody'], BasicHeaders, Methods_1fx2lts['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * @returns OK
       */
      post: (option: { body: Methods_1fx2lts['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1fx2lts['post']['resBody'], BasicHeaders, Methods_1fx2lts['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_1fx2lts['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1fx2lts['post']['resBody'], BasicHeaders, Methods_1fx2lts['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    parse: {
      image: {
        /**
         * @returns OK
         */
        post: (option: { body: Methods_cmjmnf['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_cmjmnf['post']['resBody'], BasicHeaders, Methods_cmjmnf['post']['status']>(prefix, PATH5, POST, option, 'FormData').json(),
        /**
         * @returns OK
         */
        $post: (option: { body: Methods_cmjmnf['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_cmjmnf['post']['resBody'], BasicHeaders, Methods_cmjmnf['post']['status']>(prefix, PATH5, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`,
      },
      /**
       * @returns OK
       */
      post: (option: { body: Methods_bmz5l9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_bmz5l9['post']['resBody'], BasicHeaders, Methods_bmz5l9['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_bmz5l9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_bmz5l9['post']['resBody'], BasicHeaders, Methods_bmz5l9['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    token: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods_1pns1yn['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pns1yn['post']['resBody'], BasicHeaders, Methods_1pns1yn['post']['status']>(prefix, PATH6, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_1pns1yn['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pns1yn['post']['resBody'], BasicHeaders, Methods_1pns1yn['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
