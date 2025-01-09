import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {

const enrollUserInCourse = async (req, res) => {
    let { uid, cid } = req.params;
    // if (uid === "current") {
    //   const currentUser = req.session["currentUser"];
    //   uid = currentUser._id;
    // }
    const status = await enrollmentsDao.enrollUserInCourse(uid, cid);
   
    res.json(status)
  };

  const unEnrollUserFromCourse = async (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    const status = await enrollmentsDao.unEnrollUserFromCourse(uid, cid);
    res.send(status);
  };

  const unEnrollAll = async (req, res) => {
    let { cid } = req.params;
    const status = await enrollmentsDao.unEnrollAll(cid);
    res.send(status);
  };


  const findAllEnrollments = async (req, res) => {
    const status = await enrollmentsDao.findAllEnrollments();
    res.json(status);
  };

  const updateEnrollment = async (req, res) => {
    const {enrollmentId} = req.params;
    const enrollmentUpdates = req.body;
    const status = await enrollmentsDao.updateEnroll(enrollmentId, enrollmentUpdates);
    res.send(status);
  }

  app.delete("/api/enrollments/All/courses/:cid", unEnrollAll);
  app.post("/api/enrollments/:uid/courses/:cid", enrollUserInCourse);
  app.delete("/api/enrollments/:uid/courses/:cid", unEnrollUserFromCourse);
  app.get("/api/enrollments", findAllEnrollments);
  app.put("/api/enrollments/:enrollmentId", updateEnrollment)







}



