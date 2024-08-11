import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1tjr3j9 } from './_id@number/upload';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/file';
  const PATH1 = '/upload';
  const POST = 'POST';

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        upload: {
          post: (option: { body: Methods_1tjr3j9['post']['reqBody'], query?: Methods_1tjr3j9['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1tjr3j9['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).send(),
          $post: (option: { body: Methods_1tjr3j9['post']['reqBody'], query?: Methods_1tjr3j9['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1tjr3j9['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).send().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1tjr3j9['post']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
