import mongoose from "mongoose";

const Category = mongoose.Schema({
  title: { type: String, required: true, unique: true },
});

export default mongoose.model("Category", Category);
