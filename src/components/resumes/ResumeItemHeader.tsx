import { Typography, Button, Stack } from "@mui/material";
import { FC } from "react";
import { FlexBox } from "../../common/kit";
import { makeStyles } from "tss-react/mui";
import { APP_THEME_COLOR } from "../../constant";
import { useAppContext, useDeleteResume, useResumeContext } from "../../hooks";
import {
   ADD_NEW_SECTION_TO_RESUME_SUBJECT,
   CREATE_NEW_RESUME_SUBJECT,
} from "../../constant/modalSubjects";
import { TResume } from "../../types/apis/resume";

interface IResumeItemHeaderProps {
   resume: TResume;
}

const ResumeItemHeader: FC<IResumeItemHeaderProps> = ({ resume }) => {
   const { classes } = useStyles();
   const { handleOpenModal } = useAppContext();
   const { onChangeResume } = useResumeContext();
   const { mutateAsync: deleteMutate } = useDeleteResume(resume?.id);

   const handleCreateNewSectionModal = () => {
      handleOpenModal(resume, ADD_NEW_SECTION_TO_RESUME_SUBJECT);
   };

   const handleUpdateResumeName = () => {
      handleOpenModal(resume, CREATE_NEW_RESUME_SUBJECT);
   };

   const handleDeleteResume = async () => {
      if (window.confirm("are you sure")) {
         const response = await deleteMutate();
         if (response) {
            alert("Resume delete successfully");
            onChangeResume(undefined);
         } else {
            alert("Delete Resume failed ...");
         }
      }
   };

   return (
      <FlexBox justify="space-between" className={classes.root}>
         <Typography variant="h3">{resume.name}</Typography>
         <Stack spacing={1} direction="row">
            <Button onClick={handleCreateNewSectionModal} variant="contained">
               Add New Section
            </Button>
            <Button
               color="error"
               onClick={handleDeleteResume}
               variant="contained"
            >
               Delete
            </Button>
            <Button
               color="info"
               onClick={handleUpdateResumeName}
               variant="contained"
            >
               Update
            </Button>
         </Stack>
      </FlexBox>
   );
};

export default ResumeItemHeader;

const useStyles = makeStyles()(() => ({
   root: {
      background: APP_THEME_COLOR[900],
      padding: "20px",
      borderRadius: "4px",
      marginBottom: "20px",
   },
}));
