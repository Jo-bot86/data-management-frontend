import axios, { AxiosResponse, Method } from 'axios';
import { SetStateAction } from 'react';
import Company from '../types/Company';

const BASE_URL = 'http://localhost:8080/api/v1';

export function companyApi<T>(
  method: Method,
  path: string,
  callback: (data: T) => void
) {
  axios({
    method: method,
    url: `${BASE_URL}${path}`,
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.log(err));
}
