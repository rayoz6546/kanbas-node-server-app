import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {

 app.delete("/api/modules/:moduleId", async (req, res) => {
   const { moduleId } = req.params;
   const status = await modulesDao.deleteModule(moduleId);
   res.send(status);
 });


 app.put("/api/modules/:moduleId", async (req, res) => {
  const { moduleId } = req.params;
  const moduleUpdates = req.body;
  const status = await modulesDao.updateModule(moduleId, moduleUpdates);
  res.send(status);
});

app.post("/api/modules/:moduleId/lessons", async (req, res) => {
  const { moduleId } = req.params;
  const lesson = req.body;
  try {
    const status = await modulesDao.addLessonToModule(moduleId, lesson);
    res.send(status);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.delete("/api/modules/:moduleId/lessons/:lessonId", async (req, res) => {
  const { moduleId, lessonId } = req.params;

  try {
    const status = await modulesDao.deleteLessonFromModule(moduleId, lessonId);
    res.send(status);
  } catch (err) {
    res.status(500).send({ error: "Failed to delete lesson" });
  }
});


app.put("/api/modules/:moduleId/lessons/:lessonId", async (req, res) => {
  const { moduleId, lessonId } = req.params;
  const updatedLesson = req.body;

  try {
    const status = await modulesDao.updateLessonInModule(moduleId, lessonId, updatedLesson);
    res.send(status);
  } catch (error) {
    res.status(500).send({ error: "Failed to update lesson" });
  }
});


}


