import { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { FlexBox, Loading, TextBox } from "../../../common/kit";
import { useForm } from "react-hook-form";
import { icons } from "../../../constant/icons";
import zod from "zod";
import { signupFormValidation } from "../../../constant/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { APP_THEME_COLOR, appRouterPath } from "../../../constant";
import { makeStyles } from "tss-react/mui";
import SeoLayout from "../../../layout/SeoLayout";
import { signupPageSeoMeta } from "../../../seo-meta";
import { useSignupAuth, useUserContext } from "../../../hooks";
import { TSignup } from "../../../types/models";

const SignupPage: FC = () => {
   const { isLoading, mutateAsync } = useSignupAuth();
   const { handleOnChangeToken } = useUserContext();
   const navigate = useNavigate();
   const { classes } = useStyles();
   const { control, handleSubmit } = useForm<
      zod.infer<typeof signupFormValidation>
   >({
      mode: "all",
      criteriaMode: "all",
      reValidateMode: "onChange",
      defaultValues: {
         password: "",
         username: "",
         age: 0,
         email: "",
         firstName: "",
         lastName: "",
      },
      resolver: zodResolver(signupFormValidation),
   });

   const onSubmit = async (data: TSignup) => {
      const response = await mutateAsync(data);
      if (response.token) {
         alert("Signup Successfully");
         handleOnChangeToken(response.token);
         navigate("/");
      } else {
         alert("Signup failed ...");
      }
   };

   if (isLoading) return <Loading variant="circle" />;

   return (
      <SeoLayout {...signupPageSeoMeta()}>
         <FlexBox>
            <icons.MuiSignupIcon fontSize="large" />
            <Typography ml={1} variant="h2">
               Signup Page
            </Typography>
         </FlexBox>
         <form
            onSubmit={handleSubmit(onSubmit as any)}
            className={classes.rootForm}
         >
            <Stack spacing={2}>
               <TextBox
                  type="text"
                  name="username"
                  label="Username"
                  control={control}
               />
               <TextBox
                  type="email"
                  name="email"
                  label="Email Address"
                  control={control}
               />
               <TextBox
                  type="text"
                  name="firstName"
                  label="First Name"
                  control={control}
               />
               <TextBox
                  type="text"
                  name="lastName"
                  label="Last Name"
                  control={control}
               />
               <TextBox
                  type="number"
                  name="age"
                  label="Age"
                  control={control}
               />
               <TextBox
                  name="password"
                  label="Password"
                  type="password"
                  control={control}
               />
               <Button
                  type="submit"
                  color="primary"
                  size="large"
                  variant="contained"
                  fullWidth
               >
                  Sign up
               </Button>
            </Stack>
         </form>
         <Link className={classes.link} to={appRouterPath.login}>
            <FlexBox align="flex-end">
               <icons.MuiLoginIcon
                  className={classes.linkIcon}
                  fontSize="large"
               />
               Login with existed account
            </FlexBox>
         </Link>
      </SeoLayout>
   );
};

export default SignupPage;

const useStyles = makeStyles()(() => ({
   rootForm: {
      marginTop: "25px",
      width: "90%",
      maxWidth: "400px",
      marginInline: "auto",
   },
   link: {
      marginTop: "20px",
      color: APP_THEME_COLOR[500],
      display: "block",
   },
   linkIcon: {
      marginRight: "10px",
      color: APP_THEME_COLOR[800],
   },
}));
