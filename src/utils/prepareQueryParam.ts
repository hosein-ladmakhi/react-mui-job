import { TObject } from "../types/general";

export const prepareQueryParam = (value: TObject) =>
   Object.keys(value)
      .map((k: string) => `${k}=${value[k]}`)
      .join("&");
