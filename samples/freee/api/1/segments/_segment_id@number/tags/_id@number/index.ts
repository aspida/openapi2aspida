/* eslint-disable */
import type * as Types from '../../../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のセグメントタグを更新する</p>
   * 
   * <h2 id="">注意点</h2>
   * 
   * <ul>
   * 
   * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * 
   * </ul>
   */
  put: {
    status: 200
    resBody: Types.SegmentTagResponse
    reqFormat: URLSearchParams
    /** セグメントタグの作成 */
    reqBody: Types.SegmentTagParams
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のセグメントタグを削除する</p>
   * 
   * <h2 id="">注意点</h2>
   * 
   * <ul>
   * 
   * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * 
   * </ul>
   */
  delete: {
    query: {
      /** 事業所ID */
      company_id: number
    }

    status: 204
  }
}
