import { useSearchParams } from "react-router-dom";

export const useStateQuery = () => {
   const [searchParam, setSearchParam] = useSearchParams();

   return {
      set: (key: string, value: any) => {
         searchParam.set(key, value);
         setSearchParam(searchParam);
      },
      get: (key: string) => {
         return searchParam.get(key);
      },
      remove: (key: string) => {
         searchParam.delete(key);
         setSearchParam(searchParam);
      },
   };
};
