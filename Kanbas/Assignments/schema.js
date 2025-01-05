import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    points: Number,
    due_date: String,
    available_from: String,
    until: String,
    description: String,
    published: Boolean,
    file: String,
    attempts: Number,
    percentage: Number,
  },
  { collection: "assignments" }
);
export default schema;