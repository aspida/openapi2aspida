/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_segment_id@number/tags'
// prettier-ignore
import { Methods as Methods1 } from './_segment_id@number/tags/_id@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/segments'
  const PATH1 = '/tags'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _segment_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        tags: {
          _id: (val2: number) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

            return {
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
               * @param option.body - セグメントタグの作成
               */
              put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
                fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
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
               * @param option.body - セグメントタグの作成
               */
              $put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
                fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
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
              delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
                fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix2, DELETE, option).send(),
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
              $delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
                fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: (option?: { method: 'delete'; query: Methods1['delete']['query'] }) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
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
          get: (option: { query: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
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
          $get: (option: { query: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
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
           * @param option.body - セグメントタグの作成
           */
          post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
            fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'URLSearchParams').json(),
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
           * @param option.body - セグメントタグの作成
           */
          $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
            fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'URLSearchParams').json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
