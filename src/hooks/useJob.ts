import { useQuery } from "@tanstack/react-query";
import { TJob, TJobs } from "../types/apis/job";
import { getJobById, getJobs } from "../services/job";
import { TObject } from "../types/general";

export const useJob = (filterObject: TObject = {}) => {
   const { isLoading, isFetching, data, isError } = useQuery<TJobs>({
      queryKey: ["jobs", ...Object.values(filterObject)],
      queryFn: () => getJobs(filterObject),
   });

   return { isLoading: isLoading || isFetching, data: data || [], isError };
};

export const useJobId = (id: number) => {
   const { isLoading, isFetching, data, isError } = useQuery<TJob>({
      queryKey: ["jobs", id],
      queryFn: () => getJobById(id),
      enabled: !!id,
   });

   return { isLoading: isLoading || isFetching, data: data || [], isError };
};
