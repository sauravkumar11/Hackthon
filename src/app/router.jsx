import { createBrowserRouter } from "react-router-dom";

import Splash from "../pages/splash/Splash";
import Welcome from "../pages/welcome/Welcome";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/citizen/Dashboard";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },

{
  path: "/Dashboard",
  element: <Dashboard />,
}
]);

export default router;