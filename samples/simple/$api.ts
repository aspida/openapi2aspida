import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_99wrfr } from './dummy/2';
import type { Methods as Methods_14lyqjj } from './dummy/_a_1@number/simple';
import type { Methods as Methods_1mxjkn0 } from './dummy/_id@number/content';
import type { Methods as Methods_15dniq1 } from './dummy/_id@number/query';
import type { Methods as Methods_4f95kp } from './dummy/_id@number/simple';
import type { Methods as Methods_j0f1kc } from './file/_id@number/upload';
import type { Methods as Methods_9xeuu7 } from './user/_id@number';
import type { Methods as Methods_u0w5mu } from './user/_id@number/2';
import type { Methods as Methods_103c5e8 } from './user/_id@number/abc';
import type { Methods as Methods_1am4o3v } from './user/_id@number/xyz';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/dummy/2';
  const PATH1 = '/dummy';
  const PATH2 = '/simple';
  const PATH3 = '/content';
  const PATH4 = '/query';
  const PATH5 = '/file';
  const PATH6 = '/upload';
  const PATH7 = '/user';
  const PATH8 = '/2';
  const PATH9 = '/abc';
  const PATH10 = '/xyz';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    dummy: {
      $2: {
        put: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_99wrfr['put']['status']>(prefix, PATH0, PUT, option).send(),
        $put: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_99wrfr['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
      _a_1: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          simple: {
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_14lyqjj['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).send(),
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_14lyqjj['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
        };
      },
      _id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          content: {
            /**
             * @returns accept
             */
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1mxjkn0['put']['resBody'], BasicHeaders, Methods_1mxjkn0['put']['status']>(prefix, `${prefix1}${PATH3}`, PUT, option).text(),
            /**
             * @returns accept
             */
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1mxjkn0['put']['resBody'], BasicHeaders, Methods_1mxjkn0['put']['status']>(prefix, `${prefix1}${PATH3}`, PUT, option).text().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`,
          },
          query: {
            put: (option?: { query?: Methods_15dniq1['put']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_15dniq1['put']['status']>(prefix, `${prefix1}${PATH4}`, PUT, option).send(),
            $put: (option?: { query?: Methods_15dniq1['put']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_15dniq1['put']['status']>(prefix, `${prefix1}${PATH4}`, PUT, option).send().then(r => r.body),
            $path: (option?: { method: 'put'; query: Methods_15dniq1['put']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          simple: {
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_4f95kp['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).send(),
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_4f95kp['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
        };
      },
    },
    file: {
      _id: (val1: number) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          upload: {
            post: (option: { body: Methods_j0f1kc['post']['reqBody'], query?: Methods_j0f1kc['post']['query'] | undefined, config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_j0f1kc['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).send(),
            $post: (option: { body: Methods_j0f1kc['post']['reqBody'], query?: Methods_j0f1kc['post']['query'] | undefined, config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_j0f1kc['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).send().then(r => r.body),
            $path: (option?: { method: 'post'; query: Methods_j0f1kc['post']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
    },
    user: {
      _id: (val1: number) => {
        const prefix1 = `${PATH7}/${val1}`;

        return {
          $2: {
            /**
             * @returns accept
             */
            get: (option: { query: Methods_u0w5mu['get']['query'], config?: T | undefined }) =>
              fetch<Methods_u0w5mu['get']['resBody'], BasicHeaders, Methods_u0w5mu['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json(),
            /**
             * @returns accept
             */
            $get: (option: { query: Methods_u0w5mu['get']['query'], config?: T | undefined }) =>
              fetch<Methods_u0w5mu['get']['resBody'], BasicHeaders, Methods_u0w5mu['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json().then(r => r.body),
            /**
             * @returns accept
             */
            post: (option: { query: Methods_u0w5mu['post']['query'], config?: T | undefined }) =>
              fetch<Methods_u0w5mu['post']['resBody'], BasicHeaders, Methods_u0w5mu['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json(),
            /**
             * @returns accept
             */
            $post: (option: { query: Methods_u0w5mu['post']['query'], config?: T | undefined }) =>
              fetch<Methods_u0w5mu['post']['resBody'], BasicHeaders, Methods_u0w5mu['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_u0w5mu['get']['query'] } | { method: 'post'; query: Methods_u0w5mu['post']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          abc: {
            get: (option?: { query?: Methods_103c5e8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_103c5e8['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).send(),
            $get: (option?: { query?: Methods_103c5e8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_103c5e8['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).send().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_103c5e8['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          xyz: {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1am4o3v['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).send(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1am4o3v['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).send().then(r => r.body),
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1am4o3v['put']['status']>(prefix, `${prefix1}${PATH10}`, PUT, option).send(),
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1am4o3v['put']['status']>(prefix, `${prefix1}${PATH10}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH10}`,
          },
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_9xeuu7['get']['status']>(prefix, prefix1, GET, option).send(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_9xeuu7['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_9xeuu7['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          $patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_9xeuu7['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_9xeuu7['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_9xeuu7['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
