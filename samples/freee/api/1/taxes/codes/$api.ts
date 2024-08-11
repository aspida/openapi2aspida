import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_4ql8k7 } from './_code@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/taxes/codes';
  const GET = 'GET';

  return {
    _code: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>税区分コードを取得する</p>
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_4ql8k7['get']['resBody'], BasicHeaders, Methods_4ql8k7['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>税区分コードを取得する</p>
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_4ql8k7['get']['resBody'], BasicHeaders, Methods_4ql8k7['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>税区分コード一覧を取得する</p>
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>税区分コード一覧を取得する</p>
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
