import { Grid, Button } from "@mui/material";
import { FC } from "react";
import { ChipInput } from "../../../common/kit";
import { TObject } from "../../../types/general";
import zod from "zod";
import { skillResumeForm } from "../../../constant/forms";
import { useForm } from "@/hooks/useForm";

interface ICreateSkillFormProps {
   formClass: string;
   data: TObject;
   mutateAddDataResumeItem: any;
   addDataResumeItemLoading: boolean;
   id: number;
}

const CreateSkillForm: FC<ICreateSkillFormProps> = ({
   formClass,
   addDataResumeItemLoading,
   data,
   id,
   mutateAddDataResumeItem,
}) => {
   const { control, handleSubmit } = useForm<zod.infer<typeof skillResumeForm>>(
      { skill: data?.skill || [] },
      skillResumeForm
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
               <ChipInput
                  name="skill"
                  control={control}
                  label="Skill"
                  placeholder="Enter Your Skill"
               />
            </Grid>
            <Grid item md={3}>
               <Button type="submit" fullWidth variant="contained" size="large">
                  Save Skill
               </Button>
            </Grid>
         </Grid>
      </form>
   );
};

export default CreateSkillForm;
