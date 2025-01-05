import * as gradesDao from "./dao.js";


export default function GradeRoutes(app) {

 app.delete("/api/grades/:gradeId", async (req, res) => {
   const { gradeId } = req.params;
   const status = await gradesDao.deleteGrade(gradeId)
   res.send(status);
 });


 app.put("/api/grades/:gradeId", async (req, res) => {
  const { gradeId } = req.params;
  const gradeUpdates = req.body;
  const status = await gradesDao.updateGradeForUser(gradeId, gradeUpdates);
  res.send(status);
});

app.post("/api/grades/:gradeId", async (req, res) => {
  const { gradeId } = req.params;
  const grade = req.body;
  try {
    const status = await gradesDao.createGrade(gradeId, grade);
    res.send(status);
  } catch (err) {
    res.status(500).send(err);
  }
});


  app.get("/api/grades/:courseId", async (req, res) => {
      const {courseId} = req.params
      const people = await gradesDao.findGradesForCourse(courseId);

      res.send(people);
    });

  app.get("/api/grades/:courseId/:userId", async (req, res) => {
      const {courseId, userId} = req.params
      const people = await gradesDao.findGradesForCoursePerUser(courseId, userId);

      res.send(people);
    });



}


