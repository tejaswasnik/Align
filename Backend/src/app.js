import express from "express";
import dotenv from "dotenv";
import taskRouter from "./routes/task.routes.js";
const app = express();

app.use(express.json());
dotenv.config();
app.use("/api/task", taskRouter);
export default app;
