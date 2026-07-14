import React from "react";
import { routes } from "./routes.jsx";
import { RouterProvider } from "react-router";
import Dashboard from "./features/task/pages/Dashboard.jsx";
import { TaskProvider } from "./features/task/task.context.jsx";
const App = () => {
  return (
    <TaskProvider>
      <RouterProvider router={routes} />
    </TaskProvider>
  );
};

export default App;
