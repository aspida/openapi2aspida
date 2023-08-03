import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods0 } from '.';
import type { Methods as Methods1 } from './image';

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
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns OK
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
