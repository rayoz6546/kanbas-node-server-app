import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("StudentFileModel", schema);
export default model;