import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";

import { router } from "@/router";
import { Toaster } from "@/components/ui/sonner";
import { ContextProvider } from "@/contexts/ContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ContextProvider>
  </React.StrictMode>
);
