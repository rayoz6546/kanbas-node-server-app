import * as assignmentresultsDao from "./dao.js";
import * as AssignmentResultModel from "./model.js"

export default function AssignmentsResultsRoutes(app) {

 app.delete("/api/assignmentsResults/:resultId", async (req, res) => {
   const { resultId } = req.params;
   const status = await assignmentresultsDao.deleteAssignmentResult(resultId);
   res.send(status);
 });


 app.delete("/api/assignmentsResults/all/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentresultsDao.deleteAllAssignmentResults(assignmentId);
    res.send(status);
  });


 app.put("/api/assignmentsResults/:resultId", async (req, res) => {
  const { resultId } = req.params;
  const resultUpdates = req.body;
  const status = await assignmentresultsDao.updateAssignmentResult(resultId, resultUpdates);
  res.send(status);
});

  app.post("/api/assignmentsResults/:assignmentId/:userId", async (req, res) => {
      const {assignmentId, userId} = req.params;
      const result = {
      ...req.body,
      assignmentId:assignmentId,
      userId:userId
      }

      const newResult = await assignmentresultsDao.createAssignmentResult(result)
      res.send(newResult)
  }
  );


    app.get("/api/assignmentsResults/user/:userId", async (req, res) => {
        const { userId } = req.params;
        const results = await assignmentresultsDao.findResultsByUser(userId);
        res.json(results);
    });


    app.get("/api/assignmentsResults/assignment/:assignmentId", async (req, res) => {
        const { assignmentId} = req.params;
        const results = await assignmentresultsDao.findAllResultsForAssignment(assignmentId);
        res.json(results);
    });




}
