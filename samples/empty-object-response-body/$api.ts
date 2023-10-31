import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods0 } from './with-additional-properties-false';
import type { Methods as Methods1 } from './with-additional-properties-true';
import type { Methods as Methods2 } from './without-additional-properties';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/with-additional-properties-false';
  const PATH1 = '/with-additional-properties-true';
  const PATH2 = '/without-additional-properties';
  const DELETE = 'DELETE';

  return {
    with_additional_properties_false: {
      delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send(),
      $delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    with_additional_properties_true: {
      /**
       * @returns OK
       */
      delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, PATH1, DELETE, option).json(),
      /**
       * @returns OK
       */
      $delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, PATH1, DELETE, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    without_additional_properties: {
      delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, PATH2, DELETE, option).send(),
      $delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, PATH2, DELETE, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
