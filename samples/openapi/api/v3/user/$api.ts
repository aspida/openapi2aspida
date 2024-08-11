import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_14u5b7a } from './_userId@string';
import type { Methods as Methods_zdqd07 } from './profile';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v3/user';
  const PATH1 = '/api/v3/user/profile';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    _userId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns OK
         */
        get: (option?: { headers?: Methods_14u5b7a['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_14u5b7a['get']['resBody'], BasicHeaders, Methods_14u5b7a['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { headers?: Methods_14u5b7a['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_14u5b7a['get']['resBody'], BasicHeaders, Methods_14u5b7a['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    profile: {
      put: (option: { body: Methods_zdqd07['put']['reqBody'], headers?: Methods_zdqd07['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_zdqd07['put']['status']>(prefix, PATH1, PUT, option, 'FormData').send(),
      $put: (option: { body: Methods_zdqd07['put']['reqBody'], headers?: Methods_zdqd07['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_zdqd07['put']['status']>(prefix, PATH1, PUT, option, 'FormData').send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * @returns OK
     */
    get: (option?: { headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
