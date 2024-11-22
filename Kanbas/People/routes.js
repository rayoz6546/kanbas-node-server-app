import * as peopleDao from "../People/dao.js"
import * as enrollmentsDao from "../Enrollments/dao.js"

export default function PeopleRoutes(app) {

    app.get("/api/people/:courseId", (req, res) => {
        const {courseId} = req.params
        const people = peopleDao.findCoursePeople(courseId);
        res.send(people);
      });





  app.post("/api/people/:courseId/add", (req, res) => {
    const { courseId } = req.params;
    const { userId } = req.body;  

    // To check if the user is already enrolled
    if (peopleDao.isUserEnrolled(courseId, userId)) {
      return res.status(400).send({ error: "User is already enrolled in the course." });
    }

    // Add enrollment
    const enrollment = peopleDao.addEnrollment(courseId, userId);
    res.status(201).send(enrollment);
  });

  
  app.delete("/api/people/:courseId/remove", (req, res) => {
    const { courseId } = req.params;
    const { userId } = req.body;  


    const success = peopleDao.removeEnrollment(courseId, userId);

    if (success) {
      res.status(200).send({ message: "User removed successfully." });
    } else {
      res.status(404).send({ error: "User not found in the course." });
    }
  });


  
app.put("/api/people/:userId/section", async (req, res) => {
  const { userId } = req.params;
  const { section } = req.body; 

  try {

    const updatedUser = await peopleDao.updateUserSection(userId, section);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to update section" });
  }
});

}
