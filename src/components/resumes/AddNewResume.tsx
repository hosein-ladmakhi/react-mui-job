import { FC, useEffect } from "react";
import { Loading, Modal, TextBox } from "../../common/kit";
import { CREATE_NEW_RESUME_SUBJECT } from "../../constant/modalSubjects";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { makeStyles } from "tss-react/mui";
import zod from "zod";
import { createNewResumeForm } from "../../constant/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCreateResumeBody, TResume } from "../../types/apis/resume";
import {
   useAppContext,
   useCreateResume,
   useEditResume,
   useStateQuery,
} from "../../hooks";

const AddNewResume: FC = () => {
   const { handleModalStatus, modalContent } = useAppContext();
   const selectedResume = modalContent as TResume;
   const hasSelectedResume = !!selectedResume?.id;

   const { isLoading: createLoading, mutateAsync: createMutateAsync } =
      useCreateResume();

   const { isLoading: editLoading, mutateAsync: editMutateAsync } =
      useEditResume(selectedResume?.id);

   const stateQuery = useStateQuery();
   const { classes } = useStyles();
   const { control, handleSubmit, setValue } = useForm<
      zod.infer<typeof createNewResumeForm>
   >({
      resolver: zodResolver(createNewResumeForm),
      defaultValues: { name: "" },
      mode: "all",
      reValidateMode: "onChange",
   });

   useEffect(() => {
      setValue("name", selectedResume?.name || "");
   }, [selectedResume]);

   const onSubmit = handleSubmit(async (data: TCreateResumeBody) => {
      const response = hasSelectedResume
         ? await editMutateAsync(data)
         : await createMutateAsync(data);

      if (response?.id) {
         alert(
            `Resume ${hasSelectedResume ? "Edit" : "Create"} Successfully ...`
         );
         handleModalStatus(false);
         stateQuery.set("resume", response?.id);
      } else {
         alert(
            `Resume ${hasSelectedResume ? "Edit" : "Create"} has failed ...`
         );
      }
   });

   return (
      <Modal size="sm" subject={CREATE_NEW_RESUME_SUBJECT}>
         <Typography variant="h4">
            {hasSelectedResume ? "Edit" : "Create"} Resume
         </Typography>
         {createLoading || editLoading ? (
            <Loading variant="circle" />
         ) : (
            <form className={classes.form} onSubmit={onSubmit}>
               <TextBox
                  name="name"
                  label="Resume Name"
                  type="text"
                  control={control}
               />
               <Button
                  type="submit"
                  className={classes.button}
                  variant="contained"
                  fullWidth
               >
                  Save Resume
               </Button>
            </form>
         )}
      </Modal>
   );
};

export default AddNewResume;

const useStyles = makeStyles()(() => ({
   form: {
      marginTop: "20px",
   },
   button: {
      marginTop: "10px",
   },
}));
