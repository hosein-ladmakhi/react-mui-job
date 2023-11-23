import { Grid } from "@mui/material";
import { FC } from "react";
import { ChipInput } from "@/common/kit";
import { TResumeSectionProps } from "@/types/models/resume";
import { useResumeSectionItem } from "../hooks/useResumeSectionItem";
import { EResumeItemType } from "@/types/apis/resume";
import { Button } from "@/common/kit";
import { successNotify } from "@/lib";

const CreateSkillForm: FC<TResumeSectionProps> = ({ formClass, data, id, mutate }) => {
  const { handleSubmit, control } = useResumeSectionItem(data, EResumeItemType.Skill);

  const onSubmit = handleSubmit(async (data) => {
    const response = await mutate({ id, data });
    if (response?.id) {
      successNotify("Save Successfully ...");
    }
  });

  return (
    <form onSubmit={onSubmit} className={formClass}>
      <Grid spacing={1} container>
        <Grid item md={12}>
          <ChipInput name="skill" control={control} label="Skill" placeholder="Enter Your Skill" />
        </Grid>
        <Grid item md={3}>
          <Button isSubmit size="large">
            Save Skill
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateSkillForm;
