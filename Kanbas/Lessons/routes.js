import * as lessonsDao from "./dao.js";
export default function LessonsRoutes(app) {
  app.post("/api/lessons/:moduleId", (req, res) => {
    const {moduleId} = req.params;
    const lesson = {
      ...req.body,
      moduleId:moduleId,
    }
    const newLesson = lessonsDao.createLesson(lesson)
    res.send(newLesson)
  }
  )
}
