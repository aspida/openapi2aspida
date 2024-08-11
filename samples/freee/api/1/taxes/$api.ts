import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_20ejyk } from './codes';
import type { Methods as Methods_h778i0 } from './codes/_code@number';
import type { Methods as Methods_7dyior } from './companies/_company_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/taxes/codes';
  const PATH1 = '/api/1/taxes/companies';
  const GET = 'GET';

  return {
    codes: {
      _code: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * <h2 id="">概要</h2>
           *
           * <p>税区分コードを取得する</p>
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_h778i0['get']['resBody'], BasicHeaders, Methods_h778i0['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * <h2 id="">概要</h2>
           *
           * <p>税区分コードを取得する</p>
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_h778i0['get']['resBody'], BasicHeaders, Methods_h778i0['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * <h2 id="">概要</h2>
       *
       * <p>税区分コード一覧を取得する</p>
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_20ejyk['get']['resBody'], BasicHeaders, Methods_20ejyk['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * <h2 id="">概要</h2>
       *
       * <p>税区分コード一覧を取得する</p>
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_20ejyk['get']['resBody'], BasicHeaders, Methods_20ejyk['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    companies: {
      _company_id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_7dyior['get']['resBody'], BasicHeaders, Methods_7dyior['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_7dyior['get']['resBody'], BasicHeaders, Methods_7dyior['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
