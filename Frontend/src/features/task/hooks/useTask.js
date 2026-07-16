import { useContext } from "react";
import { taskContext } from "../task.context";
import { getTasks, createTask, deleteTask, updateTask } from "../services/task.api";

export function useTask() {
  const context = useContext(taskContext);
  const { tasks, setTasks, loading, setLoading } = context;

  async function handleTasks() {
    setLoading(true);
    const data = await getTasks();
    setTasks(data.tasks);
    setLoading(false);
  }

  async function handleCreateTask(
    task_title,
    description,
    dueDate,
    priority,
    completed,
  ) {
    setLoading(true);
    const data = await createTask({
      task_title,
      description,
      dueDate,
      priority,
      completed,
    });
    setTasks([data.task, ...tasks]);
    setLoading(false);
  }

  async function handleDeleteTask(taskId) {
    setLoading(true);
    await deleteTask(taskId);
    setTasks(tasks.filter((task) => task._id !== taskId));
    setLoading(false);
  }
  
  async function handleToggleTaskCompletion(taskId, completed) {
    setLoading(true);
    const taskToUpdate = tasks.find((task) => task._id === taskId);
    if (taskToUpdate) {
      await updateTask(
        taskId,
        taskToUpdate.task_title,
        taskToUpdate.description,
        taskToUpdate.dueDate,
        taskToUpdate.priority,
        completed,
      );

      const updatedTask = { ...taskToUpdate, completed };
      setTasks(tasks.map((task) => (task._id === taskId ? updatedTask : task)));
    }
    setLoading(false);
  }
  return {
    loading,
    tasks,
    handleTasks,
    handleCreateTask,
    handleDeleteTask,
    handleToggleTaskCompletion,
  };
}
