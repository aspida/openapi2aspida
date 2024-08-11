import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_hb512n } from './image';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/parse';
  const PATH1 = '/api/v1/parse/image';
  const POST = 'POST';

  return {
    image: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods_hb512n['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_hb512n['post']['resBody'], BasicHeaders, Methods_hb512n['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods_hb512n['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_hb512n['post']['resBody'], BasicHeaders, Methods_hb512n['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * @returns OK
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns OK
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
