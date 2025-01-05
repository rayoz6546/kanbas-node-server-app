import model from "./model.js";



export function findGradesForCoursePerUser(userId, courseId) {
  return model.find({ userId: userId , courseId:courseId });
}

export function findGradesForCourse(courseId) {
  return model.find({ courseId:courseId });
}


export function createGrade(grade) {
  delete grade._id
  return model.create(grade);
}


export function deleteGrade(gradeId) {
  return model.deleteOne({ _id: gradeId });
 }


 export function deleteAllGradesForCourse(courseId) {
    return model.deleteMany({courseId: courseId})
   }
 
 export function updateGradeForUser(gradeId, gradeUpdates) {
  return model.updateOne({ _id: gradeId }, gradeUpdates);
}