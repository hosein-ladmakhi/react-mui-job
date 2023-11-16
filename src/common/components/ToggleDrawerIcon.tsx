import { IconButton } from "@mui/material";
import { FC } from "react";
import { icons } from "../../constant/icons";
import { useAppContext } from "../../hooks";
import { makeStyles } from "tss-react/mui";

const ToggleDrawerIcon: FC = () => {
   const { handleDrawerStatus } = useAppContext();
   const { classes } = useStyles();
   const onOpenDrawer = () => handleDrawerStatus(true);

   return (
      <IconButton className={classes.container} onClick={onOpenDrawer}>
         <icons.MuiMenuIcon />
      </IconButton>
   );
};

export default ToggleDrawerIcon;

const useStyles = makeStyles()((theme) => ({
   container: {
      display: "none",
      [theme.breakpoints.down("lg")]: {
         display: "inline-block",
      },
   },
}));
