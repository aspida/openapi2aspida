import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/info';
  const GET = 'GET';

  return {
    /**
     * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
     * @returns OK
     */
    get: (option?: { headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Send in to about app to server. If app is to old and need be force updated in responce you have link to new app
     * @returns OK
     */
    $get: (option?: { headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
