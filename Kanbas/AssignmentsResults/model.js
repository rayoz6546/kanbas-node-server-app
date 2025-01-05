import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("AssignmentResultModel", schema);
export default model;