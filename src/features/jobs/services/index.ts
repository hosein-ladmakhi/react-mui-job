import { httpClient } from "@/lib";
import { TObject } from "@/types/general";
import { prepareQueryParam } from "@/utils";
import { TCategories, TJob, TJobs } from "../types";

export const getJobs = (filterObject: TObject) =>
  httpClient(`/job?${prepareQueryParam(filterObject)}`) as Promise<TJobs>;

export const getJobById = (id: number) => httpClient(`/job/${id}`) as Promise<TJob>;

export const getCategories = (filter: TObject) =>
  httpClient(`/category?${prepareQueryParam(filter)}`) as Promise<TCategories>;
