import { lazy } from "react";
import { appRouterPath } from "../constant";

const LoginPage = lazy(() => import("@/features/auth/login/page"));
const SignupPage = lazy(() => import("@/features/auth/signup/page"));

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
