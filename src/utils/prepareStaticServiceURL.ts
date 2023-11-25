import { appConfig } from "@/constant";

export const prepareStaticServerURL = (value?: string) => (value ? `${appConfig.BASE_ASSET_URL}/${value}` : "");
