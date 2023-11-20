import { Grid, Box, Typography } from "@mui/material";
import { FC } from "react";
import { APP_THEME_COLOR } from "../../constant";
import { makeStyles } from "tss-react/mui";

const AddOrEditResumeItem: FC = () => {
   const { classes } = useStyles();
   return (
      <Grid item md={9}>
         <Box className={classes.root}>
            <Typography variant="h3">Resume Pages</Typography>
         </Box>
      </Grid>
   );
};

export default AddOrEditResumeItem;

const useStyles = makeStyles()(() => ({
   root: {
      background: APP_THEME_COLOR[900],
      padding: "20px",
      borderRadius: "4px",
   },
}));
