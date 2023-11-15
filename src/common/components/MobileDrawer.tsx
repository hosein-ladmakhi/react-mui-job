import { FC } from "react";
import { useAppContext } from "../../hooks";
import { Drawer } from "./index";

const MobileDrawer: FC = () => {
   const { handleDrawerStatus, isOpenDrawer } = useAppContext();

   const onCloseDrawer = () => handleDrawerStatus(false);

   return (
      <Drawer
         isDesktop={false}
         isOpenDrawer={isOpenDrawer}
         onCloseDrawer={onCloseDrawer}
      />
   );
};

export default MobileDrawer;
