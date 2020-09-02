/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './trial_bs'
import { Methods as Methods1 } from './trial_bs_three_years'
import { Methods as Methods2 } from './trial_bs_two_years'
import { Methods as Methods3 } from './trial_pl'
import { Methods as Methods4 } from './trial_pl_sections'
import { Methods as Methods5 } from './trial_pl_three_years'
import { Methods as Methods6 } from './trial_pl_two_years'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/reports/trial_bs'
  const PATH1 = '/api/1/reports/trial_bs_three_years'
  const PATH2 = '/api/1/reports/trial_bs_two_years'
  const PATH3 = '/api/1/reports/trial_pl'
  const PATH4 = '/api/1/reports/trial_pl_sections'
  const PATH5 = '/api/1/reports/trial_pl_three_years'
  const PATH6 = '/api/1/reports/trial_pl_two_years'
  const GET = 'GET'

  return {
    trial_bs: {
      get: (option: { query: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      $get: (option: { query: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    trial_bs_three_years: {
      get: (option: { query: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      $get: (option: { query: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
        `${prefix}${PATH1}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    trial_bs_two_years: {
      get: (option: { query: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      $get: (option: { query: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH2}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    trial_pl: {
      get: (option: { query: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json(),
      $get: (option: { query: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
        `${prefix}${PATH3}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    trial_pl_sections: {
      get: (option: { query: Methods4['get']['query'], config?: T }) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json(),
      $get: (option: { query: Methods4['get']['query'], config?: T }) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
        `${prefix}${PATH4}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    trial_pl_three_years: {
      get: (option: { query: Methods5['get']['query'], config?: T }) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json(),
      $get: (option: { query: Methods5['get']['query'], config?: T }) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
        `${prefix}${PATH5}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    trial_pl_two_years: {
      get: (option: { query: Methods6['get']['query'], config?: T }) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).json(),
      $get: (option: { query: Methods6['get']['query'], config?: T }) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods6['get']['query'] }) =>
        `${prefix}${PATH6}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
