import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1bpdvc3 } from './_id@number';
import type { Methods as Methods_1t3ys2q } from './_id@number/2';
import type { Methods as Methods_1sxwq7g } from './_id@number/abc';
import type { Methods as Methods_1k6npav } from './_id@number/xyz';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/user';
  const PATH1 = '/2';
  const PATH2 = '/abc';
  const PATH3 = '/xyz';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        $2: {
          /**
           * @returns accept
           */
          get: (option: { query: Methods_1t3ys2q['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1t3ys2q['get']['resBody'], BasicHeaders, Methods_1t3ys2q['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * @returns accept
           */
          $get: (option: { query: Methods_1t3ys2q['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1t3ys2q['get']['resBody'], BasicHeaders, Methods_1t3ys2q['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * @returns accept
           */
          post: (option: { query: Methods_1t3ys2q['post']['query'], config?: T | undefined }) =>
            fetch<Methods_1t3ys2q['post']['resBody'], BasicHeaders, Methods_1t3ys2q['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * @returns accept
           */
          $post: (option: { query: Methods_1t3ys2q['post']['query'], config?: T | undefined }) =>
            fetch<Methods_1t3ys2q['post']['resBody'], BasicHeaders, Methods_1t3ys2q['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1t3ys2q['get']['query'] } | { method: 'post'; query: Methods_1t3ys2q['post']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        abc: {
          get: (option?: { query?: Methods_1sxwq7g['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1sxwq7g['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).send(),
          $get: (option?: { query?: Methods_1sxwq7g['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1sxwq7g['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1sxwq7g['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        xyz: {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1k6npav['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).send(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1k6npav['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).send().then(r => r.body),
          put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1k6npav['put']['status']>(prefix, `${prefix0}${PATH3}`, PUT, option).send(),
          $put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1k6npav['put']['status']>(prefix, `${prefix0}${PATH3}`, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`,
        },
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).send(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).send().then(r => r.body),
        patch: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['patch']['status']>(prefix, prefix0, PATCH, option).send(),
        $patch: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['patch']['status']>(prefix, prefix0, PATCH, option).send().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
