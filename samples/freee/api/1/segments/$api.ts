import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1dq6c3v } from './_segment_id@number/tags';
import type { Methods as Methods_88yz11 } from './_segment_id@number/tags/_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/segments';
  const PATH1 = '/tags';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _segment_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        tags: {
          _id: (val2: number) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`;

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
              put: (option: { body: Methods_88yz11['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_88yz11['put']['resBody'], BasicHeaders, Methods_88yz11['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
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
              $put: (option: { body: Methods_88yz11['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_88yz11['put']['resBody'], BasicHeaders, Methods_88yz11['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
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
              delete: (option: { query: Methods_88yz11['delete']['query'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_88yz11['delete']['status']>(prefix, prefix2, DELETE, option).send(),
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
              $delete: (option: { query: Methods_88yz11['delete']['query'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_88yz11['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: (option?: { method: 'delete'; query: Methods_88yz11['delete']['query'] } | undefined) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            };
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
          get: (option: { query: Methods_1dq6c3v['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1dq6c3v['get']['resBody'], BasicHeaders, Methods_1dq6c3v['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
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
          $get: (option: { query: Methods_1dq6c3v['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1dq6c3v['get']['resBody'], BasicHeaders, Methods_1dq6c3v['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
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
          post: (option: { body: Methods_1dq6c3v['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1dq6c3v['post']['resBody'], BasicHeaders, Methods_1dq6c3v['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'URLSearchParams').json(),
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
          $post: (option: { body: Methods_1dq6c3v['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1dq6c3v['post']['resBody'], BasicHeaders, Methods_1dq6c3v['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'URLSearchParams').json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1dq6c3v['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
