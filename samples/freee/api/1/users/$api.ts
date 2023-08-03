import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from '.';
import type { Methods as Methods1 } from './capabilities';
import type { Methods as Methods2 } from './me';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/users';
  const PATH1 = '/api/1/users/capabilities';
  const PATH2 = '/api/1/users/me';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    capabilities: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの権限情報を取得する</p>
       */
      get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの権限情報を取得する</p>
       */
      $get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    me: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの情報を取得する</p>
       */
      get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの情報を取得する</p>
       */
      $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザー情報を更新する</p>
       * @param option.body - ユーザー情報の更新
       */
      put: (option?: { body?: Methods2['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option, 'URLSearchParams').json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザー情報を更新する</p>
       * @param option.body - ユーザー情報の更新
       */
      $put: (option?: { body?: Methods2['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>事業所に所属するユーザーの一覧を取得する</p>
     */
    get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>事業所に所属するユーザーの一覧を取得する</p>
     */
    $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
