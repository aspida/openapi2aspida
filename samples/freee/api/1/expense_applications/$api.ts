import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1bpdvc3 } from './_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/1/expense_applications';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        get: (option: { query: Methods_1bpdvc3['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bpdvc3['get']['resBody'], BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).json(),
        $get: (option: { query: Methods_1bpdvc3['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bpdvc3['get']['resBody'], BasicHeaders, Methods_1bpdvc3['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の経費申請を更新する</p>
         *
         * <h2 id="_2">注意点</h2>
         * <ul>
         *   <li>本APIでは、経費申請の下書きを更新することができます。申請作業はWebから行ってください。</li>
         *   <li>現在、申請経路はWeb上からのみ入力できます。Web上での申請時に指定してください。</li>
         *   <li>申請時には、申請タイトル(title)に加え、申請日(issue_date)、項目行については金額(amount)、日付(transaction_date)、内容(description)が必須項目となります。申請時の業務効率化のため、API入力をお勧めします。</li>
         *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
         *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
         * </ul>
         * @param option.body - 経費申請の更新
         */
        put: (option?: { body?: Methods_1bpdvc3['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bpdvc3['put']['resBody'], BasicHeaders, Methods_1bpdvc3['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の経費申請を更新する</p>
         *
         * <h2 id="_2">注意点</h2>
         * <ul>
         *   <li>本APIでは、経費申請の下書きを更新することができます。申請作業はWebから行ってください。</li>
         *   <li>現在、申請経路はWeb上からのみ入力できます。Web上での申請時に指定してください。</li>
         *   <li>申請時には、申請タイトル(title)に加え、申請日(issue_date)、項目行については金額(amount)、日付(transaction_date)、内容(description)が必須項目となります。申請時の業務効率化のため、API入力をお勧めします。</li>
         *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
         *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
         * </ul>
         * @param option.body - 経費申請の更新
         */
        $put: (option?: { body?: Methods_1bpdvc3['put']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bpdvc3['put']['resBody'], BasicHeaders, Methods_1bpdvc3['put']['status']>(prefix, prefix0, PUT, option, 'URLSearchParams').json().then(r => r.body),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の経費申請を削除する</p>
         *
         * <h2 id="_2">注意点</h2>
         * <ul>
         *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
         *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
         * </ul>
         */
        delete: (option: { query: Methods_1bpdvc3['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * <h2 id="">概要</h2>
         *
         * <p>指定した事業所の経費申請を削除する</p>
         *
         * <h2 id="_2">注意点</h2>
         * <ul>
         *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
         *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
         * </ul>
         */
        $delete: (option: { query: Methods_1bpdvc3['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bpdvc3['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1bpdvc3['get']['query'] } | { method: 'delete'; query: Methods_1bpdvc3['delete']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * <h2 id="_1">概要</h2>
     *
     * <p>指定した事業所の経費申請を作成する</p>
     *
     * <h2 id="_2">注意点</h2>
     * <ul>
     *   <li>本APIでは、経費申請の下書きを作成することができます。申請作業はWebから行ってください。</li>
     *   <li>現在、申請経路はWeb上からのみ入力できます。Web上での申請時に指定してください。</li>
     *   <li>申請時には、申請タイトル(title)に加え、申請日(issue_date)、項目行については金額(amount)、日付(transaction_date)、内容(description)が必須項目となります。申請時の業務効率化のため、API入力をお勧めします。</li>
     *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
     *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
     * </ul>
     * @param option.body - 経費申請の作成
     */
    post: (option?: { body?: Methods_by08hd['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    /**
     * <h2 id="_1">概要</h2>
     *
     * <p>指定した事業所の経費申請を作成する</p>
     *
     * <h2 id="_2">注意点</h2>
     * <ul>
     *   <li>本APIでは、経費申請の下書きを作成することができます。申請作業はWebから行ってください。</li>
     *   <li>現在、申請経路はWeb上からのみ入力できます。Web上での申請時に指定してください。</li>
     *   <li>申請時には、申請タイトル(title)に加え、申請日(issue_date)、項目行については金額(amount)、日付(transaction_date)、内容(description)が必須項目となります。申請時の業務効率化のため、API入力をお勧めします。</li>
     *   <li>個人アカウントの場合は、プレミアムプランでご利用できます。</li>
     *   <li>法人アカウントの場合は、ベーシックプラン、プロフェッショナルプラン、エンタープライズプランでご利用できます。</li>
     * </ul>
     * @param option.body - 経費申請の作成
     */
    $post: (option?: { body?: Methods_by08hd['post']['reqBody'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
