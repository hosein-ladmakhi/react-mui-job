import { Grid } from "@mui/material";
import { FC } from "react";
import { TextBox, DatepickerInput, Button } from "../../../common/kit";
import { TResumeSectionProps } from "@/types/models/resume";
import { useResumeSectionItem } from "../hooks/useResumeSectionItem";
import { EResumeItemType } from "@/types/apis/resume";

const CreateProfessionalExpreinceForm: FC<TResumeSectionProps> = ({ formClass, data, id, mutate }) => {
  const { handleSubmit, control } = useResumeSectionItem(data, EResumeItemType.ProfessionalExprience);

  const onSubmit = handleSubmit(async (data) => {
    const response = await mutate({ id, data });
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
          <DatepickerInput control={control} name="start" label="Start Date" />
        </Grid>
        <Grid item md={6}>
          <DatepickerInput control={control} name="end" label="End Date" />
        </Grid>
        <Grid item md={12}>
          <TextBox name="description" label="Description" type="textarea" textRows={3} control={control} />
        </Grid>
        <Grid item md={3}>
          <Button isSubmit size="large">
            Save Professional Exprience
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateProfessionalExpreinceForm;
