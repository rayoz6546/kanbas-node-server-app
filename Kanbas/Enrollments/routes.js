import * as enrollmentsDao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
  
export default function EnrollmentRoutes(app) {

//     app.put("/api/users/current/enrollments/:courseId", (req,res) => {
//         const {courseId} = req.params;
//         const currentUser = req.session["currentUser"];
//         const status = enrollmentsDao.enrollUserInCourse(currentUser._id, courseId);
//         res.send(status)
// })


// app.delete("/api/users/:userId/enrollments/:courseId", (req,res) => {
//     const {userId, courseId} = req.params;
//     const status =enrollmentsDao.unEnrollUserFromCourse(userId, courseId)
//     res.send(status)
// })

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
  app.post("/api/users/:uid/courses/:cid", enrollUserInCourse);
  app.delete("/api/users/:uid/courses/:cid", unEnrollUserFromCourse);



}



