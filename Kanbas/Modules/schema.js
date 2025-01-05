import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    published: Boolean,
    lessons: [
      {
        _id: { type: String, required: true },
        moduleId: String,
        name: { type: String},
        published: {type: Boolean, default:false},
        link: String,
        file: String,
   
      },
    ],
  },
  { collection: "modules" }
);
export default schema;