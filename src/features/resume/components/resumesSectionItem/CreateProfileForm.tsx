import { Grid } from "@mui/material";
import { FC } from "react";
import { TextBox } from "@/common/kit";
import { useResumeSectionItem } from "../../hooks/useResumeSectionItem";
import { Button } from "@/common/kit";
import { successNotify } from "@/lib";
import { TResumeSectionProps, EResumeItemType } from "../../types";

const CreateProfileForm: FC<TResumeSectionProps> = ({ formClass, data, id, mutate }) => {
  const { handleSubmit, control } = useResumeSectionItem(data, EResumeItemType.Profile);

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
          <TextBox control={control} name="bio" label="Biography" type="textarea" textRows={7} />
        </Grid>
        <Grid item md={3}>
          <Button isSubmit size="large">
            Save Profile
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateProfileForm;
