import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './2';
import type { Methods as Methods1 } from './_a_1@number/simple';
import type { Methods as Methods2 } from './_id@number/content';
import type { Methods as Methods3 } from './_id@number/query';
import type { Methods as Methods4 } from './_id@number/simple';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/dummy/2';
  const PATH1 = '/dummy';
  const PATH2 = '/simple';
  const PATH3 = '/content';
  const PATH4 = '/query';
  const PUT = 'PUT';

  return {
    $2: {
      put: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send(),
      $put: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    _a_1: (val0: number) => {
      const prefix0 = `${PATH1}/${val0}`;

      return {
        simple: {
          put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send(),
          $put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
      };
    },
    _id: (val0: number) => {
      const prefix0 = `${PATH1}/${val0}`;

      return {
        content: {
          /**
           * @returns accept
           */
          put: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, `${prefix0}${PATH3}`, PUT, option).text(),
          /**
           * @returns accept
           */
          $put: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, `${prefix0}${PATH3}`, PUT, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`,
        },
        query: {
          put: (option?: { query?: Methods3['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, `${prefix0}${PATH4}`, PUT, option).send(),
          $put: (option?: { query?: Methods3['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, `${prefix0}${PATH4}`, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods3['put']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        simple: {
          put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send(),
          $put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
