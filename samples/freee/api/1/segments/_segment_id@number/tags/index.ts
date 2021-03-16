/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のセグメントタグ一覧を取得する</p>
   * 
   * <h2 id="">注意点</h2>
   * 
   * <ul>
   * 
   * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * 
   * </ul>
   */
  get: {
    query: {
      /** 事業所ID */
      company_id: number
      /** 取得レコードのオフセット (デフォルト: 0) */
      offset: number
      /** 取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 500) */
      limit: number
    }

    status: 200

    resBody: {
      segment_tags: Types.SegmentTagResponse['segment_tag'][]
    }
  }

  /**
   * <h2 id="">概要</h2>
   * 
   * <p>指定した事業所のセグメントタグを作成する</p>
   * 
   * <h2 id="">注意点</h2>
   * 
   * <ul>
   * 
   * <li>本APIは法人向けのプロフェッショナルプラン以上で利用可能です。利用可能なセグメントの数は、法人向けのプロフェッショナルプランの場合は1つ、エンタープライズプランの場合は3つです。</li>
   * 
   * </ul>
   */
  post: {
    status: 201
    resBody: Types.SegmentTagResponse
    reqFormat: URLSearchParams
    /** セグメントタグの作成 */
    reqBody: Types.SegmentTagParams
  }
}
