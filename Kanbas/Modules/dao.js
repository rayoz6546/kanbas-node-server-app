import model from "./model.js";

export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
 }
 
export function createModule(module) {
  delete module._id
  return model.create(module);
 }
 

export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
 }
 
export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, moduleUpdates);
 }



 export async function addLessonToModule(moduleId, lesson) {
  return model.updateOne(
    { _id: moduleId },
    { $push: { lessons: lesson } }
  );
}


export async function deleteLessonFromModule(moduleId, lessonId) {
  return model.updateOne(
    { _id: moduleId },
    { $pull: { lessons: { _id: lessonId } } }
  );
}


export async function updateLessonInModule(moduleId, lessonId, updatedLesson) {
  return model.updateOne(
    { _id: moduleId, "lessons._id": lessonId },
    {
      $set: {
        "lessons.$.name": updatedLesson.name,
        "lessons.$.link": updatedLesson.link,
        
        "lessons.$.published": updatedLesson.published,

      },
    }
  );
}