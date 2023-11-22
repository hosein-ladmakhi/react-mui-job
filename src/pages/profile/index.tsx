import { FC, useState } from "react";
import { FileUploader, TextBox } from "../../common/kit";
import { Button, Grid } from "@mui/material";
import { useUserContext, useViewport } from "../../hooks";
import zod from "zod";
import { profileFormValidation } from "../../constant/forms";
import SeoLayout from "../../layout/SeoLayout";
import { profilePageSeoMeta } from "../../seo-meta";
import { uploadImage } from "../../services/uploader";
import { TUser } from "../../types/models";
import { updateUser } from "../../services/auth";
import { useForm } from "@/hooks/useForm";

const ProfilePage: FC = () => {
   const [avatar, setAvatar] = useState<File>();
   const { isDesktop } = useViewport();
   const { user, handleChangeUser } = useUserContext();
   const onChangeAvatar = (file?: File) => setAvatar(file);
   const { handleSubmit, control } = useForm<
      zod.infer<typeof profileFormValidation>
   >(
      {
         age: +user?.age! || 0,
         bio: user?.bio,
         email: user?.email,
         firstName: user?.firstName,
         lastName: user?.lastName,
         username: user?.username,
      },
      profileFormValidation
   );

   const handleUploadingImage = () => {
      const uploadImageFormdata = new FormData();
      uploadImageFormdata.append("image", avatar as File);
      uploadImageFormdata.append("height", "100");
      uploadImageFormdata.append("width", "100");
      return uploadImage(uploadImageFormdata);
   };

   const onSubmit = async (value: TUser) => {
      const updatedUserData = { ...value };
      updatedUserData.logo = avatar ? await handleUploadingImage() : user?.logo;
      console.log("updated user", updatedUserData);
      const updatedResult = await updateUser(updatedUserData);
      if (updatedResult) {
         handleChangeUser(updatedUserData);
         alert("Update User Successfully ...");
      } else {
         alert("Updating User Info failed ...");
      }
   };

   return (
      <SeoLayout {...profilePageSeoMeta()}>
         <form onSubmit={handleSubmit(onSubmit as any)}>
            <Grid container spacing={2}>
               <Grid item xs={12} lg={12}>
                  {isDesktop ? (
                     <FileUploader
                        avatarHeight="120px"
                        avatarWidth="120px"
                        file={avatar}
                        onChangeFile={onChangeAvatar}
                     />
                  ) : (
                     <center>
                        <FileUploader
                           avatarHeight="120px"
                           avatarWidth="120px"
                           file={avatar}
                           onChangeFile={onChangeAvatar}
                        />
                     </center>
                  )}
               </Grid>
               <Grid item xs={12} lg={6}>
                  <TextBox
                     control={control}
                     name="username"
                     label="Username"
                     type="text"
                  />
               </Grid>
               <Grid item xs={12} lg={6}>
                  <TextBox
                     control={control}
                     name="email"
                     label="Email Address"
                     type="text"
                  />
               </Grid>
               <Grid item xs={12} lg={6}>
                  <TextBox
                     control={control}
                     name="firstName"
                     label="First Name"
                     type="text"
                  />
               </Grid>
               <Grid item xs={12} lg={6}>
                  <TextBox
                     control={control}
                     name="lastName"
                     label="Last Name"
                     type="text"
                  />
               </Grid>
               <Grid item xs={12} lg={6}>
                  <TextBox
                     name="age"
                     control={control}
                     label="Age"
                     type="number"
                  />
               </Grid>
               <Grid item xs={12} lg={12}>
                  <TextBox
                     name="bio"
                     label="Your Bio"
                     type="textarea"
                     textRows={10}
                     control={control}
                  />
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
