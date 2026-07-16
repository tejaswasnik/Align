import taskModel from "../models/task.model.js";

export async function createTask(req, res) {
  const { task_title, description, dueDate, priority, completed } = req.body;
  const task = await taskModel.create({
    task_title: task_title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    completed: completed,
  });
  res.status(200).json({
    message: "Task created successfully.",
    task,
  });
}
export async function deleteTask(req, res) {
  const taskId = req.params.id;
  const task = await taskModel.findByIdAndDelete(taskId);
  res.status(200).json({
    message: "Task deleted successfully.",
  });
}
export async function updateTask(req, res) {
  const taskId = req.params.id;
  const { task_title, description, dueDate, priority, completed } = req.body;
  const task = await taskModel.findByIdAndUpdate(taskId, {
    task_title: task_title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    completed: completed,
  });
  res.status(200).json({
    message: "Task updated successfully.",
    task,
  });
}

export async function getTasks(req, res) {
  const tasks = await taskModel.find();
  res.status(200).json({
    message: "Tasks fetched successfully.",
    tasks,
  });
}
