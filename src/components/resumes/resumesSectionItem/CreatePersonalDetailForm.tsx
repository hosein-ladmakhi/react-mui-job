import { FC, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { TextBox } from "../../../common/kit";
import zod from "zod";
import { resumePersonalDetailForm } from "../../../constant/forms";
import { useForm } from "@/hooks/useForm";
import { TResumeSectionProps } from "@/types/models/resume";

const CreatePersonalDetailForm: FC<TResumeSectionProps> = ({ formClass, data, mutate, id }) => {
  const { control, handleSubmit, setValue } =
    useForm<zod.infer<typeof resumePersonalDetailForm>>(resumePersonalDetailForm);

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
      alert("Save Successfully ...");
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
          <Button type="submit" fullWidth variant="contained" size="large">
            Save Personal Information
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreatePersonalDetailForm;
