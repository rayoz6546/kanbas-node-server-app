import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
 {
   name: String,
   number: String,
   credits: Number,
   description: String,
   department: {
    type: String,
    enum: ["Arts & Humanities", "Social Sciences", "Natural Sciences",
       "Engineering & Technology", "Business & Management", "Health Sciences", "Law", "Computer Science & IT" ]
   }
 },
 { collection: "courses" }
);
export default courseSchema;