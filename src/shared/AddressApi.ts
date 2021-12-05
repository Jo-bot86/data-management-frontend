import axios, { Method } from "axios";

const BASE_URL = 'http://localhost:8080/api/v1';

export function addressApi<T>(
  method: Method,
  path: string,
  callback: (data: T) => void,
  data = {}
) {
  axios({
    method: method,
    url: `${BASE_URL}${path}`,
    data: data,
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.log(err));
}