import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { companyApi } from '../shared/CompanyApi';

export function useDataApi<T>(id?: string) {
  const [data, setData] = useState<T>();
  useEffect(() => {
    console.log("daten gezogen")
    companyApi<T>('GET', `/companies/${id ? id : ''}`, setData);
  }, [id]);

  return [data];
}
