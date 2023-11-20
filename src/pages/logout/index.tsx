import { FC, useEffect } from "react";
import { useUserContext } from "../../hooks";

const LogoutPage: FC = () => {
   const { handleLogout } = useUserContext();

   useEffect(() => {
      handleLogout();
   }, []);

   return <></>;
};

export default LogoutPage;
