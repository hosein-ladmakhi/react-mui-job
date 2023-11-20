import { FC } from "react";
import { Typography, Grid, Button } from "@mui/material";
import { TextBox } from "../../common/kit";
import { useForm } from "react-hook-form";
import zod from "zod";
import { resumePersonalDetailForm } from "../../constant/forms";
import { zodResolver } from "@hookform/resolvers/zod";

interface ICreatePersonalDetailFormProps {
   formClass: string;
}

const CreatePersonalDetailForm: FC<ICreatePersonalDetailFormProps> = ({
   formClass,
}) => {
   const { control, handleSubmit } = useForm<
      zod.infer<typeof resumePersonalDetailForm>
   >({
      resolver: zodResolver(resumePersonalDetailForm),
      mode: "all",
      reValidateMode: "onChange",
      defaultValues: {
         address: "",
         age: 0,
         firstName: "",
         github: "",
         jobTitle: "",
         lastName: "",
         linkedin: "",
         phoneNumber: "",
      },
   });
   const onSubmit = handleSubmit((data) => {
      console.log(data);
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
