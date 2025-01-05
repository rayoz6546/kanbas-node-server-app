import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("FileModel", schema);
export default model;