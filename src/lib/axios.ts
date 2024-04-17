import Axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axios = Axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

const axiosRefresh = Axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

axiosRefresh.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { refresh_token } = user;
  console.log(refresh_token);

  config.headers.Authorization = `Bearer ${refresh_token}`;
  return config;
});

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const { response } = error;

    if (response.status === 401) {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      const res = await axiosRefresh.get("auth/refresh_token");

      localStorage.setItem("access_token", res.data.data.token);
      const newUser = {
        ...user,
        ...res.data.data,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      return error.config();
    }

    throw error;
  }
);

export default axios;
