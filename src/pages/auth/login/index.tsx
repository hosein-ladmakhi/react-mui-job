import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { FlexBox, TextBox } from "../../../common/kit";
import { useForm } from "react-hook-form";
import { icons } from "../../../constant/icons";
import zod from "zod";
import { loginFormValidation } from "../../../constant/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { APP_THEME_COLOR, appRouterPath } from "../../../constant";
import { makeStyles } from "tss-react/mui";
import SeoLayout from "../../../layout/SeoLayout";
import { loginPageSeoMeta } from "../../../seo-meta";

const LoginPage: FC = () => {
   const { classes } = useStyles();
   const { control, handleSubmit } = useForm<
      zod.infer<typeof loginFormValidation>
   >({
      mode: "all",
      criteriaMode: "all",
      reValidateMode: "onChange",
      defaultValues: {
         password: "",
         username: "",
      },
      resolver: zodResolver(loginFormValidation),
   });

   const onSubmit = () => {
      console.log("done");
   };

   return (
      <SeoLayout {...loginPageSeoMeta()}>
         <FlexBox>
            <icons.MuiLoginIcon fontSize="large" />
            <Typography ml={1} variant="h2">
               Login Page
            </Typography>
         </FlexBox>
         <form onSubmit={handleSubmit(onSubmit)} className={classes.rootForm}>
            <Stack spacing={2}>
               <TextBox name="username" label="Username" control={control} />
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
                  Login
               </Button>
            </Stack>
         </form>
         <Link className={classes.link} to={appRouterPath.signup}>
            <FlexBox align="flex-end">
               <icons.MuiSignupIcon
                  className={classes.linkIcon}
                  fontSize="large"
               />
               Create new account
            </FlexBox>
         </Link>
      </SeoLayout>
   );
};

export default LoginPage;

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
