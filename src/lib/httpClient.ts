import axios from "axios";
import { appConfig } from "../constant";

const TOKEN = window.localStorage.getItem(appConfig.TOKEN);

export const httpClient = axios.create({
   baseURL: appConfig.BASE_URL + "/api",
});

httpClient.interceptors.request.use((config) => {
   if (!config.url?.startsWith("/auth")) {
      config.headers.set("token", TOKEN);
   }
   return config;
});

httpClient.interceptors.response.use(
   (res) => res.data,
   (err) => Promise.reject(err)
);
