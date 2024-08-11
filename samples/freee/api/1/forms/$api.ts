import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1892fcv } from './selectables';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/forms/selectables';
  const GET = 'GET';

  return {
    selectables: {
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所のフォーム用選択項目情報を取得する</p>
       */
      get: (option: { query: Methods_1892fcv['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1892fcv['get']['resBody'], BasicHeaders, Methods_1892fcv['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>指定した事業所のフォーム用選択項目情報を取得する</p>
       */
      $get: (option: { query: Methods_1892fcv['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1892fcv['get']['resBody'], BasicHeaders, Methods_1892fcv['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1892fcv['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
