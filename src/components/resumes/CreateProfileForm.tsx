import { Grid, Button } from "@mui/material";
import { FC } from "react";
import { TextBox } from "../../common/kit";
import { useForm } from "react-hook-form";
import zod from "zod";
import { resumeProfileForm } from "../../constant/forms";
import { zodResolver } from "@hookform/resolvers/zod";

interface ICreateProfileForm {
   formClass: string;
}

const CreateProfileForm: FC<ICreateProfileForm> = ({ formClass }) => {
   const { control, handleSubmit } = useForm<
      zod.infer<typeof resumeProfileForm>
   >({
      resolver: zodResolver(resumeProfileForm),
      reValidateMode: "onChange",
      mode: "all",
   });

   const onSubmit = handleSubmit(() => {});

   return (
      <form onSubmit={onSubmit} className={formClass}>
         <Grid spacing={1} container>
            <Grid item md={12}>
               <TextBox
                  control={control}
                  name="bio"
                  label="Biography"
                  type="textarea"
                  textRows={7}
               />
            </Grid>
            <Grid item md={3}>
               <Button type="submit" fullWidth variant="contained" size="large">
                  Save Profile
               </Button>
            </Grid>
         </Grid>
      </form>
   );
};

export default CreateProfileForm;
