import { useQuery } from "@tanstack/react-query";
import { TCategories } from "../types/apis/category";
import { getCategories } from "../services/category";

export const useCategory = () => {
   const { isLoading, isFetching, data, isError } = useQuery<TCategories>({
      queryKey: ["category"],
      queryFn: getCategories,
   });

   return { isLoading: isLoading || isFetching, data: data || [], isError };
};
