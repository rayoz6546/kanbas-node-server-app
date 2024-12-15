import Database from "../Database/index.js";


export function createQuestion(question) {
    const { questions } = Database;
    const newQuestion = { ...question, _id: (questions.length + 1).toString() };
    Database.questions = [...Database.questions, newQuestion];
    return newQuestion;
  }

export function findQuestions(quizId) {
    const { questions } = Database;
    return questions.filter((q) => q.quizId === quizId);
  }

  export function deleteQuestion(questionId) {
    const { questions } = Database;
    Database.questions = questions.filter((q) => q._id !== questionId);
   }

export function updateQuestion(questionId, questionUpdates) {
    const { questions } = Database;
    const question = questions.find((q) => q._id === questionId);
  
    Object.assign(question, questionUpdates);
    return question;
  }

export function deleteAllQuestions(quizId) { 
    const {questions} = Database;
    Database.questions = questions.filter((q)=>q.quizId !== quizId)
}