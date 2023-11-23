import { FC, useEffect, useRef } from "react";
import { TextBox } from "@/common/kit";
import { Button, Grid } from "@mui/material";
import { useUserContext } from "@/hooks";
import zod from "zod";
import SeoLayout from "@/layout/SeoLayout";
import { uploadImage } from "@/services/uploader";
import { TUser } from "@/types/models";
import { updateUser } from "@/services/auth";
import { useForm } from "@/hooks";
import { successNotify } from "@/lib";
import { profilePageSeoMeta } from "./metadata";
import ProfileFileUploader from "./components/ProfileFileUploader";
import { profileFormValidation } from "./formSchemas/profileFormValidation";

const ProfilePage: FC = () => {
  const avatarRef = useRef<File>();
  const { user, handleChangeUser } = useUserContext();
  const { handleSubmit, control, setValue } = useForm<zod.infer<typeof profileFormValidation>>(profileFormValidation);

  useEffect(() => {
    setValue("age", +user?.age! || 0);
    setValue("bio", user?.bio || "");
    setValue("email", user?.email || "");
    setValue("firstName", user?.firstName || "");
    setValue("lastName", user?.lastName || "");
    setValue("username", user?.username || "");
  }, [user]);

  const handleUploadingImage = () => {
    const uploadImageFormdata = new FormData();
    uploadImageFormdata.append("image", avatarRef?.current as File);
    uploadImageFormdata.append("height", "100");
    uploadImageFormdata.append("width", "100");
    return uploadImage(uploadImageFormdata);
  };

  const onSubmit = async (value: TUser) => {
    const updatedUserData = { ...value };
    updatedUserData.logo = avatarRef?.current ? await handleUploadingImage() : user?.logo;
    console.log("updated user", updatedUserData);
    const updatedResult = await updateUser(updatedUserData);
    if (updatedResult) {
      handleChangeUser(updatedUserData);
      successNotify("Update User Successfully ...");
    } else {
      successNotify("Updating User Info failed ...");
    }
  };

  return (
    <SeoLayout {...profilePageSeoMeta()}>
      <form onSubmit={handleSubmit(onSubmit as any)}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <ProfileFileUploader imageRef={avatarRef} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextBox control={control} name="username" label="Username" type="text" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextBox control={control} name="email" label="Email Address" type="text" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextBox control={control} name="firstName" label="First Name" type="text" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextBox control={control} name="lastName" label="Last Name" type="text" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextBox name="age" control={control} label="Age" type="number" />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextBox name="bio" label="Your Bio" type="textarea" textRows={10} control={control} />
          </Grid>
          <Grid item lg={1}>
            <Button type="submit" variant="contained" fullWidth>
              Save Change
            </Button>
          </Grid>
        </Grid>
      </form>
    </SeoLayout>
  );
};

export default ProfilePage;
