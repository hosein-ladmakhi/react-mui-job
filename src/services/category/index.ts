import { httpClient } from "../../lib";
import { TCategories } from "../../types/apis/category";
import { TObject } from "../../types/general";
import { prepareQueryParam } from "../../utils";

export const getCategories = (filter: TObject) =>
   httpClient(`/category?${prepareQueryParam(filter)}`) as Promise<TCategories>;
