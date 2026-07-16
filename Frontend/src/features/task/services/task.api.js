import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true,
});

export const getTasks = async () => {
  try {
    const response = await api.get("/task/tasks");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTask = async ({
  task_title,
  description,
  dueDate,
  priority,
  completed,
}) => {
  try {
    const response = await api.post("/task/create", {
      task_title,
      description,
      dueDate,
      priority,
      completed,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const updateTask = async (
  id,
  task_title,
  description,
  dueDate,
  priority,
  completed,
) => {
  try {
    const response = await api.patch(`/task/update/${id}`, {
      task_title,
      description,
      dueDate,
      priority,
      completed,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/task/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const toggleTaskCompletion = async (id, completed) => {
  try {
    const response = await api.patch(`/task/update/${id}`, { completed });
  } catch (error) {
    console.error("Error toggling task completion:", error);
    throw error;
  }
};
