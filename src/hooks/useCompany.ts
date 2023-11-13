import { useQuery } from "@tanstack/react-query";
import { TCompanies } from "../types/apis/company";
import { getCompanies } from "../services/company";

export const useCompany = () => {
   const { isLoading, isFetching, isError, data } = useQuery<TCompanies>({
      queryKey: ["companies"],
      queryFn: getCompanies,
      placeholderData: [],
   });
   return { isLoading: isLoading || isFetching, isError, data };
};
