import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_n6xkkf } from './_company_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/taxes/companies';
  const GET = 'GET';

  return {
    _company_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_n6xkkf['get']['resBody'], BasicHeaders, Methods_n6xkkf['get']['status']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_n6xkkf['get']['resBody'], BasicHeaders, Methods_n6xkkf['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
