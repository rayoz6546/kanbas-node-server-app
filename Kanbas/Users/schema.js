import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    universityId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN"],
    },
    lastActivity: { type: Date, default: null },
    totalActivity: { type: String, default: "00:00:00" },
  },
  { collection: "users" }
);
export default userSchema;