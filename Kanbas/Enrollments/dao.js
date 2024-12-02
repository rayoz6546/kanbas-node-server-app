import Database from "../Database/index.js";
// import model from "./model.js";

// export function enrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   const newEnroll = { _id: Date.now(), user: userId, course: courseId }
//   // enrollments.push({ _id: Date.now(), user: userId, course: courseId });
//   Database.enrollments = [...Database.enrollments, newEnroll]
//   return enrollments

// }


// export function unEnrollUserFromCourse(userId, courseId) {

//   const { enrollments } = Database;
    
//   const index = enrollments.findIndex(
//     (enrollment) => enrollment.course === courseId && enrollment.user === userId
//   );

//   if (index === -1) {
//     return false;  // Enrollment not found
//   }

//   enrollments.splice(index, 1);
//   return true;
// }
import model from "./model.js";
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
 }
 
export async function findUsersForCourse(courseId) {
const enrollments = await model.find({ course: courseId }).populate("user");
return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
return model.create({ user, course });
}
export function unEnrollUserFromCourse(user, course) {
return model.deleteOne({ user, course });
}
