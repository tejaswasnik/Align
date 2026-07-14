import { createContext, useState } from "react";

export const taskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <taskContext.Provider
      value={{ tasks, setTasks, loading, setLoading }}
    >
      {children}
    </taskContext.Provider>
  );
};
