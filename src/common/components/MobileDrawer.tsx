import { FC, useEffect } from "react";
import { Drawer } from "./index";
import { useLocation } from "react-router-dom";
import { useAppContext } from "@/context";

const MobileDrawer: FC = () => {
  const { handleDrawerStatus, isOpenDrawer } = useAppContext();
  const location = useLocation();
  const onCloseDrawer = () => handleDrawerStatus(false);
  useEffect(() => {
    onCloseDrawer();
  }, [location.pathname]);

  return <Drawer isDesktop={false} isOpenDrawer={isOpenDrawer} onCloseDrawer={onCloseDrawer} />;
};

export default MobileDrawer;
