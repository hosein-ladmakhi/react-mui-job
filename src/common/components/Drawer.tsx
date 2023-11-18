import React, { FC } from "react";
import {
   Box,
   IconButton,
   ListItemIcon,
   ListItemText,
   MenuItem,
   MenuList,
   Drawer as MuiDrawer,
   Typography,
} from "@mui/material";
import { appNavbar } from "../../constant";
import { NavLink } from "react-router-dom";
import { Avatar } from "../kit";
import { icons } from "../../constant/icons";

const IMAGE_URL =
   "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_FMjpg_UX1000_.jpg";

interface IDrawerProps {
   isDesktop?: boolean;
   isOpenDrawer?: boolean;
   onCloseDrawer?: () => void;
}

const Drawer: FC<IDrawerProps> = ({
   isDesktop,
   onCloseDrawer,
   isOpenDrawer,
}) => {
   return (
      <MuiDrawer
         anchor="left"
         open={isOpenDrawer}
         onClose={onCloseDrawer}
         variant={isDesktop ? "permanent" : "temporary"}
      >
         {!isDesktop && (
            <Box>
               <IconButton onClick={onCloseDrawer}>
                  <icons.MuiCloseIcon />
               </IconButton>
            </Box>
         )}
         <Box component="center">
            <Avatar src={IMAGE_URL} height="70px" width="70px" />
            <Box mt={1}>
               <Typography variant="h4">Hosein Ladmakhi nejad</Typography>
               <Typography variant="body2">hosein@ladmakhi.com</Typography>
            </Box>
         </Box>
         <MenuList sx={{ marginTop: "20px" }} dense>
            {React.Children.toArray(
               appNavbar.map((navbar) => (
                  <NavLink to={navbar.path}>
                     <MenuItem sx={{ paddingY: "10px" }}>
                        <ListItemIcon>
                           {<navbar.Icon color="primary" fontSize="small" />}
                        </ListItemIcon>
                        <ListItemText>{navbar.text}</ListItemText>
                     </MenuItem>
                  </NavLink>
               ))
            )}
         </MenuList>
      </MuiDrawer>
   );
};

Drawer.defaultProps = {
   isOpenDrawer: true,
   onCloseDrawer: () => {},
};

export default Drawer;
