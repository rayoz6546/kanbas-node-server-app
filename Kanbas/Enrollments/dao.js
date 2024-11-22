import Database from "../Database/index.js";


export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnroll = { _id: Date.now(), user: userId, course: courseId }
  // enrollments.push({ _id: Date.now(), user: userId, course: courseId });
  Database.enrollments = [...Database.enrollments, newEnroll]
  return enrollments
}


export function unEnrollUserFromCourse(userId, courseId) {

  const { enrollments } = Database;
    
  const index = enrollments.findIndex(
    (enrollment) => enrollment.course === courseId && enrollment.user === userId
  );

  if (index === -1) {
    return false;  // Enrollment not found
  }

  enrollments.splice(index, 1);
  return true;
}
