import {
   FC,
   PropsWithChildren,
   createContext,
   useEffect,
   useState,
} from "react";
import { TJwtToken, TUser, TUserContext } from "../types/models";
import { getUser } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { appConfig, appRouterPath } from "../constant";

export const userContext = createContext<TUserContext>({
   token: "",
   handleOnChangeToken: (token?: string) => {
      console.log("token", token);
   },
});

const persistedToken = window.localStorage.getItem(appConfig.TOKEN) || "";

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
   const [token, setToken] = useState<string>(persistedToken);
   const [user, setUser] = useState<TUser>();
   const navigate = useNavigate();
   useEffect(() => {
      (async () => {
         window.localStorage.setItem(appConfig.TOKEN, token);
         if (token) {
            const decodedToken = JSON.parse(
               window.atob(token?.split(".")[1])
            ) as TJwtToken;
            if (decodedToken.id && decodedToken.exp) {
               const currentTime = new Date().getTime();
               const tokenExpTime = decodedToken.exp * 1000;
               if (tokenExpTime >= currentTime) {
                  const currentUser = await getUser();
                  setUser(currentUser);
               } else {
                  handleUnAuthorized();
               }
            } else {
               handleUnAuthorized();
            }
         }
      })();
   }, [token]);

   const handleUnAuthorized = () => {
      setToken("");
      setUser(undefined);
      navigate(appRouterPath.login);
   };

   const handleOnChangeToken = (newToken: string = "") => {
      setToken(newToken);
   };

   return (
      <userContext.Provider
         value={{
            handleOnChangeToken,
            token,
            user,
         }}
      >
         {children}
      </userContext.Provider>
   );
};
