import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    title: String,
    body: String,
    date: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" }

  },
  { collection: "announcements" }
);


export default schema;
