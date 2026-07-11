import taskModel from "../models/task.model.js";
import express from "express";
import {
  createTask,
  deleteTask,
  updateTask,
  getTasks,
} from "../controllers/task.controller.js";
import { errorMiddleware } from "../middlewares/error.middleware.js";
const taskRouter = express.Router();

taskRouter.post("/create", errorMiddleware, createTask);
taskRouter.delete("/delete/:id", errorMiddleware, deleteTask);
taskRouter.patch("/update/:id", errorMiddleware, updateTask);
taskRouter.get("/tasks", errorMiddleware, getTasks);
export default taskRouter;
