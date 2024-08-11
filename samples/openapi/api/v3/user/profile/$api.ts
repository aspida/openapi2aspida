import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/user/profile';
  const PUT = 'PUT';

  return {
    put: (option: { body: Methods_by08hd['put']['reqBody'], headers?: Methods_by08hd['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option, 'FormData').send(),
    $put: (option: { body: Methods_by08hd['put']['reqBody'], headers?: Methods_by08hd['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option, 'FormData').send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
