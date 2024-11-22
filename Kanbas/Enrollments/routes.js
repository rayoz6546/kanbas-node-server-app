import * as enrollmentsDao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
  
export default function EnrollmentRoutes(app) {

    app.put("/api/users/current/enrollments/:courseId", (req,res) => {
        const {courseId} = req.params;
        const currentUser = req.session["currentUser"];
        const status = enrollmentsDao.enrollUserInCourse(currentUser._id, courseId);
        res.send(status)
})


app.delete("/api/users/:userId/enrollments/:courseId", (req,res) => {
    const {userId, courseId} = req.params;
    const status =enrollmentsDao.unEnrollUserFromCourse(userId, courseId)
    res.send(status)
})

}



