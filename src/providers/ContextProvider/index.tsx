import { FC, PropsWithChildren } from "react";
import { AppContextProvider, UserContextProvider } from "@/context";

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </AppContextProvider>
  );
};
