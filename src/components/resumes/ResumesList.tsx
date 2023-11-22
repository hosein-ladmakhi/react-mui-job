import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { APP_THEME_COLOR } from "../../constant";
import { NestedList } from "../../common/kit";
import { makeStyles } from "tss-react/mui";
import { useAppContext, useResume, useResumeContext } from "../../hooks";
import { CREATE_NEW_RESUME_SUBJECT } from "../../constant/modalSubjects";
import { TResume } from "../../types/apis/resume";

const ResumesList: FC = () => {
   const { classes } = useStyles();
   const { data } = useResume();
   const { handleOpenModal } = useAppContext();
   const { onChangeResume } = useResumeContext();

   const handleOpenCreateNewResume = () => {
      handleOpenModal({}, CREATE_NEW_RESUME_SUBJECT);
      onChangeResume(undefined);
   };

   const handleSelectResume = (resume: TResume) => {
      onChangeResume(resume.id);
   };

   return (
      <>
         <Box className={classes.root}>
            {data?.length ? (
               <NestedList
                  handleClick={handleSelectResume}
                  data={data!}
                  itemKey="id"
                  itemValue="name"
               />
            ) : (
               <Typography variant="h4">No Resume Exist</Typography>
            )}
            <Button
               onClick={handleOpenCreateNewResume}
               className={classes.button}
               fullWidth
               variant="contained"
            >
               Create New Resume
            </Button>
         </Box>
      </>
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
