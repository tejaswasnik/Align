import React, { useEffect, useState } from "react";
import "../styles/pages/Dashboard.scss";
import { useTask } from "../hooks/useTask";
import Task from "../components/Task";
const Dashboard = () => {
  const { tasks, loading, handleTasks, handleCreateTask, handleDeleteTask } = useTask();
  const [task_Title, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("P1");
  const [dueDate, setDueDate] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCreateTask(task_Title, description, dueDate, priority, false);
  };
  useEffect(() => {
    handleTasks();
  }, []);
  if (loading || !tasks) {
    return (
      <main>
        <h1>Tasks are Loading</h1>
      </main>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Manage your daily tasks</p>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          + New Task
        </button>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Total Tasks</h3>
          <p className="mt-2 text-3xl font-bold">12</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Completed</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">7</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Pending</h3>
          <p className="mt-2 text-3xl font-bold text-red-500">5</p>
        </div>
      </div>

      {/* Add Task */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow">
        <div className="flex flex-col gap-4 md:flex-row">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a new task..."
              className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter a description..."
              className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label htmlFor="priority"> Choose a priority :</label>
            <select
              name="priority"
              id="priority"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </select>
            <label htmlFor="due">Due Date :</label>
            <input
              type="date"
              name="due"
              id="due"
              onChange={(e) => {
                setDueDate(e.target.value);
              }}
            />
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              Add Task
            </button>
          </form>
        </div>
      </div>

      {/* Task List */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-6 text-2xl font-semibold">Today's Tasks</h2>

        <div className="space-y-4">
          {tasks.map((task) => (
            <Task key={task._id} task={task} onDelete={handleDeleteTask} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
