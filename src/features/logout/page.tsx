import { useUserContext } from "@/context";
import { FC, useEffect } from "react";

const LogoutPage: FC = () => {
  const { handleLogout } = useUserContext();

  useEffect(() => {
    handleLogout();
  }, []);

  return <></>;
};

export default LogoutPage;
