import { Stack, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { FlexBox, Loading, TextBox, Button } from "../../../common/kit";
import { icons } from "../../../constant/icons";
import zod from "zod";
import { loginFormValidation } from "../../../constant/forms";
import { Link, useNavigate } from "react-router-dom";
import { APP_THEME_COLOR, appRouterPath } from "../../../constant";
import { makeStyles } from "tss-react/mui";
import SeoLayout from "../../../layout/SeoLayout";
import { loginPageSeoMeta } from "../../../seo-meta";
import { useLoginAuth, useUserContext } from "../../../hooks";
import { TLogin } from "../../../types/models";
import { useForm } from "@/hooks";

const LoginPage: FC = () => {
  const { isLoading, mutateAsync } = useLoginAuth();
  const { handleOnChangeToken } = useUserContext();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { control, handleSubmit, setValue } = useForm<zod.infer<typeof loginFormValidation>>(loginFormValidation);

  useEffect(() => {
    setValue("email", "");
    setValue("password", "");
  }, []);

  const onSubmit = async (data: TLogin) => {
    const response = await mutateAsync(data);
    if (response?.token) {
      alert("Login Successfully ...");
      handleOnChangeToken(response?.token);
      navigate("/");
    } else {
      alert("Login Failed ...");
    }
  };

  if (isLoading) return <Loading variant="circle" />;

  return (
    <SeoLayout {...loginPageSeoMeta()}>
      <FlexBox>
        <icons.MuiLoginIcon fontSize="large" />
        <Typography ml={1} variant="h2">
          Login Page
        </Typography>
      </FlexBox>
      <form onSubmit={handleSubmit(onSubmit as any)} className={classes.rootForm}>
        <Stack spacing={2}>
          <TextBox name="email" label="Email Address" control={control} />
          <TextBox name="password" label="Password" type="password" control={control} />
          <Button isSubmit size="large">
            Login
          </Button>
        </Stack>
      </form>
      <Link className={classes.link} to={appRouterPath.signup}>
        <FlexBox align="flex-end">
          <icons.MuiSignupIcon className={classes.linkIcon} fontSize="large" />
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
