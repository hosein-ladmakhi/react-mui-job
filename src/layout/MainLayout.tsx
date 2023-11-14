import { FC, Suspense, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
   Box,
   IconButton,
   LinearProgress,
   Typography,
   styled,
} from "@mui/material";
import { icons } from "../constant/icons";
import { FlexBox } from "../common/kit";
import { findCurrentPageText } from "../utils";
import { APP_THEME_COLOR } from "../constant";
import { Drawer } from "../common/components";
import { useViewport } from "../hooks";

const MainLayout: FC = () => {
   const navigate = useNavigate();
   const [isOpenInMobile, setOpenInMobile] = useState<boolean>(false);
   const { isDesktop } = useViewport();
   const { pathname } = useLocation();

   const handleOnBack = () => navigate(-1);
   const onCloseDrawerInMobile = () => setOpenInMobile(false);

   return (
      <Container>
         <Drawer
            isDesktop={isDesktop}
            onCloseDrawer={onCloseDrawerInMobile}
            isOpen={isOpenInMobile}
         />
         <FlexBox className="header" justify="space-between">
            <FlexBox justify="flex-start">
               <IconButton onClick={handleOnBack}>
                  <icons.MuiBackIcon fontSize="large" />
               </IconButton>
               <Typography>{findCurrentPageText(pathname)} Page</Typography>
            </FlexBox>

            <IconButton
               onClick={() => setOpenInMobile(true)}
               className="menu-icon"
            >
               <icons.MuiMenuIcon />
            </IconButton>
         </FlexBox>
         <Suspense fallback={<LinearProgress />}>
            <Box p="10px">
               <Outlet />
            </Box>
         </Suspense>
      </Container>
   );
};

export default MainLayout;

const Container = styled(Box)(({ theme }) => ({
   marginLeft: "200px",
   ".menu-icon": {
      display: "none",
   },
   [theme.breakpoints.down("lg")]: {
      marginLeft: "unset",
      ".menu-icon": {
         display: "inline-block",
      },
   },
   ".header": {
      backgroundColor: APP_THEME_COLOR["900"],
   },
}));
