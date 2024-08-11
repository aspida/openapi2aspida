import type { AspidaClient } from 'aspida';
import type { Methods as Methods_1lgtes2 } from './ping';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/ping';
  const GET = 'GET';

  return {
    ping: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1lgtes2['get']['resBody'], Methods_1lgtes2['get']['resHeaders'], Methods_1lgtes2['get']['status']>(prefix, PATH0, GET, option).text(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1lgtes2['get']['resBody'], Methods_1lgtes2['get']['resHeaders'], Methods_1lgtes2['get']['status']>(prefix, PATH0, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
