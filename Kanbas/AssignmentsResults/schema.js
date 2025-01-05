import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    assignmentId: { type: mongoose.Schema.Types.ObjectId, ref: "AssignmentModel" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    submission_type: String, 
    submission: String,
    submitted_date: String,
    score: Number,
    attempt: Number,
  },
  { collection: "assignmentsResults" }
);


export default schema;
