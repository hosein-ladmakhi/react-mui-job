import { Grid, Button } from "@mui/material";
import { FC } from "react";
import { TextBox } from "../../../common/kit";
import zod from "zod";
import { resumeProfileForm } from "../../../constant/forms";
import { TObject } from "../../../types/general";
import { useForm } from "@/hooks/useForm";

interface ICreateProfileForm {
   formClass: string;
   data: TObject;
   mutateAddDataResumeItem: any;
   addDataResumeItemLoading: boolean;
   id: number;
}

const CreateProfileForm: FC<ICreateProfileForm> = ({
   formClass,
   addDataResumeItemLoading,
   data,
   id,
   mutateAddDataResumeItem,
}) => {
   const { control, handleSubmit } = useForm<
      zod.infer<typeof resumeProfileForm>
   >(
      {
         bio: data?.bio || "",
      },
      resumeProfileForm
   );

   const onSubmit = handleSubmit(async (data) => {
      const response = await mutateAddDataResumeItem({ id, data });
      if (response?.id) {
         alert("Save Successfully ...");
      }
   });

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
