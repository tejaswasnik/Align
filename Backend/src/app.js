import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import taskRouter from "./routes/task.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/task", taskRouter);

export default app;