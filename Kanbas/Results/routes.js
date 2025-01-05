import * as resultsDao from "./dao.js";


export default function ResultsRoutes(app) {

    app.put("/api/results/:resultId", async (req, res) => {
        const { resultId } = req.params;
        const resultUpdates = req.body;
        const status = await resultsDao.updateResults(resultId, resultUpdates);
        res.send(status);
      });
      
      app.get("/api/results/:quizId/:userId", async (req, res) => {
          const { quizId, userId } = req.params;
          const results = await resultsDao.findResults(quizId,userId);
          res.json(results);
        });

        app.get("/api/results/all/:courseId/:userId", async (req, res) => {
          const { courseId, userId } = req.params;
          const results = await resultsDao.findResultsForUser(courseId,userId);
          res.json(results);
        });
      
        app.post("/api/results/:quizId/:userId", async (req, res) => {
          const {quizId, userId} = req.params;
          const result = {
            ...req.body,
            quizId:quizId,
            userId:userId
          }
          const newResult = await resultsDao.createResult(result)
          res.send(newResult)
        }
        );

    app.delete("/api/results/:courseId/:quizId", async (req, res) => {
          const {courseId, quizId} = req.params;
          const status = await resultsDao.deleteAll(courseId, quizId);
          res.send(status);
        }
        );


}