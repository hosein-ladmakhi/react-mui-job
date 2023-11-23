import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { Loading } from "../../common/kit";

const AuthLayout: FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Suspense fallback={<Loading variant="circle" />}>
        <div className={classes.content}>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default AuthLayout;

const useStyles = makeStyles()((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    width: "100%",
    overflow: "auto",
    padding: "20px",
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },
}));
