import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_tli9od } from './user';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/user';
  const GET = 'GET';

  return {
    user: {
      /**
       * @returns sample
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['get']['resBody'], BasicHeaders, Methods_tli9od['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns sample
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['get']['resBody'], BasicHeaders, Methods_tli9od['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
