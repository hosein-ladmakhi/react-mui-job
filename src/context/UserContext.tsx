import { FC, PropsWithChildren, createContext, useState } from "react";
import { TJwtToken, TUser, TUserContext } from "../types/models";
import { getUser } from "../services/auth";

export const userContext = createContext<TUserContext>({
   token: "",
   handleOnChangeToken: (token?: string) => {
      console.log(token);
   },
});

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
   const [token, setToken] = useState<string>();
   const [user, setUser] = useState<TUser>();

   const handleUnAuthorized = () => {
      window.location.href = "/auth/login";
   };

   const decodeTokenAndFetchUserInfo = async (token: string) => {
      const decodedToken = JSON.parse(
         window.atob(token?.split(",")[1])
      ) as TJwtToken;
      if (decodedToken.id && decodedToken.exp) {
         const currentTime = new Date().getTime();
         const tokenExpTime = decodedToken.exp * 1000;
         if (tokenExpTime >= currentTime) {
            const user = await getUser();
            setUser(user);
         } else {
            handleUnAuthorized();
         }
      } else {
         handleUnAuthorized();
      }
   };

   const handleOnChangeToken = (token?: string) => {
      setToken(token);
      if (token) {
         decodeTokenAndFetchUserInfo(token);
      }
   };

   return (
      <userContext.Provider
         value={{
            token,
            handleOnChangeToken,
            user,
         }}
      >
         {children}
      </userContext.Provider>
   );
};
