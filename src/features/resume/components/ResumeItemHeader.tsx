import { Typography, Stack } from "@mui/material";
import { FC } from "react";
import { FlexBox, Button } from "@/common/kit";
import { makeStyles } from "tss-react/mui";
import { APP_THEME_COLOR } from "@/constant";
import { ADD_NEW_SECTION_TO_RESUME_SUBJECT, CREATE_NEW_RESUME_SUBJECT } from "@/constant/modalSubjects";
import { errorNotify, successNotify } from "@/lib";
import { useResumeContext } from "../hooks/useResumeContext";
import { useAppContext } from "@/context";
import { TResume } from "../types";
import { useDeleteResume } from "../hooks/useResume";

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
        successNotify("Resume delete successfully");
        onChangeResume(undefined);
      } else {
        errorNotify("Delete Resume failed ...");
      }
    }
  };

  return (
    <FlexBox justify="space-between" className={classes.root}>
      <Typography variant="h3">{resume.name}</Typography>
      <Stack spacing={1} alignItems="center" justifyContent="center" direction="row">
        <Button fullWidth={false} onClick={handleCreateNewSectionModal}>
          Add New Section
        </Button>
        <Button fullWidth={false} color="error" onClick={handleDeleteResume}>
          Delete
        </Button>
        <Button fullWidth={false} color="info" onClick={handleUpdateResumeName}>
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
