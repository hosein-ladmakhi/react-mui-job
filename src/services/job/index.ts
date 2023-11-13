import { httpClient } from "../../lib";
import { TJobs } from "../../types/apis/job";
import { TObject } from "../../types/general";
import { prepareQueryParam } from "../../utils";

export const getJobs = (filterObject: TObject) =>
   httpClient(`/job?${prepareQueryParam(filterObject)}`) as Promise<TJobs>;
