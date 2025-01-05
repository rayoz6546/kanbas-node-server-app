import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
 {
    userId: String,
    courseId: String,
    courseGrade: String,
 },
 { collection: "grades" }
);
export default courseSchema;