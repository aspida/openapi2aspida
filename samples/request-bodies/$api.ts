import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1xhiioa } from './users';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/users';
  const POST = 'POST';

  return {
    users: {
      post: (option: { body: Methods_1xhiioa['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1xhiioa['post']['status']>(prefix, PATH0, POST, option).send(),
      $post: (option: { body: Methods_1xhiioa['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1xhiioa['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
