import { lazy } from "react";
import { appRouterPath } from "../constant";

// pages
const CompaniesPage = lazy(() => import("@/features/companies/page"));
const JobsPage = lazy(() => import("@/features/jobs/page"));
const ProfilePage = lazy(() => import("@/features/profile/page"));
const ResumePage = lazy(() => import("@/features/resume/page"));
const NotFoundPage = lazy(() => import("@/features/notfound/page"));
const LogoutPage = lazy(() => import("@/features/logout/page"));

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
  {
    element: <LogoutPage />,
    path: appRouterPath.logout,
  },
];
