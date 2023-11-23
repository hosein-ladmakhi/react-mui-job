import { FC, Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Grid, IconButton, Typography } from "@mui/material";
import { icons } from "../../constant/icons";
import { FlexBox, Loading } from "../../common/kit";
import { findCurrentPageText } from "../../utils";
import { APP_THEME_COLOR } from "../../constant";
import { ToggleDrawerIcon } from "../../common/components";
import { useViewport } from "../../hooks";
import { makeStyles } from "tss-react/mui";

const MainLayout: FC = () => {
  const { classes } = useStyles();
  const [appDrawer, setAppDrawer] = useState<any>();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isDesktop } = useViewport();

  useEffect(() => {
    const loadDrawer = async () => {
      if (isDesktop) {
        const { default: Drawer } = await import("../../common/components/Drawer");
        setAppDrawer(<Drawer isDesktop />);
      } else {
        const { default: MobileDrawer } = await import("../../common/components/MobileDrawer");
        setAppDrawer(<MobileDrawer />);
      }
    };

    loadDrawer();
  }, [isDesktop]);

  const handleOnBack = () => navigate(-1);

  return (
    <div className={classes.root}>
      <Grid className={classes.base} container>
        <Grid item md={1.5} xs={0}>
          {appDrawer && appDrawer}
        </Grid>
        <Grid item md={10.5} xs={12}>
          <div className={classes.content}>
            <FlexBox className={classes.header} justify="space-between">
              <FlexBox justify="flex-start">
                <IconButton onClick={handleOnBack}>
                  <icons.MuiBackIcon fontSize="large" />
                </IconButton>
                <Typography>{findCurrentPageText(pathname)} Page</Typography>
              </FlexBox>
              {!isDesktop && <ToggleDrawerIcon />}
            </FlexBox>
            <Suspense fallback={<Loading variant="circle" />}>
              <div className={classes.page}>
                <Outlet />
              </div>
            </Suspense>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainLayout;

const useStyles = makeStyles()(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  base: {
    flex: 1,
    overflowY: "auto",
  },
  content: {
    width: "100%",
    height: "100%",
  },
  header: {
    backgroundColor: APP_THEME_COLOR["900"],
    width: "100%",
    height: "60px",
  },
  page: {
    padding: "20px",
  },
}));
