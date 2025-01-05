import mongoose from "mongoose";
const fileSchema = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: "AssignmentResultModel" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    originalName: { type: String, required: true }, 
    mimeType: { type: String, required: true }, 
    size: { type: Number, required: true },
    data: { type: Buffer, required: true },
  }, { collection: "studentFiles" });
  
  export default fileSchema