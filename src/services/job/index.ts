import { httpClient } from "../../lib";
import { TJob, TJobs } from "../../types/apis/job";
import { TObject } from "../../types/general";
import { prepareQueryParam } from "../../utils";

export const getJobs = (filterObject: TObject) =>
   httpClient(`/job?${prepareQueryParam(filterObject)}`) as Promise<TJobs>;

export const getJobById = (id: number) =>
   httpClient(`/job/${id}`) as Promise<TJob>;
