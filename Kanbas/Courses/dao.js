import Database from "../Database/index.js";
import model from "./model.js";


export function findAllCourses() {
  return model.find();
}


export function createCourse(course) {
    delete course._id;
    return model.create(course);
  }
  



export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
 }
 

  export function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
  }
  
  

export const findCoursesByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ name: { $regex: regex }  }],
  });
};

export const findCoursesByDepartment = (department) => model.find({ department: department });