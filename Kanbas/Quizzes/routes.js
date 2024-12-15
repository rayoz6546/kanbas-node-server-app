import * as quizzesDao from "./dao.js";


export default function QuizzesRoutes(app) {

 app.delete("/api/quizzes/:quizId/:courseId", async (req, res) => {
   const { quizId, courseId } = req.params;
   const status = await quizzesDao.deleteQuiz(quizId, courseId);
   res.send(status);
 });


 app.put("/api/quizzes/:quizId", async (req, res) => {
  const { quizId } = req.params;
  const quizUpdates = req.body;
  const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
  res.send(status);
});


}