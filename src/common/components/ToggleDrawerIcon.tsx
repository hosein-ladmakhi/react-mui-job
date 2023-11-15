import { IconButton } from "@mui/material";
import { FC } from "react";
import { icons } from "../../constant/icons";
import { useAppContext } from "../../hooks";

const ToggleDrawerIcon: FC = () => {
   const { handleDrawerStatus } = useAppContext();
   const onOpenDrawer = () => handleDrawerStatus(true);

   return (
      <IconButton onClick={onOpenDrawer} className="menu-icon">
         <icons.MuiMenuIcon />
      </IconButton>
   );
};

export default ToggleDrawerIcon;
