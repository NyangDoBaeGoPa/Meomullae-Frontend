import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://meomullae.onrender.com/',
};

export const instance = axios.create(axiosConfig);
