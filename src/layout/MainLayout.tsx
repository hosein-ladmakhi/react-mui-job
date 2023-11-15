import { FC, Suspense, useEffect, useState } from "react";
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
import { ToggleDrawerIcon } from "../common/components";
import { useViewport } from "../hooks";

const MainLayout: FC = () => {
   const [appDrawer, setAppDrawer] = useState<any>();
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const { isDesktop } = useViewport();

   useEffect(() => {
      const loadDrawer = async () => {
         if (isDesktop) {
            const { default: Drawer } = await import(
               "../common/components/Drawer"
            );
            setAppDrawer(<Drawer isDesktop />);
         } else {
            const { default: MobileDrawer } = await import(
               "../common/components/MobileDrawer"
            );
            setAppDrawer(<MobileDrawer />);
         }
      };

      loadDrawer();
   }, [isDesktop]);

   const handleOnBack = () => navigate(-1);

   return (
      <Container>
         {appDrawer && appDrawer}
         <FlexBox className="header" justify="space-between">
            <FlexBox justify="flex-start">
               <IconButton onClick={handleOnBack}>
                  <icons.MuiBackIcon fontSize="large" />
               </IconButton>
               <Typography>{findCurrentPageText(pathname)} Page</Typography>
            </FlexBox>
            {!isDesktop && <ToggleDrawerIcon />}
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
