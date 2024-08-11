import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1bpdvc3 } from './_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/sections';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門を参照する</p><h2 id="_2">レスポンスの例</h2>
         *
         * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;long_name&quot;: &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;,
         *     &quot;indent_count&quot;: 1,
         *     &quot;parent_id&quot;: 101
         *   }
         * }
         * // それ以外のプラン
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;long_name&quot;: &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;
         *   }
         * }</code></pre>
         */
        get: (option: { query: Methods_1bpdvc3['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bpdvc3['get']['resBody'], BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門を参照する</p><h2 id="_2">レスポンスの例</h2>
         *
         * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;long_name&quot;: &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;,
         *     &quot;indent_count&quot;: 1,
         *     &quot;parent_id&quot;: 101
         *   }
         * }
         * // それ以外のプラン
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;long_name&quot;: &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;
         *   }
         * }</code></pre>
         */
        $get: (option: { query: Methods_1bpdvc3['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bpdvc3['get']['resBody'], BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門を更新する</p><h2 id="_2">レスポンスの例</h2>
         *
         * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;long_name&quot;: &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;,
         *     &quot;indent_count&quot;: 1,
         *     &quot;parent_id&quot;: 101
         *   }
         * }
         * // それ以外のプラン
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;long_name&quot;: &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;
         *   }
         * }</code></pre>
         * @param option.body - 部門の更新
         */
        put: (option?: { body?: Methods_1bpdvc3['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bpdvc3['put']['resBody'], BasicHeaders, Methods_1bpdvc3['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門を更新する</p><h2 id="_2">レスポンスの例</h2>
         *
         * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;long_name&quot;: &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;,
         *     &quot;indent_count&quot;: 1,
         *     &quot;parent_id&quot;: 101
         *   }
         * }
         * // それ以外のプラン
         * {
         *   &quot;section&quot; : {
         *     &quot;id&quot; : 102,
         *     &quot;company_id&quot; : 1,
         *     &quot;name&quot; : &quot;開発部門&quot;,
         *     &quot;long_name&quot;: &quot;開発部門&quot;,
         *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
         *     &quot;shortcut2&quot; : &quot;123&quot;
         *   }
         * }</code></pre>
         * @param option.body - 部門の更新
         */
        $put: (option?: { body?: Methods_1bpdvc3['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bpdvc3['put']['resBody'], BasicHeaders, Methods_1bpdvc3['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門を削除する</p>
         */
        delete: (option: { query: Methods_1bpdvc3['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門を削除する</p>
         */
        $delete: (option: { query: Methods_1bpdvc3['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1bpdvc3['get']['query'] } | { method: 'delete'; query: Methods_1bpdvc3['delete']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の部門一覧を取得する</p>
     *
     * <h2 id="_2">レスポンスの例</h2>
     *
     * <blockquote>
     * <p>GET https://api.freee.co.jp/api/1/sections?company_id=1</p>
     * </blockquote>
     *
     * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
     * {
     *   &quot;sections&quot; : [
     *     {
     *       &quot;id&quot; : 101,
     *       &quot;company_id&quot; : 1,
     *       &quot;name&quot; : &quot;開発部門&quot;,
     *       &quot;long_name&quot;: &quot;開発部門&quot;,
     *       &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
     *       &quot;shortcut2&quot; : &quot;123&quot;,
     *       &quot;indent_count&quot;: 1,
     *       &quot;parent_id&quot;: 11
     *     },
     *     ...
     *   ]
     * }
     * // それ以外のプラン
     * {
     *   &quot;sections&quot; : [
     *     {
     *       &quot;id&quot; : 101,
     *       &quot;company_id&quot; : 1,
     *       &quot;name&quot; : &quot;開発部門&quot;,
     *       &quot;long_name&quot;: &quot;開発部門&quot;,
     *       &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
     *       &quot;shortcut2&quot; : &quot;123&quot;
     *     },
     *     ...
     *   ]
     * }</code></pre>
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の部門一覧を取得する</p>
     *
     * <h2 id="_2">レスポンスの例</h2>
     *
     * <blockquote>
     * <p>GET https://api.freee.co.jp/api/1/sections?company_id=1</p>
     * </blockquote>
     *
     * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
     * {
     *   &quot;sections&quot; : [
     *     {
     *       &quot;id&quot; : 101,
     *       &quot;company_id&quot; : 1,
     *       &quot;name&quot; : &quot;開発部門&quot;,
     *       &quot;long_name&quot;: &quot;開発部門&quot;,
     *       &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
     *       &quot;shortcut2&quot; : &quot;123&quot;,
     *       &quot;indent_count&quot;: 1,
     *       &quot;parent_id&quot;: 11
     *     },
     *     ...
     *   ]
     * }
     * // それ以外のプラン
     * {
     *   &quot;sections&quot; : [
     *     {
     *       &quot;id&quot; : 101,
     *       &quot;company_id&quot; : 1,
     *       &quot;name&quot; : &quot;開発部門&quot;,
     *       &quot;long_name&quot;: &quot;開発部門&quot;,
     *       &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
     *       &quot;shortcut2&quot; : &quot;123&quot;
     *     },
     *     ...
     *   ]
     * }</code></pre>
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の部門を作成する</p>
     *
     * <h2 id="_2">レスポンスの例</h2>
     *
     * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
     * {
     *   &quot;section&quot; : {
     *     &quot;id&quot; : 102,
     *     &quot;company_id&quot; : 1,
     *     &quot;name&quot; : &quot;開発部門&quot;,
     *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
     *     &quot;shortcut2&quot; : &quot;123&quot;,
     *     &quot;indent_count&quot;: 1,
     *     &quot;parent_id&quot;: 101
     *   }
     * }
     * // それ以外のプラン
     * {
     *   &quot;section&quot; : {
     *     &quot;id&quot; : 102,
     *     &quot;company_id&quot; : 1,
     *     &quot;name&quot; : &quot;開発部門&quot;,
     *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
     *     &quot;shortcut2&quot; : &quot;123&quot;
     *   }
     * }</code></pre>
     * @param option.body - 部門の作成
     */
    post: (option?: { body?: Methods_by08hd['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    /**
     * <h2 id="">概要</h2>
     *
     * <p>指定した事業所の部門を作成する</p>
     *
     * <h2 id="_2">レスポンスの例</h2>
     *
     * <pre><code>// プレミアムプラン（個人）、ビジネスプラン（法人）、エンタープライズプラン（法人）
     * {
     *   &quot;section&quot; : {
     *     &quot;id&quot; : 102,
     *     &quot;company_id&quot; : 1,
     *     &quot;name&quot; : &quot;開発部門&quot;,
     *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
     *     &quot;shortcut2&quot; : &quot;123&quot;,
     *     &quot;indent_count&quot;: 1,
     *     &quot;parent_id&quot;: 101
     *   }
     * }
     * // それ以外のプラン
     * {
     *   &quot;section&quot; : {
     *     &quot;id&quot; : 102,
     *     &quot;company_id&quot; : 1,
     *     &quot;name&quot; : &quot;開発部門&quot;,
     *     &quot;shortcut1&quot; : &quot;DEVELOPER&quot;,
     *     &quot;shortcut2&quot; : &quot;123&quot;
     *   }
     * }</code></pre>
     * @param option.body - 部門の作成
     */
    $post: (option?: { body?: Methods_by08hd['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
