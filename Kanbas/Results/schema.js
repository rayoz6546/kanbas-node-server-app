import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    score: Number,
    answers: Object,
    timetaken: String,
    attempt: Number,
    submitted_date: String,

  },
  { collection: "results" }
);
export default schema;