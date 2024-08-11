import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1pbnd9f } from './register';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '');
  const PATH0 = '/auth/local';
  const PATH1 = '/auth/local/register';
  const POST = 'POST';

  return {
    register: {
      /**
       * Register a new user with the default role
       * @returns response
       */
      post: (option: { body: Methods_1pbnd9f['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pbnd9f['post']['resBody'], BasicHeaders, Methods_1pbnd9f['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Register a new user with the default role
       * @returns response
       */
      $post: (option: { body: Methods_1pbnd9f['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pbnd9f['post']['resBody'], BasicHeaders, Methods_1pbnd9f['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * Login a user using the identifiers email and password
     * @returns response
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * Login a user using the identifiers email and password
     * @returns response
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
