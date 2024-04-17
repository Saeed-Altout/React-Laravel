import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axios = Axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("access_token");
  config.headers?.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    const { response } = error;

    if (response.status === 401) {
      localStorage.removeItem("access_token");
    }

    throw error;
  }
);

export default axios;
