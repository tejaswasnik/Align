import { useContext } from "react";
import { taskContext } from "../task.context";
import { getTasks, createTask } from "../services/task.api";

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

  return { loading, tasks, handleTasks, handleCreateTask };
}
