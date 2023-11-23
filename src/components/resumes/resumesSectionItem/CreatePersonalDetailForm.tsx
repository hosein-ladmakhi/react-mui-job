import { FC, useEffect } from "react";
import { Grid } from "@mui/material";
import { TextBox, Button } from "../../../common/kit";
import { TResumeSectionProps } from "@/types/models/resume";
import { useResumeSectionItem } from "../hooks/useResumeSectionItem";
import { EResumeItemType } from "@/types/apis/resume";
import { successNotify } from "@/lib";

const CreatePersonalDetailForm: FC<TResumeSectionProps> = ({ formClass, data, mutate, id }) => {
  const { control, handleSubmit, setValue } = useResumeSectionItem(data, EResumeItemType.PersonalDetail);

  useEffect(() => {
    setValue("address", data.address || "");
    setValue("age", data.age || 0);
    setValue("firstName", data.firstName || "");
    setValue("lastName", data.lastName || "");
    setValue("linkedin", data.linkedin || "");
    setValue("github", data.github || "");
    setValue("jobTitle", data.jobTitle || "");
    setValue("phoneNumber", data.phoneNumber || "");
  }, [data]);

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
          <TextBox control={control} name="phoneNumber" label="Phone Number" />
        </Grid>
        <Grid item md={6}>
          <TextBox control={control} name="linkedin" label="Linkedin" />
        </Grid>
        <Grid item md={6}>
          <TextBox control={control} name="Github" label="Github" />
        </Grid>
        <Grid item md={12}>
          <TextBox control={control} name="address" label="Address" type="textarea" textRows={3} />
        </Grid>
        <Grid item md={3}>
          <Button isSubmit size="large">
            Save Personal Information
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreatePersonalDetailForm;
