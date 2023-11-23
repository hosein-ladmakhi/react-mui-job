import { FC, useEffect } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import zod from "zod";
import { useAppContext, useCreateResume, useEditResume, useForm } from "@/hooks";
import { errorNotify, successNotify } from "@/lib";
import { TCreateResumeBody, TResume } from "@/types/apis/resume";
import { Loading, TextBox, Button, Modal } from "@/common/kit";
import { CREATE_NEW_RESUME_SUBJECT } from "@/constant/modalSubjects";
import { createNewResumeForm } from "../formSchemas/createNewResumeFormValidation";
import { useResumeContext } from "../hooks/useResumeContext";

const ModifyResumeModal: FC = () => {
  const { onChangeResume } = useResumeContext();

  const { handleModalStatus, modalContent: selectedResume } = useAppContext<TResume>();

  const { isCreateResumeLoading, createResumeMutate } = useCreateResume();

  const { isEditResumeLoading, editResumeMutate } = useEditResume(selectedResume?.id);

  const { classes } = useStyles();

  const { control, handleSubmit, setValue } = useForm<zod.infer<typeof createNewResumeForm>>(createNewResumeForm);

  const hasSelectedResume = !!selectedResume?.id;

  const selectedResumeOperation = hasSelectedResume ? "Edit" : "Create";

  useEffect(() => {
    setValue("name", selectedResume?.name || "");
  }, [selectedResume]);

  const onSubmit = handleSubmit(async (data: TCreateResumeBody) => {
    const response = hasSelectedResume ? await editResumeMutate(data) : await createResumeMutate(data);
    if (response?.id) {
      successNotify(`Resume ${selectedResumeOperation} Successfully ...`);
      handleModalStatus(false);
      onChangeResume(response?.id);
    } else {
      errorNotify(`Resume ${selectedResumeOperation} has failed ...`);
    }
  });

  return (
    <Modal size="sm" subject={CREATE_NEW_RESUME_SUBJECT}>
      <Typography variant="h4">{selectedResumeOperation} Resume</Typography>
      {isCreateResumeLoading || isEditResumeLoading ? (
        <Loading variant="circle" />
      ) : (
        <form className={classes.form} onSubmit={onSubmit}>
          <TextBox name="name" label="Resume Name" type="text" control={control} />
          <Button isSubmit className={classes.button}>
            Save Resume
          </Button>
        </form>
      )}
    </Modal>
  );
};

export default ModifyResumeModal;

const useStyles = makeStyles()(() => ({
  form: {
    marginTop: "20px",
  },
  button: {
    marginTop: "10px",
  },
}));
