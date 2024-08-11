import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_rglwxw } from './capabilities';
import type { Methods as Methods_1uc1f5c } from './me';

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
      get: (option: { query: Methods_rglwxw['get']['query'], config?: T | undefined }) =>
        fetch<Methods_rglwxw['get']['resBody'], BasicHeaders, Methods_rglwxw['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの権限情報を取得する</p>
       */
      $get: (option: { query: Methods_rglwxw['get']['query'], config?: T | undefined }) =>
        fetch<Methods_rglwxw['get']['resBody'], BasicHeaders, Methods_rglwxw['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_rglwxw['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    me: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの情報を取得する</p>
       */
      get: (option?: { query?: Methods_1uc1f5c['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['get']['resBody'], BasicHeaders, Methods_1uc1f5c['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザの情報を取得する</p>
       */
      $get: (option?: { query?: Methods_1uc1f5c['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['get']['resBody'], BasicHeaders, Methods_1uc1f5c['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザー情報を更新する</p>
       * @param option.body - ユーザー情報の更新
       */
      put: (option?: { body?: Methods_1uc1f5c['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['put']['resBody'], BasicHeaders, Methods_1uc1f5c['put']['status']>(prefix, PATH2, PUT, option, 'URLSearchParams').json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>ユーザー情報を更新する</p>
       * @param option.body - ユーザー情報の更新
       */
      $put: (option?: { body?: Methods_1uc1f5c['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['put']['resBody'], BasicHeaders, Methods_1uc1f5c['put']['status']>(prefix, PATH2, PUT, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1uc1f5c['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>事業所に所属するユーザーの一覧を取得する</p>
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>事業所に所属するユーザーの一覧を取得する</p>
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
