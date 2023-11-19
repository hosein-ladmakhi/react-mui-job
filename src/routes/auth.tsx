import { lazy } from "react";
import { appRouterPath } from "../constant";

const LoginPage = lazy(() => import("../pages/auth/login"));
const SignupPage = lazy(() => import("../pages/auth/signup"));

export const authRoutes = [
   {
      element: <LoginPage />,
      path: appRouterPath.login,
   },
   {
      element: <SignupPage />,
      path: appRouterPath.signup,
   },
];
