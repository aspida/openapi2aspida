/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
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
  get: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 200
    resBody: Types.SectionResponse
  }

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
   */
  put: {
    status: 200
    resBody: Types.SectionResponse
    reqFormat: URLSearchParams
    /** 部門の更新 */
    reqBody?: Types.SectionParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所の部門を削除する</p>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
