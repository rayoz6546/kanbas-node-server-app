import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {

const enrollUserInCourse = async (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    const status = await enrollmentsDao.enrollUserInCourse(uid, cid);
    res.send(status);
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

  app.delete("/api/users/All/courses/:cid", unEnrollAll);
  app.post("/api/users/:uid/courses/:cid", enrollUserInCourse);
  app.delete("/api/users/:uid/courses/:cid", unEnrollUserFromCourse);



}



