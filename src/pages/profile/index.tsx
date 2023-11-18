import { FC, useState } from "react";
import { FileUploader, TextBox } from "../../common/kit";
import { Button, Grid } from "@mui/material";
import { useViewport } from "../../hooks";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const profileFormValidation = zod.object({
   username: zod
      .string({ required_error: "You must provide your username" })
      .min(3, "Your username must include 3 character at least"),
   email: zod
      .string({ required_error: "You must provide your email address" })
      .email({ message: "Your email address include invalid format" }),
   password: zod
      .string({ required_error: "You must provide your password" })
      .min(8, "Your password must include 8 character at least"),
   firstName: zod
      .string({ required_error: "You must provide your first name" })
      .min(3, "Your first name must include 8 character at least"),
   lastName: zod
      .string({
         required_error: "You must provide your last name",
      })
      .min(3, "Your last name must include 8 character at least"),
   age: zod.coerce
      .number({ required_error: "You must provide your age" })
      .min(1, "You must provide your age"),
   bio: zod.string().optional(),
});

const ProfilePage: FC = () => {
   const [img, setImg] = useState<File>();
   const { isDesktop } = useViewport();
   const { handleSubmit, control } = useForm<
      zod.infer<typeof profileFormValidation>
   >({
      resolver: zodResolver(profileFormValidation),
      mode: "all",
      criteriaMode: "all",
      reValidateMode: "onChange",
      defaultValues: {
         age: 0,
         bio: "",
         email: "",
         firstName: "",
         lastName: "",
         password: "",
         username: "",
      },
   });

   const onSubmit = (value: any) => {
      console.log("::::", value);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container spacing={2}>
            <Grid item xs={12} lg={12}>
               {isDesktop ? (
                  <FileUploader
                     avatarHeight="120px"
                     avatarWidth="120px"
                     file={img}
                     onChangeFile={(file) => setImg(file)}
                  />
               ) : (
                  <center>
                     <FileUploader
                        avatarHeight="120px"
                        avatarWidth="120px"
                        file={img}
                        onChangeFile={(file) => setImg(file)}
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
            <Grid item xs={12} lg={6}>
               <TextBox
                  name="password"
                  control={control}
                  label="Password"
                  type="password"
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
   );
};

export default ProfilePage;
