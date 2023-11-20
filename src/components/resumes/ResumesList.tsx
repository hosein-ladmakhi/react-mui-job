import { Box, Button, Grid } from "@mui/material";
import { FC } from "react";
import { APP_THEME_COLOR } from "../../constant";
import { Modal, NestedList } from "../../common/kit";
import { makeStyles } from "tss-react/mui";
import { useAppContext } from "../../hooks";
import { CREATE_NEW_RESUME_SUBJECT } from "../../constant/modalSubjects";
import AddNewResume from "./AddNewResume";

const RESUME_LISTS = [
   {
      id: 1,
      text: "Senior React Developer",
   },
   {
      id: 2,
      text: "Keepa React Developer",
   },
   {
      id: 3,
      text: "Nodejs Intern Digikala",
   },
   {
      id: 4,
      text: "React For Snapp",
   },
   {
      id: 5,
      text: "Nima ladmakhi new resume",
   },
];

const ResumesList: FC = () => {
   const { classes } = useStyles();
   const { handleOpenModal } = useAppContext();

   const handleOpenCreateNewResume = () => {
      handleOpenModal({}, CREATE_NEW_RESUME_SUBJECT);
   };

   return (
      <Grid item md={3}>
         <Box className={classes.root}>
            <NestedList data={RESUME_LISTS} itemKey="id" itemValue="text" />
            <Button
               onClick={handleOpenCreateNewResume}
               className={classes.button}
               fullWidth
               variant="contained"
            >
               Create New Resume
            </Button>
         </Box>

         <AddNewResume />
      </Grid>
   );
};

export default ResumesList;

const useStyles = makeStyles()(() => ({
   root: {
      backgroundColor: APP_THEME_COLOR[900],
      padding: "20px",
      borderRadius: "4px",
   },
   button: {
      marginTop: "20px",
   },
}));
