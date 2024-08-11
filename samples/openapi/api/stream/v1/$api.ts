import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_hwvagn } from './stories';
import type { Methods as Methods_1j18f5k } from './stories/_storyId@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/stream/v1/stories';
  const GET = 'GET';

  return {
    stories: {
      _storyId: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * @returns OK
           */
          get: (option: { query: Methods_1j18f5k['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1j18f5k['get']['resBody'], BasicHeaders, Methods_1j18f5k['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option: { query: Methods_1j18f5k['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1j18f5k['get']['resBody'], BasicHeaders, Methods_1j18f5k['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1j18f5k['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * It returns all stories with first 75 cards
       * @returns OK
       */
      get: (option: { query: Methods_hwvagn['get']['query'], config?: T | undefined }) =>
        fetch<Methods_hwvagn['get']['resBody'], BasicHeaders, Methods_hwvagn['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * It returns all stories with first 75 cards
       * @returns OK
       */
      $get: (option: { query: Methods_hwvagn['get']['query'], config?: T | undefined }) =>
        fetch<Methods_hwvagn['get']['resBody'], BasicHeaders, Methods_hwvagn['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_hwvagn['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
