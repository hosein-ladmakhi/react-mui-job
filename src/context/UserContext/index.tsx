import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appConfig, appRouterPath } from "@/constant";
import { useQueryClient } from "@tanstack/react-query";
import { TUserContext } from "./index.type";
import { TJwtToken, TUser } from "@/types/general";
import { getUser } from "@/features/profile/services";

export const userContext = createContext<TUserContext>({
  token: "",
  handleOnChangeToken: (token?: string) => {
    console.log("token", token);
  },
  handleLogout: () => {},
  handleChangeUser: () => {},
});

const persistedToken = window.localStorage.getItem(appConfig.TOKEN) || "";

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string>(persistedToken);
  const [user, setUser] = useState<TUser>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    (async () => {
      try {
        if (window.location.href.includes("auth")) return;
        window.localStorage.setItem(appConfig.TOKEN, token);
        const decodedToken = JSON.parse(window.atob(token?.split(".")[1])) as TJwtToken;
        if (decodedToken.id && decodedToken.exp) {
          const currentTime = new Date().getTime();
          const tokenExpTime = decodedToken.exp * 1000;
          if (tokenExpTime >= currentTime) {
            const currentUser = await getUser();
            setUser(currentUser);
          } else {
            handleLogout();
          }
        } else {
          handleLogout();
        }
      } catch (error) {
        handleLogout();
      }
    })();
  }, [token]);

  const handleLogout = () => {
    setToken("");
    setUser(undefined);
    queryClient.clear();
    navigate(appRouterPath.login);
  };

  const handleOnChangeToken = (newToken: string = "") => {
    setToken(newToken);
  };

  const handleChangeUser = (updatedUser: Partial<TUser>) => {
    setUser((prevUser) => {
      if (!prevUser) return;
      return { ...prevUser, ...updatedUser } as TUser;
    });
  };

  return (
    <userContext.Provider
      value={{
        handleOnChangeToken,
        token,
        user,
        handleLogout,
        handleChangeUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
