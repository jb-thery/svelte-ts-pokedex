import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

const apiRequest = async <Type>({
  method,
  url
}: AxiosRequestConfig): Promise<Type> => {
  return axiosInstance({
    method,
    url
  })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const postRequest = <Type>(url: string): Promise<Type> =>
  apiRequest<Type>({ method: 'POST', url });
const getRequest = <Type>(url: string): Promise<Type> =>
  apiRequest<Type>({ method: 'GET', url });
const putRequest = <Type>(url: string): Promise<Type> =>
  apiRequest<Type>({ method: 'PUT', url });
const patchRequest = <Type>(url: string): Promise<Type> =>
  apiRequest<Type>({ method: 'PATCH', url });
const deleteRequest = <Type>(url: string): Promise<Type> =>
  apiRequest<Type>({ method: 'DELETE', url });

const Http = {
  get: getRequest,
  delete: deleteRequest,
  post: postRequest,
  put: putRequest,
  patch: patchRequest
};

export default Http;
