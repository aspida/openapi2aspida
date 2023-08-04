import type { AspidaClient } from 'aspida';


const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/invoices';


  return {
    invoices: {
      _invoiceCategory: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {

        };
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
