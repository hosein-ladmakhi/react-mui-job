import { Grid, Button } from "@mui/material";
import { FC } from "react";
import { TextBox, DatepickerInput } from "../../../common/kit";
import zod from "zod";
import { resumeProfessionalExpreinceForm } from "../../../constant/forms";
import { TObject } from "../../../types/general";
import { useForm } from "@/hooks/useForm";

interface ICreateProfessionalExpreinceFormProps {
   formClass: string;
   data: TObject;
   mutateAddDataResumeItem: any;
   addDataResumeItemLoading: boolean;
   id: number;
}

const CreateProfessionalExpreinceForm: FC<
   ICreateProfessionalExpreinceFormProps
> = ({
   formClass,
   addDataResumeItemLoading,
   data,
   id,
   mutateAddDataResumeItem,
}) => {
   const { control, handleSubmit } = useForm<
      zod.infer<typeof resumeProfessionalExpreinceForm>
   >(
      {
         city: data?.city || "",
         company: data?.company || "",
         country: data?.country || "",
         description: data?.description || "",
         end: data?.end ? new Date(data?.end) : new Date(),
         start: data?.start ? new Date(data?.start) : new Date(),
         jobTitle: data?.jobTitle || "",
      },
      resumeProfessionalExpreinceForm
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
