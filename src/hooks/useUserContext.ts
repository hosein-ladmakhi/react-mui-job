import { useContext } from "react";
import { userContext } from "../context";

export const useUserContext = () => {
   return useContext(userContext);
};
