import { TNavbars } from "@/types/general";
import { icons } from "./icons";
import { colors } from "@mui/material";

export const appConfig = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  BASE_ASSET_URL: import.meta.env.VITE_BASE_URL + "/public",
  TOKEN: "APP_TOKEN",
};

export const appRouterPath = {
  companies: "/",
  jobs: "/jobs",
  profile: "/profile",
  resumes: "/resume",
  logout: "/logout",
  notfound: "*",
  login: "/auth/login",
  signup: "/auth/signup",
};

export const appNavbar: TNavbars = [
  {
    text: "Companies",
    Icon: icons.MuiCompanyIcon,
    path: appRouterPath.companies,
  },
  {
    text: "Jobs",
    Icon: icons.MuiJobIcon,
    path: appRouterPath.jobs,
  },
  {
    text: "Profile",
    Icon: icons.MuiProfileIcon,
    path: appRouterPath.profile,
  },
  {
    text: "Resume",
    Icon: icons.MuiReseumeIcon,
    path: appRouterPath.resumes,
  },
  {
    text: "Logout",
    Icon: icons.MuiLogoutIcon,
    path: appRouterPath.logout,
  },
];

export const APP_THEME_COLOR = colors.grey;
