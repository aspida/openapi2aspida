import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_oskioi } from './auth/_provider@string/callback';
import type { Methods as Methods_1czo3dj } from './auth/email-confirmation';
import type { Methods as Methods_12s39ek } from './auth/forgot-password';
import type { Methods as Methods_x2viz4 } from './auth/local';
import type { Methods as Methods_8dynko } from './auth/local/register';
import type { Methods as Methods_ybowiu } from './auth/reset-password';
import type { Methods as Methods_b2dto4 } from './auth/send-email-confirmation';
import type { Methods as Methods_jnsfwg } from './connect/_any';
import type { Methods as Methods_rcx9ae } from './email';
import type { Methods as Methods_7qh2rz } from './upload';
import type { Methods as Methods_9wfvdr } from './upload/files';
import type { Methods as Methods_6cgm9t } from './upload/files/_id@string';
import type { Methods as Methods_wm57r3 } from './upload/files/count';
import type { Methods as Methods_1trluxc } from './upload/search/_id@string';
import type { Methods as Methods_1xhiioa } from './users';
import type { Methods as Methods_1is6fjm } from './users/_id@string';
import type { Methods as Methods_jzr18p } from './users/me';
import type { Methods as Methods_1b3roee } from './users-permissions/init';
import type { Methods as Methods_dxhgx9 } from './users-permissions/roles';
import type { Methods as Methods_1q2k7i3 } from './users-permissions/roles/_id@string';
import type { Methods as Methods_vdjfk0 } from './users-permissions/roles/_role@string';
import type { Methods as Methods_9yavck } from './users-permissions/search/_id@string';

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
  const PATH8 = '/connect';
  const PATH9 = '/email';
  const PATH10 = '/upload';
  const PATH11 = '/upload/files';
  const PATH12 = '/upload/files/count';
  const PATH13 = '/upload/search';
  const PATH14 = '/users';
  const PATH15 = '/users/me';
  const PATH16 = '/users-permissions/init';
  const PATH17 = '/users-permissions/roles';
  const PATH18 = '/users-permissions/search';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    auth: {
      _provider: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          callback: {
            /**
             * Successfull redirection after approving a provider
             * @returns response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_oskioi['get']['resBody'], BasicHeaders, Methods_oskioi['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * Successfull redirection after approving a provider
             * @returns response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_oskioi['get']['resBody'], BasicHeaders, Methods_oskioi['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`,
          },
        };
      },
      email_confirmation: {
        /**
         * Validate a user account
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1czo3dj['get']['resBody'], BasicHeaders, Methods_1czo3dj['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * Validate a user account
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1czo3dj['get']['resBody'], BasicHeaders, Methods_1czo3dj['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`,
      },
      forgot_password: {
        /**
         * Send the reset password email link
         * @returns response
         */
        post: (option: { body: Methods_12s39ek['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_12s39ek['post']['resBody'], BasicHeaders, Methods_12s39ek['post']['status']>(prefix, PATH3, POST, option).json(),
        /**
         * Send the reset password email link
         * @returns response
         */
        $post: (option: { body: Methods_12s39ek['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_12s39ek['post']['resBody'], BasicHeaders, Methods_12s39ek['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`,
      },
      local: {
        register: {
          /**
           * Register a new user with the default role
           * @returns response
           */
          post: (option: { body: Methods_8dynko['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_8dynko['post']['resBody'], BasicHeaders, Methods_8dynko['post']['status']>(prefix, PATH5, POST, option).json(),
          /**
           * Register a new user with the default role
           * @returns response
           */
          $post: (option: { body: Methods_8dynko['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_8dynko['post']['resBody'], BasicHeaders, Methods_8dynko['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH5}`,
        },
        /**
         * Login a user using the identifiers email and password
         * @returns response
         */
        post: (option: { body: Methods_x2viz4['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_x2viz4['post']['resBody'], BasicHeaders, Methods_x2viz4['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * Login a user using the identifiers email and password
         * @returns response
         */
        $post: (option: { body: Methods_x2viz4['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_x2viz4['post']['resBody'], BasicHeaders, Methods_x2viz4['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`,
      },
      reset_password: {
        /**
         * Change a user's password
         * @returns response
         */
        post: (option: { body: Methods_ybowiu['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_ybowiu['post']['resBody'], BasicHeaders, Methods_ybowiu['post']['status']>(prefix, PATH6, POST, option).json(),
        /**
         * Change a user's password
         * @returns response
         */
        $post: (option: { body: Methods_ybowiu['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_ybowiu['post']['resBody'], BasicHeaders, Methods_ybowiu['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH6}`,
      },
      send_email_confirmation: {
        /**
         * Send a confirmation email to user
         * @returns response
         */
        post: (option: { body: Methods_b2dto4['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_b2dto4['post']['resBody'], BasicHeaders, Methods_b2dto4['post']['status']>(prefix, PATH7, POST, option).json(),
        /**
         * Send a confirmation email to user
         * @returns response
         */
        $post: (option: { body: Methods_b2dto4['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_b2dto4['post']['resBody'], BasicHeaders, Methods_b2dto4['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH7}`,
      },
    },
    connect: {
      _any: (val1: number | string) => {
        const prefix1 = `${PATH8}/${val1}`;

        return {
          /**
           * Connect a provider
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_jnsfwg['get']['resBody'], BasicHeaders, Methods_jnsfwg['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Connect a provider
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_jnsfwg['get']['resBody'], BasicHeaders, Methods_jnsfwg['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    email: {
      /**
       * Send an email
       * @returns response
       */
      post: (option: { body: Methods_rcx9ae['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_rcx9ae['post']['resBody'], BasicHeaders, Methods_rcx9ae['post']['status']>(prefix, PATH9, POST, option).json(),
      /**
       * Send an email
       * @returns response
       */
      $post: (option: { body: Methods_rcx9ae['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_rcx9ae['post']['resBody'], BasicHeaders, Methods_rcx9ae['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH9}`,
    },
    upload: {
      files: {
        _id: (val2: string) => {
          const prefix2 = `${PATH11}/${val2}`;

          return {
            /**
             * Retrieve a single file depending on its id
             * @returns response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_6cgm9t['get']['resBody'], BasicHeaders, Methods_6cgm9t['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Retrieve a single file depending on its id
             * @returns response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_6cgm9t['get']['resBody'], BasicHeaders, Methods_6cgm9t['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * Delete an uploaded file
             * @returns response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_6cgm9t['delete']['resBody'], BasicHeaders, Methods_6cgm9t['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete an uploaded file
             * @returns response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_6cgm9t['delete']['resBody'], BasicHeaders, Methods_6cgm9t['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        count: {
          /**
           * Retrieve the total number of uploaded files
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_wm57r3['get']['resBody'], BasicHeaders, Methods_wm57r3['get']['status']>(prefix, PATH12, GET, option).json(),
          /**
           * Retrieve the total number of uploaded files
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_wm57r3['get']['resBody'], BasicHeaders, Methods_wm57r3['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH12}`,
        },
        /**
         * Retrieve all file documents
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_9wfvdr['get']['resBody'], BasicHeaders, Methods_9wfvdr['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * Retrieve all file documents
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_9wfvdr['get']['resBody'], BasicHeaders, Methods_9wfvdr['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH11}`,
      },
      search: {
        _id: (val2: string) => {
          const prefix2 = `${PATH13}/${val2}`;

          return {
            /**
             * Search for an uploaded file
             * @returns response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1trluxc['get']['resBody'], BasicHeaders, Methods_1trluxc['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Search for an uploaded file
             * @returns response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1trluxc['get']['resBody'], BasicHeaders, Methods_1trluxc['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
      /**
       * Upload a file
       * @returns response
       */
      post: (option: { body: Methods_7qh2rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_7qh2rz['post']['resBody'], BasicHeaders, Methods_7qh2rz['post']['status']>(prefix, PATH10, POST, option).json(),
      /**
       * Upload a file
       * @returns response
       */
      $post: (option: { body: Methods_7qh2rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_7qh2rz['post']['resBody'], BasicHeaders, Methods_7qh2rz['post']['status']>(prefix, PATH10, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH10}`,
    },
    users: {
      _id: (val1: string) => {
        const prefix1 = `${PATH14}/${val1}`;

        return {
          /**
           * Retrieve a single user depending on his id
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1is6fjm['get']['resBody'], BasicHeaders, Methods_1is6fjm['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Retrieve a single user depending on his id
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1is6fjm['get']['resBody'], BasicHeaders, Methods_1is6fjm['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update an existing user
           * @returns response
           */
          put: (option: { body: Methods_1is6fjm['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1is6fjm['put']['resBody'], BasicHeaders, Methods_1is6fjm['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update an existing user
           * @returns response
           */
          $put: (option: { body: Methods_1is6fjm['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1is6fjm['put']['resBody'], BasicHeaders, Methods_1is6fjm['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete an existing user
           * @returns response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1is6fjm['delete']['resBody'], BasicHeaders, Methods_1is6fjm['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete an existing user
           * @returns response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1is6fjm['delete']['resBody'], BasicHeaders, Methods_1is6fjm['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      me: {
        /**
         * Retrieve the logged in user information
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_jzr18p['get']['resBody'], BasicHeaders, Methods_jzr18p['get']['status']>(prefix, PATH15, GET, option).json(),
        /**
         * Retrieve the logged in user information
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_jzr18p['get']['resBody'], BasicHeaders, Methods_jzr18p['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`,
      },
      /**
       * Retrieve all user documents
       * @returns response
       */
      get: (option?: { query?: Methods_1xhiioa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH14, GET, option).json(),
      /**
       * Retrieve all user documents
       * @returns response
       */
      $get: (option?: { query?: Methods_1xhiioa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH14, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xhiioa['get']['query'] } | undefined) =>
        `${prefix}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    users_permissions: {
      init: {
        /**
         * Check if the first admin user has already been registered
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1b3roee['get']['resBody'], BasicHeaders, Methods_1b3roee['get']['status']>(prefix, PATH16, GET, option).json(),
        /**
         * Check if the first admin user has already been registered
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1b3roee['get']['resBody'], BasicHeaders, Methods_1b3roee['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH16}`,
      },
      roles: {
        _id: (val2: string) => {
          const prefix2 = `${PATH17}/${val2}`;

          return {
            /**
             * Retrieve a role depending on its id
             * @returns response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1q2k7i3['get']['resBody'], BasicHeaders, Methods_1q2k7i3['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Retrieve a role depending on its id
             * @returns response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1q2k7i3['get']['resBody'], BasicHeaders, Methods_1q2k7i3['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        _role: (val2: string) => {
          const prefix2 = `${PATH17}/${val2}`;

          return {
            /**
             * Update a role
             * @returns response
             */
            put: (option: { body: Methods_vdjfk0['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_vdjfk0['put']['resBody'], BasicHeaders, Methods_vdjfk0['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * Update a role
             * @returns response
             */
            $put: (option: { body: Methods_vdjfk0['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_vdjfk0['put']['resBody'], BasicHeaders, Methods_vdjfk0['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            /**
             * Delete a role
             * @returns response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_vdjfk0['delete']['resBody'], BasicHeaders, Methods_vdjfk0['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete a role
             * @returns response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_vdjfk0['delete']['resBody'], BasicHeaders, Methods_vdjfk0['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * Retrieve all role documents
         * @returns response
         */
        get: (option?: { query?: Methods_dxhgx9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_dxhgx9['get']['resBody'], BasicHeaders, Methods_dxhgx9['get']['status']>(prefix, PATH17, GET, option).json(),
        /**
         * Retrieve all role documents
         * @returns response
         */
        $get: (option?: { query?: Methods_dxhgx9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_dxhgx9['get']['resBody'], BasicHeaders, Methods_dxhgx9['get']['status']>(prefix, PATH17, GET, option).json().then(r => r.body),
        /**
         * Create a new role
         * @returns response
         */
        post: (option: { body: Methods_dxhgx9['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_dxhgx9['post']['resBody'], BasicHeaders, Methods_dxhgx9['post']['status']>(prefix, PATH17, POST, option).json(),
        /**
         * Create a new role
         * @returns response
         */
        $post: (option: { body: Methods_dxhgx9['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_dxhgx9['post']['resBody'], BasicHeaders, Methods_dxhgx9['post']['status']>(prefix, PATH17, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_dxhgx9['get']['query'] } | undefined) =>
          `${prefix}${PATH17}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      search: {
        _id: (val2: string) => {
          const prefix2 = `${PATH18}/${val2}`;

          return {
            /**
             * Search for users
             * @returns response
             */
            get: (option?: { query?: Methods_9yavck['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_9yavck['get']['resBody'], BasicHeaders, Methods_9yavck['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Search for users
             * @returns response
             */
            $get: (option?: { query?: Methods_9yavck['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_9yavck['get']['resBody'], BasicHeaders, Methods_9yavck['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_9yavck['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
