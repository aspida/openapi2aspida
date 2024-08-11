import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/users/me';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザの情報を取得する</p>
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザの情報を取得する</p>
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザー情報を更新する</p>
     * @param option.body - ユーザー情報の更新
     */
    put: (option?: { body?: Methods_by08hd['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option, 'URLSearchParams').json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザー情報を更新する</p>
     * @param option.body - ユーザー情報の更新
     */
    $put: (option?: { body?: Methods_by08hd['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
