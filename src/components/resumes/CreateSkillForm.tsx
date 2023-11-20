import { Grid, Button } from "@mui/material";
import { FC } from "react";
import { ChipInput } from "../../common/kit";
import { useForm } from "react-hook-form";

interface ICreateSkillFormProps {
   formClass: string;
}

const CreateSkillForm: FC<ICreateSkillFormProps> = ({ formClass }) => {
   const { control } = useForm();

   return (
      <form className={formClass}>
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
               <Button fullWidth variant="contained" size="large">
                  Save Skill
               </Button>
            </Grid>
         </Grid>
      </form>
   );
};

export default CreateSkillForm;
