import { useQuery } from "@tanstack/react-query";
import { TJobs } from "../types/apis/job";
import { getJobs } from "../services/job";
import { TObject } from "../types/general";

export const useJob = (filterObject: TObject = {}) => {
   const { isLoading, isFetching, data, isError } = useQuery<TJobs>({
      queryKey: ["jobs", ...Object.values(filterObject)],
      queryFn: () => getJobs(filterObject),
   });

   return { isLoading: isLoading || isFetching, data: data || [], isError };
};
