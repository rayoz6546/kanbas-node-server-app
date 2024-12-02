import Database from "../Database/index.js";

// export function findCoursePeople(courseId) {
//     const { users, enrollments } = Database;

//     const enrollments_ = enrollments.filter((enr) => enr.course === courseId);

//     const enrolledPeople = enrollments_.map((enr)=>{
//         const user = users.find((u) => u._id === enr.user);
//         return user
//     })

//     return enrolledPeople
//   }

import model from "../Enrollments/model.js";

export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
  }

  


