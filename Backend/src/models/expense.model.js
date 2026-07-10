import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    expenseTitle: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount cannot be negative"],
    },

    category: {
      type: String,
      enum: [
        "Self Transfer",
        "Rent",
        "Food",
        "WiFi",
        "Laundry",
        "Fitness",
        "Miscellaneous",
        "Repayment",
      ],
      default: "Miscellaneous",
    },

    note: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const expenseModel = mongoose.model("Expenses", expenseSchema);

export default expenseModel;