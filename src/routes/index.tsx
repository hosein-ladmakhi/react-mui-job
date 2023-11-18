import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// paths
import { appRouterPath } from "../constant";

// layout
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

// pages
const CompaniesPage = lazy(() => import("../pages/companies"));
const JobsPage = lazy(() => import("../pages/jobs"));
const ProfilePage = lazy(() => import("../pages/profile"));
const ResumePage = lazy(() => import("../pages/resume"));
const NotFoundPage = lazy(() => import("../pages/notfound"));
const LoginPage = lazy(() => import("../pages/auth/login"));
const SignupPage = lazy(() => import("../pages/auth/signup"));

export const appRouter = createBrowserRouter([
   {
      element: <MainLayout />,
      children: [
         {
            element: <CompaniesPage />,
            path: appRouterPath.companies,
            index: true,
         },
         {
            element: <JobsPage />,
            path: appRouterPath.jobs,
         },
         {
            element: <ProfilePage />,
            path: appRouterPath.profile,
         },
         {
            element: <ResumePage />,
            path: appRouterPath.resumes,
         },
         {
            element: <NotFoundPage />,
            path: appRouterPath.notfound,
         },
      ],
   },
   {
      element: <AuthLayout />,
      children: [
         {
            element: <LoginPage />,
            path: appRouterPath.login,
         },
         {
            element: <SignupPage />,
            path: appRouterPath.signup,
         },
      ],
   },
]);
