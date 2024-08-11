import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/login';
  const POST = 'POST';

  return {
    /**
     * @returns OK
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], headers?: Methods_by08hd['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns OK
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], headers?: Methods_by08hd['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
