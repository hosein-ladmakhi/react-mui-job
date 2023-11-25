import { useContext } from "react";
import { appContext } from "..";
import { TAppContext } from "./index.type";

export const useAppContext = <T extends object>() => {
  return useContext(appContext) as TAppContext & { modalContent: T };
};
