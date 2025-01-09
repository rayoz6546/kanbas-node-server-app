import model from "./model.js";



export function findResultsByUser(userId) {
  return model.find({ userId: userId });
}

export function findAllResults(userId) {
  return model.find();
}

export function findAllResultsForAssignment(assignmentId)  {
    return model.find({assignmentId:assignmentId})
}

export function createAssignmentResult(result) {
  delete result._id
  return model.create(result);
}

export function deleteAssignmentResult(resultId) {
  return model.deleteOne({ _id: resultId });
 }

 export function deleteAllAssignmentResults(assignmentId) {
    return model.deleteMany({assignmentId: assignmentId})
   }
 
 export function updateAssignmentResult(resultId, resultUpdates) {
  return model.updateOne({ _id: resultId }, resultUpdates);
}