import { useContext } from "react";
import { appContext } from "../context";

export const useAppContext = () => {
   return useContext(appContext);
};
