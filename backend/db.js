import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://addisalemseifu_db_user:jZ4szo0jEKNcXZ3j@cluster0.ider90x.mongodb.net/?appName=Cluster0");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection error:", err);
  }
};

export default dbConnect;