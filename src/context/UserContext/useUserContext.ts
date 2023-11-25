import { useContext } from "react";
import { userContext } from "..";

export const useUserContext = () => {
  return useContext(userContext);
};
