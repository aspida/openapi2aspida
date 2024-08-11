import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/chats/keys';
  const GET = 'GET';

  return {
    /**
     * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
     * @returns OK
     */
    get: (option?: { headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Returns valid pubnub keys and auth token, refreshes tokens and access if needed
     * @returns OK
     */
    $get: (option?: { headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
