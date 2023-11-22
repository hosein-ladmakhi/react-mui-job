import { Grid, Button } from "@mui/material";
import { FC } from "react";
import { ChipInput } from "../../../common/kit";
import { useForm } from "react-hook-form";
import { TObject } from "../../../types/general";
import { TResume } from "../../../types/apis/resume";
import zod from "zod";
import { skillResumeForm } from "../../../constant/forms";
import { zodResolver } from "@hookform/resolvers/zod";

interface ICreateSkillFormProps {
   formClass: string;
   data: TObject;
   resume: TResume;
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
   resume,
}) => {
   const { control, handleSubmit } = useForm<zod.infer<typeof skillResumeForm>>(
      {
         defaultValues: { skill: data?.skill || [] },
         resolver: zodResolver(skillResumeForm),
         reValidateMode: "onChange",
         mode: "all",
      }
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
