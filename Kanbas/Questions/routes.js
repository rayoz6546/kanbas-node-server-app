import * as questionsDao from "./dao.js";


export default function QuestionsRoutes(app) {

 app.delete("/api/questions/:questionId", (req, res) => {
   const { questionId } = req.params;
   const status = questionsDao.deleteQuestion(questionId);
   res.send(status);
 });


 app.put("/api/questions/:questionId", (req, res) => {
  const { questionId } = req.params;
  const questionUpdates = req.body;
  const status = questionsDao.updateQuestion(questionId, questionUpdates);
  res.send(status);
});

app.get("/api/questions/:quizId", (req, res) => {
    const { quizId } = req.params;
    const questions = questionsDao.findQuestions(quizId);
    res.json(questions);
  });

  app.post("/api/questions/:quizId", (req, res) => {
    const {quizId} = req.params;
    const question = {
      ...req.body,
      quizId:quizId,
    }
    const newQuestion = questionsDao.createQuestion(question)
    res.send(newQuestion)
  }
  )

  app.delete("/api/questions/all/:quizId",(req, res) => {
    const { quizId } = req.params;
    const status = questionsDao.deleteAllQuestions(quizId);
    res.send(status);
  })

}