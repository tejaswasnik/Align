import mongoose from "mongoose";

async function connectDB() {
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Connected to DB");
  });
}

export default connectDB;
