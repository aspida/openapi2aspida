import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1bpdvc3 } from './_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/companies';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザが所属する事業所の詳細を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>role
         * <ul>
         * <li>admin : 管理者</li>
         *
         * <li>simple_accounting : 一般</li>
         *
         * <li>self_only : 取引登録のみ</li>
         *
         * <li>read_only : 閲覧のみ</li>
         * </ul>
         * </li>
         * </ul>
         *
         * <h2 id="_3">
         */
        get: (option?: { query?: Methods_1bpdvc3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bpdvc3['get']['resBody'], BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザが所属する事業所の詳細を取得する</p>
         *
         * <h2 id="_2">定義</h2>
         *
         * <ul>
         * <li>role
         * <ul>
         * <li>admin : 管理者</li>
         *
         * <li>simple_accounting : 一般</li>
         *
         * <li>self_only : 取引登録のみ</li>
         *
         * <li>read_only : 閲覧のみ</li>
         * </ul>
         * </li>
         * </ul>
         *
         * <h2 id="_3">
         */
        $get: (option?: { query?: Methods_1bpdvc3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bpdvc3['get']['resBody'], BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザが所属する事業所の情報を更新する</p>
         *
         * <p>※同時に複数のリクエストを受け付けない</p>
         */
        put: (option?: { body?: Methods_1bpdvc3['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bpdvc3['put']['resBody'], BasicHeaders, Methods_1bpdvc3['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>ユーザが所属する事業所の情報を更新する</p>
         *
         * <p>※同時に複数のリクエストを受け付けない</p>
         */
        $put: (option?: { body?: Methods_1bpdvc3['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bpdvc3['put']['resBody'], BasicHeaders, Methods_1bpdvc3['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1bpdvc3['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザが所属する事業所の一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>role
     * <ul>
     * <li>admin : 管理者</li>
     *
     * <li>simple_accounting : 一般</li>
     *
     * <li>self_only : 取引登録のみ</li>
     *
     * <li>read_only : 閲覧のみ</li>
     * </ul>
     * </li>
     * </ul>
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>ユーザが所属する事業所の一覧を取得する</p>
     *
     * <h2 id="_2">定義</h2>
     *
     * <ul>
     * <li>role
     * <ul>
     * <li>admin : 管理者</li>
     *
     * <li>simple_accounting : 一般</li>
     *
     * <li>self_only : 取引登録のみ</li>
     *
     * <li>read_only : 閲覧のみ</li>
     * </ul>
     * </li>
     * </ul>
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
