import { createBrowserRouter } from "react-router-dom";

import BootstrapApplication from "../bootstrap";

import MainLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import { dashboardRoutes } from "./dashboard";
import { authRoutes } from "./auth";

export const appRouter = createBrowserRouter([
  {
    element: <BootstrapApplication />,
    children: [
      {
        element: <MainLayout />,
        children: dashboardRoutes,
      },
      {
        element: <AuthLayout />,
        children: authRoutes,
      },
    ],
  },
]);
