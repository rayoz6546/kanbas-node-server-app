import model from "./model.js";

export function createResult(result) {
  delete result._id
  return model.create(result);
  }



export function findResults(quizId, userId) {
  return model.find({quizId:quizId, userId:userId})
  }

export function findResultsForUser(courseId, userId) {
  return model.find({courseId:courseId, userId:userId})
}


  export function updateResults(resultId, resultUpdates) {
    return model.updateOne({ _id: resultId }, resultUpdates);
  }

  export function deleteAll(courseId, quizId) {
    return model.deleteMany({quizId: quizId, courseId:courseId})
  }