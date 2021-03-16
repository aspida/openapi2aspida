/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
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
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200

    resBody: {
      sections: Types.SectionResponse['section'][]
    }
  }

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
   */
  post: {
    status: 201
    resBody: Types.SectionResponse
    reqFormat: URLSearchParams
    /** 部門の作成 */
    reqBody?: Types.SectionParams
  }
}
