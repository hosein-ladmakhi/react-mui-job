import { FC } from "react";
import { Modal, TextBox } from "../../common/kit";
import { CREATE_NEW_RESUME_SUBJECT } from "../../constant/modalSubjects";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { makeStyles } from "tss-react/mui";
import zod from "zod";
import { createNewResumeForm } from "../../constant/forms";
import { zodResolver } from "@hookform/resolvers/zod";

const AddNewResume: FC = () => {
   const { classes } = useStyles();
   const { control, handleSubmit } = useForm<
      zod.infer<typeof createNewResumeForm>
   >({
      resolver: zodResolver(createNewResumeForm),
      defaultValues: { name: "" },
      mode: "all",
      reValidateMode: "onChange",
   });
   const onSubmit = handleSubmit(() => {});

   return (
      <Modal size="sm" subject={CREATE_NEW_RESUME_SUBJECT}>
         <Typography variant="h4">Create New Resume</Typography>
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
