import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import router from "./app/router";
import theme from "./theme/theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RouterProvider router={router} />

      <Toaster
        position="top-center"
        richColors
        closeButton
      />
    </ThemeProvider>
  </React.StrictMode>
);