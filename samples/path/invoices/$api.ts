import type { AspidaClient } from 'aspida';


const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/invoices';


  return {
    _invoiceCategory: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {

      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
