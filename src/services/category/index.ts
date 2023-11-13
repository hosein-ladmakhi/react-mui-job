import { httpClient } from "../../lib";
import { TCategories } from "../../types/apis/category";

export const getCategories = () =>
   httpClient("/category") as Promise<TCategories>;
