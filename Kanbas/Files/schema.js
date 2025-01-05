import mongoose from "mongoose";
const fileSchema = new mongoose.Schema({
    itemId: String ,
    originalName: { type: String, required: true }, 
    mimeType: { type: String, required: true }, 
    size: { type: Number, required: true },
    data: { type: Buffer, required: true },
  }, { collection: "files" });
  
  export default fileSchema