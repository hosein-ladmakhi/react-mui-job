import { FC } from "react";
import { Grid, Button } from "@mui/material";
import { TextBox } from "../../../common/kit";
import zod from "zod";
import { resumePersonalDetailForm } from "../../../constant/forms";
import { TObject } from "../../../types/general";
import { useForm } from "@/hooks/useForm";

interface ICreatePersonalDetailFormProps {
   formClass: string;
   data: TObject;
   mutateAddDataResumeItem: any;
   addDataResumeItemLoading: boolean;
   id: number;
}

const CreatePersonalDetailForm: FC<ICreatePersonalDetailFormProps> = ({
   formClass,
   data,
   addDataResumeItemLoading,
   mutateAddDataResumeItem,
   id,
}) => {
   const { control, handleSubmit } = useForm<
      zod.infer<typeof resumePersonalDetailForm>
   >(
      {
         address: data?.address || "",
         age: data?.age || 0,
         firstName: data?.firstName || "",
         github: data?.github || "",
         jobTitle: data?.jobTitle || "",
         lastName: data?.lastName || "",
         linkedin: data?.linkedin || "",
         phoneNumber: data?.phoneNumber || "",
      },
      resumePersonalDetailForm
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
               <TextBox control={control} name="jobTitle" label="Job Title" />
            </Grid>
            <Grid item md={6}>
               <TextBox control={control} name="firstName" label="First Name" />
            </Grid>
            <Grid item md={6}>
               <TextBox control={control} name="lastName" label="Last Name" />
            </Grid>
            <Grid item md={6}>
               <TextBox control={control} name="age" label="Age" />
            </Grid>
            <Grid item md={6}>
               <TextBox
                  control={control}
                  name="phoneNumber"
                  label="Phone Number"
               />
            </Grid>
            <Grid item md={6}>
               <TextBox control={control} name="linkedin" label="Linkedin" />
            </Grid>
            <Grid item md={6}>
               <TextBox control={control} name="Github" label="Github" />
            </Grid>
            <Grid item md={12}>
               <TextBox
                  control={control}
                  name="address"
                  label="Address"
                  type="textarea"
                  textRows={3}
               />
            </Grid>
            <Grid item md={3}>
               <Button type="submit" fullWidth variant="contained" size="large">
                  Save Personal Information
               </Button>
            </Grid>
         </Grid>
      </form>
   );
};

export default CreatePersonalDetailForm;
