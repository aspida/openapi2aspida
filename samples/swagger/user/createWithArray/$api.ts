import type { AspidaClient } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '');
  const PATH0 = '/user/createWithArray';
  const POST = 'POST';

  return {
    /**
     * @param option.body - List of user object
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch(prefix, PATH0, POST, option).send(),
    /**
     * @param option.body - List of user object
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
