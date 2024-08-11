import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1jnqk3z } from './_provider@string/callback';
import type { Methods as Methods_6dpbx4 } from './email-confirmation';
import type { Methods as Methods_1r7pmad } from './forgot-password';
import type { Methods as Methods_1o7ifv5 } from './local';
import type { Methods as Methods_6urz2b } from './local/register';
import type { Methods as Methods_1i354bd } from './reset-password';
import type { Methods as Methods_p34g6l } from './send-email-confirmation';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '');
  const PATH0 = '/auth';
  const PATH1 = '/callback';
  const PATH2 = '/auth/email-confirmation';
  const PATH3 = '/auth/forgot-password';
  const PATH4 = '/auth/local';
  const PATH5 = '/auth/local/register';
  const PATH6 = '/auth/reset-password';
  const PATH7 = '/auth/send-email-confirmation';
  const GET = 'GET';
  const POST = 'POST';

  return {
    _provider: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        callback: {
          /**
           * Successfull redirection after approving a provider
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1jnqk3z['get']['resBody'], BasicHeaders, Methods_1jnqk3z['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Successfull redirection after approving a provider
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1jnqk3z['get']['resBody'], BasicHeaders, Methods_1jnqk3z['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
      };
    },
    email_confirmation: {
      /**
       * Validate a user account
       * @returns response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_6dpbx4['get']['resBody'], BasicHeaders, Methods_6dpbx4['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Validate a user account
       * @returns response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_6dpbx4['get']['resBody'], BasicHeaders, Methods_6dpbx4['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    forgot_password: {
      /**
       * Send the reset password email link
       * @returns response
       */
      post: (option: { body: Methods_1r7pmad['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1r7pmad['post']['resBody'], BasicHeaders, Methods_1r7pmad['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * Send the reset password email link
       * @returns response
       */
      $post: (option: { body: Methods_1r7pmad['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1r7pmad['post']['resBody'], BasicHeaders, Methods_1r7pmad['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    local: {
      register: {
        /**
         * Register a new user with the default role
         * @returns response
         */
        post: (option: { body: Methods_6urz2b['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_6urz2b['post']['resBody'], BasicHeaders, Methods_6urz2b['post']['status']>(prefix, PATH5, POST, option).json(),
        /**
         * Register a new user with the default role
         * @returns response
         */
        $post: (option: { body: Methods_6urz2b['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_6urz2b['post']['resBody'], BasicHeaders, Methods_6urz2b['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`,
      },
      /**
       * Login a user using the identifiers email and password
       * @returns response
       */
      post: (option: { body: Methods_1o7ifv5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1o7ifv5['post']['resBody'], BasicHeaders, Methods_1o7ifv5['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * Login a user using the identifiers email and password
       * @returns response
       */
      $post: (option: { body: Methods_1o7ifv5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1o7ifv5['post']['resBody'], BasicHeaders, Methods_1o7ifv5['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    reset_password: {
      /**
       * Change a user's password
       * @returns response
       */
      post: (option: { body: Methods_1i354bd['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1i354bd['post']['resBody'], BasicHeaders, Methods_1i354bd['post']['status']>(prefix, PATH6, POST, option).json(),
      /**
       * Change a user's password
       * @returns response
       */
      $post: (option: { body: Methods_1i354bd['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1i354bd['post']['resBody'], BasicHeaders, Methods_1i354bd['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`,
    },
    send_email_confirmation: {
      /**
       * Send a confirmation email to user
       * @returns response
       */
      post: (option: { body: Methods_p34g6l['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_p34g6l['post']['resBody'], BasicHeaders, Methods_p34g6l['post']['status']>(prefix, PATH7, POST, option).json(),
      /**
       * Send a confirmation email to user
       * @returns response
       */
      $post: (option: { body: Methods_p34g6l['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_p34g6l['post']['resBody'], BasicHeaders, Methods_p34g6l['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH7}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
