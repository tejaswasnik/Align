import { createBrowserRouter } from "react-router";
import Dashboard from "./features/task/pages/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
