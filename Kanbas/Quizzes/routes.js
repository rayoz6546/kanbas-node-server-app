import * as quizzesDao from "./dao.js";


export default function QuizzesRoutes(app) {

 app.delete("/api/quizzes/:quizId", (req, res) => {
   const { quizId } = req.params;
   const status = quizzesDao.deleteQuiz(quizId);
   res.send(status);
 });


 app.put("/api/quizzes/:quizId", (req, res) => {
  const { quizId } = req.params;
  const quizUpdates = req.body;
  const status = quizzesDao.updateQuiz(quizId, quizUpdates);
  res.send(status);
});



}