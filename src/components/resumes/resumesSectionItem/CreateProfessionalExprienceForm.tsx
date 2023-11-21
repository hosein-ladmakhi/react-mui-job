import { Grid, Button } from "@mui/material";
import { FC } from "react";
import { TextBox, DatepickerInput } from "../../../common/kit";
import { useForm } from "react-hook-form";
import zod from "zod";
import { resumeProfessionalExpreinceForm } from "../../../constant/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { TObject } from "../../../types/general";
import { TResume } from "../../../types/apis/resume";

interface ICreateProfessionalExpreinceFormProps {
   formClass: string;
   data: TObject;
   resume: TResume;
}

const CreateProfessionalExpreinceForm: FC<
   ICreateProfessionalExpreinceFormProps
> = ({ formClass }) => {
   const { control, handleSubmit } = useForm<
      zod.infer<typeof resumeProfessionalExpreinceForm>
   >({
      mode: "all",
      reValidateMode: "onChange",
      resolver: zodResolver(resumeProfessionalExpreinceForm),
      defaultValues: {
         city: "",
         company: "",
         country: "",
         description: "",
         end: new Date(),
         jobTitle: "",
         start: new Date(),
      },
   });

   const onSubmit = handleSubmit(() => {});

   return (
      <form onSubmit={onSubmit} className={formClass}>
         <Grid spacing={1} container>
            <Grid item md={6}>
               <TextBox control={control} name="jobTitle" label="Job Title" />
            </Grid>
            <Grid item md={6}>
               <TextBox control={control} name="company" label="Company" />
            </Grid>
            <Grid item md={6}>
               <TextBox control={control} name="country" label="Country" />
            </Grid>
            <Grid item md={6}>
               <TextBox control={control} name="city" label="City" />
            </Grid>
            <Grid item md={6}>
               <DatepickerInput
                  control={control}
                  name="start"
                  label="Start Date"
               />
            </Grid>
            <Grid item md={6}>
               <DatepickerInput control={control} name="end" label="End Date" />
            </Grid>
            <Grid item md={12}>
               <TextBox
                  name="description"
                  label="Description"
                  type="textarea"
                  textRows={3}
                  control={control}
               />
            </Grid>
            <Grid item md={3}>
               <Button type="submit" fullWidth variant="contained" size="large">
                  Save Professional Exprience
               </Button>
            </Grid>
         </Grid>
      </form>
   );
};

export default CreateProfessionalExpreinceForm;
