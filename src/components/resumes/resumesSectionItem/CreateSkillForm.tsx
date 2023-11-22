import { Grid, Button } from "@mui/material";
import { FC } from "react";
import { ChipInput } from "@/common/kit";
import { TResumeSectionProps } from "@/types/models/resume";
import { useResumeSectionItem } from "../hooks/useResumeSectionItem";
import { EResumeItemType } from "@/types/apis/resume";

const CreateSkillForm: FC<TResumeSectionProps> = ({ formClass, data, id, mutate }) => {
  const { handleSubmit, control } = useResumeSectionItem(data, EResumeItemType.Skill);

  const onSubmit = handleSubmit(async (data) => {
    const response = await mutate({ id, data });
    if (response?.id) {
      alert("Save Successfully ...");
    }
  });

  return (
    <form onSubmit={onSubmit} className={formClass}>
      <Grid spacing={1} container>
        <Grid item md={12}>
          <ChipInput name="skill" control={control} label="Skill" placeholder="Enter Your Skill" />
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
