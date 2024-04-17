import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./pages/auth";

import {
  AuthLayout,
  Dashboard,
  DashboardLayout,
  NotFound,
  Settings,
  Users,
} from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/users" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/users",
        element: <Users />,
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
