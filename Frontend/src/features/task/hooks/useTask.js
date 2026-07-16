import { useContext } from "react";
import { taskContext } from "../task.context";
import { getTasks, createTask, deleteTask } from "../services/task.api";

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
  return { loading, tasks, handleTasks, handleCreateTask, handleDeleteTask };
}
