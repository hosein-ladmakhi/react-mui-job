import axios from "axios";
import { appConfig } from "../constant";

export const httpClient = axios.create({
   baseURL: appConfig.BASE_URL + "/api",
});

httpClient.interceptors.request.use((config) => {
   const TOKEN = window.localStorage.getItem(appConfig.TOKEN);

   if (!config.url?.startsWith("/auth")) {
      config.headers.set("Authorization", `Bearer ${TOKEN}`);
   }
   return config;
});

httpClient.interceptors.response.use(
   (res) => res.data,
   (err) => err.message
);
