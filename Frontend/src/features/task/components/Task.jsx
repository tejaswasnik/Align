import React from "react";
import { useTask } from "../hooks/useTask";
const Task = ({ task, onDelete }) => {
  const { handleToggleTaskCompletion } = useTask();
  const dueDateLabel = task.dueDate
    ? new Date(task.dueDate).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "No due date";

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 p-4 transition hover:border-blue-200 md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => {
            handleToggleTaskCompletion(task._id, e.target.checked);
          }}
          readOnly
          className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600"
        />

        <div>
          <h3
            className={`text-base font-semibold ${
              task.completed ? "text-gray-400 line-through" : "text-gray-800"
            }`}
          >
            {task.task_title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">{task.description}</p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-gray-500">
            <span className="rounded-full bg-gray-100 px-3 py-1">
              Priority: {task.priority}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1">
              Due: {dueDateLabel}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onDelete(task._id)}
        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
