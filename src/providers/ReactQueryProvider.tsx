import { FC, PropsWithChildren } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryOptions: QueryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchInterval: 0,
         refetchOnWindowFocus: false,
         refetchOnMount: false,
         refetchOnReconnect: false,
         retry: 0,
         retryOnMount: false,
         staleTime: Infinity,
      },
   },
});

interface IReactQueryProviderProps extends PropsWithChildren {}

export const ReactQueryProvider: FC<IReactQueryProviderProps> = ({
   children,
}) => {
   return (
      <QueryClientProvider client={queryOptions}>
         <ReactQueryDevtools />
         {children}
      </QueryClientProvider>
   );
};
