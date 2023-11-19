import { lazy } from "react";
import { appRouterPath } from "../constant";

// pages
const CompaniesPage = lazy(() => import("../pages/companies"));
const JobsPage = lazy(() => import("../pages/jobs"));
const ProfilePage = lazy(() => import("../pages/profile"));
const ResumePage = lazy(() => import("../pages/resume"));
const NotFoundPage = lazy(() => import("../pages/notfound"));

export const dashboardRoutes = [
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
];
