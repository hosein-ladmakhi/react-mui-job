import React, { FC } from "react";
import { Box, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Drawer as MuiDrawer } from "@mui/material";
import { appNavbar } from "@/constant";
import { NavLink } from "react-router-dom";
import DrawerUserInfo from "./DrawerUserInfo";
import { icons } from "@/constant/icons";

interface IDrawerProps {
  isDesktop?: boolean;
  isOpenDrawer?: boolean;
  onCloseDrawer?: () => void;
}

const Drawer: FC<IDrawerProps> = ({ isDesktop, onCloseDrawer, isOpenDrawer }) => {
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
      <DrawerUserInfo />
      <MenuList sx={{ marginTop: "20px" }} dense>
        {React.Children.toArray(
          appNavbar.map((navbar) => (
            <NavLink to={navbar.path}>
              <MenuItem sx={{ paddingY: "10px" }}>
                <ListItemIcon>{<navbar.Icon color="primary" fontSize="small" />}</ListItemIcon>
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
