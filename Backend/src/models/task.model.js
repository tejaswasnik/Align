import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task_title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    dueDate: {
      type: Date,
      default: Date.now,
    },

    priority: {
      type: String,
      enum: ["P1", "P2", "P3"],
      default: "P3",
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const taskModel = mongoose.model("Tasks", taskSchema);

export default taskModel;