import { useQuery } from "@tanstack/react-query";
import { TCompanies } from "../types";
import { getCompanies } from "../services";

export const useCompany = () => {
  const { isLoading, isFetching, isError, data } = useQuery<TCompanies>({
    queryKey: ["companies"],
    queryFn: getCompanies,
    placeholderData: [],
  });
  return { isLoading: isLoading || isFetching, isError, data };
};
