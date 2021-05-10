/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_id@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/sections'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

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
        get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
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
        $get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
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
        put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
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
        $put: (option?: { body?: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門を削除する</p>
         */
        delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の部門を削除する</p>
         */
        $delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] } | { method: 'delete'; query: Methods1['delete']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
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
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
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
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
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
    post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
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
    $post: (option?: { body?: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
