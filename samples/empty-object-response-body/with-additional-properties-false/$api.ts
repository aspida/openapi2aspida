import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods0 } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/with-additional-properties-false';
  const DELETE = 'DELETE';

  return {
    delete: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send(),
    $delete: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
