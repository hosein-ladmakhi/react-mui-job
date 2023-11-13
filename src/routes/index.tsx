import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// paths
import { appRouterPath } from "../constant";

// layout
import MainLayout from "../layout/MainLayout";

// pages
const CompaniesPage = lazy(() => import("../pages/companies"));
const JobsPage = lazy(() => import("../pages/jobs"));
const ProfilePage = lazy(() => import("../pages/profile"));
const ResumePage = lazy(() => import("../pages/resume"));
const NotFoundPage = lazy(() => import("../pages/notfound"));

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
]);
