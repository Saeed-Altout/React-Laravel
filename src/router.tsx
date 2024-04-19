import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, Login } from "./pages/auth";

import {
  Dashboard,
  DashboardLayout,
  NotFound,
  Platforms,
  Settings,
  Technologies,
  Toolkit,
} from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/technologies",
        element: <Technologies />,
      },
      {
        path: "/toolkit",
        element: <Toolkit />,
      },
      {
        path: "/platforms",
        element: <Platforms />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
