import { useContext } from "react";
import { appContext } from "../../context";
import { TAppContext } from "@/types/models";

export const useAppContext = <T extends object>() => {
  return useContext(appContext) as TAppContext & { modalContent: T };
};
