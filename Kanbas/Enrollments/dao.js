import model from "./model.js";

export async function findAllEnrollments() {
    return model.find()
}


// export async function findCoursesForUser(userId) {
//   const enrollments = await model.find({ user: userId }).populate("course");
//   return enrollments.map((enrollment) => enrollment.course);
//  }
 
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

export function unEnrollAll(courseId) { 
  return model.deleteMany({course:courseId});
}

export function updateEnroll(enrollmentId, enrollmentUpdates) { 
  return model.updateOne({ _id: enrollmentId }, enrollmentUpdates);
}